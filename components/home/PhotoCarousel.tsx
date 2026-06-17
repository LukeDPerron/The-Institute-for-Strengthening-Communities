"use client";

import { useState } from "react";
import Image from "next/image";

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

  if (slides.length === 0) return null;

  const prevSlide = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setCurrentIndex((previous) => (previous - 1 + slides.length) % slides.length);
  };

  const nextSlide = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setCurrentIndex((previous) => (previous + 1) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className={`relative overflow-hidden ${className}`} role="region" aria-label="Photo carousel">
      {/* Background photo */}
      <Image
        src={currentSlide.image}
        alt={currentSlide.title ?? currentSlide.caption}
        fill
        className="object-cover"
      />

      {/* Subtle dark overlay so caption and arrows stay readable */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      {/* Caption bar */}
      <div className="absolute bottom-0 inset-x-0 z-10 bg-black/55 px-4 py-3">
        {currentSlide.title && (
          <p className="text-xs font-semibold uppercase tracking-wider text-white text-center">
            {currentSlide.title}
          </p>
        )}
        <p className="text-sm font-medium text-white text-center leading-snug">
          {currentSlide.caption}
        </p>
      </div>

      {/* Previous arrow — centered vertically on left */}
      {slides.length > 1 && (
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous photo"
          className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-none bg-black/50 text-2xl leading-none text-white pointer-events-auto hover:bg-black/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          ‹
        </button>
      )}

      {/* Next arrow — centered vertically on right */}
      {slides.length > 1 && (
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next photo"
          className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-none bg-black/50 text-2xl leading-none text-white pointer-events-auto hover:bg-black/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          ›
        </button>
      )}
    </div>
  );
}
