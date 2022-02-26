import React, { useState } from "react";
import {
  StyledHeader,
  Nav,
  Title,
  MenuLinks,
  Hamburger,
  CloseIcon,
} from "./Navbar.styles";
import { motion } from "framer-motion";
import { Container } from "../styles/Container.styled";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ currentPage }) {
  const [navBgColor, setNavBgColor] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);
  console.log(isNavActive);
  const handleNavbarClickActive = () => {
    setIsNavActive(!isNavActive);
  };

  const changeNavColor = () => {
    if (window.scrollY >= 90) {
      setNavBgColor(true);
    } else {
      setNavBgColor(false);
    }
  };

  window.addEventListener("scroll", changeNavColor);

  const navVariant = {
    hidden: {
      y: "-50px",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,

      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.3,
      },
    },
  };
  return (
    <StyledHeader bg={navBgColor} currentPage={currentPage}>
      <Container>
        <Nav
          as={motion.nav}
          animate="visible"
          variants={navVariant}
          initial="hidden"
        >
          <Title>Travlog.</Title>

          <MenuLinks className={isNavActive && "navbar-active"}>
            <CloseIcon>
              <FaTimes onClick={handleNavbarClickActive} />
            </CloseIcon>

            <ul>
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <Link to={"/posts"}>
                <li>Posts</li>
              </Link>
              <Link to={"/contact-us"}>
                <li>Contact Us</li>
              </Link>
            </ul>
          </MenuLinks>
          {!isNavActive && (
            <Hamburger onClick={handleNavbarClickActive}>
              <FaBars style={{ cursor: "pointer" }} />
            </Hamburger>
          )}
        </Nav>
      </Container>
    </StyledHeader>
  );
}
