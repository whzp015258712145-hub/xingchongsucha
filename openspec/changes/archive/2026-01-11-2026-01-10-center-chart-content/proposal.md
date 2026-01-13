# Proposal: Center Chart Content Horizontally

## Why
The user observed that the "Heaven" and "Human" sections are visually aligned to the left within the large left panel (70% width), creating an unbalanced empty space on the right. This is likely due to the container constraints or alignment settings not strictly enforcing horizontal centering within the larger panel.

## What Changes
1.  **Refactor `RelationshipChart.tsx`:**
    *   **Container Alignment:** Update the Left Panel container (`flex-[7]`) to strictly enforce horizontal centering of its children using `items-center`.
    *   **Width Management:** Ensure the inner section wrappers (`Heaven` and `Human`) and the `Spacer` allow themselves to be centered (e.g., removing `w-full` if it conflicts, or relying on `items-center`).
    *   **Grid Container:** Relax the `max-w-xl` constraint if necessary, or ensure the grid container itself is centered.

## Scope
- `src/components/RelationshipChart.tsx`
