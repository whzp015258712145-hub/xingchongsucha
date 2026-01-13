# Proposal: Visual Overhaul for Zen Aesthetic

## Why
The current UI, while functional, uses standard Tailwind components (cards with shadows, bordered inputs) that feel generic. The goal is to achieve a "Zen/Minimalist" aesthetic that feels premium, calm, and tailored for a Bazi application.
1.  **Typography:** Needs more consistent serif usage for traditional elements and clean sans-serif for UI labels.
2.  **Spacing:** Needs to be more generous and airy.
3.  **Components:**
    *   **Header:** Remove heavy tracking, use a more elegant layout.
    *   **Date Display:** Remove the "card" look; integrate it seamlessly into the page flow.
    *   **Inputs:** Replace standard bordered inputs with a cleaner, underline or "invisible" style that focuses on the content.
    *   **Colors:** Soften the contrasts; use `stone-50` and `stone-900` effectively.

## What Changes
1.  **Global Theme:** Ensure `bg-stone-50` is the base.
2.  **Header:**
    *   Simplify the title and subtitle.
    *   Increase vertical spacing.
3.  **CurrentDateDisplay:**
    *   Remove the white background card and shadow.
    *   Make it a clean, centered text block.
    *   Use a large, elegant serif font for the current GanZhi.
4.  **BaziInput:**
    *   Remove the container card/shadow.
    *   Style inputs as minimal underlined fields or subtle soft-bg fields.
    *   Improve the "Ghost Text" placeholder style.
5.  **RelationshipChart:**
    *   (Already partially polished, but will ensure it aligns with the removal of heavy borders/shadows from other components).
    *   Ensure the "Right Panel" list integrates well (maybe remove the specific background and just use spacing).

## Scope
-   `src/App.tsx`: Layout adjustments.
-   `src/components/CurrentDateDisplay.tsx`: Complete restyle.
-   `src/components/BaziInput.tsx`: Complete restyle.
-   `src/components/RelationshipChart.tsx`: Minor tweaks for consistency.
-   `src/index.css`: Typography tweaks (if needed).

