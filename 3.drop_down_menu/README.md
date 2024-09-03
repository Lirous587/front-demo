# 遇到的问题

1. `display` 为 `block-inline` 的盒子直接有默认空白 要设置 `font-size`为 `0` 来解决
2. `dispaly` 为 `block-inline` 的盒子的对齐基准线为 `baseline`,如果不修改 `vertical-align` ,会导致 hover 之后头部标签移动到底部,
   > 这一情况可以通过 `flot` 来解决
