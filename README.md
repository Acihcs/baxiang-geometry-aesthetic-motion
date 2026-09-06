# 八象几何 · 六十四境

**Eight Thurston geometries × Eight trigrams × Sixty-four hexagrams**

一个以周易卦象为叙事、以三维几何特征为视觉线索的交互展台。深蓝色界面，支持桌面与手机浏览。

[在线体验](https://baxiang-geometry.aestheticmotion.chatgpt.site)

## 交互

- **双境连接**：上下卦对应两种几何意象，支持拖动旋转、尺度调整与暂停动画。
- **八象原型**：浏览八种几何及其对应的纯卦。
- **变爻网络**：展示 64 个节点、192 条边组成的 Q₆ 图的二维投影。
- **六十四卦矩阵**：横轴为下卦，纵轴为上卦，高亮当前卦及其六个单爻邻卦。
- **六爻操作**：点击单爻，或执行上下互换、错卦、综卦。
- **展示**：响应式布局、浏览器支持时的全屏展示、减少动态效果偏好支持。

## 本地运行

纯静态 HTML、CSS 与 JavaScript，无第三方运行时依赖，无需构建。

在项目根目录运行（需要 Python 3）：

```bash
python3 -m http.server 8080 --directory dist
```

Windows 也可使用：

```powershell
py -m http.server 8080 --directory dist
```

在浏览器访问 http://localhost:8080 。使用了 ES Modules，请通过 HTTP 服务打开，不要直接双击 HTML 文件。

## 代码结构

| 文件 | 用途 |
| --- | --- |
| `dist/index.html` | 页面结构、模型说明与来源 |
| `dist/style.css` | 配色、排版与移动端布局 |
| `dist/data.js` | 八种几何、64 卦、卦义转译与二进制编码 |
| `dist/app.js` | Canvas 绘制、三维坐标投影、矩阵与交互联动 |
| `scripts/check.mjs` | 数据完整性、变爻网络与静态资源检查 |

使用 Node.js 18 或更新版本执行检查，无需安装依赖：

```bash
npm run check
```

## 几何与八卦

| 八卦 | 几何 | 意象 |
| --- | --- | --- |
| 乾 | S³ | 周行、完整 |
| 坤 | 𝔼³ | 承载、平展 |
| 坎 | ℍ³ | 深远、重险 |
| 离 | SL̃₂(ℝ) | 依附、旋升 |
| 震 | Sol | 激发、张力 |
| 巽 | Nil | 渗入、积累 |
| 艮 | S² × ℝ | 止界、守形 |
| 兑 | ℍ² × ℝ | 开放、交流 |

## 模型边界

这是一套原创的**意象映射**，不是传统易学已有的数学对应，也不是占卜工具。

1. 瑟斯顿的八种指模型几何，不是八个独一无二的拓扑空间；同一几何可以有多个不同的商流形。
2. 画面使用 Canvas 2D 绘制三维坐标投影。线网是截面、局部结构或象征示意，不是完整几何的等距嵌入，也不是非欧几何光线追踪。
3. 中间的连接颈示意代表流形的连通和。拼接结果不必具有单一瑟斯顿几何。
4. 连通和可交换；上下卦的标记与叙事保留阅读方向，不能由此宣称泰与否的底层流形必然不同。
5. 六爻编码自下而上，阳爻为 1、阴爻为 0。前三位为下卦，后三位为上卦。翻转一位形成单爻变化，整个网络严格构成 Q₆ 图。网络中的线条交叉不是额外节点。
6. 动画表达空间意象与阅读方向，不模拟真实的几何流、测地运动或拓扑变形。

## 部署

将 `dist/` 目录作为静态站点根目录发布即可。项目使用相对资源路径，可部署在子目录下。

此开源包不包含原展示站点的项目身份、访问策略或部署凭证。GitHub 仓库公开和网页公开是两项独立设置；上方在线体验已经开放访问。

## 来源

- [Eight Thurston geometries](https://3-dimensional.space/geometries/)
- [Allen Hatcher — Notes on Basic 3-Manifold Topology](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)
- [《周易·说卦》](https://ctext.org/book-of-changes/shuo-gua/zhs)

本项目由 Acihcs 发起，借助 Codex 完成实现。欢迎通过 Issue 讨论意象映射、数学表述与移动端体验，或提交改进。

## 许可

[MIT License](LICENSE)。外链文献与第三方资料保留各自的权利。
