import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Meteors } from './canvas/Meteors';

const projects = [
  {
    name: "CarEase - Simplifying Car Rentals",
    description: "Design and develop CarEase, a feature-rich web application that allows users to search, book, and manage car rentals effortlessly. The platform should integrate multiple car rental providers, offering users a comprehensive database of available vehicles with advanced filtering options (e.g., location, price range, car type, and availability). The application will utilize React to build an interactive, user-friendly interface, ensuring smooth navigation and real-time updates. MongoDB will serve as the primary database, managing user profiles, bookings, vehicle information, and rental provider data efficiently. Tailwind CSS will provide a modern, responsive design system, ensuring the application is visually appealing and accessible across all devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    source_code_link: "https://github.com",
    live_link: "https://example.com",
  },
  {
    name: "RetireWise - AI-Powered Robo Advisor for Retirement Investing",
    description: "Develop RetireWise, an intelligent and user-friendly Robo Advisor designed to simplify retirement investing by optimizing investment allocations between SPY (S&P 500 ETF) and AGG (Aggregate Bond Index ETF). The application will leverage advanced algorithms and AI-driven insights to provide users with tailored retirement investment strategies based on their financial goals, risk tolerance, and timeline. Built using Python, the application will utilize Amazon Lex for natural language processing to enable conversational interactions and AWS Lambda for scalable, serverless execution of backend logic.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    source_code_link: "https://github.com",
    live_link: "https://example.com",
  },
  {
    name: "HealthIntel - AI-Powered Healthcare Analytics Platform",
    description: "Develop HealthIntel, an advanced AI-driven healthcare analytics platform designed to revolutionize patient care through predictive diagnostics and data-driven decision-making. The platform will combine cutting-edge machine learning and AI technologies with real-time data visualization and intelligent decision support systems to empower healthcare providers with actionable insights for optimized patient outcomes. The solution will leverage Python and TensorFlow for machine learning model development, Power BI for dynamic, real-time visualization, and AWS for scalable data storage and processing capabilities.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "powerbi",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "orange-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    source_code_link: "https://github.com",
    live_link: "https://example.com",
  },
];

export const Projects = () => {
  return (
    <section className="w-full">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 30], fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <Meteors count={20} radius={20} speed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative max-w-7xl mx-auto sm:px-16 px-6 flex flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <p className="text-secondary uppercase tracking-wider text-[14px]">My work</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects.</h2>
        </motion.div>

        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={`project-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full backdrop-blur-sm bg-opacity-70 hover:shadow-card hover:scale-105 transition-all duration-300"
            >
              <div className="relative w-full h-[230px] group">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover rounded-2xl"
                />

                <div className="absolute inset-0 flex justify-end m-3 gap-2 card-img_hover">
                  <div
                    onClick={() => window.open(project.source_code_link, "_blank")}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200"
                  >
                    <Github className="w-1/2 h-1/2 text-white" />
                  </div>
                  <div
                    onClick={() => window.open(project.live_link, "_blank")}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200"
                  >
                    <ExternalLink className="w-1/2 h-1/2 text-white" />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
                <p className="mt-2 text-secondary text-[14px] leading-[1.5]">{project.description}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <p key={tag.name} className={`text-[14px] ${tag.color} hover:scale-110 transition-transform duration-200`}>
                    #{tag.name}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};