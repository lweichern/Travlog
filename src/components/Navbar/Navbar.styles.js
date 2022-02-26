import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHeader = styled.header`
  background-color: ${({ bg }) => (bg ? "rgba(0, 0, 0,0.95)" : "transparent")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  transition: 0.4s;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

export const Title = styled.h1`
  cursor: pointer;
`;

export const Hamburger = styled.div`
  display: none;
  font-size: 2rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
  }
`;

export const CloseIcon = styled.div`
  display: none;
  font-size: 2rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    fontsize: 2rem;
    cursor: pointer;
  }
`;

export const MenuLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > ul {
    display: flex;
  }

  & li {
    list-style: none;
    margin-left: 1rem;
    transition: 0.2s;
    cursor: pointer;
    letter-spacing: 0.15rem;
    border-bottom: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid #fff;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    padding: 0;
    transition: 0.4s;

    background: rgba(0, 0, 0, 0.95);
    & > ul {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 30%;
    }

    & li {
      font-size: 1.5rem;
    }
  }
`;
