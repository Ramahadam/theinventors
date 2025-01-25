'use client ';

import { useEffect, useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="rounded-lg w-4/5  ">
      {/* Image Slider */}
      <div className=" overflow-hidden rounded-lg">
        <div
          className=" flex  transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full object-contain "
            />
          ))}
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            onClick={() => setCurrentIndex(index)}
            key={index}
            className={`w-8 h-1 rounded-full ${
              index === currentIndex ? 'bg-color-primary' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
