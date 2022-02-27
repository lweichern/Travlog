import React from "react";
import HeroImage from "../components/Home Page/HeroImage/HeroImage";
import HeroText from "../components/Home Page/HeroText/HeroText";
import ImageList from "../components/Home Page/ImageList/ImageList";
import ContentSection from "../components/Home Page/ContentSection/ContentSection";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Navbar currentPage={location.pathname} />
      <div style={{ position: "relative" }}>
        <HeroImage />
        <ImageList />
        <ContentSection />
      </div>
    </>
  );
}
