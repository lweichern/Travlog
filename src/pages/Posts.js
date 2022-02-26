import React from "react";
import PostsHeader from "../components/PostsHeader/PostsHeader";
import Navbar from "../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import PostsContent from "../components/PostsContent/PostsContent";

export default function Posts() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Navbar currentPage={location.pathname} />
      <PostsHeader />
      <PostsContent />
    </>
  );
}
