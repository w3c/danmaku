# 弹幕接口设计

## Demo

https://w3c.github.io/danmaku/

Demo 中样式以属性的方式实现

## 元素

bullet-chatting-list 和 bulletchatting

```html
<bullet-chatting-list>
    <bulletchatting></bulletchatting>
    <bulletchatting></bulletchatting>
</bullet-chatting-list>
```

## 属性

### bullet-chatting-list 元素

- area：定义滚动弹幕及顶部弹幕显示区域占 bullet-chatting-list 总高度的百分比，范围 0-100，50为半屏，100为满屏
- allowOverlap：定义超出显示区域的弹幕是否允许重叠，false 不展示超出显示区域弹幕，true 把超出显示区域弹幕重叠展示

### bulletchatting 元素

- mode：定义弹幕类型，滚动弹幕、顶部弹幕、底部弹幕、逆向滚动弹幕，默认为滚动弹幕

每条弹幕在屏幕显示时间相同，由 CSS bulletchatting-duration 控制

滚动弹幕：弹幕从右往左滚动；显示时间计算为：从 bulletchatting 最左端在 bullet-chatting-list 最右侧到 bulletchatting 最右侧在 bullet-chatting-list 最左侧；滚动弹幕之间不会碰撞，插入滚动弹幕时，滚动弹幕与 bullet-chatting-list 顶部的距离为保证不会与已有滚动弹幕碰撞的最小值

顶部弹幕：居中显示，插入顶部弹幕时，顶部弹幕与 bullet-chatting-list 顶部的距离为保证不会与已有顶部弹幕碰撞的最小值

底部弹幕：居中显示，插入底部弹幕时，底部弹幕与 bullet-chatting-list 底部的距离为保证不会与已有底部弹幕碰撞的最小值

逆向滚动弹幕：弹幕从左往右滚动，其他同滚动弹幕

## API

## 事件

### bulletchatting 元素

- bulletchattingstart：弹幕动画开始时触发
- bulletchattingend：弹幕动画结束时触发
- bulletchattingcancel：弹幕意外终止时触发，如弹幕被移除或被隐藏，或因为超出显示区域不被展示

## 样式

### bullet-chatting-list 元素和 bulletchatting 元素

- bulletchatting-play-state：running | paused，定义弹幕是否运行或者暂停，可继承
- bulletchatting-duration：<time>，单位为秒(s)或者毫秒(ms)，定义弹幕播放速度，可继承
- 字号、颜色、边框、行高、透明度、阴影等：同现有 CSS 属性

### bulletchatting 元素

- bulletchatting-delay：<time>，单位为秒(s)或者毫秒(ms)，定义弹幕动画于何时开始，定义一个负值可以实现一个弹幕从中间开始运动，定义一个正值可以实现预加载
