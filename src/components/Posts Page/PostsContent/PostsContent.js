import React from "react";
import PostsCard from "./PostsCard";
import {
  StyledPostsContent,
  TitleHeader,
  StyledGrid,
} from "./PostsContent.styled";
import { Container } from "../../styles/Container.styled";
import PostCards from "../../../listComponents/PostCards";

export default function PostsContent() {
  return (
    <StyledPostsContent>
      <Container>
        <TitleHeader>Blog Posts</TitleHeader>
        <StyledGrid>
          {PostCards.map((item) => (
            <PostsCard
              key={item.id}
              postsId={item.id}
              name={item.name}
              date={item.date}
              location={item.location}
              ratings={item.ratings}
              image={item.image}
            />
          ))}
        </StyledGrid>
      </Container>
    </StyledPostsContent>
  );
}
