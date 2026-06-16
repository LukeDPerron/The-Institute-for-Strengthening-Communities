"use client";

import { useState } from "react";
import Image from "next/image";

export type CarouselSlide = {
  /** Path to the photo — replace placeholder src values in app/page.tsx */
  src: string;
  /** Accessible description of the photo */
  alt: string;
  /** Caption rendered at the bottom of the slide */
  caption: string;
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
  const [current, setCurrent] = useState(0);

  if (slides.length === 0) return null;

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className={`relative overflow-hidden ${className}`} role="region" aria-label="Photo carousel">
      {/* Background photo */}
      <Image
        src={slides[current].src}
        alt={slides[current].alt}
        fill
        className="object-cover transition-opacity duration-300"
      />

      {/* Subtle dark overlay so caption and arrows stay readable */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      {/* Caption bar */}
      <div className="absolute bottom-0 inset-x-0 bg-black/55 px-4 py-3 z-10">
        <p className="text-sm font-medium text-white text-center leading-snug">
          {slides[current].caption}
        </p>
      </div>

      {/* Previous arrow — centered vertically on left */}
      {slides.length > 1 && (
        <button
          type="button"
          onClick={prev}
          aria-label="Previous photo"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white text-2xl leading-none hover:bg-black/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white transition-colors"
        >
          ‹
        </button>
      )}

      {/* Next arrow — centered vertically on right */}
      {slides.length > 1 && (
        <button
          type="button"
          onClick={next}
          aria-label="Next photo"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white text-2xl leading-none hover:bg-black/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white transition-colors"
        >
          ›
        </button>
      )}
    </div>
  );
}
