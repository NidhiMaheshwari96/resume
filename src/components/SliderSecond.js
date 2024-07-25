import React, { useState, useEffect } from "react";

const images = [
  "https://resumelanding-nandnigits-projects.vercel.app/assets/homeimage1-xIUNouhH.jpg",
  "https://resumelanding-nandnigits-projects.vercel.app/assets/homeimage3-BGY0ufT0.jpg",
  "https://resumelanding-nandnigits-projects.vercel.app/assets/homeimage4-DlnOP8ZO.jpg",
];

const SliderSecond = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    let interval = null;
    if (!isPaused) {
      interval = setInterval(goToNext, 1000);
    }

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const handleImageHover = (index) => {
    setIsPaused(true);
    setCurrentIndex(index);
  };

  const handleImageLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="w-full flex-shrink-0 transition-transform duration-500 hover:scale-110"
              style={{ cursor: "pointer" }}
              onMouseEnter={() => handleImageHover(index)}
              onMouseLeave={handleImageLeave}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full mx-2 focus:outline-none ${
              currentIndex === index ? "bg-white" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        &#10095;
      </button>
    </div>
  );
};

export default SliderSecond;
