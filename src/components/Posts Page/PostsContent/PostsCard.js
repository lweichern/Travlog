import React, { useEffect } from "react";
import {
  StyledPostCard,
  StyledImage,
  PostDetails,
  StyledNameAndDate,
} from "./PostsCard.styled";
import PostCards from "../../../listComponents/PostCards";
import {
  FaUserCircle,
  FaMapMarker,
  FaStar,
  FaArrowRight,
  FaCalendar,
} from "react-icons/fa";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function PostsCard(props) {
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
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <StyledPostCard
      variants={cardVariant}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <Link to={`/posts/${props.postsId}`}>
        <StyledImage
          src={props.image}
          whileHover={{
            scale: 1.01,
            opacity: 1,
            boxShadow: "5px 5px 10px #b5c4b5",
            transition: {
              duration: 0.5,
            },
          }}
        />
      </Link>

      <PostDetails>
        <StyledNameAndDate>
          <h5>
            <FaUserCircle /> {props.name}
          </h5>
          <h5>
            <FaCalendar /> {props.date}
          </h5>
        </StyledNameAndDate>
        <h5>
          <FaMapMarker /> {props.location}
        </h5>

        <h5>
          <FaStar /> {props.ratings}
        </h5>

        <Link to={`/posts/${props.postsId}`}>
          <Button
            variant="contained"
            endIcon={<FaArrowRight />}
            style={{ background: "#1e1536", color: "#ebffeb" }}
            component={motion.div}
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.3,
              },
            }}
          >
            View More{" "}
          </Button>
        </Link>
      </PostDetails>
    </StyledPostCard>
  );
}
