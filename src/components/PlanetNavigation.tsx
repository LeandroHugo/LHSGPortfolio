import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Planet } from './canvas/Planet';

const planets = [
  {
    id: 'about',
    name: 'Mercury',
    colors: {
      base: '#a5a5a5',      // Mercury's gray surface
      terrain: '#8c8c8c',   // Darker craters
      atmosphere: '#c4c4c4', // Thin atmosphere
      glow: '#ffffff',      // White glow
    },
    position: [-14, 0, 0],
    scale: 0.4,
  },
  {
    id: 'experience',
    name: 'Venus',
    colors: {
      base: '#e6b012',      // Venus's golden surface
      terrain: '#bf9b30',   // Rocky terrain
      atmosphere: '#ffd700', // Thick atmosphere
      glow: '#fff4b3',      // Warm glow
    },
    position: [-10, 0, 0],
    scale: 0.9,
  },
  {
    id: 'projects',
    name: 'Earth',
    colors: {
      base: '#1a4b77',      // Ocean blue
      terrain: '#2d7dbd',   // Continents
      atmosphere: '#63b3ff', // Earth's atmosphere
      glow: '#a1d6ff',      // Blue glow
    },
    position: [-6, 0, 0],
    scale: 1,
  },
  {
    id: 'contact',
    name: 'Mars',
    colors: {
      base: '#c1440e',      // Mars red
      terrain: '#8b0000',   // Dark red terrain
      atmosphere: '#ff6b6b', // Thin atmosphere
      glow: '#ffb3b3',      // Reddish glow
    },
    position: [-2, 0, 0],
    scale: 0.5,
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    colors: {
      base: '#cd853f',      // Jupiter's bands
      terrain: '#deb887',   // Storm patterns
      atmosphere: '#f4a460', // Gas layers
      glow: '#ffe4b5',      // Warm glow
    },
    position: [2, 0, 0],
    scale: 2.5,
  },
  {
    id: 'saturn',
    name: 'Saturn',
    colors: {
      base: '#daa520',      // Saturn's surface
      terrain: '#b8860b',   // Band patterns
      atmosphere: '#ffd700', // Gas atmosphere
      glow: '#fff8dc',      // Soft glow
    },
    position: [8, 0, 0],
    scale: 2.2,
  },
  {
    id: 'uranus',
    name: 'Uranus',
    colors: {
      base: '#4fd1c5',      // Uranus's blue-green
      terrain: '#38b2ac',   // Lighter bands
      atmosphere: '#81e6d9', // Methane atmosphere
      glow: '#e6fffa',      // Cyan glow
    },
    position: [14, 0, 0],
    scale: 1.8,
  },
  {
    id: 'neptune',
    name: 'Neptune',
    colors: {
      base: '#1e40af',      // Neptune's deep blue
      terrain: '#1d4ed8',   // Storm patterns
      atmosphere: '#3b82f6', // Dense atmosphere
      glow: '#bfdbfe',      // Blue glow
    },
    position: [20, 0, 0],
    scale: 1.7,
  },
];

interface PlanetNavigationProps {
  onPlanetClick: (id: string) => void;
}

export const PlanetNavigation = ({ onPlanetClick }: PlanetNavigationProps) => {
  return (
    <div className="h-[60vh] w-full relative">
      <div className="absolute top-4 left-4 z-10 bg-black/50 p-4 rounded-lg backdrop-blur-sm">
        <h3 className="text-white text-lg font-bold mb-2">Solar System Navigation</h3>
        <div className="grid grid-cols-2 gap-2">
          {planets.map((planet) => (
            <button
              key={planet.id}
              onClick={() => onPlanetClick(planet.id)}
              className="text-left text-sm text-white hover:text-blue-300 transition-colors"
            >
              {planet.name}
            </button>
          ))}
        </div>
      </div>
      
      <Canvas
        camera={{ position: [0, 15, 30], fov: 45 }}
        className="cursor-pointer"
      >
        <Suspense fallback={null}>
          {/* Enhanced lighting for better planet visualization */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[50, 50, 25]} intensity={1.5} />
          <directionalLight position={[-50, -50, -25]} intensity={0.5} />
          <hemisphereLight intensity={0.3} groundColor="#000000" />

          {/* Star field background */}
          <group>
            {[...Array(200)].map((_, i) => {
              const position: [number, number, number] = [
                (Math.random() - 0.5) * 100,
                (Math.random() - 0.5) * 100,
                (Math.random() - 0.5) * 100
              ];
              return (
                <mesh key={i} position={position}>
                  <sphereGeometry args={[0.02, 8, 8]} />
                  <meshBasicMaterial color="#ffffff" />
                </mesh>
              );
            })}
          </group>

          {planets.map((planet) => (
            <Planet
              key={planet.id}
              colors={planet.colors}
              position={planet.position}
              scale={planet.scale}
              rotationSpeed={0.3}
              onClick={() => onPlanetClick(planet.id)}
            />
          ))}

          <OrbitControls
            enableZoom={true}
            enablePan={true}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 3}
            autoRotate
            autoRotateSpeed={0.2}
            maxDistance={50}
            minDistance={10}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};