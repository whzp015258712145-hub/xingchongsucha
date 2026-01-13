# Spec: Fix Chart Spacing Logic

## MODIFIED Requirements

### Requirement: Zen Visual Style
The application MUST use effective vertical separation strategies to create openness without compressing content.

#### Scenario: Vertical Separation
- **Given** the Relationship Chart is displayed
- **Then** the "Heaven" and "Human" sections MUST be separated by a significant vertical gap (e.g., using flex gap of at least 8rem/128px).
- **And** the internal padding MUST NOT be so large that it compresses the grid content horizontally.
