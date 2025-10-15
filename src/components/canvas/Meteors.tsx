import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface MeteorProps {
  count?: number;
  radius?: number;
  speed?: number;
}

export const Meteors = ({ count = 20, radius = 20, speed = 0.5 }: MeteorProps) => {
  const group = useRef<THREE.Group>(null);
  const meteors = useRef<Array<{
    position: THREE.Vector3;
    velocity: THREE.Vector3;
    size: number;
  }>>([]);

  // Initialize meteors if not already done
  if (meteors.current.length === 0) {
    for (let i = 0; i < count; i++) {
      meteors.current.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * radius * 2,
          Math.random() * radius * 2,
          (Math.random() - 0.5) * radius * 2
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.1,
          -Math.random() * 0.2 - 0.1,
          (Math.random() - 0.5) * 0.1
        ),
        size: Math.random() * 0.3 + 0.1
      });
    }
  }

  useFrame((state, delta) => {
    meteors.current.forEach((meteor) => {
      meteor.position.add(meteor.velocity.clone().multiplyScalar(speed));

      // Reset position if meteor goes out of bounds
      if (meteor.position.y < -radius) {
        meteor.position.y = radius;
        meteor.position.x = (Math.random() - 0.5) * radius * 2;
        meteor.position.z = (Math.random() - 0.5) * radius * 2;
      }
    });

    if (group.current) {
      group.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={group}>
      {meteors.current.map((meteor, i) => (
        <group key={i} position={meteor.position}>
          <Sphere args={[meteor.size, 8, 8]}>
            <meshStandardMaterial
              color="#ff4400"
              emissive="#ff4400"
              emissiveIntensity={2}
            />
          </Sphere>
          {/* Meteor trail */}
          <mesh>
            <cylinderGeometry args={[0, meteor.size * 0.3, meteor.size * 4, 8]} />
            <meshBasicMaterial
              color="#ff4400"
              transparent
              opacity={0.2}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
};