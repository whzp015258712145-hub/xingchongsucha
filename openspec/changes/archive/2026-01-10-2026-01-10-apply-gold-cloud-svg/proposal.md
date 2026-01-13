# Proposal: Apply Gold Cloud SVG Decoration

## Why
The user provided a new, more detailed "Gold Cloud" SVG design with a linear gradient and specifically requested to replace the current decoration while keeping everything else unchanged.

## What Changes
1.  **Refactor `RelationshipChart.tsx`:**
    *   Replace `XiangYunLeft` and `XiangYunRight` with the new SVG code.
    *   Include the `<defs>` and `<linearGradient>` within each SVG component to ensure the gradient works correctly.
    *   Update the `viewBox`, `width`, and `height` to match the provided dimensions (`200x100`, `0 0 1024 512`).
    *   Maintain the current layout placement.

## Scope
-   `src/components/RelationshipChart.tsx`: Update the SVG components.
