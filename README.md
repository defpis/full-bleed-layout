### 纯CSS实现全出血布局

> 原文阅读：https://www.joshwcomeau.com/css/full-bleed/

```scss
.full-bleed-wrapper {
  display: grid;
  grid-template-columns: 1fr min(80ch, calc(100% - 64px)) 1fr; // 定义三列，第一列和第三列自适应，中间列在80个字符和100%-64px之间取较小值
  grid-column-gap: 32px; // 侧边距
}

.full-bleed-wrapper > * {
  grid-column: 2; // 填充到第二列
}

.full-bleed {
  grid-column: 1 / -1; // 填充第一列到最后一列

  > img {
    width: 100%;
    height: 100%;
  }
}
```
