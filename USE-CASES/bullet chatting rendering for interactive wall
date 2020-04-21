## Title: bullet chatting rendering for interactive wall

### Submitter

Yajun Chen

### Reviewer(s):

Fuqiao Xue, Zhaoxin Tan, Huaqi Shan, Larry Zhao

### Tracker Issue ID:

### Category:

Interactive wall

### Status: 

### Target Users

- service provider
- normal user

### Motivation:

In this scenario, the user can send the content of the Bullet Chatting to the display wall in an offline event. The wall can be a pure Bullet Chatting application, without any video or other content on the big screen. The wall only shows the discussions at the venue or online, and enhances the event atmosphere to make participants have a stronger sense of participation.

### Expected Data:

Data structure to render a bullet chatting, such as color, font size, animation duration, images etc.

### Dependencies - Affected Bullet Chatting deliverables and/or work items:

### Description:

There are some details covered in this use case 

- The bullet chatting content can include both text and images.
- The bullet chatting can be animated.
- The bullet chatting can be statically displayed at the top or bottom of the specified area(like display wall or big screen).
- The bullet chatting can be displayed in the specified area by scrolling in a fixed direction, such as scrolling from right to left.
- The bullet chatting should be displayed on the screen in real time after it is being sent.
- The bullet chatting overlapping behavior can be controlled.

#### Variants:

### Screenshot:
![Screenshot of Interactive wall](https://w3c.github.io/danmaku/images/bulletchat-wall.png "Interactive wall")
> Screenshot of Interactive wall interaction


### Gaps:

When syncing with the video timeline, service provider needs to know the current video time, but since [timeupdate](https://html.spec.whatwg.org/multipage/media.html#event-media-timeupdate) DOM events are triggered every 250 milliseconds, a more accurate time needs to be provided. [requestAnimationFrame()](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#animation-frames) may be good option, but it can be more better when considering to use [video.requestVideoFrameCallback()](https://github.com/WICG/video-rvfc/blob/gh-pages/explainer.md).

### Existing standards:

### Comments:


