# Restore Header Upscale

## Why
The previous revert was too aggressive and undid the successful upscale of the "Heaven/Human" headers and their cloud decorations. The user explicitly requested to restore these specific elements to their "enlarged" state (which was confirmed as "good").

## What Changes
1.  **Component (`RelationshipChart.tsx`):**
    - **Headers ("天"/"人")**: Restore font size to `text-3xl` (or equivalent inline `fontSize: '30px'` to be safe, but `text-3xl` was the successful class previously). Wait, `text-3xl` is 30px.
    - **Cloud Icons**: Restore width to `64px`.
    - **Gap**: Restore gap to `gap-4` (or `16px`).
    - **Margin Bottom**: Ensure `mb-16` (or `64px`).

## Risks
- **Tailwind Inconsistency**: If Tailwind classes fail again, `text-3xl` might not work. I will use inline styles with pixel values (`fontSize: '30px'`, `width: '64px'`) to match the "good" state reliably.
