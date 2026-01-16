# Design: Dark Mode Palette

## Philosophy
Maintain the "Zen" aesthetic. In dark mode, use deep warm grays (`stone-950`, `stone-900`) instead of pure black.

## Color Mapping

| Element | Light (Current) | Dark (Target) |
| :--- | :--- | :--- |
| Global Background | `bg-stone-50` | `dark:bg-stone-950` |
| Surface/Card BG | `bg-white` | `dark:bg-stone-900` |
| Primary Text | `text-stone-900` | `dark:text-stone-100` |
| Secondary Text | `text-stone-400` / `text-stone-500` | `dark:text-stone-500` |
| Border | `border-stone-200` | `dark:border-stone-800` |
| Accent Red (Text) | `text-red-800` | `dark:text-red-400` |
| Accent Red (BG) | `bg-red-500` | `dark:bg-red-600` |

## Asset Handling
- **XiangYun Images:** NO `dark:invert` or any color modification. They will remain in their original color against the dark background.

## Global CSS
Add `color-scheme: light dark` to `:root` in `src/index.css`.
Set `body` background to `bg-stone-50` and `dark:bg-stone-950` to ensure no "white flash" on page load/overscroll.
