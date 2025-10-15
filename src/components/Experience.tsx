import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { 
  Code2, 
  Database, 
  Brain, 
  LineChart, 
  Bot, 
  HeartPulse, 
  Lightbulb,
  Network,
  Blocks,
  Monitor,
  Rocket,
  Users
} from 'lucide-react';

const experiences = [
  {
    title: "Computer Proficiency",
    company_name: "Microsoft Office Expert",
    icon: <Monitor className="w-full h-full" />,
    iconBg: "#383E56",
    date: "Core Skill",
    points: [
      "Expert in Microsoft Office Products (Word, Excel, Outlook)",
      "Proficient in Microsoft Applications",
      "Advanced document and spreadsheet management",
      "Extensive experience with Microsoft Windows and creative design tools"
    ],
  },
  {
    title: "Data Analytics and Management",
    company_name: "Data Analysis Specialist",
    icon: <Database className="w-full h-full" />,
    iconBg: "#E6DEDD",
    date: "Advanced Skill",
    points: [
      "Proficient in data analytics and management",
      "Experience with Microsoft Power BI",
      "AWS data management capabilities",
      "Strong data visualization and interpretation skills"
    ],
  },
  {
    title: "SQL & Financial Analysis",
    company_name: "Data & Finance Analyst",
    icon: <LineChart className="w-full h-full" />,
    iconBg: "#383E56",
    date: "Intermediate to Advanced",
    points: [
      "Moderate SQL skills for data analysis and reporting",
      "Financial analysis using Python (Pandas, NumPy, SciPy, Ffn)",
      "Development of comprehensive financial reports",
      "Data-driven decision making and analysis"
    ],
  },
  {
    title: "AI & Automation",
    company_name: "AI Solutions Specialist",
    icon: <Bot className="w-full h-full" />,
    iconBg: "#E6DEDD",
    date: "Advanced Skill",
    points: [
      "Proficient with OpenAI services and tools",
      "AI implementation for business automation",
      "Data analysis automation",
      "AI-driven business solution optimization"
    ],
  },
  {
    title: "Healthcare Data Management",
    company_name: "Healthcare Data Specialist",
    icon: <HeartPulse className="w-full h-full" />,
    iconBg: "#383E56",
    date: "Specialized Skill",
    points: [
      "Knowledge of ICD coding systems",
      "Experience with EOB document handling",
      "Healthcare data analysis and management",
      "Medical documentation expertise"
    ],
  },
  {
    title: "Problem-Solving & Machine Learning",
    company_name: "Technical Analyst",
    icon: <Brain className="w-full h-full" />,
    iconBg: "#E6DEDD",
    date: "Advanced Skill",
    points: [
      "Critical issue identification and troubleshooting",
      "Experience with Monte Carlo Simulations",
      "Implementation of Logistic Regression models",
      "Data-driven problem resolution"
    ],
  },
  {
    title: "Blockchain Technology",
    company_name: "Blockchain Developer",
    icon: <Blocks className="w-full h-full" />,
    iconBg: "#383E56",
    date: "Advanced Skill",
    points: [
      "Proficient in Solidity development",
      "Experience with Ethereum blockchain",
      "Smart Contract development and deployment",
      "Blockchain solution architecture"
    ],
  },
  {
    title: "Professional Development",
    company_name: "Continuous Learner",
    icon: <Rocket className="w-full h-full" />,
    iconBg: "#E6DEDD",
    date: "Ongoing",
    points: [
      "Fast learner with strong adaptability",
      "Proactive approach to new challenges",
      "Strong influence and communication skills",
      "Dynamic interaction across diverse groups"
    ],
  }
];

export const Experience = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-secondary uppercase tracking-wider text-[14px]">What I have done so far</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Skills & Experience.</h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                contentStyle={{
                  background: "#1d1836",
                  color: "#fff",
                }}
                contentArrowStyle={{ borderRight: "7px solid #232631" }}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={experience.icon}
              >
                <div>
                  <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                  <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className="mt-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};