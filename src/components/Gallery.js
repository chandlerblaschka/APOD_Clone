import React from "react";
import GalleryItem from "./GalleryItem";

const Gallery = (props) => {
  let cards = props.data;

  let cardsList = cards.map((card, index) => {
    return <GalleryItem data={card} key={index} />;
  });

  return <div>{cardsList}</div>;
};

export default Gallery;
