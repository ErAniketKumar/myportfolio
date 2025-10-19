import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaCheckCircle,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiVercel,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const techIcons = {
    React: <SiReact className="text-blue-400" />,
    "Node.js": <SiNodedotjs className="text-green-500" />,
    MongoDB: <SiMongodb className="text-green-600" />,
    Express: <SiExpress className="text-gray-400" />,
    Tailwind: <SiTailwindcss className="text-cyan-400" />,
    Firebase: <SiFirebase className="text-yellow-500" />,
    Vercel: <SiVercel className="text-white" />,
    JavaScript: <SiJavascript className="text-yellow-400" />,
    TypeScript: <SiTypescript className="text-blue-500" />,
  };

  const projects = [
    {
      id: 1,
      title: "Abhushan Kala Kendra",
      tagline: "Premium Jewellery E-Commerce",
      shortDescription:
        "A luxurious online jewellery shopping platform featuring exquisite collections, secure payments, and elegant user experience.",
      thumbnail:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop",
      category: "E-Commerce",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
      fullDescription:
        "Abhushan Kala Kendra is a premium jewellery e-commerce platform that brings the elegance of traditional Indian jewellery to the digital world. The platform features a sophisticated catalog system, real-time inventory management, and secure payment integration. Built with a focus on visual appeal and user experience, it showcases high-quality jewellery pieces with detailed views and specifications.",
      challenges: [
        "Creating a visually stunning interface that matches the premium nature of the products",
        "Implementing high-resolution image galleries with smooth zoom functionality",
        "Building a secure payment gateway integration with multiple payment options",
        "Optimizing performance for high-quality images without compromising load times",
      ],
      solutions: [
        "Designed a luxury-inspired UI with golden accents and elegant typography",
        "Implemented lazy loading and image optimization techniques using modern formats",
        "Integrated Razorpay for secure and seamless payment processing",
        "Used CDN for image delivery and implemented progressive image loading",
      ],
      features: [
        "Advanced product filtering and search",
        "Virtual try-on feature for select items",
        "Wishlist and cart management",
        "Order tracking and management",
        "Admin dashboard for inventory control",
      ],
      liveUrl: "https://abhushankala.vercel.app",
      githubUrl: "https://github.com/ErAniketKumar/Abhushan-kala-kendra",
    },
    {
      id: 2,
      title: "KalawatiPutra Edu",
      tagline: "Tech & Education Solutions Platform",
      shortDescription:
        "An innovative educational technology platform providing comprehensive learning solutions, course management, and interactive tools.",
      thumbnail:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop",
      category: "EdTech",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Firebase"],
      fullDescription:
        "KalawatiPutra Edu is a comprehensive educational platform I founded to bridge the gap between technology and education. The platform offers course management, interactive learning modules, real-time collaboration tools, and progress tracking. It serves both educators and students with a focus on creating an engaging and effective learning environment.",
      challenges: [
        "Building a scalable architecture to handle multiple concurrent users",
        "Creating an intuitive interface for both teachers and students",
        "Implementing real-time features for live classes and discussions",
        "Ensuring data security and privacy for educational content",
      ],
      solutions: [
        "Implemented microservices architecture for better scalability",
        "Designed role-based interfaces with tailored dashboards",
        "Used WebRTC and Socket.io for real-time communication features",
        "Implemented JWT authentication and encryption for sensitive data",
      ],
      features: [
        "Interactive video lectures with annotations",
        "Real-time quizzes and assessments",
        "Progress tracking and analytics",
        "Discussion forums and peer collaboration",
        "Certificate generation and management",
      ],
      liveUrl: "https://kalawatiputra.com",
      githubUrl: "https://github.com/ErAniketKumar/kalawatiputraEdu",
    },
    {
      id: 3,
      title: "KP-LRMS",
      tagline: "Learning Resource Management System",
      shortDescription:
        "A sophisticated LMS for organizing, distributing, and tracking educational resources with advanced analytics and reporting.",
      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
      category: "Education",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
      fullDescription:
        "KP-LRMS is a robust Learning Resource Management System designed to streamline the distribution and tracking of educational materials. It provides educators with powerful tools to organize content, track student progress, and generate insightful reports. The system supports various content types including videos, documents, interactive modules, and assessments.",
      challenges: [
        "Managing and organizing large volumes of educational content",
        "Creating a flexible content delivery system supporting multiple formats",
        "Building comprehensive analytics for tracking learning outcomes",
        "Ensuring system performance with large file uploads and downloads",
      ],
      solutions: [
        "Implemented a hierarchical content organization system with tags and categories",
        "Built a modular content player supporting multiple media types",
        "Created a robust analytics engine with customizable reporting",
        "Utilized cloud storage with efficient chunked upload/download mechanisms",
      ],
      features: [
        "Multi-format content support (video, PDF, interactive)",
        "Advanced search and filtering capabilities",
        "Automated progress tracking and reporting",
        "Customizable learning paths",
        "Integration with popular LTI tools",
      ],
      liveUrl: "https://kp-ani-lrms.vercel.app/",
      githubUrl: "https://github.com/ErAniketKumar/KP-LRMS",
    },
    {
      id: 4,
      title: "Lost and Found",
      tagline: "Campus Lost & Found Management System",
      shortDescription:
        "A comprehensive platform to report, track, and recover lost items with real-time notifications and smart matching algorithms.",
      thumbnail:
        "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&auto=format&fit=crop",
      category: "Utility",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Firebase"],
      fullDescription:
        "Lost and Found is an innovative platform designed to help people recover their lost belongings efficiently. The system features smart matching algorithms that connect lost items with found items, real-time notifications, image recognition for better item identification, and a user-friendly interface for both reporting and claiming items. Built with scalability in mind to serve campus communities and organizations.",
      challenges: [
        "Implementing accurate item matching algorithms",
        "Handling image uploads and storage efficiently",
        "Creating a verification system to prevent false claims",
        "Building real-time notification system for matches",
      ],
      solutions: [
        "Developed ML-based similarity matching using item descriptions and categories",
        "Implemented Firebase Storage with image compression and optimization",
        "Created a multi-step verification process with photo evidence",
        "Integrated Firebase Cloud Messaging for instant push notifications",
      ],
      features: [
        "Smart item matching with AI-powered suggestions",
        "Image upload and recognition",
        "Real-time notification system",
        "Location-based search and filtering",
        "User verification and rating system",
      ],
      liveUrl: "https://lost-n-found-web.vercel.app/",
      githubUrl: "https://github.com/ErAniketKumar/Lost_n_Found_web",
    },
    {
      id: 5,
      title: "Portfolio Website for Politician",
      tagline: "Professional Political Campaign Platform",
      shortDescription:
        "A modern, responsive portfolio website showcasing political achievements, policies, and connecting constituents with their representative.",
      thumbnail:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&auto=format&fit=crop",
      category: "Portfolio",
      techStack: ["React", "Tailwind", "Firebase", "Vercel"],
      fullDescription:
        "A professionally designed portfolio website for a political figure, featuring comprehensive sections for biography, achievements, policy positions, news updates, and constituent services. The platform includes an event calendar, contact forms for citizen engagement, photo galleries, and social media integration. Built with accessibility and mobile responsiveness as top priorities to reach all constituents.",
      challenges: [
        "Designing an accessible interface for diverse user demographics",
        "Managing and displaying large amounts of political content",
        "Ensuring fast load times with rich media content",
        "Creating an engaging yet professional user experience",
      ],
      solutions: [
        "Implemented WCAG 2.1 AA accessibility standards throughout",
        "Built a custom CMS-like structure with easy content updates",
        "Used lazy loading, CDN, and modern image formats for optimization",
        "Designed a clean, trust-inspiring interface with strategic CTAs",
      ],
      features: [
        "Dynamic content management system",
        "Event calendar and RSVP system",
        "Constituent contact forms",
        "News and press release section",
        "Responsive design for all devices",
      ],
      liveUrl: "https://abhisheksarraf.in",
      githubUrl: "https://github.com/ErAniketKumar/Abhishek-portfolio",
    },
  ];

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 dark:bg-gray-900 light-theme:bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white dark:text-white light-theme:text-gray-900 mb-4">
            Project Not Found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-yellow-500 text-gray-900 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900 light-theme:bg-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-96 overflow-hidden"
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/70 to-gray-900"></div>

        {/* Back Button */}
        <Link
          to="/#Projects"
          className="absolute top-8 left-8 flex items-center gap-2 px-4 py-2 bg-gray-900/80 hover:bg-gray-900 text-white rounded-lg transition-colors backdrop-blur-sm border border-gray-700"
        >
          <FaArrowLeft />
          <span>Back to Projects</span>
        </Link>

        {/* Category Badge */}
        <div className="absolute top-8 right-8 bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
          {project.category}
        </div>

        {/* Title Section */}
        <div className="absolute bottom-8 left-8 right-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-2"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-yellow-400"
          >
            {project.tagline}
          </motion.p>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-yellow-500 text-gray-900 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            <FaExternalLinkAlt />
            View Live Site
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            <FaGithub />
            View Source Code
          </a>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-white dark:text-white light-theme:text-gray-900 mb-4">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-800 dark:bg-gray-800 light-theme:bg-white border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 px-4 py-2 rounded-lg"
              >
                <span className="text-2xl">{techIcons[tech]}</span>
                <span className="text-gray-300 dark:text-gray-300 light-theme:text-gray-700 font-medium">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Full Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-white dark:text-white light-theme:text-gray-900 mb-4">
            About the Project
          </h3>
          <p className="text-gray-300 dark:text-gray-300 light-theme:text-gray-700 text-lg leading-relaxed">
            {project.fullDescription}
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-white dark:text-white light-theme:text-gray-900 mb-6">
            Key Features
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-gray-800/50 dark:bg-gray-800/50 light-theme:bg-white border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 p-4 rounded-lg"
              >
                <FaCheckCircle className="text-yellow-500 text-xl mt-1 flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-300 light-theme:text-gray-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Challenges & Solutions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white dark:text-white light-theme:text-gray-900 mb-4">
              Challenges
            </h3>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li
                  key={index}
                  className="text-gray-300 dark:text-gray-300 light-theme:text-gray-700 pl-4 border-l-2 border-red-500"
                >
                  {challenge}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white dark:text-white light-theme:text-gray-900 mb-4">
              Solutions
            </h3>
            <ul className="space-y-3">
              {project.solutions.map((solution, index) => (
                <li
                  key={index}
                  className="text-gray-300 dark:text-gray-300 light-theme:text-gray-700 pl-4 border-l-2 border-green-500"
                >
                  {solution}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white dark:text-white light-theme:text-gray-900 mb-4">
            Want to see more?
          </h3>
          <p className="text-gray-300 dark:text-gray-300 light-theme:text-gray-700 mb-6">
            Check out the live project or explore the source code to see how it
            was built!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-yellow-500 text-gray-900 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Visit Live Site
            </a>
            <Link
              to="/#Projects"
              className="px-6 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
