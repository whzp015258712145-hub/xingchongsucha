# Enlarge Chart Headers

## Why
The "Heaven" (天) and "Human" (人) headers currently blend in with the rest of the text. To serve their purpose as major section titles, they need to be larger and more prominent, including their accompanying cloud decorations.

## What Changes
1.  **Component (`RelationshipChart.tsx`):**
    - Increase the font size of "天" and "人" spans from `text-xl` to `text-3xl`.
    - Increase the size of the flanking `xiangyun.png` images from `42px` to `64px` to match the new text scale.
    - Adjust the `mb-16` (margin bottom) or `gap` if necessary, though `gap-4` and `mb-16` should still work well with larger elements.

## Risks
- **Layout Shift:** Larger headers might push the chart columns further down, but there is plenty of vertical space in the current design.
