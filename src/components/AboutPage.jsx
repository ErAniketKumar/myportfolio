import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaRocket,
  FaHeart,
  FaGraduationCap,
  FaTrophy,
  FaCode,
  FaChartLine,
  FaUsers,
  FaBriefcase,
} from "react-icons/fa";

function AboutPage() {
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
          My Journey
        </span>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
          About Me - The Full Story
        </h2>
        <p className="mt-4 text-lg text-gray-400 dark:text-gray-400 light-theme:text-gray-600 max-w-2xl mx-auto">
          Developer. Entrepreneur. Learner. Here's my journey in tech and
          business.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8"
      >
        {/* Vision & Mission */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden bg-gradient-to-br from-yellow-500/10 via-gray-800 to-gray-900 dark:from-yellow-500/10 dark:via-gray-800 dark:to-gray-900 light-theme:bg-white rounded-3xl p-8 md:p-12 border border-yellow-500/30 light-theme:border-gray-200 shadow-2xl shadow-yellow-500/10"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-yellow-500/20 rounded-xl">
                <FaLightbulb className="text-3xl text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600" />
              </div>
              <h3 className="text-3xl font-bold text-white dark:text-white light-theme:text-gray-900">
                Vision & Entrepreneurial Journey
              </h3>
            </div>
            <div className="space-y-4 text-lg text-gray-300 dark:text-gray-300 light-theme:text-gray-700 leading-relaxed">
              <p>
                Beyond my role as a software engineer, I'm the{" "}
                <span className="text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 font-semibold">
                  Founder & CEO of KalawatiPutra Edu
                </span>
                , where I lead a mission to bridge technology and education.
                This venture has taught me invaluable lessons about leadership,
                product development, and building solutions that scale.
              </p>
              <p>
                My entrepreneurial experience complements my technical skills,
                giving me a unique perspective on building products that are not
                only technically excellent but also commercially viable and
                user-centric. I understand the full product lifecycle—from
                ideation to deployment to user feedback and iteration.
              </p>
              <p className="text-xl font-semibold text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 italic">
                "The best way to predict the future is to build it."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Career Advice Section */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-800 dark:via-gray-900 dark:to-black light-theme:bg-white rounded-3xl p-8 md:p-10 border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 hover:border-yellow-500/50 transition-all duration-500 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-yellow-500/20 rounded-xl">
              <FaChartLine className="text-2xl text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-white dark:text-white light-theme:text-gray-900">
              Career Insights & Learnings
            </h3>
          </div>
          <div className="space-y-4 text-gray-300 dark:text-gray-300 light-theme:text-gray-700 text-lg leading-relaxed">
            <h4 className="text-xl font-semibold text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600">
              What I've Learned Building Products
            </h4>
            <ul className="space-y-3 ml-6 list-disc">
              <li>
                <strong>Focus on fundamentals:</strong> Master data structures,
                algorithms, and system design. These never go out of style.
              </li>
              <li>
                <strong>Build real projects:</strong> Theory is important, but
                nothing beats hands-on experience. Each project teaches you
                something new.
              </li>
              <li>
                <strong>Think beyond code:</strong> Understanding user needs,
                business logic, and product metrics makes you a better engineer.
              </li>
              <li>
                <strong>Embrace testing:</strong> Writing tests might feel slow
                initially, but it saves countless debugging hours later.
              </li>
              <li>
                <strong>Learn in public:</strong> Share your learnings,
                contribute to open source, and engage with the developer
                community.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Technical Growth */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-800 dark:via-gray-900 dark:to-black light-theme:bg-white rounded-3xl p-8 md:p-10 border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 hover:border-yellow-500/50 transition-all duration-500 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-yellow-500/20 rounded-xl">
              <FaCode className="text-2xl text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-white dark:text-white light-theme:text-gray-900">
              My Development Philosophy
            </h3>
          </div>
          <div className="space-y-4 text-gray-300 dark:text-gray-300 light-theme:text-gray-700 text-lg leading-relaxed">
            <p>
              I believe in writing{" "}
              <span className="text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 font-semibold">
                clean, maintainable, and scalable code
              </span>
              . Every line should have a purpose, every function should be
              testable, and every feature should solve a real problem.
            </p>
            <p>My approach to development involves:</p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-800/30 dark:bg-gray-800/30 light-theme:bg-gray-50 p-5 rounded-xl border border-gray-700/50 dark:border-gray-700/50 light-theme:border-gray-200">
                <h4 className="font-semibold text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 mb-2">
                  Planning First
                </h4>
                <p className="text-sm">
                  Understand requirements thoroughly before writing a single
                  line of code.
                </p>
              </div>
              <div className="bg-gray-800/30 dark:bg-gray-800/30 light-theme:bg-gray-50 p-5 rounded-xl border border-gray-700/50 dark:border-gray-700/50 light-theme:border-gray-200">
                <h4 className="font-semibold text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 mb-2">
                  Iterative Development
                </h4>
                <p className="text-sm">
                  Build in small increments, test frequently, and refactor
                  continuously.
                </p>
              </div>
              <div className="bg-gray-800/30 dark:bg-gray-800/30 light-theme:bg-gray-50 p-5 rounded-xl border border-gray-700/50 dark:border-gray-700/50 light-theme:border-gray-200">
                <h4 className="font-semibold text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 mb-2">
                  User-Centric Design
                </h4>
                <p className="text-sm">
                  Always keep the end-user in mind. Features should enhance UX,
                  not complicate it.
                </p>
              </div>
              <div className="bg-gray-800/30 dark:bg-gray-800/30 light-theme:bg-gray-50 p-5 rounded-xl border border-gray-700/50 dark:border-gray-700/50 light-theme:border-gray-200">
                <h4 className="font-semibold text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 mb-2">
                  Performance Matters
                </h4>
                <p className="text-sm">
                  Optimize for speed and efficiency without premature
                  optimization.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Open Source & Contributions */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-800 dark:via-gray-900 dark:to-black light-theme:bg-white rounded-3xl p-8 md:p-10 border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 hover:border-yellow-500/50 transition-all duration-500 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-yellow-500/20 rounded-xl">
              <FaUsers className="text-2xl text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-white dark:text-white light-theme:text-gray-900">
              Community & Collaboration
            </h3>
          </div>
          <div className="space-y-4 text-gray-300 dark:text-gray-300 light-theme:text-gray-700 text-lg leading-relaxed">
            <p>
              I'm a strong believer in{" "}
              <span className="text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 font-semibold">
                giving back to the developer community
              </span>
              . Whether it's contributing to open-source projects, mentoring
              junior developers, or sharing knowledge through blogs and forums,
              collaboration makes us all better engineers.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
                <div className="text-3xl font-bold text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600">
                  5+
                </div>
                <div className="text-sm text-gray-400 dark:text-gray-400 light-theme:text-gray-600 mt-1">
                  Contributions in projects
                </div>
              </div>
              <div className="text-center p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
                <div className="text-3xl font-bold text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600">
                  50+
                </div>
                <div className="text-sm text-gray-400 dark:text-gray-400 light-theme:text-gray-600 mt-1">
                  GitHub Repositories
                </div>
              </div>
              <div className="text-center p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
                <div className="text-3xl font-bold text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600">
                  200+
                </div>
                <div className="text-sm text-gray-400 dark:text-gray-400 light-theme:text-gray-600 mt-1">
                  Commits This Year
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why I'm a Great Fit */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-800 dark:via-gray-900 dark:to-black light-theme:bg-white rounded-3xl p-8 md:p-10 border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 hover:border-yellow-500/50 transition-all duration-500 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-yellow-500/20 rounded-xl">
              <FaBriefcase className="text-2xl text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-white dark:text-white light-theme:text-gray-900">
              What I Bring to the Table
            </h3>
          </div>
          <div className="space-y-4 text-gray-300 dark:text-gray-300 light-theme:text-gray-700 text-lg leading-relaxed">
            <p>
              My entrepreneurial experience has made me a{" "}
              <span className="text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 font-semibold">
                more well-rounded software engineer
              </span>
              . I understand business needs, user psychology, and market
              demands. But my passion is in engineering—building robust,
              scalable systems that solve real problems.
            </p>
            <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/30 mt-6">
              <h4 className="text-xl font-bold text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 mb-3">
                I'm actively seeking full-time software engineering roles where
                I can:
              </h4>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Build scalable backend systems and APIs</li>
                <li>Work with talented teams on challenging problems</li>
                <li>
                  Contribute to product architecture and technical decisions
                </li>
                <li>Grow as an engineer while delivering business value</li>
                <li>Apply my entrepreneurial mindset to drive innovation</li>
              </ul>
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
                Key Achievements
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-gray-800/30 dark:bg-gray-800/30 light-theme:bg-gray-50 p-4 rounded-xl border border-gray-700/50 dark:border-gray-700/50 light-theme:border-gray-200">
                <span className="text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 text-xl mt-1">
                  🏆
                </span>
                <div>
                  <h4 className="font-semibold text-white dark:text-white light-theme:text-gray-900">
                    400+ DSA Problems Solved
                  </h4>
                  <p className="text-gray-400 dark:text-gray-400 light-theme:text-gray-600 text-sm mt-1">
                    Across LeetCode, CodeChef, and GeeksforGeeks
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-800/30 dark:bg-gray-800/30 light-theme:bg-gray-50 p-4 rounded-xl border border-gray-700/50 dark:border-gray-700/50 light-theme:border-gray-200">
                <span className="text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 text-xl mt-1">
                  🚀
                </span>
                <div>
                  <h4 className="font-semibold text-white dark:text-white light-theme:text-gray-900">
                    Founded KalawatiPutra Edu
                  </h4>
                  <p className="text-gray-400 dark:text-gray-400 light-theme:text-gray-600 text-sm mt-1">
                    EdTech platform serving students and educators
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-800/30 dark:bg-gray-800/30 light-theme:bg-gray-50 p-4 rounded-xl border border-gray-700/50 dark:border-gray-700/50 light-theme:border-gray-200">
                <span className="text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 text-xl mt-1">
                  💻
                </span>
                <div>
                  <h4 className="font-semibold text-white dark:text-white light-theme:text-gray-900">
                    10+ Production Projects
                  </h4>
                  <p className="text-gray-400 dark:text-gray-400 light-theme:text-gray-600 text-sm mt-1">
                    Full-stack applications deployed and serving users
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Closing Note */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-yellow-500/10 via-gray-800 to-gray-900 dark:from-yellow-500/10 dark:via-gray-800 dark:to-gray-900 light-theme:bg-white rounded-3xl p-8 md:p-10 border border-yellow-500/30 light-theme:border-gray-200 shadow-2xl shadow-yellow-500/10 text-center"
        >
          <h3 className="text-2xl font-bold text-white dark:text-white light-theme:text-gray-900 mb-4">
            Ready to collaborate and build something amazing?
          </h3>
          <p className="text-gray-300 dark:text-gray-300 light-theme:text-gray-700 text-lg mb-6">
            I'm actively looking for software engineering opportunities where I
            can contribute, learn, and grow with a talented team.
          </p>
          <a
            href="/#/ContactUs"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg"
          >
            Let's Connect
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutPage;
