# 背景音乐

本作品使用一首通用背景音乐，所有身份共用。

## 当前曲目

- **文件名**：`Forest Hymn 森林之歌.mp3`
- **大小**：约 3.9 MB
- **用途**：全作品通用 BGM，从封面页开始加载
- **播放策略**：
  - 页面加载时 `preload="auto"` 预加载
  - 浏览器自动播放策略允许时，首次用户交互后自动播放
  - 自动播放被拦截时，用户可点击右上角 ♪ 按钮手动播放/暂停
  - 循环播放（`loop`）

## 加载时机（v53 优化后）

```
loading 页 → 加载完成 → preloadCriticalAssets() 预加载封面/地图等
           → updateBgmSource() 设置 BGM src 并 load()
封面页 → 用户首次交互 → 尝试自动播放
```

相关代码：
- `updateBgmSource()`：设置音频源（`script.js`）
- `preloadCriticalAssets()`：预加载关键资源（`script.js`）

## 历史说明

早期版本为四个身份分别配置不同 BGM（`highschool.mp3` / `student.mp3` / `alumni.mp3` / `public.mp3`），后改为通用一首，简化体验。

如需恢复分身份 BGM：
1. 在 `script.js` 的 `identities` 对象中为各身份添加 `bgm` 字段
2. 将 `updateBgmSource()` 改回读取 `identities[currentIdentity].bgm`
3. 将对应音频文件放入本目录

## 替换音乐

如需替换 BGM，只需将新文件命名为 `Forest Hymn 森林之歌.mp3` 覆盖本文件，无需改代码。
若使用不同文件名，需同步修改 `script.js` 中 `updateBgmSource()` 内的 `src` 变量。
