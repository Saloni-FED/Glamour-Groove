import React from "react";
import { useState } from "react";
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <>
      <div className="flex flex-wrap justify-center mt-7 md:hidden">
        <div className="img w-full  md:w-1/2">
          <img
            key={currentIndex}
            src={images[currentIndex]}
            alt="trendy"
            className="w-full md:full h-96 "
          />
        </div>
      </div>
      <div className="indicator flex justify-center gap-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${
              currentIndex === index ? "bg-gray-900" : ""
            } bg-red-400 w-4 h-4 rounded-full mt-3 md:hidden`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Carousel;
