# Align Human Chart Styling to Match Heaven Chart

## Problem
The "Human" (Ren) section of the chart currently renders column labels (Year, Month, Day, Hour, Luck) as `<button>` elements. This causes inconsistent visual styling (e.g., unexpected borders or "boxes") compared to the "Heaven" (Tian) section, which uses plain `<span>` elements for labels. The user explicitly requested to match the Heaven styling.

## Solution
1.  Refactor the Human section to use `<span>` for column labels, identical to the Heaven section.
2.  Preserve the click interaction for the 'Luck' (Dayun) column (to toggle gender) by wrapping only that label in a button or making the span interactive, while ensuring it visually matches the text style of the others.
3.  Ensure the underlying Gan/Zhi display containers remain consistent.

## Risks
- Minimal risk. Logic for gender toggle must be preserved.
