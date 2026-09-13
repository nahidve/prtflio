# Portfolio Website --- Claude Code Instructions

## Goal

Build a premium personal portfolio website inspired by the visual
language, layout, typography, spacing, and interaction design of:

https://fabrica.framer.media/

The supplied Fabrica screenshots are the primary visual references.

The goal is high visual fidelity to the reference design system while
replacing all branding, content, projects, images, and copy with the
portfolio owner's own content.

Do NOT copy Fabrica's actual branding, logo, project names, photographs,
copywriting, testimonials, or proprietary assets.

------------------------------------------------------------------------

## Before Coding

Read these files first:

-   `design.md`
-   all images inside `reference/`

The `design.md` file is the portfolio's design specification.

The screenshots are visual references for:

-   desktop layout
-   mobile layout
-   typography hierarchy
-   spacing
-   grids
-   project cards
-   navigation
-   footer
-   forms
-   section composition

Also inspect the live reference site:

https://fabrica.framer.media/

Before writing code, explain:

1.  The proposed page structure
2.  The reusable component architecture
3.  The responsive strategy
4.  The animation/motion system
5.  The main design tokens
6.  Any important implementation decisions

Do not start coding until this analysis is complete.

------------------------------------------------------------------------

## Technology

Use:

-   React
-   JavaScript
-   Tailwind CSS
-   Framer Motion
-   Lenis for smooth scrolling

Use reusable components and keep the architecture maintainable.

Suggested structure:

``` text
src/
  app/
  components/
    layout/
    navigation/
    footer/
    sections/
    projects/
    animations/
    ui/
  data/
  lib/
  styles/
```

Adjust the structure if there is a better reason to do so.

------------------------------------------------------------------------

# Visual Direction

The website should feel:

-   minimal
-   monochrome
-   editorial
-   premium
-   modern
-   typography-driven
-   spacious
-   image-focused
-   restrained
-   highly polished

Avoid making it look like a generic SaaS, developer dashboard, or
template portfolio.

The Fabrica screenshots should guide the proportions and composition.

------------------------------------------------------------------------

# Typography

Typography is one of the most important parts of the design.

Use:

-   very large display headings
-   strong sans-serif/grotesk typography
-   tight display typography
-   small navigation text
-   small metadata labels
-   large editorial body copy
-   clear contrast between heading and supporting text

Match the visual scale and hierarchy of the reference as closely as
practical.

If the exact font cannot be determined, use a close modern
grotesk/sans-serif alternative.

------------------------------------------------------------------------

# Layout

Pay close attention to:

-   container width
-   viewport spacing
-   oversized headings
-   large whitespace
-   asymmetric compositions
-   2-column project grids
-   image proportions
-   section spacing
-   footer proportions
-   alignment
-   mobile stacking

Do not make every section symmetrical.

Whitespace and asymmetry are important parts of the visual identity.

------------------------------------------------------------------------

# Pages

Create:

``` text
/
 /projects
 /projects/[slug]
 /studio
 /blog
 /blog/[slug]
 /contact
```

Navigation and footer should be reusable across all pages.

------------------------------------------------------------------------

# Projects

Projects must be data-driven.

Use a central project data structure containing fields such as:

``` text
slug
title
year
category
description
thumbnail
heroImage
gallery
technologies
liveUrl
githubUrl
```

The Projects page should render from this data.

I should be able to replace projects later without rewriting the page
components.

------------------------------------------------------------------------

# Project Detail Pages

Project pages should feel like editorial case studies.

Include, where applicable:

-   project title
-   year
-   category
-   hero image
-   overview
-   role
-   technologies
-   large visual sections
-   gallery
-   results/details
-   live project link
-   GitHub link
-   next-project navigation

Maintain the same visual language as the rest of the site.

------------------------------------------------------------------------

# Motion Design

The screenshots show static layouts. The finished website should add a
polished motion system that feels natural and premium.

Use Framer Motion and Lenis.

Animations should be subtle and intentional.

## Page Load

Implement:

-   subtle opacity/translate entrance
-   staggered navigation elements
-   hero text reveal
-   image reveal using clipping/masking

Avoid dramatic loading animations.

## Scroll Reveals

Sections should reveal naturally as they enter the viewport.

Use combinations of:

-   opacity
-   translateY
-   clip-path
-   subtle scale

Keep movement restrained.

## Image Reveals

Use masked/clip-path image reveals.

Images may begin slightly scaled, around `1.03–1.06`, and settle toward
`1`.

## Project Hover

Project cards should have sophisticated hover behavior:

-   subtle image zoom
-   slight content movement
-   smooth arrow/cursor movement where appropriate
-   refined transitions

Do not use cheesy or excessive effects.

## Navigation

Keep navigation minimal.

It may subtly change appearance while scrolling, but should remain
visually quiet.

## Page Transitions

Use subtle transitions between pages.

Do not create a flashy loading screen.

## Text

Large headings can use staggered line/word reveals.

Keep them restrained.

## Smooth Scrolling

Use Lenis.

Scrolling should feel:

-   smooth
-   slightly weighted
-   responsive
-   premium

Do not introduce excessive scroll lag.

## Reduced Motion

Respect:

``` text
prefers-reduced-motion
```

Disable nonessential animation when requested.

------------------------------------------------------------------------

# Responsive Design

Build intentionally for:

-   desktop
-   tablet
-   mobile

Do not simply scale the desktop design down.

On mobile:

-   preserve hierarchy
-   maintain large typography
-   simplify grids
-   stack sections intelligently
-   preserve whitespace
-   keep interactions performant
-   adapt navigation appropriately

Use the supplied mobile screenshot as a reference.

------------------------------------------------------------------------

# Images

Use optimized responsive images.

Prefer:

-   `next/image`
-   lazy loading
-   explicit aspect ratios
-   correct `object-fit`
-   deliberate `object-position`

Avoid unnecessary huge images and layout shift.

------------------------------------------------------------------------

# Footer

Create a reusable footer with the same visual character as the
reference:

-   large brand treatment
-   navigation
-   social links
-   email/contact
-   newsletter/contact CTA
-   legal links
-   generous whitespace
-   dark bottom bar

Use the portfolio owner's branding rather than Fabrica's branding.

------------------------------------------------------------------------

# Code Quality

Do NOT:

-   create one huge component
-   duplicate page markup
-   hardcode every project
-   scatter arbitrary magic numbers everywhere
-   add unnecessary dependencies
-   sacrifice performance for animation

Prefer:

-   reusable components
-   centralized design tokens
-   data-driven content
-   accessible interactions
-   semantic HTML
-   responsive CSS
-   clean TypeScript

------------------------------------------------------------------------

# Visual QA

Do not consider a page finished just because it renders.

After implementation:

1.  Run the application.
2.  Check every route.
3.  Check desktop layouts.
4.  Check mobile layouts.
5.  Check the browser console.
6.  Check for broken images.
7.  Check for layout shifts.
8.  Check animation performance.
9.  Check reduced-motion behavior.
10. Compare the implementation against the supplied screenshots.

When visual differences exist, prioritize fixing:

1.  typography
2.  spacing
3.  proportions
4.  layout
5.  imagery
6.  motion
7.  minor details

The target is high visual fidelity, not merely functional similarity.

------------------------------------------------------------------------

# Important Reference Rule

Use the Fabrica site and screenshots as a design reference.

Recreate the general:

-   visual language
-   layout principles
-   typography hierarchy
-   spacing system
-   grid behavior
-   interaction patterns
-   animation philosophy

Do not copy Fabrica's:

-   logo
-   branding
-   photographs
-   project names
-   written content
-   testimonials
-   proprietary assets

The final result should be an original personal portfolio that uses a
similar design philosophy.

------------------------------------------------------------------------

# Working Method

Work in phases.

### Phase 1 --- Analysis

Read `design.md` and all reference images.

Explain the implementation plan before coding.

### Phase 2 --- Foundation

Implement:

-   project setup
-   global styles
-   typography
-   design tokens
-   Lenis
-   Framer Motion
-   responsive container system
-   navigation
-   footer
-   animation primitives
-   page transitions

### Phase 3 --- Pages

Implement all required routes and reusable project/blog systems.

### Phase 4 --- Motion

Polish:

-   page entrances
-   scroll reveals
-   image reveals
-   hover interactions
-   navigation transitions
-   page transitions
-   smooth scrolling

### Phase 5 --- Visual QA

Compare against the reference screenshots and fix the largest visual
discrepancies.

Do not stop at "looks close enough."

------------------------------------------------------------------------

# Final Standard

The finished website should feel like a carefully art-directed creative
portfolio rather than a generic generated website.

Prioritize:

**visual fidelity + typography + spacing + image treatment + smooth
interaction + performance.**

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
