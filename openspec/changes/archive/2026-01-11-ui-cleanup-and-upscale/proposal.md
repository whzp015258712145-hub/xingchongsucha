# UI Cleanup and Upscale

## Why
The user requested a cleaner interface by removing specific instruction labels ("天运流转", "八字刑冲合害速查", "请输入命主八字..."). Additionally, the current UI elements (fonts, whitespace, icons) are too small for users with myopia, necessitating a global proportional scale-up.

## What Changes
1.  **Removals:**
    - `App.tsx`: Remove subtitle "八字刑冲合害速查".
    - `CurrentDateDisplay.tsx`: Remove "天运流转" header.
    - `BaziInput.tsx`: Remove "请输入命主八字..." header text.

2.  **Upscaling (Proportional Increase):**
    - **`App.tsx`**: Main Title `text-4xl` -> `text-5xl`.
    - **`CurrentDateDisplay.tsx`**: Clock digits `text-4xl/5xl` -> `text-5xl/6xl`.
    - **`BaziInput.tsx`**: Inputs `p-2` -> `p-4`, `text-base` -> `text-xl`.
    - **`RelationshipChart.tsx`**:
        - **Headers**: "Heaven/Human" `text-3xl` -> `text-4xl`.
        - **Icons**: Inline width `64px` -> `80px`.
        - **Pillars**:
            - Container `w-14/20` -> `w-20/24`.
            - Font `text-3xl/4xl` -> `text-4xl/5xl`.
        - **Analysis List**: `text-xl` -> `text-2xl`.
        - **Padding/Gap**: Increase `p-12` -> `p-16`, `gap-4` -> `gap-6` (where applicable/inline styles).

## Risks
- **Layout Overflow**: Larger elements might cause horizontal scrolling on smaller screens (mobile). The user seems to be on desktop/tablet given the "nearsighted" comment and screenshots, but I should ensure flex wrapping or responsive classes handle it gracefully.
