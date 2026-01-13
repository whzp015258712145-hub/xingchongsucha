# Proposal: Hybrid Bazi Input

## Summary
Implement a hybrid input system where the 4 pillar inputs can accept either Gregorian numbers (Year/Month/Day/Hour) or GanZhi characters. A "Generate" button standardizes the input into GanZhi.

## Motivation
To allow users to intuitively input what they know (either a date or a partial/full Bazi) into the same interface without switching modes, and then "resolve" it into a standard Bazi chart.

## Goals
- Provide 4 standardized input boxes (Year, Month, Day, Hour).
- Allow mixed input types (e.g., "2024" or "甲子").
- Implement a "Generate" action that:
    - Detects numerical inputs and converts them to GanZhi.
    - Validates existing GanZhi inputs.
    - Updates the UI to show the final GanZhi.
    - Triggers the application's analysis.
