import styled from "styled-components";

export const StyledNewsletter = styled.div``;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.content};
  text-align: center;
`;

export const NewsletterCard = styled.div`
  color: ${({ theme }) => theme.colors.content};
  box-shadow: 2px 2px 5px #b5c4b5;
  border-radius: 1rem;
  text-align: center;
`;
