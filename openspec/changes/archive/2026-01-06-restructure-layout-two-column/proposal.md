# Proposal: Restructure Layout Two Column

## Summary
Restructure the application's main view into a two-column layout. Left column displays the Chart Visualizer (Natal + Transit in a 2x5 grid including "Luck/Yun"). Right column displays the Analysis Results (Relationships).

## Motivation
To match the user's specific hand-drawn wireframe and improve information density and visual flow.

## Goals
- **Macro Layout:** Flex row container. Left (Chart) vs Right (Analysis).
- **Left Panel (Chart):**
    - 5 Columns: [Luck, Year, Month, Day, Hour].
    - 2 Rows (Groups): "Tian" (Heaven/Natal?) vs "Ren" (Man/Hidden?). *Correction:* The prompt says "Top group labeled Tian, Bottom group labeled Ren".
    - Actually, typically "Tian" refers to Heavenly Stems and "Di" to Earthly Branches. Or "Tian/Ren/Di".
    - The prompt says: "Top part labeled Tian, Bottom part labeled Ren".
    - And "Fill Bazi data... into this 2x5 grid".
    - This implies: Row 1 = Heavenly Stems. Row 2 = Earthly Branches.
    - Columns = [Luck, Year, Month, Day, Hour].
    - *Wait*, standard Bazi is 4 pillars. "Luck" (DaYun) is the 5th factor often shown.
    - **Data Gap:** We don't calculate "Luck" (DaYun) yet. I will add a placeholder for "Luck" column for now or leave it empty/static.
- **Right Panel (Analysis):**
    - Move the relationship list here.
    - Vertical list/cards.
    - **Highlighting:** Red border on the left charts when hovering/clicking right items.

## Design Details
- **Theme:** Dark background? "Background dark" (背景深色) was requested. I'll apply a dark theme to the chart container or specific elements. "Handwritten feel" (模仿手写感) -> I will use a serif font or specific style, maybe heavier weight.
