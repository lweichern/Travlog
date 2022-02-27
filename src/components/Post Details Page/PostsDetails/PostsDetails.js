import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postsArray from "../../../listComponents/PostCards";
import {
  StyledContent,
  PostTitle,
  StyledImage,
  StyledParagraphs,
  StyledContainer,
  ContentHeader,
  ContentBody,
  InnerBody,
  InnerBodyGallery,
  StyledNameAndDate,
} from "./PostsDetails.styled";
import Navbar from "../../Navbar/Navbar";
import { Container } from "../../styles/Container.styled";
import { motion, AnimatePresence } from "framer-motion";
import ImageGallery from "../ImageGallery/ImageGallery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Icons
import { FaUserCircle, FaMapMarker, FaStar, FaCalendar } from "react-icons/fa";
import imageGallery from "../../../listComponents/Gallery";

export default function PostsDetails() {
  const [postObject, setPostObject] = useState();
  const [isPostDetailsOpen, setIsPostDetailsOpen] = useState(false);
  const [isPostParagraphOpen, setIsPostParagraphOpen] = useState(false);
  const [isPostPictureOpen, setisPostPictureOpen] = useState(false);

  const { postsId } = useParams();

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    postsArray.map((post) => {
      if (post.id === parseInt(postsId)) {
        setPostObject({ ...post });
      }
    });
  }, [postsId]);

  return (
    postObject !== undefined && (
      <>
        <Navbar />
        <StyledContainer>
          <Container>
            <StyledContent>
              <StyledImage src={postObject.image} />
              <PostTitle>{postObject.title}</PostTitle>

              <ContentHeader
                initial={false}
                animate={{
                  backgroundColor: isPostDetailsOpen ? "#FF0088" : "#110b1f",
                }}
                onClick={() => setIsPostDetailsOpen(!isPostDetailsOpen)}
                whileTap={{ scale: 1.01 }}
                style={{ width: "100%", maxWidth: "550px" }}
              >
                Post Details
              </ContentHeader>

              <AnimatePresence initial={false}>
                {isPostDetailsOpen && (
                  <ContentBody
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                    style={{ width: "100%", maxWidth: "550px" }}
                  >
                    <InnerBody>
                      <StyledNameAndDate>
                        <h3>
                          <FaUserCircle /> {postObject.name}
                        </h3>
                        <h3>
                          <FaCalendar /> {postObject.date}
                        </h3>
                      </StyledNameAndDate>
                      <h3>
                        <FaMapMarker /> {postObject.location}
                      </h3>

                      <h3>
                        <FaStar /> {postObject.ratings}
                      </h3>
                    </InnerBody>
                  </ContentBody>
                )}
              </AnimatePresence>

              <ContentHeader
                initial={false}
                animate={{
                  backgroundColor: isPostParagraphOpen ? "#FF0088" : "#110b1f",
                }}
                onClick={() => setIsPostParagraphOpen(!isPostParagraphOpen)}
                whileTap={{ scale: 1.01 }}
              >
                Post Body
              </ContentHeader>

              <AnimatePresence initial={false}>
                {isPostParagraphOpen && (
                  <StyledParagraphs
                    key="body"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <InnerBody
                      dangerouslySetInnerHTML={{ __html: postObject.paragraph }}
                    ></InnerBody>
                  </StyledParagraphs>
                )}
              </AnimatePresence>

              <ContentHeader
                initial={false}
                animate={{
                  backgroundColor: isPostPictureOpen ? "#FF0088" : "#110b1f",
                }}
                onClick={() => setisPostPictureOpen(!isPostPictureOpen)}
                whileTap={{ scale: 1.01 }}
              >
                More Pictures
              </ContentHeader>

              {isPostPictureOpen && (
                <ContentBody
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.04, 0.62, 0.23, 0.98],
                  }}
                >
                  <InnerBodyGallery>
                    {/* <ImageGallery /> */}
                    <Slider {...carouselSettings}>
                      {imageGallery.map((item) => (
                        <div>
                          <img src={item.image} />
                          <h3>{item.title}</h3>
                        </div>
                      ))}
                    </Slider>
                  </InnerBodyGallery>
                </ContentBody>
              )}
            </StyledContent>
          </Container>
        </StyledContainer>
      </>
    )
  );
}
