---
name: nsz Portfolio & Freelance Studio
description: Fast, high-converting websites and bespoke internal tools for local businesses.
colors:
  primary: "#111111"
  neutral-bg: "#f4f4f4"
  neutral-bg-strong: "#e8e8e8"
  neutral-panel: "#ffffff"
  neutral-panel-strong: "#f0f0f0"
  neutral-text: "#111111"
  neutral-muted: "#5a5a5a"
  neutral-line: "rgba(17, 17, 17, 0.12)"
  success: "#2f9e62"
  error: "#e03131"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.4rem, 4.2vw, 3.8rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.85rem, 3.2vw, 2.6rem)"
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Outfit, Arial, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Outfit, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.78rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.04em"
rounded:
  sm: "0.375rem"
  md: "0.75rem"
  lg: "1rem"
  full: "999px"
spacing:
  xs: "0.5rem"
  sm: "0.85rem"
  md: "1.4rem"
  lg: "2.4rem"
  xl: "4.5rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.md}"
    padding: "0.85rem 1.4rem"
  button-primary-hover:
    backgroundColor: "#000000"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.neutral-panel}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "0.85rem 1.4rem"
  card-panel:
    backgroundColor: "{colors.neutral-panel}"
    rounded: "{rounded.md}"
    padding: "1.4rem"
---

# Design System: nsz

## Overview

**Creative North Star: "The Master Workshop"**

A high-craft, editorial design system built for a modern web engineering practice. It balances the warm, tangible authority of an artisan workshop with the razor-sharp execution of production software. The atmosphere is quiet, confident, and grounded: tactile eggshell paper, deep ink typography, subtle physical grain, and zero decorative fluff.

The system rejects generic SaaS templates, neon gradients, and floating decorative cards in favor of generous whitespace, editorial asymmetric rhythm, and authentic project proof.

**Key Characteristics:**
- **Tactile warmth:** Parchment canvas texture paired with high-contrast ink typography.
- **Asymmetric editorial rhythm:** Alternating between full-width statements, two-column editorial splits, and structured pricing comparison grids.
- **Zero-bullshit clarity:** Direct, plain-language hierarchy with zero placeholder buzzwords.

## Colors

A restrained monochrome palette rooted in physical printing materials, elevated by tactile micro-state accents.

### Primary
- **Deep Ink** (`#111111` in Light / `#f4f4f4` in Dark): The primary voice of authority. Used for major display headings, primary interactive surfaces, and brand logotypes.

### Neutral
- **Canvas Paper** (`#f4f4f4` in Light / `#0c0c0c` in Dark): The foundation surface. Replaces sterile cool white with a warm, natural eggshell background.
- **Strong Canvas** (`#e8e8e8` in Light / `#161616` in Dark): Section grounding for alternating visual rhythm.
- **Studio Panel** (`#ffffff` in Light / `#141414` in Dark): Elevated surface for cards, modals, and interactive containers.
- **Subtle Line** (`rgba(17, 17, 17, 0.12)` in Light / `rgba(244, 244, 244, 0.12)` in Dark): Hairline dividers that define structure without visual weight.
- **Editorial Muted** (`#5a5a5a` in Light / `#a3a3a3` in Dark): Secondary body text, captions, and supporting metadata.

### Accents & Status
- **Active Green** (`#2f9e62`): Availability indicator pulse and inline confirmation success alerts.
- **Alert Red** (`#e03131`): Form validation and error states.

### Named Rules
**The Rarity Rule.** High-saturation color appears exclusively on functional status signals (availability dots, form validation). The interface itself speaks in pure typography and tonal contrast.

## Typography

**Display Font:** Fraunces (serif, optical sizing `opsz: 9..144`) with Georgia fallback.  
**Body Font:** Outfit (clean modern geometric sans) with Arial fallback.  
**Mono Font:** JetBrains Mono (monospaced) for technical badges and stack metadata.

**Character:** Fraunces delivers editorial gravitas and editorial weight to display titles, while Outfit ensures effortless legibility and modern clarity across mobile viewports.

### Hierarchy
- **Display** (600 weight, `clamp(2.4rem, 4.2vw, 3.8rem)`, line-height 1.12, letter-spacing `-0.03em`): Hero headline and primary page titles.
- **Headline** (600 weight, `clamp(1.85rem, 3.2vw, 2.6rem)`, line-height 1.18, letter-spacing `-0.025em`): Major section headings.
- **Title** (600 weight, `1.2rem`, line-height 1.3): Card titles, feature headers, and process step names.
- **Body** (400 weight, `1rem`, line-height 1.6, max line length 65–75ch): Paragraph copy and explanatory ledes.
- **Label / Mono** (500 weight, `0.78rem`, letter-spacing `0.04em`): Technology stack tags, project metadata, and timeline badges.

### Named Rules
**The No-Kicker Rule.** Headings carry their own weight without redundant category tags or tiny uppercase eyebrows above them. Let the title speak.

## Layout

A mobile-first 12-column responsive grid with a maximum content container width of `72rem` (1152px) and fluid inline padding (`clamp(1.2rem, 3.5vw, 2.5rem)`).

- **Section Spacing:** Generous vertical rhythm using `--space-xl` (`clamp(3.8rem, 7vw, 6rem)`).
- **Asymmetric Editorial Composition:** Sections like "Why work with me" break the grid with a 0.95fr / 1.05fr two-column editorial split (headline + lede on left, stacked text pillars on right).
- **Comparison Grids:** Pricing utilizes a 3-column symmetric grid with the featured tier elevated via `-6px` translate and tonal inversion.

## Elevation & Depth

Surfaces are tactile and flat at rest. Depth is established through tonal layering (Canvas `#f4f4f4` vs. Panel `#ffffff`) combined with hairline `1px` translucent borders (`var(--line)`).

### Shadow Vocabulary
- **Ambient Elevation** (`box-shadow: 0 24px 60px rgba(0, 0, 0, 0.08)`): Reserved for major device frames, elevated showcase cards, and floating dialogs.
- **Interactive Lift** (`transform: translateY(-2px)`): Smooth micro-elevation applied during button and card `:hover` / `:focus-visible` interactions.

### Named Rules
**The Tonal Depth Rule.** Depth comes from material contrast and precise borders, never from heavy drop shadows or colored glowing halos.

## Shapes

- **Base Radius:** `0.75rem` (12px) applied to cards, panels, inputs, and device frames.
- **Pill Geometry:** `999px` fully rounded radius for compact interactive controls (theme toggle, navigation tags, mobile badges).
- **Window Chrome:** Rounded top bar with three 10px circular buttons and a centered URL monospace pill representing real browser software.

## Components

### Buttons
- **Shape:** `0.75rem` (12px) border radius.
- **Primary:** Deep Ink background (`#111111`), Canvas text (`#f4f4f4`), `padding: 0.85rem 1.4rem`, font-weight 600.
- **Hover / Focus:** Lifts `translateY(-2px)` with subtle darkening transition (`220ms ease`).
- **Secondary:** Studio Panel background with solid `1px` border matching text color.

### Theme Toggle
- **Geometry:** 44×44px circular icon button (`min-width: 44px; min-height: 44px`).
- **Behavior:** Transitions smoothly between Moon and Sun icons without layout shift, persisting state in `localStorage`.

### Device Mockup Frame
- **Structure:** Encapsulates live project screenshots in a clean desktop window frame complete with URL bar and window controls.
- **Integrity:** Zero decorative overlays or floating badges; lets the real product screenshots take full focus.

### Form & Inputs
- **Style:** Clean 1px translucent border (`var(--line)`), Studio Panel background, `0.75rem` radius, `padding: 0.8rem 1rem`.
- **States:** Accent color border on `:focus-visible`, inline status container for async Web3Forms submission feedback.

### FAQ Accordion
- **Interaction:** Semantic `<details>` / `<summary>` disclosure with a clean `+` / `−` right-aligned indicator that toggles instantly upon open state.

## Do's and Don'ts

### Do:
- **Do** maintain a strict 65–75ch character measure for all long-form body paragraphs.
- **Do** preserve the tactile eggshell texture and warm parchment tones in light mode.
- **Do** show real project screens with authentic operational details instead of generic placeholder art.
- **Do** ensure every interactive element meets the 44×44px mobile touch target minimum.

### Don't:
- **Don't** reintroduce uppercase kicker tags or eyebrow labels above section headings.
- **Don't** use decorative gradient text or colored shadow halos.
- **Don't** stack consecutive 3-card icon grids without varying the layout rhythm.
- **Don't** use generic buzzwords ("streamline", "seamless", "synergy") in project descriptions.
