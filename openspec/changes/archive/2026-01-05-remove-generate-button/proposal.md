# Proposal: Remove Generate Button

## Summary
Remove the "Generate Bazi Chart" button from the Bazi Input component, relying on the "Enter" key press in the last input field to trigger the generation.

## Motivation
To simplify the UI and encourage keyboard-centric interaction as per user request.

## Goals
- Remove the `<button>` element.
- Maintain `handleKeyDown` logic where `Enter` on the last field triggers generation.
