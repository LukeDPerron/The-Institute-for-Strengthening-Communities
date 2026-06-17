"use client";

import { useState } from "react";
import Image from "next/image";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

export type CarouselSlide = {
  /** Path to the photo — replace placeholder image values in app/page.tsx */
  image: string;
  /** Caption rendered at the bottom of the slide */
  caption: string;
  /** Optional short title rendered above the caption */
  title?: string;
};

type PhotoCarouselProps = {
  slides: CarouselSlide[];
  /** Extra Tailwind classes applied to the outer wrapper */
  className?: string;
};

/**
 * Accessible, keyboard-friendly photo carousel.
 * Arrow buttons are always visible and loop through all slides.
 */
export function PhotoCarousel({ slides, className = "" }: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  if (totalSlides === 0) return null;

  const getPreviousIndex = (index: number) => (index - 1 + totalSlides) % totalSlides;
  const getNextIndex = (index: number) => (index + 1) % totalSlides;

  const prevSlide = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setCurrentIndex((previous) => getPreviousIndex(previous));
  };

  const nextSlide = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setCurrentIndex((previous) => getNextIndex(previous));
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className={`relative isolate overflow-hidden ${className}`} role="region" aria-label="Photo carousel">
      {/* Background photo */}
      <Image
        src={currentSlide.image}
        alt={currentSlide.title ?? currentSlide.caption}
        fill
        sizes="100vw"
        className="object-cover"
      />

      {/* Subtle dark overlay so caption and arrows stay readable */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      {/* Slide position indicator to make carousel movement obvious */}
      {totalSlides > 1 && (
        <div className="absolute right-2 top-2 z-20 rounded-none bg-black/55 px-2 py-1 text-xs font-semibold text-white">
          {currentIndex + 1}/{totalSlides}
        </div>
      )}

      {/* Caption bar */}
      <div className="absolute bottom-0 inset-x-0 z-10 bg-black/55 px-4 py-3">
        <p className="text-sm font-medium text-white text-center leading-snug">
          {currentSlide.caption}
        </p>
      </div>

      {/* Previous arrow — centered vertically on left */}
      {totalSlides > 1 && (
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous photo"
          className="absolute left-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-none text-2xl leading-none text-white pointer-events-auto transition-transform duration-150 hover:scale-110 focus-visible:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          <IoArrowBackCircle aria-hidden="true" className="h-7 w-7" />
        </button>
      )}

      {/* Next arrow — centered vertically on right */}
      {totalSlides > 1 && (
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next photo"
          className="absolute right-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-none text-2xl leading-none text-white pointer-events-auto transition-transform duration-150 hover:scale-110 focus-visible:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          <IoArrowForwardCircle aria-hidden="true" className="h-7 w-7" />
        </button>
      )}
    </div>
  );
}
