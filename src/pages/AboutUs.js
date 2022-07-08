import React from "react";
import AboutSection from "../components/AboutSection";
import FAQSection from "../components/FAQSection";
import ServicesSection from "../components/ServicesSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation.js";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FAQSection />
    </motion.div>
  );
};

export default AboutUs;
