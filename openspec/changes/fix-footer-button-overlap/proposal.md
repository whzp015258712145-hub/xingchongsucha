# Change: Fix Footer Button Text Overlap

## Why
底部"联系我"和"赞助我"按钮的文字在某些情况下会重叠，影响用户体验和视觉美观。

## What Changes
- 优化 footer 按钮布局，防止文字重叠
- 改进按钮样式，增强视觉层次感
- 确保在不同屏幕尺寸下都能正常显示
- 可能的方案：
  - 增加按钮间距
  - 使用图标+文字组合
  - 调整按钮为块状布局（小屏幕）
  - 添加背景或边框增强可读性

## Impact
- Affected specs: visual-design
- Affected code: 
  - src/App.tsx (footer 按钮样式)

