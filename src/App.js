import React from "react";
// import Navbar from "./components/Navbar/Navbar";
import { GlobalStyles } from "./components/styles/Global";
import "./styles.css";
import { ThemeProvider } from "styled-components";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import ContactUs from "./pages/ContactUs";
// import Navbar from "./components/Navbar/Navbar";
import PostsDetails from "./components/PostsDetails/PostsDetails";
import Footer from "./components/Footer/Footer";

export default function App() {
  const theme = {
    colors: {
      content: "#1e1536",
      body: "#ebffeb",
    },
    mobile: "768px",
    tablet: "1024px",
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postsId" exact element={<PostsDetails />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
