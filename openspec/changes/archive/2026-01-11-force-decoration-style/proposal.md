# Force Decoration Style with Inline CSS

## Why
Analysis of browser diagnostic data confirmed that Tailwind utility classes (like `w-6`) are not being loaded/generated in the user's environment, causing the PNG decorations to render at their native 620px size. Additionally, `transform` syntax issues were detected. Using inline React `style` attributes will bypass CSS loading issues and ensure the decorations are sized correctly.

## What Changes
1.  **Component (`RelationshipChart.tsx`):**
    - Replace `className="w-6 ..."` with `style={{ width: '24px', height: 'auto', opacity: 0.8 }}` on all cloud images.
    - Replace `className="... transform scale-x-[-1]"` with `style={{ width: '24px', height: 'auto', opacity: 0.8, transform: 'scaleX(-1)' }}` for right-side images.
    - Maintain existing layout `gap` and `margin` classes.

## Risks
- **Over-specialization:** Inline styles bypass the CSS framework, but in this specific environment, it's the only way to guarantee the visual result.
