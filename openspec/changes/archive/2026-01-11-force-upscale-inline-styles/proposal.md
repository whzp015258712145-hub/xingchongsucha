# Force Upscale with Inline Styles

## Why
Tailwind utility classes (e.g., `text-7xl`) are failing to apply in the user's environment due to persistent build/cache issues. To guarantee the requested visual upscale, we must switch to inline styles for font sizes and dimensions.

## What Changes
1.  **`CurrentDateDisplay.tsx`**:
    - Replace `text-6xl/7xl` with `style={{ fontSize: '4.5rem' }}` (approx 72px).
    - Replace `text-4xl` labels with `style={{ fontSize: '2.25rem' }}` (approx 36px).
2.  **`BaziInput.tsx`**:
    - Replace `text-2xl` inputs with `style={{ fontSize: '1.5rem', padding: '1.5rem' }}`.
3.  **`RelationshipChart.tsx`**:
    - **Headers**: "Heaven/Human" `text-5xl` -> `style={{ fontSize: '3rem' }}`.
    - **Icons**: `width: 96px` (already inline, confirm it persists).
    - **Pillars**:
        - Container: `w-24/40` -> `style={{ width: '10rem', height: '10rem' }}` (160px).
        - Text: `text-5xl/7xl` -> `style={{ fontSize: '4.5rem' }}`.
    - **Relationship List**:
        - Text: `text-3xl` -> `style={{ fontSize: '1.875rem' }}`.
        - Padding: `p-20` -> `style={{ padding: '5rem' }}`.

## Risks
- **Maintenance**: Inline styles are harder to maintain than classes, but necessary here for reliability.
