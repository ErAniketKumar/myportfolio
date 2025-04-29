import React from 'react';
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaCode,
} from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

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
      await axios.post('https://getform.io/f/apjmlnxa', userInfo);
      toast.success('Message sent successfully!');
      reset();
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  const mediaIcon = [
    { id: 1, url: 'https://github.com/ErAniketKumar', icon: <FaGithub /> },
    { id: 2, url: 'https://linkedin.com/in/eraniket', icon: <FaLinkedin /> },
    { id: 3, url: 'https://instagram.com/eraniket95', icon: <FaInstagram /> },
    { id: 4, url: '', icon: <FaSquareXTwitter /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <h1 className="text-4xl font-bold text-teal-400">Get in Touch</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-gray-200">Connect with Me</h2>
            <p className="flex items-center gap-3 text-lg text-gray-300">
              <MdEmail className="text-teal-400" /> eraniket95@hotmail.com
            </p>
            <div className="flex gap-6 text-3xl">
              {mediaIcon.map(({ id, url, icon }) => (
                <NavLink
                  key={id}
                  to={url}
                  target="_blank"
                  className="hover:text-teal-400 transition-transform hover:scale-110"
                >
                  {icon}
                </NavLink>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800/30 p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-gray-200 mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300">Full Name</label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  className="w-full mt-2 p-3 bg-gray-700/50 rounded-md text-white border border-gray-600 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
                  placeholder="Aniket"
                />
                {errors.name && (
                  <span className="text-red-400 text-sm mt-1">{errors.name.message}</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Invalid email address',
                    },
                  })}
                  type="email"
                  className="w-full mt-2 p-3 bg-gray-700/50 rounded-md text-white border border-gray-600 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
                  placeholder="contact@kalawatiputra.com"
                />
                {errors.email && (
                  <span className="text-red-400 text-sm mt-1">{errors.email.message}</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  className="w-full mt-2 p-3 bg-gray-700/50 rounded-md text-white border border-gray-600 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
                  rows="4"
                  placeholder="Leave a comment..."
                ></textarea>
                {errors.message && (
                  <span className="text-red-400 text-sm mt-1">{errors.message.message}</span>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-teal-400 text-gray-900 rounded-md font-semibold hover:bg-teal-300 transition-colors focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-gray-400"
        >
          <p>© 2024 Aniket. All rights reserved.</p>
          <p className="flex justify-center items-center gap-2 mt-2">
            Crafted with <FaCode className="text-teal-400" />
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;