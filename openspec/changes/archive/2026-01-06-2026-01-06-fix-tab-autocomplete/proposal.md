# Proposal: Fix Tab Autocomplete Focus and Submission

## Why
Currently, using Tab to autocomplete the Bazi inputs leaves the focus on the current field (e.g., Year), requiring the user to manually navigate to the end or press Enter multiple times to trigger the calculation. The user expects a smoother experience where pressing Tab once autocompletes the data and immediately shows the results.

## What Changes
1.  **Auto-Focus End:** When Tab autocomplete is triggered, move focus to the last input field (Hour).
2.  **Auto-Submit:** Immediately trigger the Bazi generation (`onBaziChange`) with the autocompleted values so the user sees results instantly without extra keystrokes.

## Detailed Behavior
- **Trigger:** User presses `Tab` on an empty input field while a saved Bazi history exists.
- **Action:**
    1.  Fill all input fields with the saved values.
    2.  Move focus to the `hourRef` (the last field).
    3.  Call `onBaziChange` immediately with the restored values (simulating a "Generate" action).
