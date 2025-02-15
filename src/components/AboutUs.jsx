import React from "react";
import aboutImage from "../assets/aboutus.jpg";
import { ABOUT_CONTENT, ABOUT_CONTENTS } from "../constants";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Us</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex ites-center justify-center">
            <img
              className="rounded-3xl"
              src={aboutImage}
              alt="About JPT Technologies"
            />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              {ABOUT_CONTENT}
              <br />
              {ABOUT_CONTENTS}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
