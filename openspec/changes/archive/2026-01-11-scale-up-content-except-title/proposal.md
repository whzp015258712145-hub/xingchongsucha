# Scale Up Content (Except Title)

## Why
The user requested another round of proportional scaling for all UI elements *except* the main title ("刑冲速查"). Specifically, the bottom "Relationships" panel needs to be larger, along with the main chart and clock.

## What Changes
1.  **`CurrentDateDisplay.tsx`**:
    - Digits: `text-5xl md:text-6xl` -> `text-6xl md:text-7xl`.
    - Labels: `text-3xl` -> `text-4xl`.
2.  **`BaziInput.tsx`**:
    - Input text: `text-xl` -> `text-2xl`.
    - Labels: `text-sm` -> `text-base`.
3.  **`RelationshipChart.tsx`**:
    - Headers ("Heaven/Human"): `text-4xl` -> `text-5xl`.
    - Icons: `80px` -> `96px` (approx 20% increase).
    - Pillars:
        - Container: `w-20/32` -> `w-24/40`.
        - Text: `text-4xl/6xl` -> `text-5xl/7xl`.
    - Relationship List (Right Panel):
        - Item Text: `text-2xl` -> `text-3xl`.
        - Padding: `p-16` -> `p-20`.
        - Gap: `gap-6` -> `gap-8`.

## Risks
- **Layout Overflow**: Elements are getting very large. Flex wrap might occur on smaller desktop screens, but on the user's likely large display, it should look "grand".
