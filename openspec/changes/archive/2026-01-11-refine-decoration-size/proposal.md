# Refine Decoration Size

## Why
The previously added PNG cloud decorations were deemed too large by the user. They need to be scaled down proportionally to better fit the overall visual balance of the chart headers.

## What Changes
1.  **Component (`RelationshipChart.tsx`):**
    - Reduce the width of the `xiangyun.png` images from `w-20` (80px) to `w-12` (48px) to achieve a more delicate and balanced look.

## Risks
- **Visibility:** If too small, the details of the cloud pattern might be lost.
