import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledContainer = styled.div`
  background: ${({ theme }) => theme.colors.content};
  width: 100vw;
  padding-top: 6rem;
  padding-bottom: 3rem;
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const PostTitle = styled.h1`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    font-size: 2rem;
  }
`;

export const StyledImage = styled.img`
  width: 50%;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 90%;
  }
`;
export const StyledParagraphs = styled(motion.div)`
  background: #18112b;
  & p {
    line-height: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 90%;
    max-width: 600px;
  }
`;

export const ContentHeader = styled(motion.div)`
  background: #110b1f;
  width: 100%;
  cursor: pointer;
  padding: 1rem;
  border-radius: 0.2rem;
  margin-top: 1.3rem;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 90%;
    max-width: 600px;
  }
`;

export const ContentBody = styled(motion.section)`
  width: 100%;
  & h1 {
    padding: 5rem;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 90%;
    max-width: 600px;
  }
`;

export const InnerBody = styled.div`
  padding: 1rem;
  background: #18112b;
`;

export const InnerBodyGallery = styled.div`
  padding: 2rem;
  background: #18112b;
  // display: flex;
  // align-items: center;
  // justify-content: center;

  & img {
    width: 100%;
    height: 30rem;
    object-fit: contain;
  }

  & h3 {
    text-align: center;
  }
`;

export const StyledNameAndDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h5 {
    margin: 0.5rem 0;
  }
`;
