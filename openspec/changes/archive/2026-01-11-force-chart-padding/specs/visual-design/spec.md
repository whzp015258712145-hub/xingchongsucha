# Visual Design Specs

## MODIFIED Requirements

### Requirement: Chart Spacing
The chart MUST use inline styles to guarantee vertical whitespace around the Heaven and Human sections.
#### Scenario: Forced Padding
- **Given** the chart is rendered.
- **Then** the container above "Heaven" MUST have 48px (`3rem`) top padding via `style`.
- **And** the container below "Human" MUST have 48px (`3rem`) bottom padding via `style`.
