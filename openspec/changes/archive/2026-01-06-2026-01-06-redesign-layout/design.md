# Design: Bazi Grid Layout

## Layout Structure

```
+-------------------------------------------------------+
|  HEADER                                               |
+-------------------------------------------------------+
|  +---------------------------+  +------------------+  |
|  | LEFT: CHART (70%)         |  | RIGHT: INFO (30%)|  |
|  |                           |  |                  |  |
|  |  [ 天 ] (Heaven)          |  |  [ 分析结果 ]    |  |
|  |  运  年  月  日  时       |  |                  |  |
|  |  -   甲  乙  丙  丁       |  |  > 子午冲        |  |
|  |  -   子  丑  寅  卯       |  |  > 卯酉冲        |  |
|  |                           |  |                  |  |
|  |  [ 人 ] (Human)           |  |                  |  |
|  |      年  月  日  时       |  |                  |  |
|  |      戊  己  庚  辛       |  |                  |  |
|  |      辰  巳  午  未       |  |                  |  |
|  |                           |  |                  |  |
|  +---------------------------+  +------------------+  |
+-------------------------------------------------------+
```

## CSS Classes

-   `.layout-container`: Flex container, `flex-row`.
-   `.chart-panel`: `flex-[7]`, bg-color, padding.
-   `.info-panel`: `flex-[3]`, bg-color, scrollable list.
-   `.bazi-grid-5`: `grid-cols-5` (for Heaven).
-   `.bazi-grid-4`: `grid-cols-4` (for Human).
-   `.highlight-box`: Absolute positioning or border styling on the cell `div`.
    -   *Strategy:* Use a conditioned class on the cell wrapper: `border-2 border-red-500` vs `border border-transparent`.

## Data Mapping

-   **Heaven (Top):**
    -   `luck` (DaYun): Placeholder (until implemented).
    -   `year`: `currentBazi.year`
    -   `month`: `currentBazi.month`
    -   `day`: `currentBazi.day`
    -   `hour`: `currentBazi.hour`
-   **Human (Bottom):**
    -   `year`: `userBazi.year`
    -   `month`: `userBazi.month`
    -   `day`: `userBazi.day`
    -   `hour`: `userBazi.hour`

## Highlighting Logic
Each `Relationship` object in the logic (from `utils/relationships.ts`) returns `refs`: `[{ chart: 'user', pillar: 'day', part: 'zhi' }, ...]`.
-   `chart: 'user'` -> Targets "Human" section.
-   `chart: 'current'` -> Targets "Heaven" section.
-   This maps perfectly.
