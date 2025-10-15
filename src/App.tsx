import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';

import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { StarsCanvas } from './components/canvas/Stars';
import { PlanetNavigation } from './components/PlanetNavigation';
import { Meteors } from './components/canvas/Meteors';

const AsteroidField = () => (
  <div className="h-[30vh] relative">
    <Canvas camera={{ position: [0, 0, 30], fov: 45 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <Meteors count={30} radius={20} speed={0.8} />
      </Suspense>
    </Canvas>
  </div>
);

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative z-0 bg-primary">
      {/* Hero Section with Planet Navigation */}
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
        <PlanetNavigation onPlanetClick={scrollToSection} />
      </div>
      
      {/* About Section */}
      <div className="relative z-0">
        <div id="about" className="min-h-screen flex items-center">
          <About />
        </div>
      </div>

      {/* Asteroid Field Separator */}
      <AsteroidField />

      {/* Projects Section */}
      <div className="relative z-0">
        <div id="projects" className="min-h-screen flex items-center">
          <Projects />
          <div className="absolute inset-0 z-[-1]">
            <StarsCanvas />
          </div>
        </div>
      </div>

      {/* Asteroid Field Separator */}
      <AsteroidField />

      {/* Experience Section */}
      <div className="relative z-0">
        <div id="experience" className="min-h-screen flex items-center">
          <Experience />
        </div>
      </div>

      {/* Contact Section */}
      <footer className="relative z-0">
        <div id="contact">
          <Contact />
        </div>
      </footer>
      
      <Loader />
    </div>
  );
}

export default App;