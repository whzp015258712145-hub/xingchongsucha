# Proposal: Redesign Bazi Layout

## Why
The current layout is functional but lacks the specific visual structure requested for a professional Bazi analysis ("天" and "人" grouping). The user wants a split-screen design (70% chart / 30% list) with a grid system that aligns with traditional reading habits (Top: Time/Luck, Bottom: Natal/User).

## What Changes
1.  **Layout Split:** Move to a strict left/right layout (flex/grid).
    *   Left (70%): The Bazi Chart.
    *   Right (30%): The Relationship List.
2.  **Chart Structure (Left):**
    *   **Section 1: "天" (Heaven):** Represents the *Current Time* (or Dynamic aspect).
        *   Columns: 5 (DaYun*, Year, Month, Day, Hour).
        *   *Note on DaYun:* Since we don't calculate DaYun yet, this column will be a placeholder or marked "运".
    *   **Section 2: "人" (Human):** Represents the *User Bazi* (Natal aspect).
        *   Columns: 4 (Year, Month, Day, Hour).
    *   **Cells:** Each column has Gan (Top) and Zhi (Bottom).
3.  **Analysis Interaction (Right):**
    *   List relationships cleanly.
    *   Clicking a relationship draws a `.highlight-box` around the specific Gan/Zhi in the Left chart.
4.  **Styling:**
    *   Preserve the "Zen/Minimalist" aesthetic.
    *   Implement the `.highlight-box` as a distinct square border.

## Scope
-   **Files:** `RelationshipChart.tsx`, `App.tsx` (for container width), `App.css` (for new highlight styles).
-   **Logic:** Update the mapping in `RelationshipChart` to ensure the "User" data goes to "Human" (bottom) and "Current" data goes to "Heaven" (top). Wait, usually "Heaven" is above "Human". The prompt says: "Top group: Heaven... Bottom group: Human".
    -   *Correction:* In standard Bazi reading, the "Dynamic" (Flowing Time) is often compared *against* the "Static" (User).
    -   I will follow the prompt's explicit instruction:
        -   Top = "天" (Heaven) = 5 cols (DaYun + 4 Pillars). -> Corresponds to *Current Time* context in this app.
        -   Bottom = "人" (Human) = 4 cols. -> Corresponds to *User Bazi*.
-   **DaYun Constraint:** Since DaYun calculation is missing, I will render the "运" column in the top row as a placeholder (empty or "-") to match the layout requirement without breaking the app logic.

