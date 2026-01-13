# Design: Two Column Bazi

## Layout
- `App.tsx` container: `flex flex-col lg:flex-row`.
- **Left Panel (Chart):** `flex-[2]`.
    - **Grid:** 5 Columns (Luck, Year, Month, Day, Hour).
    - **Rows:** "Tian" (Stems), "Ren" (Branches). *Note: Typically Ren is Hidden Stems, Di is Branches. I will map Branches to the "Ren" row as requested for now.*
    - **Visual:** "Dark background" for the chart area.
- **Right Panel (Analysis):** `flex-[1]`.
    - List of relationships.

## Components
- `MainLayout`: Wrapper.
- `BaziGrid`: The 5x2 grid.
    - Needs `userBazi` and `currentBazi`?
    - *Wait*, the prompt implies mixing them?
    - "Left... Chart Visualizer... Natal + Transit".
    - Usually Natal is one set of 4, Transit is another.
    - The prompt says "Fill Bazi data...".
    - It's ambiguous if "Tian/Ren" means "Natal/Transit" or "Stems/Branches".
    - *Re-reading Prompt:* "Upper part labeled 'Tian', Lower part labeled 'Ren'". "Columns: Luck, Year, Month, Day, Hour".
    - This structure (Luck + 4 Pillars) is standard for a **Single Chart**.
    - If we are comparing **User vs Current**, we usually have TWO sets of these.
    - *Hypothesis:* The user wants to see **Two Sets** of 2x5 grids? Or just ONE set that combines them?
    - The prompt mentions "Left chart... red border highlighting Zi and Wu".
    - If it's a relationship "Zi (Year) - Wu (Month)", they are in the same chart.
    - If it's "Zi (User) - Wu (Current)", we need BOTH charts visible.
    - I will assume **Two Charts** (User and Current) stacked vertically in the Left Panel, or perhaps just the User Chart if they are analyzing only Natal?
    - *Constraint:* The app is "XingChongSuCha" (Interaction Lookup). It MUST show interactions between User and Time.
    - *Decision:* I will render **Two Grids** on the Left Panel.
        1.  **Top Grid:** User (Natal). Label: "天 (Tian) - 命主".
        2.  **Bottom Grid:** Current (Transit). Label: "人 (Ren) - 流时".
        - *Correction:* The prompt says "Upper part labeled 'Tian', Lower part labeled 'Ren'".
        - Maybe "Tian" = Natal, "Ren" = Transit?
        - Or maybe "Tian" = Stems, "Ren" = Branches of the *Combined* view?
        - Let's stick to the safest interpretation for a "Relationship Tool": **Show both charts**.
        - I will use the "Tian" label for the User Chart area and "Ren" for the Current Chart area? No, that's weird terminology.
        - Let's look at the prompt again: "视觉上分为上下两组：上面部分标注为‘天’，下面部分标注为‘人’... 2行x5列".
        - This describes a **Single Chart** structure (Stems on top, Branches on bottom).
        - So where is the "Current Time"?
        - Maybe the "Luck" column implies this is the *Natal* chart + *Luck* pillar.
        - But where is the *Current* chart?
        - If I only show Natal, I can't highlight "User Zi vs Current Wu".
        - **Conclusion:** The user likely wants to see **Two Sets** of these 2x5 grids, OR the prompt's description of "Tian/Ren" specifically refers to the *layout of rows* within a chart.
        - I will implement **Two Sections** on the left.
            - Section 1: User Chart (2x5 grid).
            - Section 2: Current Chart (2x5 grid).
            - *Refining the grid:* 5 columns: [Luck, Year, Month, Day, Hour].
            - Since I don't have "Luck" calculation, I'll render an empty/placeholder column or just "Year Month Day Hour" (4 cols) + "Luck" (empty). I'll stick to 5 cols to match the request.

## Data Mapping
- **Columns:** `luck`, `year`, `month`, `day`, `hour`.
- **Rows:** `gan` (Tian), `zhi` (Ren/Di).

