import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledEnquiry = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(motion.h1)`
  color: ${({ theme }) => theme.colors.content};
  text-align: center;
`;

export const EnquiryCard = styled(motion.div)`
  color: ${({ theme }) => theme.colors.content};
  box-shadow: 2px 2px 5px #b5c4b5;
  border-radius: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  width: 100%;
  max-width: 600px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 90%;
    max-width: 600px;
  }
`;
