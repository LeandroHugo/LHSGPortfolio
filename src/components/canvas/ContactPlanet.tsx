import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export const ContactPlanet = () => {
  const planetRef = useRef<THREE.Group>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.1;
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y -= delta * 0.05;
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.z += delta * 0.02;
    }
  });

  return (
    <group ref={planetRef}>
      {/* Main Planet */}
      <Sphere args={[3, 64, 64]}>
        <meshPhongMaterial
          color="#8b5cf6"
          shininess={10}
          bumpScale={0.05}
          emissive="#4c1d95"
          emissiveIntensity={0.4}
        />
      </Sphere>

      {/* Interactive glow effect */}
      <Sphere args={[3.1, 64, 64]}>
        <meshPhongMaterial
          color="#9333ea"
          transparent
          opacity={0.3}
          shininess={100}
        />
      </Sphere>

      {/* Atmosphere */}
      <Sphere ref={atmosphereRef} args={[3.3, 32, 32]}>
        <meshPhongMaterial
          color="#a78bfa"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </Sphere>

      {/* Enhanced Glow */}
      <Sphere args={[3.5, 32, 32]}>
        <meshBasicMaterial
          color="#c4b5fd"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Rings */}
      <mesh ref={ringsRef}>
        <ringGeometry args={[4.2, 6.5, 64]} />
        <meshPhongMaterial
          color="#8b5cf6"
          transparent
          opacity={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Enhanced particle field */}
      {Array.from({ length: 75 }).map((_, i) => {
        const angle = (i / 75) * Math.PI * 2;
        const radius = 4 + Math.random() * 3.5;
        const yOffset = (Math.random() - 0.5) * 5;
        const x = Math.cos(angle) * radius;
        const y = yOffset;
        const z = Math.sin(angle) * radius;
        const size = Math.random() * 0.03 + 0.01;
        
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[size, 8, 8]} />
            <meshBasicMaterial
              color="#c4b5fd"
              transparent
              opacity={Math.random() * 0.5 + 0.5}
            />
          </mesh>
        );
      })}
    </group>
  );
};