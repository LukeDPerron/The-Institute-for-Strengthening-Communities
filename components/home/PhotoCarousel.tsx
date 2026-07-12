"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IoArrowBackCircle,
  IoArrowForwardCircle,
  IoPauseCircle,
  IoPlayCircle,
} from "react-icons/io5";

export type CarouselSlide = {
  /** Path to the photo — replace placeholder image values in app/page.tsx */
  image: string;
  /** Caption rendered at the bottom of the slide */
  caption: string;
  /** Optional short title rendered above the caption */
  title?: string;
  /** Optional object-position override, e.g. "center 58%" */
  imagePosition?: string;
  /** Optional per-slide fit mode (cover or contain) */
  imageFit?: "cover" | "contain";
  /** Optional scale override for image framing (1 = default cover) */
  imageScale?: number;
};

type PhotoCarouselProps = {
  slides: CarouselSlide[];
  /** Extra Tailwind classes applied to the outer wrapper */
  className?: string;
  /** Fixed section label shown at the top of the image */
  sectionLabel?: string;
  /** Optional link target for caption text */
  captionHref?: string;
  /** Extra Tailwind classes applied to the caption text */
  captionClassName?: string;
  /** Responsive image sizes hint for Next.js optimization */
  imageSizes?: string;
  /** Force eager loading for above-the-fold hero usage */
  eager?: boolean;
  /** Whether slides should auto-advance on a timer */
  autoPlay?: boolean;
  /** Whether to render the dark readability overlay above the image */
  showDarkOverlay?: boolean;
};

/**
 * Accessible, keyboard-friendly photo carousel.
 * Arrow buttons are always visible and loop through all slides.
 */
export function PhotoCarousel({
  slides,
  className = "",
  sectionLabel,
  captionHref,
  captionClassName = "",
  imageSizes = "(max-width: 640px) 100vw, 50vw",
  eager = false,
  autoPlay = false,
  showDarkOverlay = true,
}: PhotoCarouselProps) {
  const CROSSFADE_MS = 550;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [transitionFromIndex, setTransitionFromIndex] = useState<number | null>(null);
  const [isFadingOutPrevious, setIsFadingOutPrevious] = useState(false);
  const totalSlides = slides.length;

  if (totalSlides === 0) return null;

  const getPreviousIndex = (index: number) => (index - 1 + totalSlides) % totalSlides;
  const getNextIndex = (index: number) => (index + 1) % totalSlides;

  const changeSlide = (getTargetIndex: (index: number) => number) => {
    setCurrentIndex((previous) => {
      const next = getTargetIndex(previous);
      if (next === previous) return previous;

      setTransitionFromIndex(previous);
      setIsFadingOutPrevious(false);
      window.requestAnimationFrame(() => {
        setIsFadingOutPrevious(true);
      });

      return next;
    });
  };

  const prevSlide = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    changeSlide(getPreviousIndex);
  };

  const nextSlide = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    changeSlide(getNextIndex);
  };

  useEffect(() => {
    if (!autoPlay || totalSlides <= 1 || isPaused) return;

    const autoPlayTimer = window.setInterval(() => {
      changeSlide(getNextIndex);
    }, 5000);

    return () => {
      window.clearInterval(autoPlayTimer);
    };
  }, [autoPlay, totalSlides, isPaused]);

  useEffect(() => {
    if (transitionFromIndex === null) return;

    const cleanupTimer = window.setTimeout(() => {
      setTransitionFromIndex(null);
      setIsFadingOutPrevious(false);
    }, CROSSFADE_MS);

    return () => {
      window.clearTimeout(cleanupTimer);
    };
  }, [transitionFromIndex]);

  const currentSlide = slides[currentIndex];

  return (
    <div className={`relative isolate overflow-hidden ${className}`} role="region" aria-label="Photo carousel">
      {/* Background photo */}
      <Image
        src={currentSlide.image}
        alt={currentSlide.title ?? currentSlide.caption}
        fill
        sizes={imageSizes}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className={`${currentSlide.imageFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-300`}
        style={{
          objectPosition: currentSlide.imagePosition ?? "center",
          transform: `scale(${currentSlide.imageScale ?? 1})`,
        }}
      />

      {transitionFromIndex !== null ? (
        <Image
          src={slides[transitionFromIndex].image}
          alt={slides[transitionFromIndex].title ?? slides[transitionFromIndex].caption}
          fill
          sizes={imageSizes}
          loading="lazy"
          fetchPriority="auto"
          className={`${slides[transitionFromIndex].imageFit === "contain" ? "object-contain" : "object-cover"} transition-opacity duration-[550ms] ${
            isFadingOutPrevious ? "opacity-0" : "opacity-100"
          }`}
          style={{
            objectPosition: slides[transitionFromIndex].imagePosition ?? "center",
            transform: `scale(${slides[transitionFromIndex].imageScale ?? 1})`,
          }}
        />
      ) : null}

      {/* Subtle dark overlay so caption and arrows stay readable */}
      {showDarkOverlay ? <div className="absolute inset-0 bg-black/25 pointer-events-none" /> : null}

      {/* Slide position indicator to make carousel movement obvious */}
      {totalSlides > 1 && (
        <div className="absolute right-2 top-2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-[11px] font-semibold text-white">
          {currentIndex + 1}/{totalSlides}
        </div>
      )}

      {/* Play/Pause control for auto-advance */}
      {autoPlay && totalSlides > 1 && (
        <button
          type="button"
          onClick={() => setIsPaused((previous) => !previous)}
          aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          className="absolute left-2 top-2 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white ring-1 ring-white/35 shadow-[0_2px_8px_rgba(0,0,0,0.55)] backdrop-blur-[1px] transition-all duration-150 hover:scale-110 focus-visible:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white active:scale-90"
        >
          {isPaused ? (
            <IoPlayCircle aria-hidden="true" className="h-8 w-8" />
          ) : (
            <IoPauseCircle aria-hidden="true" className="h-8 w-8" />
          )}
        </button>
      )}

      {sectionLabel ? (
        <div className="pointer-events-none absolute inset-x-0 top-4 z-20 flex justify-center px-4">
          <p className="rounded-full bg-orange-500 px-3 py-0.5 text-sm font-extrabold uppercase tracking-[0.16em] text-white shadow-md sm:text-base">
            {sectionLabel}
          </p>
        </div>
      ) : null}

      {/* Caption placed near the bottom of the image for quick visual scanning */}
      {currentSlide.caption.trim().length > 0 ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 px-4 py-2">
          <div className="mx-auto max-w-[95%]">
            {captionHref ? (
              <Link
                href={captionHref}
                className={`pointer-events-auto text-center text-xs font-medium leading-snug text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] transition-opacity hover:opacity-90 hover:underline sm:text-sm ${captionClassName}`}
              >
                {currentSlide.caption}
              </Link>
            ) : (
              <p className={`text-center text-xs font-medium leading-snug text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-sm ${captionClassName}`}>
                {currentSlide.caption}
              </p>
            )}
          </div>
        </div>
      ) : null}

      {/* Previous arrow — centered vertically on left */}
      {totalSlides > 1 && (
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous photo"
          className="absolute left-2 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-2xl leading-none text-white ring-1 ring-white/35 shadow-[0_2px_8px_rgba(0,0,0,0.55)] backdrop-blur-[1px] pointer-events-auto transition-all duration-150 hover:scale-110 focus-visible:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white active:-translate-x-0.5 active:scale-90 active:text-orange-500"
        >
          <IoArrowBackCircle aria-hidden="true" className="h-8 w-8" />
        </button>
      )}

      {/* Next arrow — centered vertically on right */}
      {totalSlides > 1 && (
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next photo"
          className="absolute right-2 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-2xl leading-none text-white ring-1 ring-white/35 shadow-[0_2px_8px_rgba(0,0,0,0.55)] backdrop-blur-[1px] pointer-events-auto transition-all duration-150 hover:scale-110 focus-visible:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white active:translate-x-0.5 active:scale-90 active:text-orange-500"
        >
          <IoArrowForwardCircle aria-hidden="true" className="h-8 w-8" />
        </button>
      )}
    </div>
  );
}
