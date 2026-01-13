# Visual Design Specs

## ADDED Requirements

### Requirement: Cloud Decoration
The chart headers ("Heaven" and "Human") MUST be flanked by the specific "XiangYun" PNG image (`xiangyun.png`) instead of the previous SVG paths.
#### Scenario: Header Appearance
- **Given** the chart is rendered.
- **Then** the "Heaven" text MUST have a cloud image on the left and a mirrored cloud image on the right.
- **And** the "Human" text MUST have the same decoration.
- **And** the images MUST be sized appropriately (approx 80px wide) to match the previous layout.
