import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skill from './components/Skill';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={theme === 'dark' ? 'dark' : 'light-theme'}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <section id="Home"><Home /></section>
        <section id="About"><About /></section>
        <section id="Portfolio"><Portfolio /></section>
        <section id="Skills"><Skill /></section>
        <section id="ContactUs"><Contact /></section>
      </main>
    </div>
  );
}

export default App;