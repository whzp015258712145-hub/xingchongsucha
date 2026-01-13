# Proposal: Increase Chart Spacing and Breathing Room

## Why
The user wants to make the main analysis area feel more open and premium by increasing the whitespace (padding and margins) around and between the "Heaven" and "Human" sections.

## What Changes
1.  **Refactor `RelationshipChart.tsx`:**
    *   **Panel Padding:** Increase the inner padding of the left panel to `p-12 md:p-24` to create a more focused, centered look with heavy surrounding whitespace.
    *   **Section Spacing:** Increase the bottom margin of the top section ("Heaven") to `mb-32` to clearly separate it from the bottom section ("Human").
    *   **Header Spacing:** Increase the space between the cloud-decorated headers and the GanZhi grids to `mb-16`.
2.  **Container Spacing:** Adjust the top margin of the entire chart container to `mt-20` for better separation from the input area.

## Scope
- `src/components/RelationshipChart.tsx`: Spacing and padding adjustments.
