import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import AboutPage from "./components/AboutPage";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Skill from "./components/Skill";
import Dsa from "./components/Dsa";
import Contact from "./components/Contact";

function App() {
  const [theme, setTheme] = useState("dark");
  const location = useLocation();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Check if we're on the AboutPage route
  const isAboutPage = location.pathname === "/about";

  return (
    <div className={theme === "dark" ? "dark" : "light-theme"}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Routes>
          {/* Separate About Page Route */}
          <Route path="/about" element={<AboutPage />} />

          {/* Project Detail Route */}
          <Route path="/project/:id" element={<ProjectDetail />} />

          {/* Main Single Page Application */}
          <Route
            path="/"
            element={
              <>
                <section id="Home">
                  <Home />
                </section>
                <section id="About">
                  <About />
                </section>
                <section id="Projects">
                  <Projects />
                </section>
                <section id="Skills">
                  <Skill />
                </section>
                <section id="DSA">
                  <Dsa />
                </section>
                <section id="ContactUs">
                  <Contact />
                </section>
              </>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
