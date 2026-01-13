# Spec: Input User Bazi

## MODIFIED Requirements

### Requirement: Input Birth Date/Time
The application MUST allow the user to input either their birth date (Gregorian numbers) or direct Bazi characters into the same fields. The interface SHALL display dynamic placeholders reflecting the current date and time to guide the user.

#### Scenario: Dynamic Placeholders
- Given the current year is 2026 and the current Year Pillar is "Yi-Si"
- When the user views the Year input field
- Then the placeholder text displays "2026 / 乙巳".
