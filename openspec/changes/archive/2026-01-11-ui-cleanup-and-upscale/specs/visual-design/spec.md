# Visual Design Specs

## ADDED Requirements

### Requirement: Instructional Labels Removal
The instructional labels MUST be removed from the UI.
#### Scenario: Clean UI
- **Given** the app is loaded.
- **Then** the text "八字刑冲合害速查" MUST NOT be visible.
- **And** the text "天运流转" MUST NOT be visible.
- **And** the text "请输入命主八字..." MUST NOT be visible.

### Requirement: Global Scale-Up
All primary UI elements (text, icons, whitespace) MUST be increased in size to improve accessibility.
#### Scenario: Larger Typography
- **Given** the application is rendered.
- **Then** the Main Title MUST be at least `text-5xl`.
- **And** Chart Headers ("天"/"人") MUST be `text-4xl`.
- **And** Chart Pillars (Gan/Zhi) MUST be `text-4xl` or larger.
- **And** Relationship List items MUST be `text-2xl`.

#### Scenario: Larger Visual Elements
- **Then** Pillar containers MUST be wider/taller.
- **And** Cloud decoration icons MUST be `80px` wide.
- **And** Section padding MUST be increased (e.g., `padding: 4rem`).
