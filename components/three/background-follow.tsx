"use client";

import React, { useEffect, useRef, Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh as ThreeMesh, Group, MeshStandardMaterial } from "three";
import { Vector3, Euler, Color } from "three";
import { useGLTF, Edges } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useCoolCursor } from "@/components/cool-cursor-context";

export function BackgroundFollow() {
  const targetRef = useRef({ x: 0, y: 0 });
  const isHoverRef = useRef(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -((e.clientY / window.innerHeight) * 2 - 1);
      targetRef.current.x = nx;
      targetRef.current.y = ny;

      const target = e.target as Element | null;
      const isHover = !!target?.closest(
        'a, button, [role="button"], input, textarea, select, .cursor-link'
      );
      isHoverRef.current = isHover;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const { coolcursor } = useCoolCursor();

  if (!coolcursor) return null;

  return (
    <div className="fixed inset-0 z-20 pointer-events-none mix-blend-difference text-white">
      <Canvas
        dpr={[1, 2]}
        frameloop="always"
        camera={{ fov: 45, position: [0, 0, 6] }}
        className="w-full h-full pointer-events-none"
        style={{ pointerEvents: "none" }}
        gl={{ antialias: true, powerPreference: "low-power" }}
        events={undefined}
        onCreated={({ gl }) => {
          gl.domElement.style.pointerEvents = "none";
        }}
      >
        <Suspense fallback={null}>
          <Scene targetRef={targetRef} isHoverRef={isHoverRef} />
        </Suspense>
        <AdaptiveBloom isHoverRef={isHoverRef} />
      </Canvas>
    </div>
  );
}

function Scene({
  targetRef,
  isHoverRef,
}: {
  targetRef: React.MutableRefObject<{ x: number; y: number }>;
  isHoverRef: React.MutableRefObject<boolean>;
}) {
  return (
    <>
      {/* Subtle studio-like lighting */}
      <hemisphereLight intensity={0.5} color="#ffffff" groundColor="#0b0b0b" />
      <directionalLight intensity={1.9} position={[4, 4, 6]} />
      {/* <directionalLight intensity={0.35} position={[-4, -2, -4]} /> */}
      <ambientLight intensity={0.08} />

      <Cursor
        targetRef={targetRef}
        isHoverRef={isHoverRef}
        scale={[0.2, 0.3, 0.2]}
      />
    </>
  );
}

function AdaptiveBloom({
  isHoverRef,
}: {
  isHoverRef: React.MutableRefObject<boolean>;
}) {
  const [intensity, setIntensity] = useState(0.8);
  useFrame((_, delta) => {
    const target = isHoverRef.current ? 1.5 : 0.0;
    const lambda = 8; // damping factor
    setIntensity((i) => i + (target - i) * (1 - Math.exp(-lambda * delta)));
  });
  return (
    <EffectComposer multisampling={4}>
      <Bloom
        intensity={intensity}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.3}
        mipmapBlur
      />
    </EffectComposer>
  );
}

function Cursor({
  targetRef,
  isHoverRef,
  scale,
}: {
  targetRef: React.MutableRefObject<{ x: number; y: number }>;
  isHoverRef: React.MutableRefObject<boolean>;
  scale: [number, number, number] | Vector3;
}) {
  const { nodes } = useGLTF("/cursor.glb") as unknown as {
    nodes: { Cube: ThreeMesh };
  };
  const meshRef = useRef<ThreeMesh | null>(null);
  const groupRef = useRef<Group | null>(null);

  const baseScaleRef = useRef(
    new Vector3(
      Array.isArray(scale) ? (scale[0] ?? 1) : 1,
      Array.isArray(scale) ? (scale[1] ?? 1) : 1,
      Array.isArray(scale) ? (scale[2] ?? 1) : 1
    )
  );

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    const group = groupRef.current;
    if (!mesh || !group) return;

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

    // Compute where the group's origin should be so the tip (+Y in mesh space) is at worldPos
    const tipDistanceBase = 1.0; // distance from origin to tip in model units (pre-scale)
    const tipLocal = new Vector3(0, tipDistanceBase * (mesh.scale?.y ?? 1), 0);
    const tipWorldOffset = tipLocal.clone().applyEuler(new Euler(0, 0, zAngle));
    const desiredOrigin = new Vector3(worldPos.x, worldPos.y, 0).sub(
      tipWorldOffset
    );

    // Tween origin toward desired position so the tip lands at the cursor
    const damp = (current: number, target: number, lambda: number) =>
      current + (target - current) * (1 - Math.exp(-lambda * delta));
    group.position.x = damp(group.position.x, desiredOrigin.x, 70);
    group.position.y = damp(group.position.y, desiredOrigin.y, 70);
    group.position.z = damp(group.position.z, desiredOrigin.z, 70);

    // Group faces away from center (Z). Mesh spins around its OWN local Y.
    group.rotation.z = zAngle;
    mesh.rotation.y += delta * (isHoverRef.current ? 2.5 : 0.6); // local Y spin

    // Tween scale to 2x on interactive targets
    const base = baseScaleRef.current;
    const targetScale = base
      .clone()
      .multiplyScalar(isHoverRef.current ? 1.1 : 0.9);
    mesh.scale.x = damp(mesh.scale.x, targetScale.x, 10);
    mesh.scale.y = damp(mesh.scale.y, targetScale.y, 10);
    mesh.scale.z = damp(mesh.scale.z, targetScale.z, 10);

    // Update gradient toggle uniform if present
    const material = Array.isArray(mesh.material)
      ? undefined
      : (mesh.material as MeshStandardMaterial);
    if (material) {
      const shader = (material.userData as Record<string, unknown>)?.[
        "_shader"
      ] as { uniforms?: { uUseGradient?: { value: boolean } } } | undefined;
      if (shader?.uniforms?.uUseGradient)
        shader.uniforms.uUseGradient.value = isHoverRef.current;

      // Emissive only on hover (for bloom), tween for smoothness
      const targetEmissiveIntensity = isHoverRef.current ? 5.0 : 0.0;
      const emissiveTarget = isHoverRef.current
        ? new Color("#a855f7")
        : new Color("#000000");
      material.emissive.lerp(emissiveTarget, Math.min(1, delta * 6));
      material.emissiveIntensity = material.emissiveIntensity ?? 0.0;
      material.emissiveIntensity = damp(
        material.emissiveIntensity,
        targetEmissiveIntensity,
        2
      );
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} geometry={nodes.Cube.geometry}>
        <meshStandardMaterial
          color="#a855f7"
          metalness={0.35}
          roughness={0.6}
        />
        <Edges color="#a855f7" linewidth={3} />
      </mesh>
    </group>
  );
}
