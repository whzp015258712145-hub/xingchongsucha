# Design: Hybrid Input Logic

## Components
- **Inputs:** 4 Text Fields.
    - Placeholders: "2024 或 甲子"
- **Action:** Button "排盘 / Update"

## Logic
1.  **State:** 4 strings (`year`, `month`, `day`, `hour`).
2.  **On Change:** Update state directly.
3.  **On Generate:**
    - **Step 1: Check for Date (Numbers)**
        - If Year is number (e.g., "2024") AND Month/Day/Hour are numbers (or empty defaults?):
            - Construct Date object.
            - Calculate GanZhi for all pillars.
            - **Overwite** state with calculated GanZhi.
    - **Step 2: Check for Mixed/Bazi**
        - If inputs are Chinese characters:
            - Assume manual Bazi.
    - **Step 3: Submit**
        - Call `onBaziChange` with the final GanZhi.

## Edge Cases
- **Missing Hour:** If user inputs date but no hour, default to 12:00 or mid-day? Or ask? *Decision:* Default to 12:00 or simply leave Hour pillar empty/unknown if library supports it. `lunar-javascript` generates a full chart. We'll default to 12:00 (Wu Hour) if missing, or maybe current time? Let's default to `0` (Zi Hour) or `12` if blank. Let's use `12` (Noon) as a safe middle, or better yet, require it.
- **Partial Date:** If user enters "2024" and "1", but no day? -> Invalid.
