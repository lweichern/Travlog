import styled from "styled-components";

export const StyledPostsContent = styled.div``;

export const TitleHeader = styled.h1`
  color: ${({ theme }) => theme.colors.content};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
  }
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
