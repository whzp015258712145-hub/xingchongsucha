## Context
底部按钮文字重叠问题需要通过改进布局和样式来解决，同时保持整体设计的简洁优雅风格。

## Goals / Non-Goals
- Goals: 
  - 消除文字重叠问题
  - 保持视觉美观和一致性
  - 响应式设计，适配不同屏幕
- Non-Goals: 
  - 不改变整体配色方案
  - 不添加复杂的动画效果

## Decisions

### Decision 1: 增加按钮间距和内边距
- 将按钮间距从 `gap-6` 增加到 `gap-8`
- 为按钮添加适当的 padding，确保点击区域足够大
- 使用 `whitespace-nowrap` 防止文字换行

### Decision 2: 添加视觉分隔和背景
- 为按钮添加淡色背景（hover 时加深）
- 添加圆角和轻微的 padding，形成按钮卡片效果
- 保持分隔符（·）但调整颜色和大小

### Decision 3: 响应式布局
- 小屏幕（<640px）：按钮垂直堆叠，移除分隔符
- 大屏幕：保持水平布局

## Alternatives Considered
1. **纯图标按钮** - 放弃，不符合中文界面习惯
2. **固定宽度按钮** - 放弃，不够灵活
3. **下拉菜单** - 放弃，只有两个选项不需要

## Risks / Trade-offs
- 增加间距可能让 footer 占用更多垂直空间 → 可接受，footer 本身内容不多

## Migration Plan
直接修改样式，无需数据迁移。

## Open Questions
无

