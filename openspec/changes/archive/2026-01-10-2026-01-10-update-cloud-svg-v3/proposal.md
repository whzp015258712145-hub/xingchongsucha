# Proposal: Update Cloud SVG Decoration (V3)

## Why
The user wants to replace the current cloud SVGs with a new "cloud-divider" style SVG design provided in the prompt.

## What Changes
1.  **Refactor `RelationshipChart.tsx`:**
    *   Update `XiangYunLeft` and `XiangYunRight` components with the new SVG paths and `viewBox`.
    *   Ensure `stroke="currentColor"` and `fill="currentColor"` (for the center circle) are used.
    *   Adjust the rendering size to fit the header layout.

## Scope
-   `src/components/RelationshipChart.tsx`: Update the SVG components.
