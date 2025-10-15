import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-secondary uppercase tracking-wider text-[14px]">Introduction</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I’m a versatile software developer with expertise in TypeScript, JavaScript, and frameworks like React, Node.js, and Three.js. Beyond development, I bring robust skills in data analytics, financial analysis, AI-driven automation, and blockchain technologies. Proficient in tools like Microsoft Power BI, AWS, Python (Pandas, NumPy, SciPy), and SQL, I excel at crafting scalable, user-focused solutions while leveraging machine learning techniques and advanced problem-solving. With a strong background in healthcare data management, financial modeling, and blockchain (Solidity, Ethereum, Smart Contracts), I adapt quickly, collaborate effectively, and deliver results that transform ideas into impactful solutions. Let’s innovate together!
        </motion.p>
      </div>
    </section>
  );
};