import React from "react";
import Button from "@mui/material/Button";
import { StyledHeroText } from "./HeroText.styled";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HeroText() {
  const fadeInVariant = {
    hidden: {
      opacity: 0,
      y: "-40%",
      x: "-50%",
    },
    visible: {
      opacity: 1,
      y: "-50%",
      x: "-50%",
    },
    transition: {
      duration: 1,
    },
  };

  return (
    <StyledHeroText variants={fadeInVariant} initial="hidden" animate="visible">
      <h2>Discover. Explore. Indulge</h2>
      <p>Explore the world through the eyes of others</p>

      <Link to={"/posts"}>
        <Button
          style={{
            backgroundColor: "transparent",
            border: "1px solid #fff",
            transition: "0.3s",
          }}
          variant="contained"
          endIcon={<FaArrowRight />}
          className="hero-btn"
        >
          View Posts
        </Button>
      </Link>
    </StyledHeroText>
  );
}
