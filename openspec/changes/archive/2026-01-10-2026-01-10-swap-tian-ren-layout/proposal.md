# Proposal: Swap Heaven and Human Sections

## Why
The user pointed out that the current arrangement of "Heaven" (Tian) and "Human" (Ren) is backwards. Specifically, the "Human" section should contain the 5 pillars (Luck + Time) and be at the bottom, while the "Heaven" section should contain the 4 natal pillars and be at the top.

## What Changes
1.  **Refactor `RelationshipChart.tsx`:**
    *   **Swap Top and Bottom sections:**
        *   The **Top** section will now be labeled **"天" (Heaven)** and display the **User's Natal Bazi (4 pillars)**.
        *   The **Bottom** section will now be labeled **"人" (Human)** and display the **Current Time + Luck (5 pillars)**.
    *   **Move Logic:** The DaYun calculation, gender toggle, and "男大运/女大运" label logic will move to the bottom section.
    *   **Grid Alignment:** Update the grid column definitions to ensure the 4-pillar top grid is centered relative to the 5-pillar bottom grid.
2.  **Maintain Styles:** Keep the gold-gradient cloud decorations and the glassmorphism aesthetic.

## Scope
- `src/components/RelationshipChart.tsx`: Layout and label swap.
