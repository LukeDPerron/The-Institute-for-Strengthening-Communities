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
- **Section:** Board of Directors profiles
- **Recommended image:** Professional board member portraits with consistent lighting/background
- **Ideal aspect ratio:** 4:5 portrait rectangle
- **Replace location:** `boardMembers` entries in `app/about/page.tsx` (`imageSrc` on each person)
- **Current source:** Placeholder local asset on each member (`/images/about/board-headshot-placeholder.svg`)
- **Current presentation:** Photo only, with name and role stacked below the image

## 5) Staff headshots
- **Section:** Staff profiles
- **Recommended image:** Professional staff portraits with consistent style across team
- **Ideal aspect ratio:** 4:5 portrait rectangle
- **Replace location:** `staffMembers` entries in `app/about/page.tsx` (`imageSrc` on each person)
- **Current source:** Placeholder local asset on each member (`/images/about/staff-headshot-placeholder.svg`)
- **Current presentation:** Photo only, with name and role stacked below the image

## Placeholder asset files
All current placeholder image assets are local SVG files in:
- `public/images/about/`

## Future individual staff/board photo assets
- Add each person’s final photo into `public/images/about/` (or a subfolder such as `public/images/about/team/`).
- Update only that person’s `imageSrc` value in `boardMembers` or `staffMembers` in `app/about/page.tsx`.
- No component logic changes are needed once files are added.

No hardcoded remote images are used on the About page at this time.
