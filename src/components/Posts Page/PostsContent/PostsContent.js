import React, { useEffect, useState } from "react";
import PostsCard from "./PostsCard";
import FilterContinents from "./FilterContinents";
import {
  StyledPostsContent,
  TitleAndFavorite,
  TitleHeader,
  StyledGrid,
  FavoriteIcon,
} from "./PostsContent.styled";
import { Container } from "../../styles/Container.styled";
import PostCards from "../../../listComponents/PostCards";
import { Favorite } from "@material-ui/icons";
import { AnimatePresence } from "framer-motion";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostsContent() {
  const favoritePostNumber = useSelector((state) => state.favorite.list.length);
  const [continent, setContinent] = useState("All");
  const [filteredPostCards, setFilteredPostCards] = useState([]);

  console.log(continent);
  console.log(filteredPostCards);

  useEffect(() => {
    if (continent === "All") {
      setFilteredPostCards(PostCards);
      return;
    } else {
      setFilteredPostCards(
        PostCards.filter((item) => item.continent === continent)
      );
    }
  }, [continent]);

  return (
    <StyledPostsContent>
      <Container>
        <TitleAndFavorite>
          <TitleHeader>Blog Posts</TitleHeader>
          <Link to={"/favorites"}>
            <FavoriteIcon whileTap={{ scale: 1.1 }}>
              <Badge
                className="badge"
                badgeContent={favoritePostNumber}
                color="primary"
              >
                <Favorite className="favorite" />
              </Badge>
            </FavoriteIcon>
          </Link>
        </TitleAndFavorite>

        <FilterContinents continent={continent} setContinent={setContinent} />

        <StyledGrid>
          <AnimatePresence>
            {filteredPostCards.map((item) => (
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
            ))}
          </AnimatePresence>
        </StyledGrid>
      </Container>
    </StyledPostsContent>
  );
}
