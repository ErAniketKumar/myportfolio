import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaRocket,
  FaHeart,
  FaGraduationCap,
  FaTrophy,
  FaCode,
} from "react-icons/fa";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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
          Get to Know Me
        </span>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="mt-4 text-lg text-gray-400 dark:text-gray-400 light-theme:text-gray-600 max-w-2xl mx-auto">
          Software Engineer. Problem Solver. Building scalable applications with
          modern technologies.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8"
      >
        {/* Technical Expertise */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden bg-gradient-to-br from-yellow-500/10 via-gray-800 to-gray-900 dark:from-yellow-500/10 dark:via-gray-800 dark:to-gray-900 light-theme:bg-white rounded-3xl p-8 md:p-12 border border-yellow-500/30 light-theme:border-gray-200 shadow-2xl shadow-yellow-500/10"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-yellow-500/20 rounded-xl">
                <FaCode className="text-3xl text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600" />
              </div>
              <h3 className="text-3xl font-bold text-white dark:text-white light-theme:text-gray-900">
                What I Do
              </h3>
            </div>
            <div className="space-y-4 text-lg text-gray-300 dark:text-gray-300 light-theme:text-gray-700 leading-relaxed">
              <p>
                I'm a{" "}
                <span className="text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 font-semibold">
                  Full-Stack Software Engineer
                </span>{" "}
                specializing in building high-performance, scalable web
                applications. My expertise spans across the entire development
                stack, from designing intuitive user interfaces to architecting
                robust backend systems.
              </p>
              <p>
                I believe in writing{" "}
                <span className="text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 font-semibold">
                  clean, maintainable code
                </span>{" "}
                that follows best practices and industry standards. Every
                project is an opportunity to learn, grow, and deliver solutions
                that make a real difference.
              </p>
              <p className="text-xl font-semibold text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 italic">
                "Code is like humor. When you have to explain it, it's bad."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Who I Am */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-800 dark:via-gray-900 dark:to-black light-theme:bg-white rounded-3xl p-8 md:p-10 border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 hover:border-yellow-500/50 transition-all duration-500 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-yellow-500/20 rounded-xl">
              <FaRocket className="text-2xl text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-white dark:text-white light-theme:text-gray-900">
              Who I Am
            </h3>
          </div>
          <div className="space-y-4 text-gray-300 dark:text-gray-300 light-theme:text-gray-700 text-lg leading-relaxed">
            <p>
              I'm{" "}
              <span className="text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 font-semibold">
                Aniket Kumar
              </span>
              , a passionate software engineer with expertise in full-stack
              development. Currently pursuing my B.E. in Computer Science at{" "}
              <span className="text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 font-semibold">
                Chitkara University
              </span>{" "}
              with a{" "}
              <span className="text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 font-semibold">
                CGPA of 9.50/10
              </span>
              , I combine strong academic fundamentals with hands-on project
              experience.
            </p>
            <p>
              I specialize in the{" "}
              <span className="text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 font-semibold">
                MERN stack
              </span>{" "}
              (MongoDB, Express.js, React, Node.js) and{" "}
              <span className="text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 font-semibold">
                Python FastAPI
              </span>
              , with experience in building scalable applications, RESTful APIs,
              and modern web solutions. I'm proficient in testing, deployment,
              and following software development best practices.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-800 dark:via-gray-900 dark:to-black light-theme:bg-white rounded-3xl p-8 md:p-10 border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 hover:border-yellow-500/50 transition-all duration-500 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-yellow-500/20 rounded-xl">
              <FaHeart className="text-2xl text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-white dark:text-white light-theme:text-gray-900">
              Core Values
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 dark:bg-gray-800/50 light-theme:bg-gray-50 p-6 rounded-xl border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 hover:border-yellow-500/50 transition-all">
              <h4 className="text-xl font-bold text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 mb-3">
                Clean Code
              </h4>
              <p className="text-gray-300 dark:text-gray-300 light-theme:text-gray-700">
                Writing maintainable, readable code that follows best practices
                and industry standards.
              </p>
            </div>
            <div className="bg-gray-800/50 dark:bg-gray-800/50 light-theme:bg-gray-50 p-6 rounded-xl border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 hover:border-yellow-500/50 transition-all">
              <h4 className="text-xl font-bold text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 mb-3">
                Continuous Learning
              </h4>
              <p className="text-gray-300 dark:text-gray-300 light-theme:text-gray-700">
                Staying updated with latest technologies and constantly
                improving my skills through practice.
              </p>
            </div>
            <div className="bg-gray-800/50 dark:bg-gray-800/50 light-theme:bg-gray-50 p-6 rounded-xl border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 hover:border-yellow-500/50 transition-all">
              <h4 className="text-xl font-bold text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 mb-3">
                Collaboration
              </h4>
              <p className="text-gray-300 dark:text-gray-300 light-theme:text-gray-700">
                Working effectively in teams, communicating clearly, and
                contributing to shared goals.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education & Achievements */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-800 dark:via-gray-900 dark:to-black light-theme:bg-white rounded-3xl p-8 border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 hover:border-yellow-500/50 transition-all duration-500 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-yellow-500/20 rounded-xl">
                <FaGraduationCap className="text-2xl text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-white dark:text-white light-theme:text-gray-900">
                Education
              </h3>
            </div>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-yellow-500/30">
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-yellow-500 rounded-full"></div>
                <h4 className="text-lg font-bold text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600">
                  B.E. in Computer Science
                </h4>
                <p className="text-gray-400 dark:text-gray-400 light-theme:text-gray-600 text-sm mt-1">
                  Chitkara University, Himachal Pradesh
                </p>
                <p className="text-gray-300 dark:text-gray-300 light-theme:text-gray-700 mt-2">
                  Currently in 4th Year
                </p>
                <div className="mt-2 inline-block bg-yellow-500/20 px-3 py-1 rounded-full">
                  <span className="text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 font-bold">
                    CGPA: 9.50/10
                  </span>
                </div>
              </div>
              <div className="relative pl-6 border-l-2 border-yellow-500/30">
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-yellow-500 rounded-full"></div>
                <h4 className="text-lg font-bold text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600">
                  Higher Secondary (12th)
                </h4>
                <p className="text-gray-400 dark:text-gray-400 light-theme:text-gray-600 text-sm mt-1">
                  P.M.V.S Ramnagar, Bihar
                </p>
                <div className="mt-2 inline-block bg-yellow-500/20 px-3 py-1 rounded-full">
                  <span className="text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 font-bold">
                    Score: 77.6%
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-800 dark:via-gray-900 dark:to-black light-theme:bg-white rounded-3xl p-8 border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 hover:border-yellow-500/50 transition-all duration-500 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-yellow-500/20 rounded-xl">
                <FaTrophy className="text-2xl text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-white dark:text-white light-theme:text-gray-900">
                Achievements
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-gray-800/30 dark:bg-gray-800/30 light-theme:bg-gray-50 p-4 rounded-xl border border-gray-700/50 dark:border-gray-700/50 light-theme:border-gray-200">
                <span className="text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 text-xl mt-1">
                  🏆
                </span>
                <div>
                  <h4 className="font-semibold text-white dark:text-white light-theme:text-gray-900">
                    Coding Champion
                  </h4>
                  <p className="text-gray-400 dark:text-gray-400 light-theme:text-gray-600 text-sm mt-1">
                    Solved 400+ DSA problems across LeetCode, CodeChef, and
                    GeeksforGeeks
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-800/30 dark:bg-gray-800/30 light-theme:bg-gray-50 p-4 rounded-xl border border-gray-700/50 dark:border-gray-700/50 light-theme:border-gray-200">
                <span className="text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 text-xl mt-1">
                  💪
                </span>
                <div>
                  <h4 className="font-semibold text-white dark:text-white light-theme:text-gray-900">
                    100 Days of Code
                  </h4>
                  <p className="text-gray-400 dark:text-gray-400 light-theme:text-gray-600 text-sm mt-1">
                    Completed the intensive 100 Days of Code Challenge (Jan-Apr
                    2024)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-800/30 dark:bg-gray-800/30 light-theme:bg-gray-50 p-4 rounded-xl border border-gray-700/50 dark:border-gray-700/50 light-theme:border-gray-200">
                <span className="text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 text-xl mt-1">
                  🚀
                </span>
                <div>
                  <h4 className="font-semibold text-white dark:text-white light-theme:text-gray-900">
                    Hackathon Finalist
                  </h4>
                  <p className="text-gray-400 dark:text-gray-400 light-theme:text-gray-600 text-sm mt-1">
                    Finalist in Explore AI 2.0 Hackathon with Yamaha (April
                    2023)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-800/30 dark:bg-gray-800/30 light-theme:bg-gray-50 p-4 rounded-xl border border-gray-700/50 dark:border-gray-700/50 light-theme:border-gray-200">
                <span className="text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 text-xl mt-1">
                  �
                </span>
                <div>
                  <h4 className="font-semibold text-white dark:text-white light-theme:text-gray-900">
                    10+ Production Projects
                  </h4>
                  <p className="text-gray-400 dark:text-gray-400 light-theme:text-gray-600 text-sm mt-1">
                    Built and deployed full-stack applications serving real
                    users
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What Drives Me */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-800 dark:via-gray-900 dark:to-black light-theme:bg-white rounded-3xl p-8 md:p-10 border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 hover:border-yellow-500/50 transition-all duration-500 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-yellow-500/20 rounded-xl">
              <FaCode className="text-2xl text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-white dark:text-white light-theme:text-gray-900">
              What Drives Me
            </h3>
          </div>
          <div className="text-gray-300 dark:text-gray-300 light-theme:text-gray-700 text-lg leading-relaxed space-y-4">
            <p>
              I'm driven by the belief that{" "}
              <span className="text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 font-semibold">
                code can solve real-world problems
              </span>
              . Whether it's building scalable backend systems, creating
              intuitive user interfaces, or optimizing application performance,
              I'm passionate about writing clean, efficient code that makes a
              meaningful impact.
            </p>
            <p>
              As a full-stack developer, I approach every project with a focus
              on scalability, maintainability, and user experience. I love
              tackling complex challenges, learning new technologies, and
              collaborating with teams to build software that not only works
              flawlessly but also delights users. My goal is to contribute to
              innovative projects where I can grow as an engineer and make a
              lasting impact.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
                <div className="text-3xl font-bold text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600">
                  500+
                </div>
                <div className="text-sm text-gray-400 dark:text-gray-400 light-theme:text-gray-600 mt-1">
                  Commits on GitHub
                </div>
              </div>
              <div className="text-center p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
                <div className="text-3xl font-bold text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600">
                  10+
                </div>
                <div className="text-sm text-gray-400 dark:text-gray-400 light-theme:text-gray-600 mt-1">
                  Projects Built
                </div>
              </div>
              <div className="text-center p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
                <div className="text-3xl font-bold text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600">
                  9.50
                </div>
                <div className="text-sm text-gray-400 dark:text-gray-400 light-theme:text-gray-600 mt-1">
                  CGPA
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
