import styled from "styled-components";

export const StyledHeader = styled.div`
  background: ${({ theme }) => theme.colors.content};
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    height: 100vh;
  }
`;

export const StyledFlex = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-top: 7rem;
    flex-direction: column-reverse;
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
`;

export const SVGImages = styled.div`
  width: 100%;
  position: relative;
`;

export const CameraSVG = styled.img`
  position: absolute;
  width: 150px;
`;

export const TextSection = styled.div``;
