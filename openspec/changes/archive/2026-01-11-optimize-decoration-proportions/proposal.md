# Optimize Decoration Proportions

## Why
The previous 24px size was visually too small, losing the symbolic impact of the "XiangYun" decoration. A balanced size of 42px width is needed to complement the "Heaven/Human" typography while maintaining a minimalist and elegant aesthetic.

## What Changes
1.  **Component (`RelationshipChart.tsx`):**
    - Update inline `width` from `24px` to `42px` for all 4 decoration images.
    - Change layout class from `gap-3` to `gap-4` to provide better spatial breathing room around the icons.

## Risks
- None. This is a purely visual refinement based on the "Frontend Master" design intuition requested by the user.
