# Visual Design Spec Delta

## ADDED Requirements

### Requirement: Dark Mode (Safe Implementation)
The application MUST automatically switch to a dark color palette when the user's system preference is set to dark mode.

#### Scenario: Color Switch
- **Given** the user's system is in dark mode.
- **Then** the application background MUST be `stone-950`.
- **And** cards MUST be `stone-900`.
- **And** text MUST be high-contrast (`stone-100`).
- **And** all fonts and layout spacing MUST remain identical to light mode.
