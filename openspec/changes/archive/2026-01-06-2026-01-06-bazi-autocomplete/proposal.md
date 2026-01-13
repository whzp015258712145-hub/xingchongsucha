# Proposal: Bazi Input Autocomplete from History

## Goal
Improve the Bazi input experience by allowing users to quickly restore the previously entered Bazi using a "ghost text" placeholder and Tab key completion.

## Context
Currently, the Bazi input fields show the current date/time as placeholders. Users want the system to remember the *last entered* Bazi. When the inputs are empty, the placeholders should show this last entered Bazi. Pressing `Tab` should autofill these values.

## Key Changes
1.  **Persistence:** Save the successfully generated/entered Bazi to `localStorage`.
2.  **Visual Feedback:** Update input placeholders to display the saved Bazi (GanZhi) instead of the current date/time if a history exists.
3.  **Interaction:** Intercept `Tab` key on empty input fields to autofill the saved Bazi.

## Detailed Behavior
- **Initial Load:** Check `localStorage` for `lastBazi`.
    - If found: Placeholders display the saved GanZhi.
    - If not found: Placeholders display current Date/Time (existing behavior).
- **Input Success:** When `handleGenerate` succeeds (either via Date conversion or manual input), update `localStorage` with the new Bazi.
- **Autofill:**
    - Trigger: User presses `Tab` while an input field is empty.
    - Action: Populate *all* input fields (Year, Month, Day, Hour) with the saved Bazi values.
    - Constraint: Do not prevent standard focus navigation if the field is not empty or if no history exists.
- **Format:** The autocomplete fills only the GanZhi characters (e.g., "甲子"), not the numeric date.

## Considerations
- **"Don't complete time"**: The user specified "不要不补全时间" (lit. "do not not complete time" or typo for "do not complete time"). Given the context of "Restoring last Bazi", it is assumed the user wants the full 4 pillars (Year, Month, Day, Hour) restored. The "Time" pillar is essential for a full Bazi. I will interpret this as "Complete the full Bazi (all 4 pillars)". If they meant "Numeric Time", my approach of storing the *GanZhi* result covers this (we don't restore the numeric date/time, just the characters).
