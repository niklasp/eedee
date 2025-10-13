"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import type { Mesh } from "three";

export function AvatarSphere({
  textureUrl = "/images/niftesty.jpg",
}: AvatarSphereProps) {
  return (
    <div className="inline-block w-[240px] h-[240px] md:w-[270px] md:h-[270px] xl:w-[320px] xl:h-[320px] rounded-full overflow-hidden">
      <Canvas
        dpr={[1, 2]}
        camera={{ fov: 35, position: [0, 0, 2.4] }}
        className="!rounded-full"
        shadows
      >
        <Suspense fallback={null}>
          {/* Stage geometry for believable light falloff */}
          <GroundPlane />
          <BackDrop />

          {/* Lights: Key / Fill / Rim - rect area lights for soft studio look */}
          <KeyLight brightness={5.6} color="#ffc9f9" />
          <FillLight brightness={2.6} color="#bdefff" />
          <RimLight brightness={28} color="#ffffff" />

          <TexturedBall textureUrl={textureUrl} />
        </Suspense>
      </Canvas>
    </div>
  );
}

function TexturedBall({ textureUrl }: { textureUrl: string }) {
  const colorMap = useTexture(textureUrl);
  const meshRef = useRef<Mesh | null>(null);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const { x, y } = state.pointer; // normalized -1..1
    const targetRotX = y * 0.25;
    const targetRotY = -x * 0.35;

    mesh.rotation.x += (targetRotX - mesh.rotation.x) * 0.08;
    mesh.rotation.y += (targetRotY - mesh.rotation.y) * 0.08;
  });

  return (
    <mesh ref={meshRef} rotation={[0.05, 0.2, 0]} castShadow>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        map={colorMap}
        roughness={0.35}
        metalness={0.08}
        envMapIntensity={0.6}
      />
    </mesh>
  );
}

function GroundPlane() {
  return (
    <mesh
      receiveShadow
      rotation={[-Math.PI / 2.2, 0, 0]}
      position={[0, -1.25, 0]}
    >
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
}

function BackDrop() {
  return (
    <mesh receiveShadow position={[0, -1.1, -3]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
}

function KeyLight({
  brightness,
  color,
}: {
  brightness: number;
  color: string;
}) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 1, 5]}
      lookAt={[0, 0, 0]}
      castShadow
    />
  );
}

function FillLight({
  brightness,
  color,
}: {
  brightness: number;
  color: string;
}) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[2, 1, 4]}
      lookAt={[0, 0, 0]}
      castShadow
    />
  );
}

function RimLight({
  brightness,
  color,
}: {
  brightness: number;
  color: string;
}) {
  return (
    <rectAreaLight
      width={2}
      height={2}
      color={color}
      intensity={brightness}
      position={[1, 4, -2]}
      rotation={[0, Math.PI, 0]}
      castShadow
    />
  );
}

interface AvatarSphereProps {
  textureUrl?: string;
}
