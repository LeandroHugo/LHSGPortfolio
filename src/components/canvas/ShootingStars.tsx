import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const ShootingStar = () => {
  const ref = useRef<any>();
  const positions = new Float32Array(100 * 3);
  
  for (let i = 0; i < positions.length; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10;      // x
    positions[i + 1] = Math.random() * 5;           // y
    positions[i + 2] = (Math.random() - 0.5) * 10;  // z
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.2;
      ref.current.rotation.z += delta * 0.1;
      
      // Move points downward
      const positions = ref.current.geometry.attributes.position.array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] -= delta * 2;
        if (positions[i] < -5) {
          positions[i] = 5;
        }
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.01}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

export const ShootingStarsCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ShootingStar />
      </Canvas>
    </div>
  );
};