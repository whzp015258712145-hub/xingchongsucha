# Proposal: Apply Specific Cloud SVG Decoration

## Why
The user provided a specific SVG code for the "XiangYun" (Auspicious Cloud) decoration and requested an exact replacement while keeping all other logic unchanged. This is to achieve a more precise visual style as per their design preference.

## What Changes
1.  **Refactor `RelationshipChart.tsx`:**
    *   Replace the contents of `XiangYunLeft` and `XiangYunRight` components with the provided SVG paths.
    *   Adjust the `viewBox`, `width`, and `height` to match the provided code (`120x40`).
    *   Ensure the `stroke` attribute is set to `currentColor` so it continues to respect the theme's color palette (`text-stone-300`).

## Scope
-   `src/components/RelationshipChart.tsx`: Update the SVG components.
