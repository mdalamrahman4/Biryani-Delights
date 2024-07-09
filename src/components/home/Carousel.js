import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageProp = [
  "carousel1.jpg", // Biryani
 "carousel2.jpg", // Ghol
  "carousel3.jpg"  // Masala Salad
];

const Carouselcomp = () => {
  return (
    <div>
      <Carousel
        autoPlay
        navButtonsAlwaysVisible
        infiniteLoop
        showStatus={false}
        emulateTouch
        showThumbs={false}
      >
        {imageProp.map((image, index) => {
          return (
            <div
              key={index}
              style={{ maxHeight: "36rem" }}
              className="object-scale-down overflow-auto brightness-60"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  )
}

export default Carouselcomp
