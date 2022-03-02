import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledPostsContent = styled.div``;

export const TitleAndFavorite = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleHeader = styled.h1`
  color: ${({ theme }) => theme.colors.content};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
  }
`;

export const FavoriteIcon = styled(motion.div)`
  cursor: pointer;
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template: auto auto / repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template: auto auto / repeat(1, 1fr);
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
  }
`;
