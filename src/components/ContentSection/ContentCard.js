import React, { useEffect } from "react";
import {
  StyledContentCard,
  TextContent,
  OuterContentCard,
  StyledFlex,
} from "./ContentCard.styled";
import Undraw from "react-undraw";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ContentCard({ svgPath, title, content, index }) {
  Undraw.defaultProps.primaryColor = "#1e1536";

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariant = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
    },
    visible: {
      x: 0,
      opacity: 1,

      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <OuterContentCard>
      <StyledContentCard
        ref={ref}
        variants={cardVariant}
        initial="hidden"
        animate={controls}
      >
        <StyledFlex index={index}>
          <TextContent>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </TextContent>
          <Undraw className="mobile-illus" name={svgPath} />
        </StyledFlex>
      </StyledContentCard>
    </OuterContentCard>
  );
}
