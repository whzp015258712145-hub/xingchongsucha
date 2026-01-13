# Remove Labels Again

## Why
The previous revert was too aggressive and brought back instructional labels ("天运流转", "八字刑冲合害速查", etc.) that were correctly removed in a prior step. The user wants to start from the state where these labels are gone, but before the "massive upscale" was applied.

## What Changes
1.  **Removals (Redo):**
    - `App.tsx`: Remove subtitle "八字刑冲合害速查".
    - `CurrentDateDisplay.tsx`: Remove "天运流转" header.
    - `BaziInput.tsx`: Remove prompt "请输入命主八字...".
2.  **No Scaling Changes:**
    - I will NOT apply any scaling (neither `text-5xl` nor inline styles) in this step. I will leave the sizes at their "original small" state as requested ("before upscale").

## Risks
- None. Just cleaning up the text again.
