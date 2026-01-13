# Design: Implicit Submission

## Interaction
- User fills Year -> Enter -> Month -> Enter -> Day -> Enter -> Hour -> Enter.
- On the final Enter, the `handleGenerate` function is called directly.

## UI Changes
- Remove the bottom `div` containing the button.
