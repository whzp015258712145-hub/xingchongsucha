# Spec: Redesigned Layout

## MODIFIED Requirements

### Requirement: Visualize Relationships
The application MUST render the analysis results in a split-screen layout with specific proportions, featuring "Heaven" and "Human" grids.

#### Scenario: Displaying Analysis Section
- **Given** the user has entered a valid Bazi and analysis is generated
- **When** the result section is rendered
- **Then** it MUST display two distinct panels side-by-side: a Left Panel taking up 70% of the width, and a Right Panel taking up 30%.

#### Scenario: Rendering the Heaven Grid
- **Given** the analysis view is active
- **When** the "Heaven" section is rendered
- **Then** it MUST show 5 columns labeled "Luck", "Year", "Month", "Day", "Hour".
- **And** it MUST populate "Year", "Month", "Day", "Hour" with the *Current Time* Bazi.
- **And** the "Luck" column MUST appear as a placeholder.

#### Scenario: Rendering the Human Grid
- **Given** the analysis view is active
- **When** the "Human" section is rendered
- **Then** it MUST show 4 columns labeled "Year", "Month", "Day", "Hour".
- **And** it MUST populate them with the *User's* input Bazi.

### Requirement: Interactive Highlighting
The system MUST allow users to highlight specific chart elements by clicking on relationships.

#### Scenario: Toggling Highlights
- **Given** a list of relationships in the Right Panel (e.g., "子午冲")
- **When** the user clicks a relationship item
- **Then** the corresponding characters in the Left Panel (e.g., "子" in Heaven-Day-Zhi and "午" in Human-Day-Zhi) MUST be highlighted with a square border (`.highlight-box`).
- **And** clicking the item again MUST remove the highlight.
