# Revert Upscale Styling

## Why
The previous scaling efforts resulted in a UI that is far too large ("10 times bigger"). The user requested to revert to the state before the first "enlarge everything" instruction to provide a clean baseline for more conservative adjustments.

## What Changes
1.  **`App.tsx`**: Restore subtitle and original title size.
2.  **`CurrentDateDisplay.tsx`**: Restore "天运流转" header and original clock sizes.
3.  **`BaziInput.tsx`**: Restore prompt header and original input dimensions.
4.  **`RelationshipChart.tsx`**:
    - Revert "Heaven/Human" headers to `text-3xl`.
    - Revert cloud icons to `64px`.
    - Revert pillar font sizes and container dimensions to original values (`w-14/20`, `text-3xl/4xl`).
    - Revert Relationship List fonts and padding.
    - Keep the "force-chart-padding" fixes (inline `3rem` top/bottom) as they were prior to the upscale.

## Risks
- None. This is a restoration of a known-good (though small) visual state.
