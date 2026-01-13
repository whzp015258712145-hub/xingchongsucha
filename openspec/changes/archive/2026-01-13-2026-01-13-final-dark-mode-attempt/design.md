# Design: Safe Dark Mode

## Principles
- **No Config Changes**: Keep `@tailwind` directives and `tailwind.config.js` exactly as they are.
- **Color-Only Overrides**: Only use `dark:` for `bg-`, `text-`, `border-`, and `shadow-`.
- **Preserve Assets**: Do NOT touch image `invert` or filter properties.

## Palette
- **Background**: `bg-stone-50` -> `dark:bg-stone-950`
- **Surface/Card**: `bg-white` -> `dark:bg-stone-900`
- **Border**: `border-stone-200` -> `dark:border-stone-800`
- **Text Primary**: `text-stone-900` -> `dark:text-stone-100`
- **Text Secondary**: `text-stone-400` -> `dark:text-stone-500`
- **Accents**: Keep existing red shades but use `red-400` for text in dark mode for contrast.

## Browser Hint
Add `<meta name="color-scheme" content="light dark">` or style tag to `index.html` to help the browser and plugins understand the app supports both modes natively.
