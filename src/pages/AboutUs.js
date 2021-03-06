import React from "react";
import AboutSection from "../components/AboutSection";
import FAQSection from "../components/FAQSection";
import ServicesSection from "../components/ServicesSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation.js";
import ScrollTop from "../components/ScrollTop";

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
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
