import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink, Element } from "react-scroll"; // Smooth scroll
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Experiences from "./components/Experiences";

const App = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Smooth Scroll Sections */}
      <Element name="hero">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <HeroSection />
        </motion.div>
      </Element>

      <Element name="about">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <AboutSection />
        </motion.div>
      </Element>

      <Element name="projects">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <ProjectsSection />
        </motion.div>
      </Element>

      <Element name="experiences">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <Experiences />
        </motion.div>
      </Element>

      <Element name="contact">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <ContactSection />
        </motion.div>
      </Element>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
