# Design: XingChongSuCha Architecture & UI

## Architecture
- **Framework:** React 18+ with Vite.
- **Language:** TypeScript.
- **Styling:** Tailwind CSS.
- **Domain Logic:** `lunar-javascript` library for:
    - Converting Solar/Gregorian dates to Lunar/Gan-Zhi.
    - Calculating Gan-Zhi for arbitrary user inputs.
    - (Potential) Relationship helpers, though much might be custom logic mapping.

## UI/UX Design
- **Aesthetic:** "Designed," simple, elegant, generous (大方).
- **Layout:**
    - **Header:** Current Gan-Zhi Date (prominent, centered).
    - **Main Content:**
        - **Input Section:** 4 input fields for Year, Month, Day, Hour (or a date picker that converts to Bazi). *Decision:* A date picker is friendlier, but "entering Bazi" directly was requested. We will support Date Picker -> Auto-convert to Bazi as the primary flow, but maybe allow manual override if needed. *Correction:* The prompt says "fill in their Bazi" (填入自己的八字). For a "Quick Lookup", usually people know their birthday. We will offer a "Birthday Input" which converts to Bazi.
    - **Results Section:**
        - A visual table or list showing the relationships.
        - Relationships should be grouped clearly (e.g., "Today's Clashes", "Today's Combinations").
- **Typography:** Serif fonts for headers/Gan-Zhi characters to give a traditional yet modern feel (referencing user screenshot style). Sans-serif for UI elements.
- **Colors:** High contrast but soft. Black ink on paper white/off-white background.

## Data Structure
- **User Bazi:** Object `{ year: GanZhi, month: GanZhi, day: GanZhi, hour: GanZhi }`.
- **Current Date:** Object `{ year: GanZhi, month: GanZhi, day: GanZhi, hour: GanZhi }`.
- **Relationship Map:** A constant/config mapping Gan (Stems) and Zhi (Branches) to their interactions.

## Key Components
1.  `CurrentDateDisplay`: Updates every minute/hour.
2.  `BaziInput`: Date/Time picker -> GanZhi converter.
3.  `RelationshipChart`: The core visualization.
