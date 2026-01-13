# Design: Clear State

## Logic
- In `handleGenerate`:
    - If `year` AND `month` AND `day` AND `hour` are all empty strings:
        - Call `onBaziChange(null)`.
        - This effectively hides the "Analysis Results" section in `App.tsx`.

## UI Changes
- Footer text change in `App.tsx`.
