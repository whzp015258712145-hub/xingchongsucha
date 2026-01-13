# Refine Editing Interaction & Auto-Dayun for Manual Input

## Why
1.  **Edit UX:** The current double-click editing feels unpolished. The cursor positioning is unexpected, and accidental clicks outside might save incomplete data (or current behavior is vague). The user explicitly requested "Blur to Cancel" and "Enter to Save" to prevent accidental modifications, along with a specific "replace" feel.
2.  **Missing Dayun:** When users manually input a Bazi (without a date), the system currently fails to calculate the "Dayun" (Luck Pillar) because it lacks a time reference. Users expect the system to infer a likely date from the Bazi and generate the Dayun automatically.

## What Changes
1.  **Interaction (`RelationshipChart`):** 
    - **Enter Edit:** Double-click hides the text and shows an input.
    - **Focus:** Input auto-focuses. Content is selected (or cursor positioned) to facilitate immediate overwriting.
    - **Commit:** `Enter` key saves the changes.
    - **Cancel:** `Blur` (clicking outside) or `Escape` discards changes and reverts to the original value.
2.  **Logic (`utils/relationships`, `App`):**
    - Implement a reverse-lookup algorithm: Given a set of GanZhi (Year, Month, Day, Hour), find the nearest historical/future Solar Date that matches.
    - When manual Bazi is submitted (or edited to a full set), trigger this lookup.
    - Use the found date to calculate and populate the Dayun.

## Risks
- **Performance:** Reverse searching for a date matching 4 pillars can be computationally expensive if not optimized (checking every hour over 100 years). I will optimize by filtering Year -> Month -> Day.
- **Ambiguity:** A Bazi repeats every 60 years (and sometimes sooner/later depending on month/hour interactions). We will default to the "nearest to now" or "recent past" date.
- **Invalid Bazi:** Users might input a Bazi that doesn't exist (e.g., JiaZi Year, invalid Month). The lookup will fail gracefully (no Dayun).
