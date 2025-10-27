import React, { useState } from "react";
import { FaUser, FaBars, FaSun, FaMoon } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { disableScroll, enableScroll } from "../utils/scrollHandler.util.js";

function Navbar({ theme, toggleTheme }) {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Skills" },
    { id: 5, text: "ContactUs" },
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
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-40 bg-gray-900/90 backdrop-blur-lg shadow-lg border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-500/20 rounded-xl">
                <FaUser className="text-xl text-yellow-400" />
              </div>
              <div>
                <span className="text-lg font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                  Aniket Kumar
                </span>
                <span className="block text-xs text-gray-400">
                  Software Engineer
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {isAboutPage ? (
                <RouterLink
                  to="/"
                  className="relative text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer font-medium"
                >
                  ← Back to Main
                </RouterLink>
              ) : (
                <>
                  {navItems.map(({ id, text }) => (
                    <Link
                      key={id}
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="relative text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full font-medium"
                    >
                      {text}
                    </Link>
                  ))}
                  <RouterLink
                    to="/about"
                    className="relative text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer font-medium px-4 py-2 border border-yellow-500/50 rounded-lg hover:bg-yellow-500/10"
                  >
                    Full Story
                  </RouterLink>
                </>
              )}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700"
              >
                {theme === "dark" ? (
                  <FaSun className="text-xl text-yellow-400" />
                ) : (
                  <FaMoon className="text-xl text-gray-600" />
                )}
              </button>
              <div
                className="md:hidden text-2xl cursor-pointer text-yellow-400"
                onClick={toggleNav}
              >
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
            className="md:hidden bg-gray-900/95 backdrop-blur-xl flex flex-col items-center justify-center min-h-screen space-y-8 text-xl font-semibold fixed inset-0 overflow-y-auto z-50"
          >
            {isAboutPage ? (
              <RouterLink
                to="/"
                onClick={toggleNav}
                className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
              >
                ← Back to Main
              </RouterLink>
            ) : (
              <>
                {navItems.map(({ id, text }) => (
                  <Link
                    key={id}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={toggleNav}
                    className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
                  >
                    {text}
                  </Link>
                ))}
                <RouterLink
                  to="/about"
                  onClick={toggleNav}
                  className="text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer border border-yellow-500/50 px-6 py-2 rounded-lg"
                >
                  Full Story
                </RouterLink>
              </>
            )}
          </motion.div>
        )}
      </motion.nav>

      {/* spacer so page content doesn't sit under the fixed navbar */}
      <div className="h-16" aria-hidden="true" />
    </>
  );
}

export default Navbar;
