# Bazi Logic Specs

## ADDED Requirements

### Requirement: Reverse Date Lookup
The system MUST provide a mechanism to find the nearest valid Solar Date for a given Year/Month/Day/Hour GanZhi combination.
#### Scenario: Find Date
Given "甲子" Year, "丙寅" Month... the system searches +/- 80 years from today and returns a date object (e.g., 1984-02-05...).

### Requirement: Auto-Calculate Dayun on Manual Input
When a valid full Bazi (Year/Month/Day/Hour) is manually input (via double-click or initial text boxes) and no specific date was provided, the system MUST attempt to find a matching date and calculate the Dayun.
#### Scenario: Manual Input Dayun
User manually types a full Bazi; the "Dayun" pillar (previously empty) automatically populates with the correct luck pillar for that inferred date.
