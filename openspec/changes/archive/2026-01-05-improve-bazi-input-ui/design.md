# Design: Dynamic Placeholders

## Logic
- On component mount, capture `new Date()`.
- Convert to Solar -> Lunar -> GanZhi using `lunar-javascript`.
- Format placeholders:
    - Year: `YYYY / GanZhi`
    - Month: `M / GanZhi`
    - Day: `D / GanZhi`
    - Hour: `H / GanZhi`

## UI Changes
- **Header:** Update text and ensure centering (using flexbox utilities).
- **Inputs:** Pass formatted strings to `placeholder` prop.
