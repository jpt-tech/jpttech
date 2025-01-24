import React from "react";
import "./AboutSection.css";
import { motion } from "framer-motion";

const AboutMe = () => {
  const bounceAnimation = {
    whileHover: { scale: 1.1, transition: { type: "spring", stiffness: 300 } },
    whileTap: { scale: 0.9 },
  };

  return (
    <section className="about-me-section">
      {/* About Me Section */}
      <div className="about-me-container">
        {/* <div className="about-me-image">
          <img
            src="https://res.cloudinary.com/demo/image/upload/v1611620730/sample.jpg" // Replace with your Cloudinary image
            alt="Typing on a keyboard"
          />
        </div> */}
        <div className="about-me-content">
          <motion.h2>
            About <span>Us</span>
          </motion.h2>
          <motion.p className="para">
            At JPT Technologies, we are passionate about building solutions that make a difference. With a team of skilled developers and designers, we offer expertise across all layers of technology, ensuring your project is handled with precision and care. We believe in fostering strong relationships with our clients, collaborating closely to understand their unique needs. From custom website development to robust software applications, we are committed to delivering results that exceed expectations. Let’s build something amazing together.
            <br />
            <br />
            With a focus on quality, efficiency, and innovation, we’ve successfully delivered projects across various industries. We take pride in our ability to adapt to each client's vision, providing personalized solutions that are as unique as your business.
          </motion.p>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="technologies-section">
        <h2>Technologies</h2>
        <div className="technology-icons">
          <motion.div className="tech-icon" {...bounceAnimation}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
            />
          </motion.div>
          <motion.div className="tech-icon" {...bounceAnimation}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
            />
          </motion.div>
          <motion.div className="tech-icon" {...bounceAnimation}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
            />
          </motion.div>
          <motion.div className="tech-icon" {...bounceAnimation}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              alt="MongoDB"
            />
          </motion.div>
          <motion.div className="tech-icon" {...bounceAnimation}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              alt="PostgreSQL"
            />
          </motion.div>
          <motion.div className="tech-icon" {...bounceAnimation}>
            <img
              src="https://res.cloudinary.com/daxeovezx/image/upload/v1737673322/tailwind-css-svgrepo-com_1_p7thsm.svg"
              alt="Tailwind CSS"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
