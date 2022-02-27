import React from "react";
import { StyledImageList } from "./ImageList.styled";
import Card from "./Card";
import imageList from "../../listComponents/ListImages";
import { Flex } from "../styles/Flex.styled";
import { motion } from "framer-motion";

export default function ImageList() {
  return (
    <StyledImageList>
      <Flex style={{ padding: "2rem" }}>
        {imageList.map((item, index) => (
          <Card
            // as={motion.div}
            key={index}
            image={item.image}
            title={item.title}
            content={item.content}
            duration={index}
          />
        ))}
      </Flex>
    </StyledImageList>
  );
}
