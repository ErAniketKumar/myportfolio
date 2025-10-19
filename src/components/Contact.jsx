import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/apjmlnxa", userInfo);
      toast.success("Message sent successfully! I'll get back to you soon.");
      reset();
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const socialLinks = [
    {
      id: 1,
      url: "https://github.com/ErAniketKumar",
      icon: <FaGithub />,
      name: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      id: 2,
      url: "https://linkedin.com/in/eraniket",
      icon: <FaLinkedin />,
      name: "LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      id: 3,
      url: "https://www.instagram.com/eraniketshroff/",
      icon: <FaInstagram />,
      name: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      id: 4,
      url: "https://x.com/eraniket95/",
      icon: <FaSquareXTwitter />,
      name: "Twitter",
      color: "hover:text-blue-400",
    },
  ];

  const contactInfo = [
    {
      id: 1,
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: "ceo@kalawatiputra.com",
      link: "mailto:ceo@kalawatiputra.com",
    },
    {
      id: 2,
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      value: "+91-9123120581",
      link: "tel:+919123120581",
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      value: "Bihar, India",
      link: null,
    },
  ];

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
          Let's Connect
        </span>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from
          you!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-8"
        >
          {/* Contact Cards */}
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02, x: 5 }}
                className="bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-800 dark:via-gray-900 dark:to-black light-theme:bg-white p-6 rounded-2xl border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 hover:border-yellow-500/50 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-500/20 rounded-xl text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 dark:text-gray-400 light-theme:text-gray-600 mb-1">
                      {item.title}
                    </h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-lg font-semibold text-white dark:text-white light-theme:text-gray-900 hover:text-yellow-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-white dark:text-white light-theme:text-gray-900">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-800 dark:via-gray-900 dark:to-black light-theme:bg-white p-8 rounded-2xl border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 shadow-lg"
          >
            <h3 className="text-xl font-bold text-white dark:text-white light-theme:text-gray-900 mb-6">
              Follow Me
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <NavLink
                  key={social.id}
                  to={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-gray-800/50 dark:bg-gray-800/50 light-theme:bg-gray-50 border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 rounded-xl text-3xl text-gray-400 dark:text-gray-400 light-theme:text-gray-700 ${social.color} transition-all duration-300 hover:scale-110 hover:border-yellow-500/50`}
                  title={social.name}
                >
                  {social.icon}
                </NavLink>
              ))}
            </div>
          </motion.div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-yellow-500/10 via-gray-800 to-gray-900 dark:from-yellow-500/10 dark:via-gray-800 dark:to-gray-900 light-theme:bg-white p-8 rounded-2xl border border-yellow-500/30 light-theme:border-gray-200 shadow-2xl shadow-yellow-500/10"
          >
            <h3 className="text-xl font-bold text-white dark:text-white light-theme:text-gray-900 mb-3">
              Ready to Start?
            </h3>
            <p className="text-gray-400 dark:text-gray-400 light-theme:text-gray-600 mb-4">
              Let's discuss your project and turn your ideas into reality.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-yellow-500/20 text-yellow-400 dark:text-yellow-400 light-theme:text-yellow-600 px-3 py-1 rounded-full text-sm">
                Web Development
              </span>
              <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                Consultation
              </span>
              <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                EdTech Solutions
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-800 dark:via-gray-900 dark:to-black light-theme:bg-white p-8 md:p-10 rounded-3xl border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 shadow-2xl">
            <h3 className="text-2xl font-bold text-white dark:text-white light-theme:text-gray-900 mb-2">
              Send Me a Message
            </h3>
            <p className="text-gray-400 dark:text-gray-400 light-theme:text-gray-600 mb-8">
              Fill out the form below and I'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 dark:text-gray-300 light-theme:text-gray-700 mb-2">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  className="w-full p-4 bg-gray-800/50 dark:bg-gray-800/50 light-theme:bg-gray-50 rounded-xl text-white dark:text-white light-theme:text-gray-900 border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all outline-none placeholder-gray-500 dark:placeholder-gray-500 light-theme:placeholder-gray-400"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <span className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    ⚠ {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 dark:text-gray-300 light-theme:text-gray-700 mb-2">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  className="w-full p-4 bg-gray-800/50 dark:bg-gray-800/50 light-theme:bg-gray-50 rounded-xl text-white dark:text-white light-theme:text-gray-900 border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all outline-none placeholder-gray-500 dark:placeholder-gray-500 light-theme:placeholder-gray-400"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <span className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    ⚠ {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 dark:text-gray-300 light-theme:text-gray-700 mb-2">
                  Your Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  className="w-full p-4 bg-gray-800/50 dark:bg-gray-800/50 light-theme:bg-gray-50 rounded-xl text-white dark:text-white light-theme:text-gray-900 border border-gray-700 dark:border-gray-700 light-theme:border-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all outline-none placeholder-gray-500 dark:placeholder-gray-500 light-theme:placeholder-gray-400 resize-none"
                  rows="6"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
                {errors.message && (
                  <span className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    ⚠ {errors.message.message}
                  </span>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-yellow-300 transition-all shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40"
              >
                Send Message 🚀
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 text-center space-y-4"
      >
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto"></div>
        <p className="text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="text-yellow-400 font-semibold">Aniket Kumar</span>.
          All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">
          Crafted with 💛 using React, Tailwind CSS
        </p>
      </motion.div>
    </div>
  );
}

export default Contact;
