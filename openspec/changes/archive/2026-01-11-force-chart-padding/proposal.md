# Force Chart Padding with Inline CSS

## Why
Tailwind utility classes for vertical padding (`pt-12`, `pb-12`) are not being applied in the current environment. To ensure the chart has proper whitespace, inline React styles will be used to guarantee the padding is rendered.

## What Changes
1.  **Component (`RelationshipChart.tsx`):**
    - Apply `style={{ paddingTop: '3rem' }}` to the Heaven section container.
    - Apply `style={{ paddingBottom: '3rem' }}` to the Human section container.
    - Remove the ineffective `pt-12` and `pb-12` classes.

## Risks
- None. This is a targeted fix using higher-priority inline styles.
