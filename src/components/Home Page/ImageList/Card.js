import React from "react";
import { StyledCard, CardImage, CardTitle, CardContent } from "./Card.styled";
import { motion } from "framer-motion";

export default function Card({ image, title, content, duration }) {
  console.log(duration);

  const cardVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: duration / 4,
      },
    },
  };

  return (
    <StyledCard
      as={motion.div}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      whileHover={{
        scale: 1.05,
      }}
    >
      <CardImage src={image} />
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </StyledCard>
  );
}
