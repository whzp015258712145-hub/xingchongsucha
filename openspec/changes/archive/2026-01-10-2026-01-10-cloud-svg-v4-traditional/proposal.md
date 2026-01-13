# Proposal: Update Cloud SVG to Traditional Style (V4)

## Why
The user found the previous "divider" style cloud decoration "ugly" and specifically requested a design based on traditional Chinese "XiangYun" (Auspicious Cloud) or "Ruyi" patterns. The goal is to implement a path that mimics these classic motifs more authentically.

## What Changes
1.  **Refactor `RelationshipChart.tsx`:**
    *   Replace `XiangYunLeft` and `XiangYunRight` with a new SVG path that depicts a traditional "Ruyi" head or "Cloud Scroll" pattern.
    *   The design will feature characteristic spirals/curls and a flowing shape, avoiding the rigid look of the previous divider.
    *   Size: Adjusted to approx 50x25 or similar aspect ratio to fit the header.
    *   Style: Stroke-based (`stroke="currentColor"`) to maintain the Zen aesthetic, potentially with a slight fill or just outline.

## Scope
-   `src/components/RelationshipChart.tsx`: Update SVG components.
