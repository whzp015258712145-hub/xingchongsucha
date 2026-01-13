# Chart Layout Specs

## ADDED Requirements

### Requirement: Chart Section Content
The chart MUST be divided into "Heaven" (Tian) and "Human" (Ren) sections with specific content assignments.
#### Scenario: Heaven Section
- **Given** the Relationship Chart is rendered
- **Then** the **Top** section MUST be labeled **"天" (Heaven)**.
- **And** it MUST show **Current Date** (Flowing Time) pillars.
- **And** it MUST have 4 columns (Year, Month, Day, Hour).

#### Scenario: Human Section
- **Given** the Relationship Chart is rendered
- **Then** the **Bottom** section MUST be labeled **"人" (Human)**.
- **And** it MUST show **User Bazi** (Natal Chart) and **Luck** (DaYun) pillars.
- **And** it MUST have 5 columns (Luck, Year, Month, Day, Hour).
