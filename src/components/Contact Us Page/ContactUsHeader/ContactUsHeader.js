import React from "react";
import {
  StyledHeader,
  Title,
  Description,
  TextSection,
  StyledFlex,
  SVGImages,
  MessagesSVG,
} from "./ContactUsHeader.styled";
import { Button } from "@mui/material";
import Undraw from "react-undraw";
import { Container } from "../../styles/Container.styled";
import message1 from "../../../svg/message-1.svg";
import message2 from "../../../svg/message-2.svg";
import message3 from "../../../svg/message-3.svg";
import { HashLink } from "react-router-hash-link";

export default function ContactUsHeader() {
  return (
    <StyledHeader>
      <Container>
        <StyledFlex>
          <TextSection>
            <Title>Get In Touch With Us</Title>
            <Description>
              Let us know how we can help by shooting us an email.
            </Description>
            <HashLink to={"#enquirySection"}>
              <Button
                variant="outlined"
                style={{
                  color: "#ebffeb",
                  border: "1px solid #ebffeb",
                  padding: " 0.5rem 2rem",
                }}
              >
                Submit Enquiry
              </Button>
            </HashLink>
          </TextSection>
          <SVGImages>
            <Undraw name="contact" height="300" />

            <MessagesSVG
              src={message1}
              style={{ top: 0, right: "20%", width: "13%" }}
              className="message message-1"
            />
            <MessagesSVG
              src={message2}
              style={{ top: 0, left: "8%", width: "13%" }}
              className="message message-2"
            />
            <MessagesSVG
              src={message3}
              style={{ bottom: "0%", right: "30%", width: "17%" }}
              className="message message-3"
            />
          </SVGImages>
        </StyledFlex>
      </Container>
    </StyledHeader>
  );
}
