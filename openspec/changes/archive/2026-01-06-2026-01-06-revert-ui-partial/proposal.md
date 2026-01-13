# Proposal: Partial UI Revert

## Why
The previous visual overhaul was deemed "too ugly" by the user for most components, but the "Zen/glassmorphism" style of the Relationship Chart analysis section was appreciated. We need to revert the Header, Date Display, and Bazi Input to their previous card-based styles while preserving the new look for the analysis chart.

## What Changes
1.  **Revert App.tsx:** Restore compact spacing (`space-y-8`) and standard header styling.
2.  **Revert CurrentDateDisplay.tsx:** Restore the white card container and standard typography.
3.  **Revert BaziInput.tsx:** Restore the white card container and standard input fields.
4.  **Preserve RelationshipChart.tsx:** Keep the current `bg-white/40 backdrop-blur-sm` and refined list styling.

## Scope
- `src/App.tsx`
- `src/components/CurrentDateDisplay.tsx`
- `src/components/BaziInput.tsx`
- `openspec/specs/visual-design/spec.md` (REMOVED Requirements)
