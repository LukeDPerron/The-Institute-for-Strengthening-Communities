# About Page Image Replacement Guide

Use this checklist to replace placeholder images used by the About page implementation.

## 1) Banner image (full-width top section)
- **Section:** Full-width banner at the top of the page
- **Recommended image:** Landscape community photo (people collaborating, volunteering, or neighborhood activity)
- **Ideal aspect ratio:** 16:9 or wider landscape (the banner crops to fill the container height)
- **Replace location:** `aboutImageSources.hero` in `app/about/page.tsx` (line ~11)
- **Current placeholder path:** `/images/about/hero-placeholder.svg`
- **Current source file:** `public/images/about/hero-placeholder.svg`
- **How to swap:** Copy your final image into `public/images/about/` (e.g. `banner.jpg`) and update the `hero` value in `aboutImageSources` to `"/images/about/banner.jpg"`.

## 2) Mission section image
- **Section:** Mission Statement
- **Recommended image:** Program delivery photo showing mission in action
- **Ideal aspect ratio:** 3:2 landscape
- **Replace location:** `aboutImageSources.mission` in `app/about/page.tsx`
- **Current source:** Placeholder local asset (`/images/about/mission-placeholder.svg`)

## 3) Our Story section image
- **Section:** Our Story
- **Recommended image:** Historical/community progression image aligned with organization journey
- **Ideal aspect ratio:** 3:2 landscape
- **Replace location:** `aboutImageSources.story` in `app/about/page.tsx`
- **Current source:** Placeholder local asset (`/images/about/story-placeholder.svg`)

## 4) Board member headshots
- **Section:** Board of Directors cards
- **Recommended image:** Professional board member portraits with consistent lighting/background
- **Ideal aspect ratio:** 1:1 square crop
- **Replace location:** `aboutImageSources.boardHeadshot` in `app/about/page.tsx`
- **Current source:** Placeholder local asset (`/images/about/board-headshot-placeholder.svg`)

## 5) Staff headshots
- **Section:** Staff cards
- **Recommended image:** Professional staff portraits with consistent style across team
- **Ideal aspect ratio:** 1:1 square crop
- **Replace location:** `aboutImageSources.staffHeadshot` in `app/about/page.tsx`
- **Current source:** Placeholder local asset (`/images/about/staff-headshot-placeholder.svg`)

## Placeholder asset files
All current placeholder image assets are local SVG files in:
- `public/images/about/`

No hardcoded remote images are used on the About page at this time.
