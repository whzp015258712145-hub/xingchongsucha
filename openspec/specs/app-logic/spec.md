# app-logic Specification

## Purpose
TBD - created by archiving change fix-infinite-update-loop. Update Purpose after archive.
## Requirements
### Requirement: Efficient Date Updates
The `CurrentDateDisplay` component MUST only trigger the `onDateChange` callback when the calculated GanZhi (Bazi) values actually change, preventing infinite render loops.
#### Scenario: Stable State
- **Given** the current time advances by 1 second.
- **And** the Bazi pillars (Year/Month/Day/Hour) remain identical.
- **Then** `onDateChange` MUST NOT be called.

### Requirement: Stable Handler Identity
The `App` component MUST provide a stable `onDateChange` function reference to `CurrentDateDisplay`.
#### Scenario: App Re-render
- **Given** `App` re-renders due to other state changes (e.g., highlighting).
- **Then** the `onDateChange` prop passed to `CurrentDateDisplay` MUST remain the same function reference.

