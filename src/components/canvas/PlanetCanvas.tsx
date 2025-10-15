import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Planet } from './Planet';

interface PlanetCanvasProps {
  color: string;
  emissive: string;
  position?: [number, number, number];
  scale?: number;
  onClick?: () => void;
}

export const PlanetCanvas = ({ 
  color, 
  emissive, 
  position = [0, 0, 0],
  scale = 1,
  onClick 
}: PlanetCanvasProps) => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      camera={{ position: [4, 0, 0], fov: 45 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <Planet 
          color={color} 
          emissive={emissive} 
          position={position}
          scale={scale}
          onClick={onClick}
        />
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>
    </Canvas>
  );
};