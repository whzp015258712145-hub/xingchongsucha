# Spec: Input User Bazi

## MODIFIED Requirements

### Requirement: Input Birth Date/Time
The application MUST allow the user to input their birth date and time to generate their Bazi (Four Pillars).

#### Scenario: Valid Input
- Given the user enters a valid Gregorian date and time (e.g., 2000-01-01 12:30)
- When they confirm the input
- Then the application calculates and displays the corresponding Four Pillars (Year, Month, Day, Hour) in Gan-Zhi characters.

## ADDED Requirements

### Requirement: Manual Bazi Input
The application MUST allow the user to manually select the Heavenly Stems and Earthly Branches for their chart without providing a date.

#### Scenario: Manual Entry
- Given the user switches to "Manual Input" mode
- When they select "Jia" for Year Stem and "Zi" for Year Branch (and so on for all pillars)
- Then the application uses this explicitly provided Bazi for relationship calculations.
