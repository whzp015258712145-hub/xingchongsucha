# Spec: Partial UI Revert

## MODIFIED Requirements

### Requirement: Zen Visual Style
The application MUST use a balanced design that combines clear container-based grouping for inputs with a refined minimalist style for analysis.

#### Scenario: Global Layout
- **Given** the application is loaded
- **Then** the Header, Date Display, and Bazi Input MUST be enclosed in white card containers with subtle shadows.
- **And** the background MUST remain a soft neutral color (e.g., `stone-50`).

#### Scenario: Typography
- **Given** the application is loaded
- **Then** the typography MUST use a mix of Serif and Sans-Serif fonts, with card headers using Serif for a traditional feel.

#### Scenario: Input Styling
- **Given** the user views the Bazi Input section
- **Then** the input fields MUST be rendered as standard bordered boxes with clear outlines on focus.
