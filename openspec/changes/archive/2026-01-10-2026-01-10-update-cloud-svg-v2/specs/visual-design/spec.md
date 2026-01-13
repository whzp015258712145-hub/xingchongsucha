# Spec: Update Cloud SVG (V2)

## MODIFIED Requirements

### Requirement: Zen Visual Style
The application MUST use the latest user-provided SVG path for header decoration.

#### Scenario: Header Decoration
- **Given** the Relationship Chart is displayed
- **Then** the "Heaven" and "Human" headers MUST be decorated with the complex cloud SVG path provided by the user.
- **And** the decoration MUST use the theme's secondary color (`text-stone-300`).
