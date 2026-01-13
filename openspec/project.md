# Project Context

## Purpose
A web application "刑冲速查" (XingChongSuCha) to quickly look up Bazi (Four Pillars of Destiny) relationships. It displays the current date in Gan-Zhi format, allows users to input their Bazi, and visualizes relationships (Punishment, Clash, Combination, etc.) between the user's Bazi and the current time.

## Tech Stack
- React (Vite)
- TypeScript
- Tailwind CSS
- lunar-javascript (for Lunar/Solar calendar and GanZhi conversion)

## Project Conventions

### Code Style
- Functional React components with Hooks.
- TypeScript for type safety.
- Tailwind CSS for styling.
- Prettier/ESLint for formatting.

### Architecture Patterns
- `components/`: UI components.
- `utils/`: Calculation logic (Bazi relationships).
- `hooks/`: Custom hooks for time/date state.

## Domain Context
- **Gan-Zhi (干支):** Heavenly Stems and Earthly Branches.
- **Relationships:**
  - **Xing (刑):** Punishment.
  - **Chong (冲):** Clash.
  - **He (合):** Combination (Six Combination, Three Harmony, Three Meeting).
  - **Ke (克):** Control.
  - **Hai (害):** Harm.

## Important Constraints
- Design must be elegant, simple, and aesthetically pleasing.
- Must be responsive (web-based).