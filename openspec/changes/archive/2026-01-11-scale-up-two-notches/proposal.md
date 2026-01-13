# Scale Up Two Notches

## Why
The current UI is clean but too small. The user requested to scale up everything (except the main title) by "two font sizes" (approx +50-60%). This includes text, icons, whitespace, and containers.

## What Changes
1.  **Strategy:** Use inline styles to guarantee sizing, but with moderate values (approx 1.5x original).
2.  **`CurrentDateDisplay.tsx`**:
    - Digits: `text-4xl/5xl` -> `style={{ fontSize: '3.75rem' }}` (60px).
    - Labels: `text-2xl` -> `style={{ fontSize: '2rem' }}` (32px).
    - Padding: `p-6` -> `p-10`.
3.  **`BaziInput.tsx`**:
    - Input text: `text-xl` -> `style={{ fontSize: '1.5rem', padding: '1rem' }}` (24px).
    - Labels: `text-xs` -> `style={{ fontSize: '1rem' }}` (16px).
    - Container Padding: `p-6` -> `p-10`.
4.  **`RelationshipChart.tsx`**:
    - **Headers**: "Heaven/Human" `text-3xl` -> `style={{ fontSize: '2.5rem' }}` (40px).
    - **Icons**: `64px` -> `80px`.
    - **Pillars**:
        - Text: `text-3xl/4xl` -> `style={{ fontSize: '3rem' }}` (48px).
        - Container: `w-14/20` -> `style={{ width: '8rem', height: 'auto' }}` (128px).
        - Label: `text-[10px]` -> `style={{ fontSize: '1rem' }}`.
    - **Relationship List**:
        - Text: `text-xl` -> `style={{ fontSize: '1.5rem' }}` (24px).
        - Padding: `p-10` -> `style={{ padding: '3.5rem' }}`.
        - Gap: `gap-4` -> `gap-6`.
    - **Section Padding**: `3rem` -> `4rem`.

## Risks
- **Layout Overflow**: Elements are getting large again, need to ensure container widths (e.g. `max-w-6xl`) accommodate them.
