# Proposal: UI Polish and Bug Fixes

## Why
The current UI has several visual inconsistencies and unnecessary elements that detract from the "Zen/Minimalist" aesthetic.
1.  Animations are distracting.
2.  Default borders on chart cells create clutter; they should only appear on interaction.
3.  Headings ("天", "人") are not centered properly.
4.  The "刑冲合会分析" heading is redundant and ugly.
5.  The analysis list items are too bulky ("long strips").

## What Changes
1.  **Remove Animations:** Delete `fadeIn` keyframes and usage in `index.css` and `App.tsx`.
2.  **Clean Chart Grid:**
    *   Remove default borders (`border-stone-100`/`border-stone-50`) from Gan/Zhi cells.
    *   Only apply borders when `isHighlighted` is true.
3.  **Center Headings:**
    *   Center the "天" and "人" labels relative to the grid.
    *   Ensure the "Human" grid is perfectly centered below the "Heaven" grid.
4.  **Remove Sidebar Header:** Delete the "刑冲合会分析" title.
5.  **Redesign Analysis List:**
    *   Replace the "list of bars" with a cleaner, tag-cloud or minimal list style.
    *   Use a softer, more elegant interaction state (e.g., simple text color change or subtle background pill) instead of heavy cards.
    *   *Design Choice:* I will use a minimal vertical list of clickable text items that show a subtle indicator when active, removing the heavy borders and shadows.

## Scope
-   `src/index.css`: Remove animations.
-   `src/App.tsx`: Remove animation classes.
-   `src/components/RelationshipChart.tsx`:
    -   Update Grid styling (remove default borders).
    -   Update Layout (centering headers).
    -   Refactor Right Panel (remove header, redesign list items).

