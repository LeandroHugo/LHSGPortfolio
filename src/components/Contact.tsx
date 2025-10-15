import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { ContactPlanet } from './canvas/ContactPlanet';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const contactOptions = [
    {
      title: "General Inquiries",
      description: "For general questions about my work and experience",
      email: "inquiries@example.com"
    },
    {
      title: "Project Collaboration",
      description: "Interested in working together on a project?",
      email: "projects@example.com"
    },
    {
      title: "Speaking Engagements",
      description: "Available for conferences, workshops, and events",
      email: "speaking@example.com"
    },
    {
      title: "Data Analysis Services",
      description: "Need help with data analytics or management?",
      email: "data@example.com"
    }
  ];

  return (
    <section className="w-full min-h-screen relative flex items-center justify-center">
      {/* Planet Canvas */}
      <div 
        className="absolute inset-0 cursor-pointer"
        onClick={() => setShowContactInfo(true)}
      >
        <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <ContactPlanet />
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 1.5}
              minPolarAngle={Math.PI / 2.5}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Hover Instruction */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-opacity-80 text-lg">
        Click the planet to explore contact options
      </div>

      {/* Contact Information Modal */}
      <AnimatePresence>
        {showContactInfo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="relative bg-[#1a1a2e] rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowContactInfo(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-8">
                <h2 className="text-4xl font-bold text-white mb-2">Contact Options</h2>
                <p className="text-violet-300 mb-8">Choose the best way to connect with me</p>

                <div className="grid md:grid-cols-2 gap-6">
                  {contactOptions.map((option, index) => (
                    <motion.div
                      key={option.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-[#2a2a4a] p-6 rounded-xl hover:bg-[#3a3a6a] transition-colors"
                    >
                      <h3 className="text-xl font-semibold text-white mb-2">{option.title}</h3>
                      <p className="text-gray-300 mb-4">{option.description}</p>
                      <a
                        href={`mailto:${option.email}`}
                        className="inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors"
                      >
                        <span>{option.email}</span>
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-[#2a2a4a] rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Additional Information</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Available for remote work worldwide</li>
                    <li>• Response time: Within 24-48 hours</li>
                    <li>• Open to both short-term and long-term engagements</li>
                    <li>• Flexible scheduling for different time zones</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};