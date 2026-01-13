# Design: Cloud Decoration & DaYun

## Cloud Decoration
Instead of: `( 天 )`
Use: `~ 天 ~` (Where `~` is a cloud SVG pattern).
-   Left Cloud: Flips horizontally if needed.
-   Right Cloud: Standard.
-   Color: Subtle gold or stone-400 to match the Zen theme.

## DaYun Display
-   **Location:** The first column of the "Heaven" (Top) grid.
-   **Label:** "男大运" (Male Luck) or "女大运" (Female Luck).
-   **Toggle:** Click the label to switch gender.
-   **Logic:**
    -   Requires precise Solar Date.
    -   Male + Yang Year Stem = Forward.
    -   Male + Yin Year Stem = Backward.
    -   (Handled by `lunar-javascript`).

## Centering
-   The "Heaven" grid has 5 cols.
-   The "Human" grid has 4 cols.
-   To center "Human" below "Heaven", the 4 cols should align with the *center* of the 5-col space, or just use `justify-content: center` on the row. currently it has a dummy empty col. I will remove the dummy col and use Flexbox centering or Grid centering constraints.
