# Spec: Swap Heaven and Human Layout

## MODIFIED Requirements

### Requirement: Visualize Relationships
The application MUST render the analysis results with the User Natal Bazi at the top and the Dynamic Time/Luck at the bottom.

#### Scenario: Swapped Grid Order
- **Given** the Relationship Chart is displayed
- **Then** the **Top** section MUST be labeled **"天" (Heaven)** and show 4 columns (User Bazi).
- **And** the **Bottom** section MUST be labeled **"人" (Human)** and show 5 columns (DaYun + Current Time).
- **And** the DaYun column MUST allow gender toggling between "男大运" and "女大运".