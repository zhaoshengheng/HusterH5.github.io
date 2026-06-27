# 背景音乐

本作品使用一首通用背景音乐，所有身份共用。

## 当前曲目

- **文件名**：`Forest Hymn 森林之歌.mp3`
- **用途**：全作品通用 BGM，从封面页开始加载
- **播放策略**：
  - 页面加载时 `preload="auto"` 预加载
  - 浏览器自动播放策略允许时，首次用户交互后自动播放
  - 自动播放被拦截时，用户可点击右上角 ♪ 按钮手动播放/暂停
  - 循环播放（`loop`）

## 历史说明

早期版本为四个身份分别配置不同 BGM（`highschool.mp3` / `student.mp3` / `alumni.mp3` / `public.mp3`），后改为通用一首，简化体验。如需恢复分身份 BGM，可在 `script.js` 的 `identities` 对象中为各身份重新添加 `bgm` 字段，并将 `updateBgmSource()` 改回读取 `identities[currentIdentity].bgm`。
