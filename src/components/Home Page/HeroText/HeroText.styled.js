import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHeroText = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;

  & > h2 {
    font-size: 3rem;
    text-stroke: 1px #000;
    -webkit-text-stroke: 1px #000;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 2rem;
    }
  }
`;
