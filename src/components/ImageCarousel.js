// ImageCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ImageCarousel({ images }) {
  // Filter out transparent GIFs and images with empty src attributes
  const filteredImages = images.filter(src => src && !src.startsWith('data:image/gif;base64,'));

  return (
    <div className="carousel-container">
      <h2>Images</h2>
      <Carousel>
        {filteredImages.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Image ${index}`} className="carousel-image" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
