import React from "react";
import {
  StyledCard,
  StyledSection,
  StyledFlex,
} from "./ContactUsCardSection.styled";
import { FaPhone, FaCommentDots } from "react-icons/fa";
import { Container } from "../../styles/Container.styled";
import { Button } from "@mui/material";

// Newsletter
import Newsletter from "../Newsletter/Newsletter";
import Enquiry from "../Enquiry/Enquiry";

export default function ContactUsCardSection() {
  let windowWidth = window.innerWidth;

  window.addEventListener("resize", () => {
    windowWidth = window.innerWidth;
  });

  const cardVariant = {
    hidden: {
      opacity: 0,
      y: 0,
    },
    visible: {
      opacity: 1,
      y: windowWidth >= "768" ? -30 : 0,

      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <StyledSection width={windowWidth}>
      <Container>
        <StyledFlex>
          <StyledCard
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
          >
            <FaPhone style={{ fontSize: "2.3rem" }} />
            <h3>Phone our In-House Officer</h3>
            <p>
              Having any enquiries? Just pick up the phone and start talking
              with a member of our support team.
            </p>
            <h5>+(999)-99999999</h5>
          </StyledCard>
          <StyledCard
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
          >
            <FaCommentDots style={{ fontSize: "2.3rem" }} />
            <h3>Chat with our Support Team</h3>
            <p>
              Too shy to talk through phone? Don't worry... you can choose to
              use the chat function instead.
            </p>
            <Button
              variant="contained"
              style={{
                background: "#1e1536",
                color: "#ebffeb",
                padding: " 0.5rem 2rem",
              }}
            >
              Chat With Us
            </Button>
          </StyledCard>
        </StyledFlex>

        <Enquiry />
      </Container>
    </StyledSection>
  );
}
