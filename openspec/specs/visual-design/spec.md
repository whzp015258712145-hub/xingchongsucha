# visual-design Specification

## Purpose
TBD - created by archiving change 2026-01-06-ui-visual-overhaul. Update Purpose after archive.
## Requirements
### Requirement: Zen Visual Style
The application MUST ensure perfect horizontal alignment of the chart content.

#### Scenario: Horizontal Centering
- **Given** the Relationship Chart is displayed
- **Then** the "Heaven" and "Human" grids (and their headers) MUST be visually centered horizontally within the Left Panel container.
- **And** there should be equal spacing on the left and right sides of the chart content.

### Requirement: DaYun Calculation
The application MUST calculate and display the current DaYun (Luck Pillar) based on the user's gender and birth date.

#### Scenario: DaYun Display
- **Given** the user has entered a valid birth date (not just manual GanZhi)
- **Then** the first column of the "Heaven" grid MUST show the current DaYun's Gan and Zhi.
- **And** the column header MUST display "男大运" (default) or "女大运".

#### Scenario: Gender Toggle
- **Given** the DaYun is displayed
- **When** the user clicks the DaYun header ("男大运" or "女大运")
- **Then** the gender setting MUST toggle between Male and Female.
- **And** the DaYun pillar MUST recalculate and update immediately.

### Requirement: Human Section Column Labels
The column labels in the "Human" (Ren) section MUST be rendered as text elements (e.g., `span`) to match the "Heaven" (Tian) section's visual style.
#### Scenario: Consistent Styling
User views the chart; the Year, Month, Day, and Hour labels under "Human" look identical to those under "Heaven" (no button borders/backgrounds).

### Requirement: Dayun Label Interaction
The 'Luck' (Dayun) label MUST remain interactive (clickable) to toggle gender, but should visually integrate with the other labels.
#### Scenario: Toggle Gender
User clicks "Male Luck" / "Female Luck"; the gender toggles.

### Requirement: Cloud Decoration
The "XiangYun" PNG images and the "Heaven/Human" text MUST be enlarged to act as section titles.
#### Scenario: Prominent Titles
- **Given** the chart is rendered.
- **Then** the "Heaven" and "Human" text MUST be larger (`text-3xl`).
- **And** the cloud images MUST be proportionally larger (64px wide).

### Requirement: Chart Spacing
The chart MUST use inline styles to guarantee vertical whitespace around the Heaven and Human sections.
#### Scenario: Forced Padding
- **Given** the chart is rendered.
- **Then** the container above "Heaven" MUST have 48px (`3rem`) top padding via `style`.
- **And** the container below "Human" MUST have 48px (`3rem`) bottom padding via `style`.

### Requirement: Instructional Labels Removal
The instructional labels MUST be removed from the UI.
#### Scenario: Clean UI
- **Given** the app is loaded.
- **Then** the text "八字刑冲合害速查" MUST NOT be visible.
- **And** the text "天运流转" MUST NOT be visible.
- **And** the text "请输入命主八字..." MUST NOT be visible.

### Requirement: Global Scale-Up
All content elements (except main title) MUST be scaled up by two size notches using inline styles.
#### Scenario: Moderate Upscale
- **Given** the app is rendered.
- **Then** the Clock digits MUST be `60px` (`3.75rem`).
- **And** the Pillar text MUST be `48px` (`3rem`).
- **And** the Chart Headers MUST be `40px` (`2.5rem`).
- **And** the Cloud Icons MUST be `80px`.

### Requirement: Restore Original Dimensions
All UI elements MUST be restored to their sizes prior to the "upscale" instruction block.
#### Scenario: Original Baseline
- **Given** the app is rendered.
- **Then** the Main Title MUST be `text-4xl`.
- **And** the Clock MUST be `text-5xl`.
- **And** the Bazi Pillars MUST be `text-4xl`.
- **And** Relationship items MUST be `text-xl`.

### Requirement: Instructional Labels
The instructional labels MUST be removed from the UI.
#### Scenario: Clean UI
- **Given** the app is loaded.
- **Then** the text "八字刑冲合害速查" MUST NOT be visible.
- **And** the text "天运流转" MUST NOT be visible.
- **And** the text "请输入命主八字..." MUST NOT be visible.

### Requirement: Prominent Headers
The "Heaven" and "Human" headers and their cloud decorations MUST be enlarged to act as section titles.
#### Scenario: Restored Size
- **Given** the chart is rendered.
- **Then** the "Heaven/Human" text MUST be `30px` (approx `text-3xl`).
- **And** the cloud images MUST be `64px` wide.

### Requirement: Dark Mode (Safe Implementation)
The application MUST automatically switch to a dark color palette when the user's system preference is set to dark mode.

#### Scenario: Color Switch
- **Given** the user's system is in dark mode.
- **Then** the application background MUST be `stone-950`.
- **And** cards MUST be `stone-900`.
- **And** text MUST be high-contrast (`stone-100`).
- **And** all fonts and layout spacing MUST remain identical to light mode.

