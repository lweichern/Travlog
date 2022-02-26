import styled from "styled-components";
import { motion } from "framer-motion";
import Undraw from "react-undraw";

export const OuterContentCard = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    height: auto;
    margin: 2rem 0;
  }
`;

export const StyledContentCard = styled(motion.div)`
  width: 100%;
  max-width: 1300px;
  border-radius: 2rem;
  background: ${({ theme }) => theme.colors.body};
  box-shadow: 0px 5px 20px #1e1536;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 90%;
    max-width: 600px;
    height: auto;
  }
`;

export const TextContent = styled(motion.div)`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #1e1536;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 90%;

    & h1 {
      text-align: center;
      margin: 0;
    }
  }
`;

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ index }) => (index % 2 === 0 ? "row" : "row-reverse")};

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column-reverse;
  }
`;
