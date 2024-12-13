"use client";
import { useState } from "react";

const MobileCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "https://placehold.co/600x400/png", alt: "Imagen 1" },
    { src: "https://placehold.co/600x400/png", alt: "Imagen 2" },
    { src: "https://placehold.co/600x400/png", alt: "Imagen 3" },
  ];

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="min-[1024px]:hidden ">
      {" "}
      {/* Solo visible para pantallas moviles */}
      <div className="container mx-auto px-4 py-8">
        <div className="relative w-full max-w-xs mx-auto">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <img src={image.src} alt={image.alt} className="w-full h-auto" />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2  text-acentColor p-2 rounded-r-lg  transition-colors"
            aria-label="Imagen anterior"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2  text-acentColor p-2 rounded-l-lg  transition-colors"
            aria-label="Siguiente imagen"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};
export { MobileCarousel };
