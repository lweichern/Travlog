import styled from "styled-components";

export const StyledCard = styled.div`
  width: 30%;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.body};
  overflow: hidden;
  color: #1e1536;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 90%;
    max-width: 600px;
    margin: 1rem 0;
    flex-direction: column;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 50%;
  //   object-fit: cover;
`;

export const CardTitle = styled.h2`
  margin: 0 1rem;
`;

export const CardContent = styled.p`
  margin: 1rem 1rem;
`;
