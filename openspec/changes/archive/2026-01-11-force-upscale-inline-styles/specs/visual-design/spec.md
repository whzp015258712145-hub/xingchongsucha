# Visual Design Specs

## MODIFIED Requirements

### Requirement: Global Scale-Up
All content elements MUST use inline styles to guarantee scale-up.
#### Scenario: Forced Inline Styles
- **Given** the app is rendered.
- **Then** Clock digits MUST have `style={{ fontSize: '4.5rem' }}`.
- **And** Pillar text MUST have `style={{ fontSize: '4.5rem' }}`.
- **And** Relationship items MUST have `style={{ fontSize: '1.875rem' }}`.
