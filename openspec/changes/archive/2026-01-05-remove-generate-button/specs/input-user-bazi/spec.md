# Spec: Input User Bazi

## MODIFIED Requirements

### Requirement: Input Birth Date/Time
The application MUST allow the user to input either their birth date (Gregorian numbers) or direct Bazi characters into the same fields. The generation of the chart SHALL be triggered by pressing the Enter key in the final input field.

#### Scenario: Keyboard Submission
- Given the user has entered values in all four fields
- When they press Enter in the Hour field
- Then the chart analysis is triggered.
