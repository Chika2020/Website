import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Intro from './Intro/Intro';
import About from './About/About';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Github from './Github/Github';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
  navbarData,
  skillsData,
  githubData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [navbar, setNavbar] = useState({});
  const [skills, setSkills] = useState({});
  const [github, setGithub] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setNavbar({ ...navbarData });
    setSkills({ ...skillsData });
    setGithub({ ...githubData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer, navbar, skills, github }}>
      <Navbar />
      <Hero />
      <Intro embedId="_t2OTwFKF0Y" />
      <About />
      <Projects />
      <Skills />
      <Github />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
