# Proposal: Enhance Bazi Reset and Footer

## Summary
Update the footer copyright text and ensure that clearing the Bazi input fields (and submitting) resets the application state to default (clearing the analysis results).

## Motivation
To align with the design requirement "大道至易" and provide a way to clear the analysis without refreshing the page.

## Goals
- Update footer text.
- Modify `handleGenerate` in `BaziInput` to treat empty inputs as a "Clear" action (`onBaziChange(null)`).
