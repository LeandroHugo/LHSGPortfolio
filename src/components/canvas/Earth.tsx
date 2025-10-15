import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Preload } from '@react-three/drei';

const Earth = () => {
  return (
    <Sphere args={[1, 64, 64]}>
      <meshStandardMaterial
        color="#4444ff"
        roughness={0.7}
        metalness={0.3}
        emissive="#000066"
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
};

export const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      camera={{ position: [4, 0, 0], fov: 45 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <Earth />
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};