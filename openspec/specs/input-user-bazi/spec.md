# input-user-bazi Specification

## Purpose
TBD - created by archiving change init-xingchong-app. Update Purpose after archive.
## Requirements
### Requirement: Input Birth Date/Time
The application MUST allow the user to input either their birth date (Gregorian numbers) or direct Bazi characters into the same fields. Submitting empty fields SHALL clear the current analysis.

#### Scenario: Clearing Input
- Given the user has previously generated a chart
- When the user clears all input fields and presses Enter
- Then the analysis results are removed from the screen.

