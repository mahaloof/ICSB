import React from "react";
import "./Gallary.css";
import picture from "../assets/gallery-3.png"; // Import the image properly

const images = [
  picture, // Use the imported image directly
  picture,
  picture,
  picture,
  picture,
  picture,
  picture,
  picture,
  "/mahaloof/test1.png",
];

const Gallary = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default Gallary;
