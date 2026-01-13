# Proposal: Update Auspicious Cloud Decoration

## Why
The user is dissatisfied with the current simplistic "circle/pill" or basic line decoration for the "Heaven" and "Human" headers. They specifically requested replacing it with a high-fidelity SVG path that mimics traditional "XiangYun" (Auspicious Cloud) patterns, as illustrated in their reference (Figure 2).

## What Changes
1.  **Refactor `RelationshipChart.tsx`:**
    *   Replace the existing `XiangYunLeft` and `XiangYunRight` inline SVGs.
    *   Use a new, more detailed SVG `path` data that depicts a traditional Chinese cloud curl (spiral/flowing shape).
    *   Adjust the size and color (likely keeping the Zen `stone` or potentially a subtle gold/amber if appropriate, but adhering to the user's "Zen" request) to fit the header layout.

## Scope
-   `src/components/RelationshipChart.tsx`: Update the SVG paths.

## Assets
-   I will use a procedurally defined path or a high-quality standard cloud pattern path directly in the code (no external file needed, keeping it inline for simplicity as per the current architecture).

