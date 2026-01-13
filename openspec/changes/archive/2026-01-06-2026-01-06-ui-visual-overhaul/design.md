# Design: Zen Aesthetic

## Principles
-   **Less Container, More Content:** Avoid using "Cards" (white box on gray background) unless necessary for grouping. Use whitespace to separate sections.
-   **Typography First:** Let the Chinese characters (GanZhi) take center stage using Serif fonts.
-   **Soft & Natural:** Use `stone` colors. Avoid harsh blacks (`#000`) or pure whites (`#fff`) where possible; prefer `stone-900` and `stone-50`.

## Component Styles

### Header
-   Title: `text-3xl md:text-4xl font-serif font-bold text-stone-800`.
-   Subtitle: `text-xs tracking-[0.2em] text-stone-400 uppercase`.

### Current Date
-   Container: Transparent.
-   Content: Huge Serif text for the pillars.
-   Labels (Year/Month/Day): Small, sans-serif, `text-stone-400`.

### Input
-   Style: `border-b border-stone-300 focus:border-stone-500 bg-transparent rounded-none px-2 py-1 text-center font-serif text-xl`.
-   Labels: Floating or small top labels `text-[10px] text-stone-400`.

### Layout
-   `max-w-4xl` (slightly tighter than 5xl for reading, but 5xl is okay for the split view).
-   `space-y-12` or `space-y-16` between major sections to give "Zen" breathing room.
