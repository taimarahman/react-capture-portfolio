import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation.js";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <Contact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send us message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send an email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Social media</h2>
          </Social>
        </Hide>
      </div>
    </Contact>
  );
};

const Contact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  background-color: #fff;

  @media screen and (max-width: 1300px) {
    padding: 2rem 3rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: #000;
  @media screen and (max-width: 1300px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    margin: 2rem;
  }
`;
export default ContactUs;
