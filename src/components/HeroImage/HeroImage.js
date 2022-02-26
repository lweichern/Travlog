import React, { useState, useRef, useEffect } from "react";
import { Parallax } from "react-parallax";
import HeroImages from "../../listComponents/HeroImages";
import { StyledSection, StyledHeroImage } from "./HeroImage.styled";
import HeroText from "../HeroText/HeroText";
import Slider from "react-slick";

export default function HeroImage() {
  const [imagePathIndex, setImagePathIndex] = useState(0);
  const length = HeroImages.length;
  const imageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setImagePathIndex(imagePathIndex === length - 1 ? 0 : imagePathIndex + 1);
    }, 4000);
  }, [imagePathIndex]);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <StyledSection>
      {/* <Parallax
        bgImage={HeroImages[imagePathIndex]}
        style={{
          height: "100vh",
          width: "100vw",
          index: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        strength={200}
      ></Parallax> */}
      <Slider {...carouselSettings}>
        <img src={HeroImages[0]} />
        <img src={HeroImages[1]} />
        <img src={HeroImages[2]} />
      </Slider>
      {/* <StyledHeroImage src={HeroImages[imagePathIndex]} /> */}
      <HeroText />
    </StyledSection>
  );
}
