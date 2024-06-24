import React from "react";
import bgimg from "../assets/backgallery2.png";
import g1 from "../assets/g1.jpeg"
import g2 from "../assets/g2.jpeg"
import g3 from "../assets/g3.jpeg"
import g4 from "../assets/g4.jpeg"
import g5 from "../assets/g5.jpeg"
import g6 from "../assets/g6.webp"
import g7 from "../assets/g7.webp"
import g8 from "../assets/g8.webp"
import g9 from "../assets/g9.webp"
import g10 from "../assets/g10.webp"
import g11 from "../assets/g11.webp"
import g12 from "../assets/g12.webp"

import "../style/gallery.css";
const Gallery = () => {
  return (
    <>
      <div>

        <div>
          <img src={bgimg} alt="" className="gallery-upper" />
          <h1 className="h1-gallery-over">GALLERY</h1>
        </div>

        <div className="grid-cover">
        <img src={g1} alt="" />
        <img src={g2} alt="" />
        <img src={g3} alt="" />

        <img src={g4} alt="" />
        <img src={g5} alt="" />
        <img src={g7} alt="" />
        
        <img src={g8} alt="" />
        <img src={g11} alt="" />
        <img src={g10} alt="" />

        <img src={g9} alt="" />
        <img src={g6} alt="" />
        <img src={g12} alt="" />
        
        </div>

        

      </div>
    </>
  );
};

export default Gallery;
