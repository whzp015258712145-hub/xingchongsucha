# Replace Cloud Decoration with Image

## Why
The user requested to replace the existing SVG "XiangYun" (Cloud) vector graphics with a specific PNG asset (`xiangyun.png`) provided in the project folder. This ensures the visual style matches the user's provided asset.

## What Changes
1.  **Assets:** Import `src/assets/xiangyun.png`.
2.  **Component (`RelationshipChart.tsx`):**
    - Remove the `XiangYunLeft` and `XiangYunRight` SVG functional components.
    - Replace the usages with `<img>` tags referencing the new PNG.
    - Apply `scale-x-[-1]` (mirroring) to the right-side image to maintain symmetry.
    - Maintain the existing size constraints (approx 80px width) to preserve layout balance.

## Risks
- **Visual Quality:** PNGs are raster images; scaling might blur them if the source is small, or they might look different than the sharp SVG.
- **Sizing:** Need to ensure the new image fits well within the `flex` layout without shifting the "Heaven/Human" text.
