# Chart Interaction Specs

## ADDED Requirements

### Requirement: Double-Click to Edit
Users MUST be able to double-click any pillar (User Year/Month/Day/Hour or Dayun) to enter edit mode.
#### Scenario: Edit Pillar
User double-clicks the "Year" pillar; an input field appears over the pillar.

### Requirement: In-Place Input
The edit input MUST appear in-place, covering the pillar (or Gan/Zhi), and inherit the font family/size to maintain visual consistency.
#### Scenario: Seamless Edit
The input field looks like the text it replaced (serif font, centered), ensuring the "styles must not change" constraint is met.

### Requirement: Parse GanZhi Input
The input MUST accept a combined GanZhi string (e.g., "甲子") and update both the Heaven Stem (Gan) and Earthly Branch (Zhi) of the target pillar upon confirmation (Enter key or Blur).
#### Scenario: Update Value
User types "乙丑" and hits Enter; the display updates to Gan "乙" and Zhi "丑".

## ADDED Requirements

### Requirement: State Lifting
The `RelationshipChart` component MUST accept `gender` and `dayun` as props (controlled state) instead of managing them internally, to support external updates from `App`.
#### Scenario: Gender Toggle
User clicks the "Luck" label; `onGenderChange` is called; the parent updates the gender state.
