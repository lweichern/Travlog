import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100vw;
  background: ${({ theme }) => theme.colors.content};
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    height: 100vh;
    padding: 3rem;
  }
`;

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column-reverse;
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
`;

export const TextSection = styled.div`
  color: #ebffeb;
`;

export const SVGImages = styled.div`
  width: 100%;
  position: relative;
`;

export const MessagesSVG = styled.img`
  position: absolute;
`;

export const Title = styled.h1`
  margin: 0;
`;
export const Description = styled.p``;
