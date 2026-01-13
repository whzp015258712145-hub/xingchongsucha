# Editable Pillars & Integrated Dayun

## Why
Users need to manually correct the "Dayun" (Luck Pillar) or other pillars when the automatic calculation is missing (e.g., manual Bazi input) or incorrect. Additionally, the user expects the "Relationship" (Xing/Chong) analysis to reflect these manual changes, meaning the Dayun must be actively included in the relationship comparison against the current time.

## What Changes
1.  **Interaction:** Enable double-click editing on all chart pillars (User Year/Month/Day/Hour + Dayun).
2.  **Logic:** Lift "Dayun" and "Gender" state to the top-level (`App`) to allow manual overrides and persistence.
3.  **Calculation:** Update the relationship comparison engine (`compareCharts`) to include the "Dayun" pillar in its checks against the current time (Time vs User+Dayun).
4.  **UI:** Provide a seamless in-place editor (input field) that matches the existing visual style during editing.

## Key constraints
- Visual style of the chart must remain unchanged in non-edit mode.
- Double-clicking opens the edit mode.
- Input accepts full pillar string (e.g., "甲子") and parses it.
