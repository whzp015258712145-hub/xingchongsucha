# Moderate Content Upscale

## Why
The user requested to scale up the UI elements (Clock, Bazi Pillars, Relationship List) to be larger than the original but smaller than the previous "massive" attempt. Using inline pixel values will ensure precise control and avoid the `rem` scaling issues encountered previously.

## What Changes
1.  **`CurrentDateDisplay.tsx`**:
    - Digits: Scale to `56px` (approx `text-6xl`).
    - Labels: Scale to `28px` (approx `text-2xl/3xl`).
2.  **`BaziInput.tsx`**:
    - Input text: Scale to `22px`.
    - Padding: Increase to `12px`.
3.  **`RelationshipChart.tsx`**:
    - **Pillars**:
        - Text: Scale to `48px` (approx `text-5xl`).
        - Container: Scale to `100px` (approx `w-24`).
    - **List**:
        - Text: Scale to `24px` (approx `text-2xl`).
        - Gap: Increase to `24px`.
        - Padding: Increase to `48px`.

## Risks
- None. Pixel values are stable.
