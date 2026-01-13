# Add Chart Vertical Padding

## Why
The chart content feels cramped vertically, with the "Heaven" section starting too high and the "Human" section ending too low relative to the component borders. Adding more whitespace will improve readability and elegance.

## What Changes
1.  **Component (`RelationshipChart.tsx`):**
    - Add top padding (`pt-12`) to the Heaven section container.
    - Add bottom padding (`pb-12`) to the Human section container.

## Risks
- Minor layout shift, but within expected UI polish scope.
