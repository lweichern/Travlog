import React from "react";
import {
  StyledFooter,
  WebsiteName,
  WebsiteDescription,
  QuickLinksSection,
  QuickLinksTitle,
  SocialIcons,
  BrandSection,
  InfoSection,
  ContactDetails,
  Copyright,
  SocialLinks,
} from "./Footer.styled";
import { Container } from "../styles/Container.styled";
import { Flex } from "../styles/Flex.styled";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaPhone,
  FaMapMarker,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Flex>
          <BrandSection>
            <WebsiteName>Travlog.</WebsiteName>
            <WebsiteDescription>
              Travlog is a website that acts as a platform for adventurers and
              trip lovers to share their journey to the world.
            </WebsiteDescription>
          </BrandSection>
          <QuickLinksSection>
            <QuickLinksTitle>Quick Links</QuickLinksTitle>
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
          </QuickLinksSection>
          <InfoSection>
            <SocialIcons>
              <SocialLinks href="https://www.facebook.com" target="_blank">
                <FaFacebookSquare className="social-icons" />
              </SocialLinks>
              <SocialLinks href="https://www.instagram.com" target="_blank">
                <FaInstagramSquare className="social-icons" />
              </SocialLinks>
              <SocialLinks href="https://www.twitter.com" target="_blank">
                <FaTwitterSquare className="social-icons" />
              </SocialLinks>
            </SocialIcons>
            <ContactDetails>
              <p>
                <FaPhone className="contact-icons" />
                +(999)-99999999
              </p>
              <p>
                <FaMapMarker className="contact-icons" />
                8863 Willow Ave. Winchester, VA 22601
              </p>
            </ContactDetails>
          </InfoSection>
        </Flex>
        <Copyright>Copyright &copy; 2022 Travlog.</Copyright>
      </Container>
    </StyledFooter>
  );
}
