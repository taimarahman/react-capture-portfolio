import styled from "styled-components";

import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #fff;

  @media screen and (max-width: 1300px) {
    display: block;
    padding: 2rem 3rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  z-index: 2;
  padding-right: 5rem;

  h2 {
    font-weight: lighter;
  }

  @media screen and (max-width: 1300px) {
    padding: 0;

    button {
      margin: 2rem 0rem 5rem 0;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  z-index: 2;
  overflow: hidden;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

//Movies Details styles

export const Details = styled(motion.div)`
  color: #fff;
`;

export const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export const Awards = styled.div`
  min-height: 80vh;
  margin: 5rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledAward = styled.div`
  padding: 5rem;

  h3 {
    font-size: 2rem;
  }

  .line {
    width: 100%;
    background-color: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }

  p {
    padding: 2rem 0;
  }
`;

export const ImageDisplay = styled.div`
  min-height: 50vh;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
