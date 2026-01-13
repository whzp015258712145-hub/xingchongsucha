# Spec: Display Relationships

## ADDED Requirements

### Requirement: Calculate Inter-Chart Relationships
The application MUST compare the User's Bazi (Natal Chart) with the Current Date's Bazi (Transit Chart) to identify specific astrological relationships.

#### Scenario: Clash Detection (Chong)
- Given the User's Day Branch is "Zi" (Rat)
- And the Current Day Branch is "Wu" (Horse)
- Then the application displays a "Zi-Wu Clash" (子午冲) indicator.

#### Scenario: Combination Detection (He)
- Given the User's Year Stem is "Jia" (Yang Wood)
- And the Current Year Stem is "Ji" (Yin Earth)
- Then the application displays a "Jia-Ji Combination" (甲己合) indicator.

### Requirement: Visualize Relationships
The relationships MUST be presented in a clean, tabular, or list format, grouped by type (Punishment, Clash, Combination, etc.).

#### Scenario: Grouped Display
- Given there are multiple relationships detected (e.g., one Clash and one Combination)
- When the results are displayed
- Then they are visually separated into distinct sections or clearly labeled rows.
