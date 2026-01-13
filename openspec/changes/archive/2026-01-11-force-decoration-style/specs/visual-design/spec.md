# Visual Design Specs

## MODIFIED Requirements

### Requirement: Cloud Decoration
The cloud decorations MUST use inline styles to ensure consistent sizing regardless of CSS framework state.
#### Scenario: Forced Sizing
- **Given** the chart is rendered.
- **Then** the cloud images MUST be exactly 24px wide via `style={{ width: '24px' }}`.
- **And** right-side images MUST be mirrored via `style={{ transform: 'scaleX(-1)' }}`.
