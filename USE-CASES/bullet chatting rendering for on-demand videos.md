## Title: bullet chatting rendering for on-demand videos

### Submitter

Larry Zhao

### Reviewer(s):

Fuqiao Xue, Zhaoxin Tan, Huaqi Shan, Yajun Chen

### Tracker Issue ID:

### Category:

On-demand Video

### Status: 

### Target Users

- service provider
- normal user

### Motivation:

When watching a video, the viewers may see the bullet chatting scrolling or being fixed at top or bottom in the video area. The bullet chatting may contain text, emoji or images. 

Currently, there are two ways to implement Bullet Chatting: Canvas way and CSS way. But both of them are cumbersome and it's not a easy job to implement the functionality, so the bullet chatting rendering behavior should be standardized.

### Expected Data:

Data structure to render a bullet chatting, such as color, font size, animation duration, images etc.

### Dependencies - Affected Bullet Chatting deliverables and/or work items:

### Description:

There are some details covered in this use case 

- The bullet chatting comment can include both text and images.
- The bullet chatting comment can be animated.
- The bullet chatting comment can be statically displayed at the top or bottom of the video area.
- The bullet chatting comment can be displayed in the video area by scrolling in a fixed direction, such as scrolling from right to left.
- If the user pauses the video, and the bullet chatting is also paused.
- The bullet chatting is in sync with the video timeline. Just like WebVTT, when the video timeline changes, the bullet chatting will change simultaneously as well.
- When the user hover on a specified bullet chatting comment, the bullet chatting comment may stop scrolling, and other bullet chats are rendered as usual. This behavior may not be the default, but the capability to control this behavior should be provided.
- The bullet chatting overlapping behavior can be controlled.

#### Variants:

### Screenshot:
![Screenshot of on-demand video interaction](https://w3c.github.io/danmaku/images/video-on-demand.png "video-on-demand")
> Screenshot of on-demand video interaction


### Requirements

-  Time accuracy: Need to know the video time (`video.currentTime`) at every frame of the video
-  Performance: A tons of bullet chatting comments ared needed to be rendered at the same time

### Gaps:

When syncing with the video timeline, service provider needs to know the current video time, but since [timeupdate](https://html.spec.whatwg.org/multipage/media.html#event-media-timeupdate) DOM events are triggered every 250 milliseconds, a more accurate time needs to be provided. [requestAnimationFrame()](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#animation-frames) may be good option, but it can be more accurate when considering to use [video.requestVideoFrameCallback()](https://github.com/WICG/video-rvfc/blob/gh-pages/explainer.md).

### Existing proposals/standards:

- [video-rvfc](https://github.com/WICG/video-rvfc/blob/gh-pages/explainer.md)

### Comments:


