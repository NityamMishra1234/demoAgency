"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  Sphere,
  Environment,
  Float,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const AnimatedSphere = () => {
  // TS: We tell React this ref will hold a THREE.Mesh
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (meshRef.current) {
      // Basic rotation
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.2;

      // Mouse interaction (Types are handled automatically by state.pointer)
      const mouseX = (state.pointer.x * Math.PI) / 10;
      const mouseY = (state.pointer.y * Math.PI) / 10;

      meshRef.current.rotation.x += mouseY;
      meshRef.current.rotation.y += mouseX;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere args={[1, 100, 100]} scale={2.4} ref={meshRef}>
        <MeshDistortMaterial
          color="#111"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.1}
          metalness={1}
        />
      </Sphere>
    </Float>
  );
};

export default function LiquidChrome() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 bg-black">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight
          position={[-10, -10, -5]}
          intensity={1}
          color="#4c1d95"
        />
        <Environment preset="city" />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}
