# Chart Interaction Specs

## ADDED Requirements

### Requirement: Edit Mode Activation
When a user double-clicks a pillar, the display text MUST be replaced by an input field containing the current value.
#### Scenario: Hide Text
User double-clicks "甲子"; the text "甲子" disappears, and an input field appears in its place.

### Requirement: Input Focus and Selection
Upon entering edit mode, the input field MUST be focused. The existing text SHOULD be fully selected (or cursor at start) to allow immediate overwriting.
#### Scenario: Overwrite Flow
User double-clicks "甲子"; types "乙"; the input value becomes "乙" (replacing selected text). User types "丑"; value becomes "乙丑".

### Requirement: Save on Enter
Changes MUST ONLY be saved when the user presses the `Enter` key.
#### Scenario: Commit Change
User types "乙丑" and presses Enter; the edit mode closes, and the pillar updates to "乙丑".

### Requirement: Cancel on Blur/Escape
If the user clicks outside the input field (Blur) or presses `Escape`, the edit mode MUST close WITHOUT saving changes.
#### Scenario: Discard Change
User edits "甲子" to "乙"; clicks the blank background; the input closes, and the pillar remains "甲子".
