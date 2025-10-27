# Index Badge

<a href="https://marketplace.visualstudio.com/items?itemName=antfu.index-last" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/antfu.index-last.svg?color=eee&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" /></a>
<a href="https://kermanx.github.io/reactive-vscode/" target="__blank"><img src="https://img.shields.io/badge/made_with-reactive--vscode-%23007ACC?style=flat&labelColor=%23229863"  alt="Made with reactive-vscode" /></a>

一个简洁优雅的 VSCode 扩展，为项目中的 `index.*` 入口文件添加可自定义的徽章标记，让文件浏览更加直观高效。

## 🌟 功能

- 🎯 自动识别所有 `index.*` 文件（如 `index.ts`、`index.js`、`index.vue` 等）
- 🌟 为这些文件添加徽章图标，在文件浏览器中更醒目
- 🎨 **支持自定义徽章和提示文本**
- 🚀 开箱即用，默认使用 🌟 图标
- 🔧 基于 VSCode 原生的 FileDecorationProvider API，性能优秀

## 💡 使用场景

当你的项目中有很多模块，每个模块都有 `index.ts` 作为入口文件时，这个扩展可以帮助你快速识别这些入口文件：

```
src/
├── components/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   └── index.ts 🌟       ← 带有醒目的徽章标记
├── utils/
│   ├── format.ts
│   ├── validate.ts
│   └── index.ts 🌟       ← 一眼就能看到
```

## 📖 使用方法

### 基础使用

1. 安装扩展
2. 打开任意工作区文件夹
3. 在 VSCode 文件浏览器中，所有 `index.*` 文件会自动显示 🌟 徽章

就是这么简单！

### 自定义配置

打开 VSCode 设置，搜索 `indexBadge`，可以配置：

#### `indexBadge.badge`（徽章图标）
自定义显示的徽章内容，可以是任何 emoji 或单个字符：
- 默认：`🌟`
- 示例：`🌟`、`⭐`、`📦`、`i`、`*` 等

#### `indexBadge.tooltip`（提示文本）
自定义鼠标悬停时显示的提示文本：
- 默认：`index file`
- 示例：`入口文件`、`模块索引`等

**配置示例（settings.json）：**
```json
{
  "indexBadge.badge": "✨",
  "indexBadge.tooltip": "入口文件"
}
```

## 🔧 工作原理

该扩展使用 VSCode 的 `FileDecorationProvider` API，为 `index.*` 文件添加视觉装饰徽章。通过在文件名旁显示自定义图标，使入口文件在众多文件中脱颖而出，提升开发体验。

## 🎯 适用场景

- **组件库开发**：快速定位组件入口文件
- **模块化项目**：清晰标识各模块的 index 文件
- **大型项目**：在复杂目录结构中一眼找到入口
- **团队协作**：统一的视觉标识，提升代码可读性

## License

[MIT](./LICENSE.md) License © 2025 [Anthony Fu](https://github.com/antfu)
