# Design: Launch Readiness

## Context
The application "刑冲速查" is functionally complete and visually polished. To transition from a "development prototype" to a "production product," it requires standard web metadata that defines its identity in the browser and on the web.

## Metadata Strategy

### 1. Standard SEO
- **Description**: A concise summary of the tool's purpose (Bazi relationships, fast lookup).
- **Keywords**: Relevant terms like 八字, 刑冲, 排盘, etc.

### 2. Social Graph (Open Graph)
- `og:title`: 刑冲速查 (Bazi Lookup)
- `og:description`: 专业的八字刑冲合害速查工具，实时流时流分分析。
- `og:type`: website

### 3. Mobile Web App
Since this is a utility tool, users likely access it via mobile.
- `apple-mobile-web-app-capable`: `yes` (Allows running full screen if added to home screen).
- `apple-mobile-web-app-status-bar-style`: `black-translucent` (Matches the modern/darker aesthetic potential, though app is light, this usually looks best).
- `format-detection`: Disable automatic phone number linking to prevent accidental clicks on numbers in the chart.

### 4. User Experience Refinement
- **Decorative Images**: The "Xiangyun" cloud images are purely decorative. Currently, they can be dragged or selected, which breaks the "App-like" illusion.
- **Solution**: Apply `pointer-events-none` (CSS) or `draggable="false"` (HTML attribute) + `user-select: none` to prevent interaction.

### 5. Project Configuration
- `package.json`: Bump version to `1.0.0` to signal stability.
