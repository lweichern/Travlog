import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItem";
import galleryImages from "../../../listComponents/Gallery";

export default function ImageGallery() {
  return (
    <div>
      <ImageList sx={{ width: 600, height: 450 }}>
        {galleryImages.map((item, index) => (
          <ImageListItem key={index}>
            <img
              src={`${item.image}?w=124&fit=crop&auto=format`}
              srcSet={`${item.image}?w=124&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} subtitle={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
