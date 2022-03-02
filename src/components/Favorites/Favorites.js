import React from "react";
import { useSelector } from "react-redux";
import { Title, NoPostTitle, StyledContent } from "./Favorites.styled";
import Navbar from "../Navbar/Navbar";
import PostsCard from "../Posts Page/PostsContent/PostsCard";
import { Container } from "../styles/Container.styled";

export default function Favorites() {
  const favoritePosts = useSelector((state) => state.favorite.list);

  console.log(favoritePosts);

  return (
    <div>
      <Navbar />
      <Container>
        <Title>Favorite Posts</Title>
        <StyledContent>
          {favoritePosts.length !== 0 ? (
            favoritePosts.map((item) => (
              <PostsCard
                key={item.id}
                postsId={item.id}
                name={item.name}
                date={item.date}
                location={item.location}
                ratings={item.ratings}
                image={item.image}
                isFavorite={item.isFavorite}
              />
            ))
          ) : (
            <NoPostTitle>No Favorite Post Yet!</NoPostTitle>
          )}
        </StyledContent>
      </Container>
    </div>
  );
}
