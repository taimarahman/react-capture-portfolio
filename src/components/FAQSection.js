import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const FAQSection = () => {
  const [element, controls] = useScroll();

  return (
    <FAQ
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        Any question <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do i start">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, adipisci!
            </p>
          </div>
        </Toggle>

        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, adipisci!
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, adipisci!
            </p>
          </div>
        </Toggle>
        <Toggle title="What products o you offer">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, adipisci!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FAQ>
  );
};

const FAQ = styled(About)`
  display: block;

  span {
    display: block;
  }

  h2 {
    font-weight: lighter;
    padding-bottom: 2rem;
  }

  .faq-line {
    background-color: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }

  .question {
    padding: 3rem 0;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0;

    p {
      padding: 1rem 0;
    }
  }
`;
export default FAQSection;
