import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface PlanetProps {
  colors: {
    base: string;
    terrain: string;
    atmosphere: string;
    glow: string;
  };
  position: [number, number, number];
  rotationSpeed?: number;
  scale?: number;
  onClick?: () => void;
}

export const Planet = ({ colors, position, rotationSpeed = 0.5, scale = 1, onClick }: PlanetProps) => {
  const planetRef = useRef<THREE.Mesh>(null);
  const terrainRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * rotationSpeed;
    }
    if (terrainRef.current) {
      terrainRef.current.rotation.y += delta * rotationSpeed;
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y -= delta * (rotationSpeed * 0.5);
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 4;
      ringRef.current.rotation.y += delta * (rotationSpeed * 0.2);
    }
  });

  // Create a noise texture procedurally
  const bumpTexture = new THREE.DataTexture(
    new Uint8Array(256 * 256).map(() => Math.random() * 255),
    256,
    256,
    THREE.RedFormat
  );
  bumpTexture.needsUpdate = true;

  // Create ring geometry for Saturn-like planets
  const isSaturn = colors.base === '#daa520'; // Check if it's Saturn

  return (
    <group position={position} scale={scale} onClick={onClick}>
      {/* Base Planet */}
      <Sphere ref={planetRef} args={[1, 64, 64]}>
        <meshPhongMaterial
          color={colors.base}
          shininess={10}
          bumpMap={bumpTexture}
          bumpScale={0.05}
        />
      </Sphere>

      {/* Terrain Layer */}
      <Sphere ref={terrainRef} args={[1.01, 64, 64]}>
        <meshPhongMaterial
          color={colors.terrain}
          transparent
          opacity={0.6}
          shininess={20}
        />
      </Sphere>

      {/* Atmosphere */}
      <Sphere ref={atmosphereRef} args={[1.1, 32, 32]}>
        <meshPhongMaterial
          color={colors.atmosphere}
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </Sphere>

      {/* Glow */}
      <Sphere args={[1.2, 32, 32]}>
        <meshBasicMaterial
          color={colors.glow}
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Rings for Saturn */}
      {isSaturn && (
        <mesh ref={ringRef}>
          <ringGeometry args={[1.6, 2.5, 64]} />
          <meshPhongMaterial
            color={colors.terrain}
            transparent
            opacity={0.7}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
    </group>
  );
};