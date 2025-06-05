"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/hero-bg.jpeg",
  "/hero-bg2.jpeg",
  "/hero-bg3.jpeg",
  "/hero-bg4.jpeg",
  "/hero-bg5.jpeg",
  "/hero-bg6.jpeg",
  "/hero-bg7.jpeg",
  "/hero-bg8.jpeg",
  "/hero-bg9.jpeg",
  "/hero-bg10.jpeg",
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel); 
    },
  });

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {images.map((src, index) => (
          <div key={index} className="keen-slider__slide relative">
            <img
              src={src}
              alt={`Hero ${index + 1}`}
              className="w-full h-[500px] object-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-[4px] w-6 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
