"use client";

import React, { useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh } from "three";
import { Vector3, Euler } from "three";
import { useGLTF, Edges, MeshWobbleMaterial } from "@react-three/drei";

export function BackgroundFollow() {
  return (
    <div className="fixed inset-0 z-20 pointer-events-none mix-blend-difference">
      <Canvas
        dpr={[1, 2]}
        camera={{ fov: 45, position: [0, 0, 6] }}
        className="w-full h-full pointer-events-none"
        style={{ pointerEvents: "none" }}
        events={undefined}
        onCreated={({ gl }) => {
          gl.domElement.style.pointerEvents = "none";
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Scene() {
  return (
    <>
      {/* Subtle studio-like lighting */}
      <hemisphereLight intensity={0.5} color="#ffffff" groundColor="#0b0b0b" />
      <directionalLight intensity={0.9} position={[4, 4, 6]} />
      <directionalLight intensity={0.35} position={[-4, -2, -4]} />
      <ambientLight intensity={0.08} />

      <Cursor scale={[0.2, 0.3, 0.2]} />
    </>
  );
}

function Cursor(props) {
  const { nodes } = useGLTF("/cursor.glb");
  const meshRef = useRef<Mesh | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const hoverScaleRef = useRef(1);
  const baseScaleRef = useRef(
    new Vector3(
      Array.isArray(props.scale) ? props.scale[0] ?? 1 : 1,
      Array.isArray(props.scale) ? props.scale[1] ?? 1 : 1,
      Array.isArray(props.scale) ? props.scale[2] ?? 1 : 1,
    ),
  );

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -((e.clientY / window.innerHeight) * 2 - 1);
      targetRef.current.x = nx;
      targetRef.current.y = ny;

      const target = e.target as Element | null;
      const isHover = !!target?.closest(
        'a, button, [role="button"], input, textarea, select, .cursor-link',
      );
      hoverScaleRef.current = isHover ? 2 : 1;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const nx = targetRef.current.x;
    const ny = targetRef.current.y;

    // Unproject NDC (nx, ny) to world coordinates on the z=0 plane
    const camera = state.camera;
    const ndc = new Vector3(nx, ny, 0.5).unproject(camera);
    const dir = ndc.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z; // plane z=0
    const worldPos = camera.position.clone().add(dir.multiplyScalar(distance));

    // Compute angle in screen/NDC space from screen center to pointer
    const angleNdc = Math.atan2(ny, nx);
    const modelOffset = Math.PI / 2; // adjust to align arrow's tip forward (+Y)
    const zAngle = angleNdc + Math.PI + modelOffset;

    // Compute where the model's origin should be so that the TIP (along +Y) sits at worldPos
    const tipDistanceBase = 1.0; // distance from origin to tip in model units (pre-scale)
    const tipLocal = new Vector3(0, tipDistanceBase * (mesh.scale?.y ?? 1), 0);
    const tipWorldOffset = tipLocal
      .clone()
      .applyEuler(new Euler(0, mesh.rotation.y, zAngle));
    const desiredOrigin = new Vector3(worldPos.x, worldPos.y, 0).sub(
      tipWorldOffset,
    );

    // Tween origin toward desired position so the tip lands at the cursor
    const k = 0.8;
    mesh.position.x += (desiredOrigin.x - mesh.position.x) * k;
    mesh.position.y += (desiredOrigin.y - mesh.position.y) * k;
    mesh.position.z += (desiredOrigin.z - mesh.position.z) * k;

    // Apply Z rotation; keep optional slow spin disabled for now
    mesh.rotation.z = zAngle;

    // Tween scale to 2x on interactive targets
    const base = baseScaleRef.current;
    const targetScale = base.clone().multiplyScalar(hoverScaleRef.current);
    const s = 0.25; // scale tween speed
    mesh.scale.x += (targetScale.x - mesh.scale.x) * s;
    mesh.scale.y += (targetScale.y - mesh.scale.y) * s;
    mesh.scale.z += (targetScale.z - mesh.scale.z) * s;
  });

  return (
    <mesh ref={meshRef} {...props} geometry={nodes.Cube.geometry}>
      <MeshWobbleMaterial
        color="#a855f7"
        metalness={0.2}
        roughness={1.0}
        factor={1.0}
        speed={1.0}
      />
      {/* <Edges color="black" /> */}
    </mesh>
  );
}

export interface BackgroundFollowProps {}
