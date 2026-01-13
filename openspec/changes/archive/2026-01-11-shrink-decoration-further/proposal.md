# Shrink Decoration Further

## Why
The cloud decorations are still perceived as too large by the user. They need to be significantly smaller to complement the typography rather than dominate it.

## What Changes
1.  **Component (`RelationshipChart.tsx`):**
    - Reduce the width of the `xiangyun.png` images from `w-12` (48px) to `w-6` (24px).
    - Reduce the `gap` between the images and the text from `gap-6` to `gap-3` to keep the header compact.

## Risks
- **Loss of Detail:** At 24px, the cloud pattern might become very subtle.
