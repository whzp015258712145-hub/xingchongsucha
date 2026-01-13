# Proposal: UI Polish and DaYun Calculation

## Why
The user has requested specific UI improvements and functional additions to enhance the visual appeal and utility of the application.
1.  **Aesthetics:** The current "Heaven/Human" circle indicators are "ugly". The user requested "XiangYun" (Auspicious Cloud) patterns to decorate the headers instead.
2.  **Alignment:** The "Human" (User) chart needs to be perfectly centered below the "Heaven" chart.
3.  **Functionality:** The "DaYun" (Luck Pillar) column is currently empty. It needs to be calculated based on the user's Bazi, with a toggle for Gender (Male/Female) which affects the calculation (forward/backward sequence).

## What Changes
1.  **UI Polish (RelationshipChart.tsx):**
    *   Replace the circle/pill headers for "天" (Heaven) and "人" (Human) with a design using left/right cloud ornamentation (using placeholder SVGs or CSS shapes initially).
    *   Ensure the "Human" grid is visually centered relative to the "Heaven" grid.
2.  **DaYun Logic (utils/relationships.ts & components/RelationshipChart.tsx):**
    *   Implement DaYun calculation using `lunar-javascript`'s `Yun` class.
    *   Add a toggle state for Gender (Male/Female).
    *   Update the "Luck" column in the "Heaven" grid to display the calculated current DaYun.
    *   Update the label to show "男大运" or "女大运".

## Scope
-   `src/components/RelationshipChart.tsx`: UI updates and state management for gender.
-   `src/utils/relationships.ts`: (Likely just usage in component, but checking if logic needs extraction). *Correction:* I will implement the logic directly in the component or a helper hook since it depends on the user's full date input (which we need to ensure we have access to).
    *   *Note:* Currently `BaziInput` only passes simple strings (`year`, `month`, `day`, `hour` characters). To calculate DaYun correctly, we need the *exact date/time* and gender.
    *   *Constraint Check:* `BaziInput` passes `onBaziChange` with just the strings.
    *   *Refactoring Needed:* The current `userBazi` state in `App.tsx` only holds the GanZhi characters. **I cannot calculate DaYun from just "甲子" without the actual solar date.**
    *   *Pivot:* If the user entered manual GanZhi, we *cannot* calculate DaYun automatically. If they entered a numeric year (Date-based), we can.
    *   *Assumption:* The user likely inputs a Date. If manual GanZhi, I will show a placeholder or "N/A".
    *   *Strategy:* I need to verify if `App.tsx` or `BaziInput` retains the `Solar` object or original date. Looking at `BaziInput.tsx`, it calculates but doesn't pass the date up.
    *   *Plan:* I will update `BaziInput` to pass the `Solar` object or date details up to `App`, or just pass the gender/Dayun *if available*.
    *   *Simpler Plan:* Update `BaziInput` to pass `solarDate` in the callback. Then `App` passes this to `RelationshipChart`. Then `RelationshipChart` uses `lunar-javascript` to get the DaYun.

## Assets
-   I will create a simple SVG for the "XiangYun" (Cloud) pattern and save it to `src/assets/cloud-pattern.svg` (or inline it).

