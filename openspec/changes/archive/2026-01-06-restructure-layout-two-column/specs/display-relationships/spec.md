# Spec: Display Relationships

## MODIFIED Requirements

### Requirement: Visualize Relationships
The application MUST use a two-column layout. The Left Column SHALL display the Bazi charts in a 2x5 grid format (Luck, Year, Month, Day, Hour) with distinct rows for Stems (Tian) and Branches (Ren). The Right Column SHALL display the list of relationships.

#### Scenario: Layout Structure
- Given the user is viewing the analysis
- Then the screen is divided into a main chart area (Left, ~70%) and an analysis list (Right, ~30%).

## ADDED Requirements

### Requirement: Interactive Highlighting
Clicking a relationship in the Right Column MUST highlight the corresponding characters in the Left Column charts with a red border.

#### Scenario: Red Border Highlight
- Given the user clicks on "Zi-Wu Clash" in the analysis list
- Then the "Zi" character in the chart and the "Wu" character in the chart are highlighted with a visible red border.
