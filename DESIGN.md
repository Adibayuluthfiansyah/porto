---
name: Tokyo Night Neovim Developer System
colors:
  surface: '#12131d'
  surface-dim: '#12131d'
  surface-bright: '#383844'
  surface-container-lowest: '#0c0d18'
  surface-container-low: '#1a1b26'
  surface-container: '#1e1f2a'
  surface-container-high: '#282935'
  surface-container-highest: '#333440'
  on-surface: '#e2e1f1'
  on-surface-variant: '#c3c6d3'
  inverse-surface: '#e2e1f1'
  inverse-on-surface: '#2f303b'
  outline: '#8d909d'
  outline-variant: '#434751'
  surface-tint: '#aec6ff'
  primary: '#aec6ff'
  on-primary: '#002e6b'
  primary-container: '#7aa2f7'
  on-primary-container: '#00367d'
  inverse-primary: '#305cac'
  secondary: '#7fd0ff'
  on-secondary: '#00344a'
  secondary-container: '#0075a1'
  on-secondary-container: '#e2f2ff'
  tertiary: '#d4bbff'
  on-tertiary: '#3d1b72'
  tertiary-container: '#b493ef'
  on-tertiary-container: '#46267c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#aec6ff'
  on-primary-fixed: '#001a43'
  on-primary-fixed-variant: '#0c4393'
  secondary-fixed: '#c5e7ff'
  secondary-fixed-dim: '#7fd0ff'
  on-secondary-fixed: '#001e2d'
  on-secondary-fixed-variant: '#004c6a'
  tertiary-fixed: '#ebdcff'
  tertiary-fixed-dim: '#d4bbff'
  on-tertiary-fixed: '#260058'
  on-tertiary-fixed-variant: '#54358a'
  background: '#12131d'
  on-background: '#e2e1f1'
  surface-variant: '#333440'
typography:
  headline-xl:
    fontFamily: JetBrains Mono
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.04em
  headline-xl-mobile:
    fontFamily: JetBrains Mono
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: JetBrains Mono
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 12px
    letterSpacing: 0.06em
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
spacing:
  gutter: 1rem
  gutter-mobile: 0.5rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system channels the atmospheric, high-performance visual identity of contemporary terminal workflows, specifically drawing directly from the iconic Tokyo Night palette, LazyVim statuslines, and high-efficiency modal editing environments. The target audience comprises senior software engineers, systems architects, open-source maintainers, and technical leaders who value functional clarity, keyboard-driven navigation, and the aesthetic precision of a customized Unix workstation.

The aesthetic fuses **terminal brutalism** with **subtle modern luminescence**. Interfaces behave like IDE buffers: razor-sharp geometry, information density governed by strict grid alignments, structural split-panes, and precise syntax highlighting cues rather than arbitrary marketing flourishes. It evokes total technical competence, deep focus, and an uncompromising developer-native lifestyle.

## Colors

The palette operates under an uncompromising dark mode that mimics low-light OLED terminal productivity.

### Core Canvas & Surfaces

- **Canvas / Root Background (`#16161e`)**: Deepest charcoal navy, representing inactive window regions and outer terminal framing.
- **Surface / Buffer Active (`#1a1b26`)**: Standard document or pane background.
- **Surface Elevated / Floating Panels (`#24283b`)**: Used for command palettes (Telescope), tooltips, and floating diagnostic windows.

### Structural Lines & Borders

- **Border Subtle (`#292e42`)**: Structural 1px division between editor splits, file tree dividers, and buffer tabs.
- **Border Active / Focused (`#414868`)**: Highlights active splits, focused inputs, or highlighted key combinations.

### Syntax Accents & Functional Roles

- **Primary Accent (`#7aa2f7`)**: Tokyo Blue; drives active selections, functions, cursor line indicators, and primary action states.
- **Secondary Accent (`#7dcfff`)**: Tokyo Cyan; designates constants, terminal shell prompts, active links, and directory names.
- **Tertiary Accent (`#bb9af7`)**: Tokyo Purple; captures language keywords, control flows, and structural tags.
- **Git Add / Success (`#9ece6a`)**: Fresh lime green for additions, passing tests, and normal mode indicators.
- **Git Delete / Critical (`#f7768e`)**: Rose red for deletions, errors, breakpoints, and recording states.
- **Warning / String Literal (`#e0af68`)**: Warm amber for string tokens, warnings, and attention chips.
- **Parameter / Alert Orange (`#ff9e64`)**: Radiant orange for numerical values, CLI flags, and keybinding modifiers.

### Text & Neutral Ramp

- **Foreground Base (`#c0caf5`)**: Main readable text and primary symbols.
- **Muted Text / Comments (`#565f89`)**: De-emphasized tokens, line numbers, and file metadata.

## Typography

The design system enforces a strict 100% monospaced typographic hierarchy utilizing **JetBrains Mono**. Proportional fonts are entirely excluded to preserve character grid alignment, code readability, and authentic terminal rhythm.

- **Ligatures & Numbers**: OpenType ligatures are supported for programming symbols (`=>`, `!=`, `===`), with zero-slashed numerical characters enabled by default.
- **ASCII Art & Headers**: Hero banners and major section transitions leverage fixed-width ASCII block graphics or large display text rendered with negative letter spacing to emulate terminal splash screens (e.g., Alpha-nvim or LazyVim dashboard headers).
- **Hierarchy through Weight & Color**: Rather than relying heavily on scale variations, hierarchy is primarily articulated through font-weight shifts (Bold vs Regular) combined with syntactical color changes (e.g., Purple for structural headings, Blue for interactive targets, Muted Grey for meta-information).

## Layout & Spacing

The layout is built around a rigorous split-pane terminal framework governed by an 8px / 0.5rem baseline unit. It eschews decorative asymmetrical sprawl in favor of pane-based vertical and horizontal splits.

### Grid Architecture

- **Desktop (1024px+)**: 12-column layout or segmented multi-pane arrangement (e.g., 260px file tree sidebar, flexible primary editor buffer, optional contextual side-split). Outer margins are set to `margin` (2rem), gutters to `gutter` (1rem).
- **Tablet (768px - 1023px)**: 8-column layout. Sidebars collapse into toggleable vertical trays or modal overlays mimicking mini-buffers.
- **Mobile (< 768px)**: Single column fluid view with rigid outer padding set to `margin-mobile` (1rem) and internal gaps reduced to `gutter-mobile` (0.5rem). The UI preserves the appearance of a mobile SSH terminal session.

Panes must maintain solid visual boundaries defined by continuous 1px rule lines rather than arbitrary empty space.

## Elevation & Depth

Depth in this system rejects conventional blurred drop shadows and skeuomorphic light sources. Elevation is established exclusively through **tonal layering**, **1px crisp perimeter borders**, and **subtle monochromatic auras**.

1. **Base Layer (`#16161e`)**: Ground-level workspace and inactive frame.
2. **Buffer Layer (`#1a1b26`)**: Main operational surfaces bounded by 1px `#292e42` lines.
3. **Modal & Palette Layer (`#24283b`)**: Command inputs, Telescope finders, and popups. Bounded by a high-contrast 1px border (`#414868`).
4. **Active Element Glow**: Highly focused interactive nodes (such as the active search result, focused split border, or keybinding badge) emit a tight, colored outline aura: `box-shadow: 0 0 12px -2px rgba(122, 162, 247, 0.25)`.
5. **Cursorline Highlight**: Interactive table rows and selectable list items rely on an active background tint of `#24283b` with a solid 2px left-border accent (`#7aa2f7`).

## Shapes

All structural elements adhere strictly to **`0` (Sharp)** geometry (`0px` border-radius).

Corners across frames, buffers, dropdown menus, buttons, search palettes, and tags must remain crisp and squared-off. This deliberate geometry mirrors native terminal emulators (Alacritty, Kitty, WezTerm) and preserves clean horizontal/vertical rasterization lines across all display densities. The only simulated curves are powerline glyphs or terminal statusline slant dividers rendered via font symbols or SVG masks.

## Components

### Buttons & Action Badges

- **Normal Action**: Flat `#24283b` background, 1px border `#414868`, text in `#c0caf5`. On hover, the border changes to `#7aa2f7` with a text shift to `#7dcfff`.
- **Primary / Leader Action**: Background `#7aa2f7`, text `#16161e`, font-weight 700. Hover shifts background to `#7dcfff`.
- **Vim Keybinding Badges (`<leader>fg`)**: Inset containers with `#16161e` background, 1px border `#414868`, text `#ff9e64`, font size `11px`, padding `2px 6px`.

### Bufferline Tabs (Navigation)

- Sits at the top of the buffer viewport.
- **Active Tab**: Background `#1a1b26`, text `#c0caf5`, top border 2px `#7aa2f7`, sides bounded by 1px `#292e42`.
- **Inactive Tab**: Background `#16161e`, text `#565f89`, 1px border `#292e42`. On hover, text becomes `#c0caf5`.
- **Close / Status Glyph**: Accompanied by terminal file icons (e.g., `init.lua`, `portfolio.tsx`) colored according to syntax rules.

### Statusline (Footer / Diagnostics)

- A bottom horizontal bar divided into segmented pill-like powerline blocks.
- **Mode Indicator Block**: Solid color block (`#9ece6a` for NORMAL, `#7aa2f7` for VISUAL, `#ff9e64` for INSERT), with black text `#16161e` and bold styling.
- **Diagnostics Segment**: Background `#24283b`, holding git diff indicators (`+12` in `#9ece6a`, `-3` in `#f7768e`) and error counts (`E:0` in `#f7768e`, `W:1` in `#e0af68`).

### Command Palette / Telescope Modal

- Centered overlay floating above workspace with backdrop dim (`rgba(22, 22, 30, 0.8)`).
- Modal container has `#24283b` background, 1px `#414868` perimeter border, and a subtle blue aura.
- Top section holds a single-line prompt prefixed with `> ` in `#7dcfff`.
- Results list uses an active row highlight (`#1f2335`) with an indicator glyph (`❯`) in `#7aa2f7`.

### Cards & Project Panes

- Rectangular containers with background `#1a1b26` and 1px border `#292e42`.
- Header bar resembles a mini-split titlebar (`#16161e`) displaying relative path conventions (`~/projects/engine`).
- Hovering raises the border to `#414868` and illuminates syntax accent badges inside.

### Inputs & Search Bars

- Background `#16161e`, 1px border `#292e42`, padding `8px 12px`.
- When active or focused, border transitions to `#7aa2f7` without standard OS outline rings. Cursor is simulated as a solid block (`#7aa2f7`) with blinking animation.

### Checkboxes & Radios

- Represented as textual Neovim markdown checkboxes: `[ ]` for unchecked, `[x]` with `#7aa2f7` check for checked. Sharp, monospaced ASCII rendering throughout.
