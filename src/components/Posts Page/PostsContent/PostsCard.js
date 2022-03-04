import React, { useEffect } from "react";
import {
  StyledPostCard,
  StyledImage,
  PostDetails,
  StyledNameAndDate,
  StyledViewMoreAndFavorite,
} from "./PostsCard.styled";
import {
  FaUserCircle,
  FaMapMarker,
  FaStar,
  FaArrowRight,
  FaCalendar,
} from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleFavorite,
  addToFavoriteList,
} from "../../../redux/actions/favoriteAction";

export default function PostsCard(props) {
  const allPosts = useSelector((state) => state.favorite.posts);
  const favoriteList = useSelector((state) => state.favorite.list);
  const currentPost = allPosts.find((item) => item.id === props.postsId);
  const isFavorite = currentPost.isFavorite;
  const dispatch = useDispatch();

  // update favorite list whenever allPosts is edited
  useEffect(() => {
    dispatch(addToFavoriteList());
  }, [allPosts]);

  // Scroll animation
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

  const favoriteIconVariant = {
    hidden: {
      scale: 1,
    },
    visible: {
      scale: 1.1,
    },
  };

  return (
    <StyledPostCard
      variants={cardVariant}
      initial="hidden"
      animate={controls}
      exit={{ opacity: 0 }}
      ref={ref}
      layout
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

        <StyledViewMoreAndFavorite>
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
          {isFavorite ? (
            <AiFillHeart
              onClick={() => dispatch(toggleFavorite(props.postsId))}
              className="heart-icon"
            />
          ) : (
            <AiOutlineHeart
              onClick={() => dispatch(toggleFavorite(props.postsId))}
              className="heart-icon"
            />
          )}
        </StyledViewMoreAndFavorite>
      </PostDetails>
    </StyledPostCard>
  );
}
