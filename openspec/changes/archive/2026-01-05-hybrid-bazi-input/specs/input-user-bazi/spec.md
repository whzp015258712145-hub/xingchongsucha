# Spec: Input User Bazi

## REMOVED Requirements

### Requirement: Manual Bazi Input
The application MUST allow the user to manually select the Heavenly Stems and Earthly Branches for their chart without providing a date.

## MODIFIED Requirements

### Requirement: Input Birth Date/Time
The application MUST allow the user to input either their birth date (Gregorian numbers) or direct Bazi characters into the same fields.

#### Scenario: Date to Bazi Conversion
- Given the user enters "2024", "1", "1", "12" in the four boxes
- When they click "Generate"
- Then the inputs are replaced with the corresponding GanZhi characters (e.g., "癸卯", "甲子"...)
- And the chart analysis is triggered.

#### Scenario: Manual Bazi Pass-through
- Given the user enters "甲子", "乙丑"...
- When they click "Generate"
- Then the inputs remain as is
- And the chart analysis is triggered.