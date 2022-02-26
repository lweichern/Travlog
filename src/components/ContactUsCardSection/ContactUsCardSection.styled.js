import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSection = styled.div`
  background: ${({ theme }) => theme.colors.body};
  padding-bottom: 2rem;
  padding-top: ${({ width }) => (width <= 768 ? "2rem" : "0")};
`;

export const StyledFlex = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const StyledCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.content};
  box-shadow: 2px 2px 5px #b5c4b5;
  border-radius: 1rem;
  text-align: center;
  padding: 2rem;
`;
