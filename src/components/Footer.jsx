import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  return (
    <motion.footer
      className="sectionss"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="containerss">
        <p className="fufu">&copy; 2025 JPT Technologies. All Rights Reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
