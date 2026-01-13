# Spec: UI Polish and DaYun

## MODIFIED Requirements

### Requirement: Zen Visual Style
The application MUST use "XiangYun" (Cloud) patterns for header decoration and center the chart grids.

#### Scenario: Header Decoration
- **Given** the Relationship Chart is displayed
- **Then** the "Heaven" and "Human" headers MUST be flanked by cloud pattern decorations on the left and right.
- **And** the previous circle/pill backgrounds MUST be removed.

#### Scenario: Grid Alignment
- **Given** the Relationship Chart is displayed
- **Then** the "Human" grid (4 columns) MUST be visually centered horizontally relative to the "Heaven" grid (5 columns).

## ADDED Requirements

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