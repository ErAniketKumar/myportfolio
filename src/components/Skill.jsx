import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiFirebase,
  SiMysql,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiFastapi,
  SiJira,
} from "react-icons/si";
import { FaDatabase, FaCode, FaTools, FaBrain } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

function Skill() {
  const skillCategories = [
    {
      id: 1,
      category: "Frontend Development",
      icon: <FaCode className="text-3xl text-yellow-400" />,
      skills: [
        {
          name: "React.js",
          icon: <SiReact className="text-4xl text-blue-400" />,
          level: 95,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-4xl text-yellow-400" />,
          level: 90,
        },
        {
          name: "HTML5",
          icon: <SiHtml5 className="text-4xl text-orange-500" />,
          level: 95,
        },
        {
          name: "CSS3",
          icon: <SiCss3 className="text-4xl text-blue-500" />,
          level: 90,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-4xl text-cyan-400" />,
          level: 92,
        },
      ],
    },
    {
      id: 2,
      category: "Backend Development",
      icon: <FaDatabase className="text-3xl text-yellow-400" />,
      skills: [
        {
          name: "Node.js",
          icon: <SiNodedotjs className="text-4xl text-green-500" />,
          level: 88,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-4xl text-gray-400" />,
          level: 85,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-4xl text-green-600" />,
          level: 87,
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-4xl text-blue-600" />,
          level: 80,
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="text-4xl text-yellow-500" />,
          level: 82,
        },
        {
          name: "FastAPI",
          icon: <SiFastapi className="text-4xl text-teal-500" />,
          level: 78,
        },
      ],
    },
    {
      id: 3,
      category: "Programming Languages",
      icon: <FaBrain className="text-3xl text-yellow-400" />,
      skills: [
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-4xl text-yellow-400" />,
          level: 90,
        },
        {
          name: "Python",
          icon: <SiPython className="text-4xl text-blue-500" />,
          level: 75,
        },
        {
          name: "C++",
          icon: <SiCplusplus className="text-4xl text-blue-600" />,
          level: 78,
        },
      ],
    },
    {
      id: 4,
      category: "Tools & Technologies",
      icon: <FaTools className="text-3xl text-yellow-400" />,
      skills: [
        {
          name: "Git",
          icon: <SiGit className="text-4xl text-orange-600" />,
          level: 85,
        },
        {
          name: "GitHub",
          icon: <SiGithub className="text-4xl text-white" />,
          level: 88,
        },
        {
          name: "VS Code",
          icon: <VscCode className="text-4xl text-blue-500" />,
          level: 92,
        },
        {
          name: "Postman",
          icon: <SiPostman className="text-4xl text-orange-500" />,
          level: 80,
        },
        {
          name: "Vercel",
          icon: <SiVercel className="text-4xl text-white" />,
          level: 85,
        },
        {
          name: "Netlify",
          icon: <SiNetlify className="text-4xl text-cyan-400" />,
          level: 83,
        },
      ],
    },
    {
      id: 5,
      category: "Testing & QA Tools",
      icon: <FaTools className="text-3xl text-yellow-400" />,
      skills: [
        {
          name: "Postman",
          icon: <SiPostman className="text-4xl text-orange-500" />,
          level: 85,
        },
        {
          name: "Jira",
          icon: <SiJira className="text-4xl text-blue-600" />,
          level: 75,
        },
        {
          name: "Playwright",
          icon: <FaTools className="text-4xl text-green-600" />,
          level: 70,
        },
        {
          name: "JMeter",
          icon: <FaTools className="text-4xl text-red-500" />,
          level: 68,
        },
      ],
    },
  ];

  const additionalSkills = [
    { name: "RESTful APIs", category: "API Development" },
    { name: "Responsive Design", category: "UI/UX" },
    { name: "Data Structures", category: "DSA" },
    { name: "Algorithms", category: "DSA" },
    { name: "Problem Solving", category: "Core" },
    { name: "System Design", category: "Architecture" },
    { name: "Agile/Scrum", category: "Methodology" },
    { name: "Leadership", category: "Soft Skills" },
    { name: "Team Collaboration", category: "Soft Skills" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-yellow-500 tracking-wider uppercase">
          Technical Expertise
        </span>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Mastering the tools and technologies that power modern web
          applications
        </p>
      </motion.div>

      {/* Skill Categories */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.id}
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-800 dark:via-gray-900 dark:to-black light-theme:bg-white rounded-3xl p-8 md:p-10 border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 hover:border-yellow-500/50 transition-all duration-500 shadow-xl"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-yellow-500/20 rounded-xl">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-white dark:text-white light-theme:text-gray-900">
                {category.category}
              </h3>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-800/50 dark:bg-gray-800/50 light-theme:bg-gray-50 p-6 rounded-xl border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 hover:border-yellow-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="transform hover:rotate-12 transition-transform">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white dark:text-white light-theme:text-gray-900">
                        {skill.name}
                      </h4>
                      <div className="text-sm text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 font-medium">
                        {skill.level}% Proficiency
                      </div>
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 dark:bg-gray-700 light-theme:bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Additional Skills */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-800 dark:via-gray-900 dark:to-black light-theme:bg-white rounded-3xl p-8 md:p-10 border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 hover:border-yellow-500/50 transition-all duration-500 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-yellow-500/20 rounded-xl">
              <FaBrain className="text-3xl text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-white dark:text-white light-theme:text-gray-900">
              Additional Expertise
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-800/50 dark:bg-gray-800/50 light-theme:bg-gray-50 border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 hover:border-yellow-500 px-5 py-3 rounded-full transition-all duration-300"
              >
                <span className="text-gray-300 dark:text-gray-300 light-theme:text-gray-700 font-medium">
                  {skill.name}
                </span>
                <span className="text-yellow-500 dark:text-yellow-500 light-theme:text-yellow-600 text-sm ml-2">
                  ({skill.category})
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* DSA & Competitive Programming */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-yellow-500/10 via-gray-800 to-gray-900 dark:from-yellow-500/10 dark:via-gray-800 dark:to-gray-900 light-theme:bg-white rounded-3xl p-8 md:p-10 border border-yellow-500/30 light-theme:border-gray-200 shadow-2xl shadow-yellow-500/10"
        >
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold text-white dark:text-white light-theme:text-gray-900">
              Data Structures & Algorithms
            </h3>
            <p className="text-gray-300 dark:text-gray-300 light-theme:text-gray-700 text-lg">
              Solved{" "}
              <span className="text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 font-bold text-2xl">
                400+
              </span>{" "}
              problems across multiple platforms
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-800/50 dark:bg-gray-800/50 light-theme:bg-gray-50 p-6 rounded-xl border border-gray-700 dark:border-gray-700 light-theme:border-gray-200">
                <div className="text-4xl font-bold text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 mb-2">
                  LeetCode
                </div>
                <p className="text-gray-400 dark:text-gray-400 light-theme:text-gray-600">
                  Algorithmic Problem Solving
                </p>
              </div>
              <div className="bg-gray-800/50 dark:bg-gray-800/50 light-theme:bg-gray-50 p-6 rounded-xl border border-gray-700 dark:border-gray-700 light-theme:border-gray-200">
                <div className="text-4xl font-bold text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 mb-2">
                  CodeChef
                </div>
                <p className="text-gray-400 dark:text-gray-400 light-theme:text-gray-600">
                  Competitive Programming
                </p>
              </div>
              <div className="bg-gray-800/50 dark:bg-gray-800/50 light-theme:bg-gray-50 p-6 rounded-xl border border-gray-700 dark:border-gray-700 light-theme:border-gray-200">
                <div className="text-4xl font-bold text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 mb-2">
                  GeeksforGeeks
                </div>
                <p className="text-gray-400 dark:text-gray-400 light-theme:text-gray-600">
                  Interview Preparation
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skill;
