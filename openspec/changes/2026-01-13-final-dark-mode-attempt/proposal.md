# Proposal: Robust System-Based Dark Mode

## Why
Users with system-wide dark mode settings expect the application to match their preference. Previous attempts were over-engineered and broke the application's layout/fonts. This proposal focuses on a safe, additive approach.

## What Changes
1.  **Component Styling**: Add `dark:` variant classes to existing React components to override background and text colors.
2.  **Global Metadata**: Update `index.html` with `color-scheme` to inform browsers and prevent style injection plugins from guessing incorrectly.
3.  **Strict Preservation**: NO changes to `src/index.css` directives or `tailwind.config.js`.

## Goal
Enable automatic dark mode switching based on system preference WITHOUT modifying layout, fonts, or existing design structure.
