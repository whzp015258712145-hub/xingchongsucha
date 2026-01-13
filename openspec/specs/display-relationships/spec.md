# display-relationships Specification

## Purpose
TBD - created by archiving change init-xingchong-app. Update Purpose after archive.
## Requirements
### Requirement: Calculate Inter-Chart Relationships
The application MUST compare the User's Bazi (Natal Chart) with the Current Date's Bazi (Transit Chart) to identify specific astrological relationships.

#### Scenario: Clash Detection (Chong)
- Given the User's Day Branch is "Zi" (Rat)
- And the Current Day Branch is "Wu" (Horse)
- Then the application displays a "Zi-Wu Clash" (子午冲) indicator.

#### Scenario: Combination Detection (He)
- Given the User's Year Stem is "Jia" (Yang Wood)
- And the Current Year Stem is "Ji" (Yin Earth)
- Then the application displays a "Jia-Ji Combination" (甲己合) indicator.

### Requirement: Visualize Relationships
The application MUST render the analysis results with the User Natal Bazi at the top and the Dynamic Time/Luck at the bottom.

#### Scenario: Swapped Grid Order
- **Given** the Relationship Chart is displayed
- **Then** the **Top** section MUST be labeled **"天" (Heaven)** and show 4 columns (User Bazi).
- **And** the **Bottom** section MUST be labeled **"人" (Human)** and show 5 columns (DaYun + Current Time).
- **And** the DaYun column MUST allow gender toggling between "男大运" and "女大运".

### Requirement: Interactive Highlighting
The system MUST maintain correct character highlighting even when the Chart Sections (User/Current) are swapped.
#### Scenario: Highlighting Swapped Pillars
- **Given** a relationship "子午冲" between User and Current.
- **When** selected, the "子" and "午" MUST be highlighted in their respective positions in the Heaven and Human sections.

### Requirement: Visual Style
The application MUST adhere to a strict minimalist aesthetic with no distractions.

#### Scenario: No Animations
- **Given** the application loads or updates
- **Then** NO animations (fadeIn, slideIn, etc.) MUST be visible.

#### Scenario: Clean Grid Borders
- **Given** no relationship is selected
- **Then** the Bazi chart cells MUST NOT have any visible borders (they should appear floating or just text).
- **When** a relationship is selected
- **Then** ONLY the relevant cells MUST display the highlight border.

