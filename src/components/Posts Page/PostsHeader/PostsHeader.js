import React from "react";
import {
  StyledHeader,
  TextSection,
  StyledFlex,
  SVGImages,
  CameraSVG,
} from "./PostsHeader.styled";
import Undraw from "react-undraw/dist/undraw/Undraw";
import { Container } from "../../styles/Container.styled";
import camera1 from "../../../svg/camera-1.svg";
import camera2 from "../../../svg/camera-2.svg";

export default function PostsHeader() {
  return (
    <StyledHeader>
      <Container>
        <StyledFlex>
          <TextSection>
            <h1>Check Out the Blog Posts of others.</h1>
          </TextSection>
          <SVGImages>
            <Undraw name="posts" primaryColor="#ebffeb" />
            <CameraSVG
              src={camera1}
              style={{ top: 0, right: "10%" }}
              className="camera-1"
            />
            <CameraSVG
              src={camera2}
              style={{ bottom: 0, left: "10%" }}
              className="camera-2"
            />
          </SVGImages>
        </StyledFlex>
      </Container>
    </StyledHeader>
  );
}
