# Implementation Plan: High-End UX & Polish

## Objective
To take the separate, fully-functional pages we just built and elevate them to "World-Class Premium" status. Right now, navigating between pages is instant and static. We will implement high-fidelity kinetic animations, seamless page transitions, and essential UX guardrails to make the application feel like a top-tier digital experience.

## Proposed Changes

### 1. Global Page Transitions & Routing Polish (`App.tsx` & Router)
- **Fluid Route Animations:** Wrap the React Router in Framer Motion (`AnimatePresence`) so that every page elegantly fades and slides into view when the user navigates, eliminating jarring hard cuts.
- **Scroll-to-Top Mechanism:** Automatically reset the scroll position to the top of the window on every route change. (Currently, if you scroll down the homepage and click "Services", you'll land halfway down the next page—this fixes that).

### 2. Custom 404 Emergency Page (`NotFoundPage.tsx`)
- **[NEW] `src/pages/NotFoundPage.tsx`**: Build a branded, highly thematic 404 error page. 
  - *Theme*: "Dead End / Broke Down." 
  - *Action*: Includes a prominent button to immediately grab a tow or route back to the homepage.

### 3. Kinetic Scroll Animations (All Pages)
- **Implement Scroll-Triggered Reveal:** Add `motion.div` wrappers to the core sections on the Homepage, Mechanical, Collision, Towing, and Sales pages. 
- Deepen the visual hierarchy by having text, badges, and grids dynamically stagger and fade up as the user scrolls down the page, creating a "live" institutional friction to the browsing experience. 

### 4. Interactive Micro-Interactions
- Emphasize hover states on high-intent buttons (pulsing effects, slight scale bumps) using pure Tailwind classes or Framer animations to make the UI feel reactive.

## Verification
- Local build will be deployed and verified for smooth 60fps animations.
- Route changes will be manually triggered to ensure the scroll position resets and the transitions don't block layout renders.
