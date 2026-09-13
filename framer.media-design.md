---
version: alpha
name: Framer Dark Neon
description: A high-contrast dark marketing system with glowing blue accents, compact UI controls, and editorial typography.
colors:
  primary: "#0099FF"
  primary-60: "#66C2FF"
  primary-20: "#1A77B8"
  secondary: "#FFFFFF"
  tertiary: "#111111"
  neutral: "#000000"
  surface: "#0B0B0B"
  surface-2: "#161616"
  on-surface: "#FFFFFF"
  on-surface-muted: "#A3A3A3"
  border: "#374151"
  error: "#FF5A5F"
typography:
  headline-display:
    fontFamily: "GT Walsheim Medium"
    fontSize: 54px
    fontWeight: 500
    lineHeight: 54px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: "GT Walsheim Medium"
    fontSize: 39px
    fontWeight: 500
    lineHeight: 48.4px
    letterSpacing: -0.045em
  headline-md:
    fontFamily: "Inter Variable"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: "GT Walsheim Medium"
    fontSize: 21px
    fontWeight: 400
    lineHeight: 34px
    letterSpacing: -0.03em
  body-lg:
    fontFamily: "Inter Variable"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: "Inter Variable"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 23px
    letterSpacing: -0.01em
  body-sm:
    fontFamily: "Inter Variable"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: -0.005em
  label-lg:
    fontFamily: "Inter Variable"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: -0.01em
  label-md:
    fontFamily: "Inter Variable"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: -0.01em
  label-sm:
    fontFamily: "Inter Variable"
    fontSize: 11px
    fontWeight: 500
    lineHeight: 14px
    letterSpacing: 0.02em
  button:
    fontFamily: "Inter Variable"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: -0.01em
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 20px
  full: 9999px
spacing:
  xs: 6px
  sm: 14px
  md: 26px
  lg: 40px
  xl: 100px
components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.neutral}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "8px 10px"
    height: "40px"
  button-secondary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-surface}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "8px 10px"
    height: "40px"
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0px"
    height: "auto"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "16px"
  input:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "12px 14px"
  chip:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    padding: "6px 10px"
---

# Framer Dark Neon

## Overview

This system feels bold, futuristic, and highly polished, with a premium product-marketing tone rather than a playful consumer tone. It is designed for a design-savvy audience that expects speed, clarity, and confidence from an AI-powered creative platform. The visual language is dense with atmosphere but sparse in structure, using darkness and glow to make key actions feel theatrical and memorable.

## Colors

- **Primary (#0099FF):** A vivid electric blue used for energetic highlights, active states, and glow effects. It creates the brand’s neon signature and should be reserved for moments of emphasis.
- **Secondary (#FFFFFF):** Pure white used for primary surfaces, text, and high-priority actions. On black backgrounds it reads crisp, modern, and highly legible.
- **Tertiary (#111111):** A near-black UI tone for darker button fills and secondary containers. It keeps controls present without competing with the main content.
- **Neutral (#000000):** The foundational background color for the page and large content areas. It gives the interface a cinematic, void-like quality.
- **Surface (#0B0B0B):** A slightly lifted dark surface for cards and panels that need separation from the page background without breaking the monochrome feel.
- **Surface-2 (#161616):** A deeper elevated surface for inputs, dropdowns, and compact modules. It supports layered dark UI while staying subtle.
- **On-surface (#FFFFFF):** The default text and icon color on dark surfaces. Use it for body copy, labels, and core controls.
- **On-surface-muted (#A3A3A3):** A restrained gray for secondary metadata, inactive navigation, and less important labels.
- **Border (#374151):** A cool gray border used for hairline separation on cards and containers. It is understated, not decorative.
- **Error (#FF5A5F):** A clear alert color for validation and destructive feedback. It should remain rare to preserve the system’s minimal palette.

## Typography

Headlines rely on **GT Walsheim Medium** for a rounded, confident editorial voice. The largest display style is compact and tight-tracked, with negative letter-spacing that makes hero copy feel engineered and deliberate. Supporting headings can shift to **Inter Variable** for a slightly more utilitarian product feel when content gets denser.

Body text uses **Inter Variable** at comfortable sizes and modest line heights for clarity on dark backgrounds. Labels and buttons are slightly heavier to preserve readability at small sizes, especially in compact controls and navigation. The overall typography does not lean on uppercase styling; instead, it depends on weight, scale, and spacing for hierarchy.

## Layout & Spacing

The layout is a fixed-max-width marketing composition centered on the page, with generous outer margins and a strong vertical rhythm. Large sections are separated by the xl spacing step, while internal clusters use md and lg to keep the interface compact but breathable. The rhythm feels intentional and symmetrical, with a clear separation between navigation, hero copy, CTA cluster, and the featured product visual.

Padding is restrained inside controls and cards, while larger whitespace frames the hero and demonstration area. This creates a premium “spotlight” effect where the primary message is given ample room and secondary navigation remains lightweight. The spacing scale should stay discrete and consistent; avoid adding many in-between values.

## Elevation & Depth

Depth is achieved mostly through contrast, glow, and subtle borders rather than heavy shadows. The interface is intentionally flat at the page level, with faint 1px outlines and tonal layering used to separate surfaces. The bright blue radiance around key demo content acts as the primary depth cue and should be treated as a signature effect.

Cards and inputs should remain understated: dark fill, thin border, minimal shadow, and strong text contrast. Avoid glossy or material-like depth unless it supports the neon product showcase aesthetic. The hierarchy should come from luminosity and contrast, not from stacked drop shadows.

## Shapes

The shape language is soft-technical: rounded rectangles with controlled radii rather than fully pill-shaped forms. Interactive controls commonly use `rounded.md` for approachable buttons, while larger modules can use `rounded.lg` to feel more substantial. The result is modern and refined, with enough softness to balance the stark black palette.

Circular or fully rounded shapes should be used sparingly for icon-only elements and badges. Avoid sharp corners on primary controls unless the component is intentionally tertiary or text-only. The system should feel precise, not playful.

## Components

Buttons are compact and highly legible. `button-primary` is the main action style: white fill, dark text, `rounded.md`, and `40px` height with tight horizontal padding. `button-secondary` is the dark alternative with a near-black fill and white text, suitable for secondary CTAs like downloads or toggles. `button-tertiary` should be used for text-only or minimal actions, especially in navigation. Hover states should increase contrast or slightly brighten the surface rather than introducing new colors.

Cards should use the `card` token: dark surface, `rounded.md`, 1px border, and `16px` padding. They should feel like framed containers rather than raised panels. Keep card content high-contrast and avoid decorative shadows unless the card is part of a glowing showcase treatment.

Inputs should feel integrated with the dark UI, using `input` with a deeper surface, rounded corners, and moderate padding. Focus states should prioritize the primary blue accent and a clean outline or glow. Placeholder text should remain muted, but still readable on dark backgrounds.

Chips and small selectors should use `chip` styling: compact padding, `rounded.full`, and subtle surface contrast. They work best for filters, model tags, and lightweight state toggles. Icon-only buttons in demo areas should remain square-ish with soft rounding and can use the primary blue for active emphasis.

Navigation links and utility actions should stay visually quiet, using the label typography and muted colors unless active. When in doubt, keep chrome minimal and let the hero content and highlighted product preview do the talking.

## Do's and Don'ts

- Do keep the page background near-black and use blue glow sparingly as the brand’s signature accent.
- Do rely on typography scale and whitespace for hierarchy instead of heavy shadows or colorful surfaces.
- Do use compact, rounded controls with crisp contrast for primary actions.
- Do preserve thin borders and subtle tonal layers to separate dark UI surfaces.
- Don't introduce bright secondary hues that compete with the electric blue accent.
- Don't over-round every element into pills; keep most components in the 4px–12px radius range.
- Don't use dense paragraphs or crowded layouts in the hero area; the system depends on breathing room.
- Don't add decorative gradients, glass effects, or heavy elevation unless they support a focal showcase moment.