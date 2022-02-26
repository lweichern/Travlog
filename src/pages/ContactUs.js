import React from "react";
import ContactUsHeader from "../components/ContactUsHeader/ContactUsHeader";
import ContactUsCardSection from "../components/ContactUsCardSection/ContactUsCardSection";
import Navbar from "../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";

export default function ContactUs() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Navbar currentPage={location.pathname} />
      <ContactUsHeader />
      <ContactUsCardSection />
    </>
  );
}
