# Design: Manual Bazi Input

## UI/UX
- **Toggle Switch:** A segmented control or simple button pair at the top of the `BaziInput` card: [ 按日期排盘 | 手动输入八字 ].
- **Manual Mode:**
    - A grid layout (4 columns: Year, Month, Day, Hour).
    - Each column has two dropdowns:
        - Top: Heavenly Stem (甲...癸).
        - Bottom: Earthly Branch (子...亥).
    - A "Clear" or "Reset" button.
- **Validation:** Ensure all 8 characters are selected before considering the Bazi "valid" (or allow partials if logic permits, but `compareCharts` expects full strings. We will require full input for now or handle empty strings gracefully).

## Data Flow
- Component maintains internal state for:
    - `mode`: 'date' | 'manual'
    - `manualBazi`: `{ yearGan, yearZhi, monthGan... }`
- `useEffect` hooks will update the parent `onBaziChange` when valid data is present in the active mode.

## Components
- Modify `BaziInput.tsx`:
    - Import `HEAVENLY_STEMS`, `EARTHLY_BRANCHES` from utils.
    - Render conditional form based on mode.
