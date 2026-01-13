# Proposal: Enable Manual Bazi Input

## Summary
Add a "Manual Input" mode to the Bazi entry component, allowing users to directly select Heavenly Stems and Earthly Branches for their Year, Month, Day, and Hour pillars instead of relying solely on date conversion.

## Motivation
Some users may know their Bazi but not the exact Gregorian date/time, or they may want to test hypothetical Bazi charts without reverse-engineering a date.

## Goals
- Add a toggle in `BaziInput` to switch between "Date Mode" (default) and "Manual Mode".
- Implement a UI with 4 pairs of dropdown selectors (Year, Month, Day, Hour) for Gan (Stem) and Zhi (Branch).
- Ensure the output `BaziChart` format remains consistent for the parent component.
