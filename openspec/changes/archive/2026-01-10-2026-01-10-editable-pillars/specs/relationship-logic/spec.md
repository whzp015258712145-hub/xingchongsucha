# Relationship Logic Specs

## ADDED Requirements

### Requirement: Dayun in Relationship Comparison
The relationship comparison logic (`compareCharts`) MUST include the "Dayun" (Luck Pillar) when checking against the current time (Year/Month/Day/Hour).
#### Scenario: Dayun Clash
User sets Dayun to "甲子"; Current Time Year is "庚午" (Zi-Wu Clash). The relationship list displays "Dayun Clashes with Current Year".

### Requirement: Dayun Calculation Utility
A shared utility function MUST be available to calculate the current Dayun based on Solar Date and Gender, enabling both initial auto-calculation and manual overrides.
#### Scenario: Auto-calc
User inputs a valid birth date; the system automatically populates the Dayun based on the date and gender.

## ADDED Requirements

### Requirement: Compare Charts Signature
The `compareCharts` function signature MUST accept an optional `dayun` argument (GanZhi string).
#### Scenario: Analysis Update
When `compareCharts` is called with a `dayun` value, it returns relationships involving that Dayun.
