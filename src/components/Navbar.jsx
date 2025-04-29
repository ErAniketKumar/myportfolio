import React, { useState } from 'react';
import { FaUser, FaBars, FaSun, FaMoon } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { disableScroll, enableScroll } from '../utils/scrollHandler.util.js';

function Navbar({ theme, toggleTheme }) {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'About' },
    { id: 3, text: 'Portfolio' },
    { id: 4, text: 'Skills' },
    { id: 5, text: 'ContactUs' },
  ];

  const toggleNav = () => {
    setMenu((prev) => {
      if (prev) {
        enableScroll();
        return false;
      } else {
        disableScroll();
        return true;
      }
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <FaUser className="text-2xl text-teal-400" />
            <div>
              <span className="text-lg font-bold">Aniket</span>
              <span className="block text-sm text-gray-400">Web Developer</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ id, text }) => (
              <Link
                key={id}
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                className="relative text-gray-300 hover:text-teal-400 transition-colors cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {text}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              {theme === 'dark' ? (
                <FaSun className="text-2xl text-yellow-400" />
              ) : (
                <FaMoon className="text-2xl text-gray-600" />
              )}
            </button>
            <div className="md:hidden text-2xl cursor-pointer" onClick={toggleNav}>
              {menu ? <RxCross1 /> : <FaBars />}
            </div>
          </div>
        </div>
      </div>

      {menu && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-900/95 flex flex-col items-center justify-center h-screen space-y-8 text-xl font-semibold"
        >
          {navItems.map(({ id, text }) => (
            <Link
              key={id}
              to={text}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={toggleNav}
              className="text-gray-300 hover:text-teal-400 transition-colors"
            >
              {text}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;