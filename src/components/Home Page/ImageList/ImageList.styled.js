import styled from "styled-components";

export const StyledImageList = styled.div`
  height: 100vh;
  background: #1e1536;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    height: auto;
    width: 100vw;
  }
`;
