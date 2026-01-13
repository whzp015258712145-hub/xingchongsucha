# Tasks: Robust Dark Mode

1.  [x] **Global Metadata**
    -   Update `index.html`: Add `<meta name="color-scheme" content="light dark">`.

2.  [x] **Component Styling (Additive)**
    -   `App.tsx`: Add `dark:bg-stone-950 dark:text-stone-100` to main container.
    -   `BaziInput.tsx`: Add dark mode backgrounds and borders to container and inputs.
    -   `CurrentDateDisplay.tsx`: Add dark mode to card and text.
    -   `RelationshipChart.tsx`: Add dark mode to container, pillars, and analysis list.

3.  [x] **Verification**
    -   Run `npm run build` to ensure no configuration regressions.