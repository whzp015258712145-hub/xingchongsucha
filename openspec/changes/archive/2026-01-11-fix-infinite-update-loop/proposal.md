# Fix Infinite Update Loop

## Why
The application is currently crashing with a "Maximum update depth exceeded" error. This is caused by `CurrentDateDisplay` calling `onDateChange` on every render (or effect dependency cycle), which updates `App` state, causing `CurrentDateDisplay` to re-render, creating an infinite loop. This blocks all UI updates, including the recent visual changes.

## What Changes
1.  **Logic (`CurrentDateDisplay.tsx`):**
    - Debounce or condition the `onDateChange` call. Only call it when the *calculated* Bazi string actually changes, not just when the `now` object changes (which happens every second).
    - Use `useRef` or a check to compare the new Bazi with the previously emitted Bazi before triggering the callback.
2.  **Logic (`App.tsx`):**
    - Wrap the `onDateChange` handler passed to `CurrentDateDisplay` in `useCallback` to prevent it from changing on every render (though the main issue is likely the child component emitting too often or unconditionally).

## Risks
- **Clock Stalling:** If the condition is too strict, the time might not update. But Bazi only changes every 2 hours, so updating every second is unnecessary for the *parent* state, even if the display updates every second.
