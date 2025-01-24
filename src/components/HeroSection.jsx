import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          JPT Technologies
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-subtitle"
        >
          Full Stack <span>Developers</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-description"
        >
          Welcome to JPT Technologies, where innovation meets excellence. As a leading full-stack development company, we specialize in bringing your ideas to life with cutting-edge technologies. From intuitive websites to powerful backend solutions, we craft seamless digital experiences that engage and inspire. Partner with us to create a tailored solution that drives success and elevates your business in the digital world.
          <br />
          <br />
          Whether you're launching a new product or improving an existing platform, JPT Technologies is here to help you scale and grow. Our team’s dedication to staying ahead of industry trends ensures that your business is always at the forefront of technology."
        </motion.p>
        <a href="#contact">
        <motion.button
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-button"
        >
          Contact Us <span>→</span>
        </motion.button>
        </a>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="hero-image"
      >
        {/* <img
          src="https://res.cloudinary.com/daxeovezx/image/upload/v1737639719/1_zwhdx1.jpg" // Replace with your Cloudinary image link
          alt="JPT"
        /> */}
      </motion.div>
    </div>
  );
};

export default HeroSection;
