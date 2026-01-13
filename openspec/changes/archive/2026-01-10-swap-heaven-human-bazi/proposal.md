# Swap Heaven and Human Chart Content

## Why
The user identified that the content of the "Heaven" (Tian) and "Human" (Ren) sections is reversed according to their preference/Bazi convention. Heaven should represent the Flowing Time (Current Date), while Human should represent the Natal Chart (User Bazi) and Luck (DaYun). Additionally, the user wants the Top section (Heaven) to be editable via double-click.

## What Changes
1.  **Layout (`RelationshipChart.tsx`):**
    - The "Heaven" section (Top) will now display the `currentBazi` (4 pillars).
    - The "Human" section (Bottom) will now display the `dayun` and `userBazi` (5 pillars).
2.  **Interaction:**
    - Enable double-click editing for `currentBazi` pillars in the Heaven section.
    - Continue to support double-click editing for `userBazi` and `dayun` pillars in the Human section.
3.  **State Management (`App.tsx`):**
    - Extend `handlePillarChange` to support updating `currentBazi`.
    - (Optional/Implied) If the user manually modifies the Current Bazi, the automatic clock update from `CurrentDateDisplay` should probably be suppressed to avoid immediate reverts, though we will keep it simple first. Actually, `CurrentDateDisplay` updates `currentBazi` every second. I will modify `App.tsx` to only accept `onDateChange` updates if no manual override has happened, or just let it update (minimal implementation). 
    - Wait, the user said "双击修改天下面的八字". If it reverts in 1 second, they will be unhappy. I will add a "freeze" state.

## Risks
- **Synchronization:** Manually editing the "Flowing Time" might desync it from the real clock. This is intended by the user ("modify it").
- **Grid Layout:** Swapping 4-pillar and 5-pillar sections requires moving the `luck` column from the bottom section (previously 5 cols) to the bottom section? No, it's already in the bottom section.
  - Previous: Heaven=User(4), Human=Current(4)+Luck(1)=5.
  - New: Heaven=Current(4), Human=User(4)+Luck(1)=5.
  - The Luck column stays in the bottom section.
