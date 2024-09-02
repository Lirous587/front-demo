- 在拖动目标上触发事件 (源元素):

  > ondragstart - 用户开始拖动元素时触发\

- 释放目标时触发的事件:

  > ondragenter - 当被鼠标拖动的对象进入其容器范围内时触发此事件\
  > ondragover - 当某被拖动的对象在另一对象容器范围内拖动时触发此事件（可用用来清除浏览器默认行为，保证 ondrop 事件正常触发）\
  > ondragleave - 当被鼠标拖动的对象离开其容器范围内时触发此事件 \
  > ondrop - 在一个拖动过程中，释放鼠标键时触发此事件

- dataTransfer 对象的 clearData 方法仅在 dragstart 事件中有效
