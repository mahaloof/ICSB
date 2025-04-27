import React from "react";
import "./Gallary.css";

// Categorized images
const categories = [
  {
    title:"UNLOCKING IOT: FROM CONCEPT TO CREATION",
    images: Array.from({ length: 12 }, (_, i) => `/mahaloof/pics/galleryy/unlock iot/1 (${i + 1}).jpg`),
  },
  {
    title: "JAVA JUMP START",
    images: Array.from({ length: 21 }, (_, i) => `/mahaloof/pics/galleryy/java jump/image${i}.jpg`),
  },
  {
    title: "IMPROVE YOUR COMMUNICATION SKILLS",
    images: Array.from({ length: 21 }, (_, i) => `/mahaloof/pics/galleryy/voice vision/image_${i}.jpg`),
  },
  {
    title: "INNOVATIVE IOT",
    images: Array.from({ length: 70 }, (_, i) => `/mahaloof/pics/galleryy/iot/image${i + 1}.jpg`),
  },
  {
    title: "A DEEP DIVE INTO OPERATING SYSTEMS AND LINUX",
    images: Array.from({ length: 12 }, (_, i) => `/mahaloof/pics/galleryy/deep dive/1 (${i}).jpg`),
  },
  {
    title: "CYBER SECURITY & REAL WORLD CHALLENGES",
    images: Array.from({ length: 16 }, (_, i) => `/mahaloof/pics/galleryy/cyber security/image${i + 1}.jpg`),
  },
  {
    title: "3D PRINTING WORKSHOP",
    images: Array.from({ length: 16 }, (_, i) => `/mahaloof/pics/galleryy/3d printing/image${i + 1}.jpg`),
  },
];

const Gallary = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      {categories.map((category, index) => (
        <div key={index} className="gallery-section">
          <h3 className="gallery-subtitle">{category.title}</h3>
          <div className="gallery-grid">
            {category.images.map((src, imgIndex) => (
              <img key={imgIndex} src={src} alt={`${category.title} ${imgIndex + 1}`} className="gallery-image" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallary;