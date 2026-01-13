# Proposal: Update Cloud SVG Decoration (V2)

## Why
The user wants to replace the current cloud SVGs with a new, more intricate SVG design provided in the prompt. This change only affects the visual decoration of the "Heaven" and "Human" headers.

## What Changes
1.  **Refactor `RelationshipChart.tsx`:**
    *   Update `XiangYunLeft` and `XiangYunRight` components with the new SVG path and `viewBox`.
    *   Set `fill="currentColor"` and adjust opacity to ensure consistency with the Zen theme.
    *   Maintain the current layout and dimensions.

## Scope
-   `src/components/RelationshipChart.tsx`: Update the SVG paths.
