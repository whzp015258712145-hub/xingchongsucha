# Design: UI Polish

## Grid Styling
-   **Default State:** `border-transparent` (or no border class).
-   **Active State:** `border-2 border-red-500 shadow-[...]`.
-   **Alignment:**
    -   Container: `flex flex-col items-center`.
    -   Headers: `text-center w-full mb-8`.

## Analysis List Redesign
Instead of:
```
[ Box with Icon + Text ]
[ Box with Icon + Text ]
```

Use:
```
(No Header)

• 子午冲  (Default: text-stone-600)
• 卯酉冲  (Active: text-red-600, font-bold, maybe small dot indicator)
```

CSS for List Item:
-   `w-full text-left py-2 px-4 rounded transition-colors`
-   `hover:bg-stone-100`
-   Active: `bg-red-50 text-red-700`

## Layout Structure (Centering)
The "Heaven" and "Human" headers currently use a flex row with a line separator.
*New:* Just a centered, serif title with maybe a small ornament or just simple text.
```
      [ 天 ]
  (Grid centered)

      [ 人 ]
  (Grid centered)
```
