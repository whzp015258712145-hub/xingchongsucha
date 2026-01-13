# Spec: UI Polish and Bug Fixes

## ADDED Requirements

### Requirement: Visual Style
The application MUST adhere to a strict minimalist aesthetic with no distractions.

#### Scenario: No Animations
- **Given** the application loads or updates
- **Then** NO animations (fadeIn, slideIn, etc.) MUST be visible.

#### Scenario: Clean Grid Borders
- **Given** no relationship is selected
- **Then** the Bazi chart cells MUST NOT have any visible borders (they should appear floating or just text).
- **When** a relationship is selected
- **Then** ONLY the relevant cells MUST display the highlight border.

## MODIFIED Requirements

### Requirement: Visualize Relationships
The application MUST render the analysis results in a split-screen layout with centered headers and aligned grids.

#### Scenario: Centered Headers and Grids
- **Given** the Relationship Chart is displayed
- **Then** the "Heaven" and "Human" section titles MUST be centered horizontally relative to their grids.
- **And** the "Human" grid MUST be visually centered below the "Heaven" grid.
- **And** the analysis list (Right Panel) MUST NOT show a section header.