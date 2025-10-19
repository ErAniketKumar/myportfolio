import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
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

const Projects = () => {
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
      liveUrl: "https://abhushankala.com",
      githubUrl: "https://github.com/ErAniketKumar/abhushan-kala",
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
      liveUrl: "https://kalawatiputra.edu",
      githubUrl: "https://github.com/ErAniketKumar/kp-edu",
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
      liveUrl: "https://lrms.kalawatiputra.edu",
      githubUrl: "https://github.com/ErAniketKumar/kp-lrms",
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
      liveUrl: "https://lostandfound-aniket.vercel.app",
      githubUrl: "https://github.com/ErAniketKumar/lost-and-found",
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
      liveUrl: "https://politician-portfolio.vercel.app",
      githubUrl: "https://github.com/ErAniketKumar/politician-portfolio",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
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
          Portfolio
        </span>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Explore my latest work as a Developer & Visionary CEO, crafting
          innovative solutions that make a difference
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-800 dark:via-gray-900 dark:to-black light-theme:bg-white rounded-2xl overflow-hidden border border-gray-800 dark:border-gray-800 light-theme:border-gray-200 hover:border-yellow-500/50 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20"
            onClick={() => navigate(`/project/${project.id}`)}
          >
            {/* Thumbnail */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80"></div>
              <div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                {project.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-white dark:text-white light-theme:text-gray-900 group-hover:text-yellow-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-yellow-500 dark:text-yellow-500 light-theme:text-yellow-600 font-medium">
                {project.tagline}
              </p>
              <p className="text-gray-400 dark:text-gray-400 light-theme:text-gray-600 line-clamp-3">
                {project.shortDescription}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.slice(0, 4).map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 bg-gray-800/50 dark:bg-gray-800/50 light-theme:bg-gray-50 border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 px-3 py-1 rounded-full text-xs"
                  >
                    <span className="text-lg">{techIcons[tech]}</span>
                    <span className="text-gray-300 dark:text-gray-300 light-theme:text-gray-700">
                      {tech}
                    </span>
                  </div>
                ))}
                {project.techStack.length > 4 && (
                  <div className="flex items-center bg-gray-800/50 dark:bg-gray-800/50 light-theme:bg-gray-50 border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 px-3 py-1 rounded-full text-xs text-gray-400 dark:text-gray-400 light-theme:text-gray-600">
                    +{project.techStack.length - 4}
                  </div>
                )}
              </div>

              {/* View Details Button */}
              <div className="pt-4 flex items-center justify-between">
                <span className="text-yellow-500 dark:text-yellow-500 light-theme:text-yellow-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  View Details →
                </span>
                <div className="flex gap-2">
                  <FaExternalLinkAlt className="text-gray-500 dark:text-gray-500 light-theme:text-gray-600 group-hover:text-yellow-500 transition-colors" />
                  <FaGithub className="text-gray-500 dark:text-gray-500 light-theme:text-gray-600 group-hover:text-yellow-500 transition-colors" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
