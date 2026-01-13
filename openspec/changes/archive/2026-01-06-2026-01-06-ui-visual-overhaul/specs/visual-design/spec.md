# Spec: Visual Overhaul

## ADDED Requirements

### Requirement: Zen Visual Style
The application MUST adhere to a strict Zen/Minimalist aesthetic, prioritizing typography and whitespace over container-based design.

#### Scenario: Global Layout
- **Given** the application is loaded
- **Then** the background MUST be a soft neutral color (e.g., `stone-50`).
- **And** major sections (Date, Input) MUST NOT be enclosed in visible "cards" with heavy shadows.

#### Scenario: Typography
- **Given** GanZhi characters are displayed (Header, Inputs, Chart)
- **Then** they MUST use a Serif font family.
- **And** they MUST be sized prominently to act as the primary visual elements.

#### Scenario: Input Styling
- **Given** the user views the Bazi Input section
- **Then** the input fields MUST appear minimal (e.g., underlined or transparent background) rather than standard bordered boxes.
- **And** the focus state MUST be subtle (e.g., color change) rather than a heavy ring.