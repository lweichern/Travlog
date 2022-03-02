import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledPostCard = styled(motion.div)`
  color: ${({ theme }) => theme.colors.content};
  //   font-family: "Roboto Condensed", sans-serif;
  flex: 50%;
  margin-bottom: 2rem;

  & h5 {
    margin: 0.5rem 0;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    height: fit-content;
  }
`;

export const StyledImage = styled(motion.img)`
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-radius: 0.2rem;
  cursor: pointer;
`;

export const PostDetails = styled.div``;

export const StyledNameAndDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h5 {
    margin: 0.5rem 0;
  }
`;

export const StyledViewMoreAndFavorite = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
