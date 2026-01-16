# Visual Design Spec Delta

## ADDED Requirements

### Requirement: Dark Mode Support
The application MUST automatically switch its color palette based on the user's system theme preference.

#### Scenario: Dark Mode Activation
- **Given** the user's system is set to dark mode.
- **Then** the application background MUST be a deep dark gray (`stone-950`).
- **And** text MUST be light (`stone-100`).
- **And** decorative images (XiangYun) MUST retain their original color (no inversion).

### Requirement: Layout & Font Consistency
The application MUST NOT change its layout, font families, or spacing when switching between light and dark modes.
#### Scenario: Theme Toggle
- **When** the system theme changes.
- **Then** only colors MUST change.
- **And** the font remains `Noto Serif SC` or `Noto Sans SC`.
