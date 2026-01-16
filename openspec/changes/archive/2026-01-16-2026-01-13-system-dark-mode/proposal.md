# Proposal: System-Based Dark Mode

## Context
The user wants the application to automatically adapt to their device's theme (Light or Dark mode).

## Goal
Implement a dark version of the application that triggers based on the user's system preference.

## Strategy
- Use Tailwind CSS `dark:` variant classes.
- Target background and text colors only.
- Explicitly DO NOT modify image colors (e.g., xiangyun).
- Update `index.css` to include `color-scheme: light dark` for native browser element support (scrollbars, etc.).

## Scope
- `App.tsx`: Main background and text.
- `BaziInput.tsx`: Input cards and text.
- `CurrentDateDisplay.tsx`: Clock card and text.
- `RelationshipChart.tsx`: Main chart area, analysis panel, and pillar items.
