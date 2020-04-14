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

When watching a video, the viewers may see the bullet chatting scrolling or being fixed at top or bottom in the video area. The bullet chatting may contain text, emoji or images. so the bullet chatting rendering behavior should be standardized.

### Expected Data:

Data structure to render a bullet chatting, such as color, fontSize, animating duration, image. 

### Dependencies - Affected Bullet Chatting deliverables and/or work items:

### Description:

There are some details covered in this use case 

- The bullet chatting content includes text, images and animation, etc. 
- The bullet chatting can be statically displayed at the top or bottom of the video area.
- The bullet chatting can be displayed in the video area by scrolling in a fixed direction, such as scrolling from right to left.
- If the user pause the video, and the bullet chatting is also paused.
- The bulelt chatting is in sync with the video timeline. Just like WebVTT, when the video timeline changes, the bullet chatting will change simultaneously as well.
- When the user hover on a specified bullet chatting, the bullet chatting may stop scrolling, and other bullet chatting is display as usual. This behavior may be not a default way, but the ability to control this behaviour should be provided.
- The bullet chatting can be overlaped.

#### Variants:


### Gaps:

When syncing with the video timeline, service provider need to know current video time, but [timeupdate](https://html.spec.whatwg.org/multipage/media.html#event-media-timeupdate) DOM event is triggered every 250 millisecond, a more accurate time need to be provided. [requestAnimationFrame()](requestAnimationFrame()) may be good option, but it can be more better when considering to use [video.requestVideoFrameCallback()](https://github.com/WICG/video-rvfc/blob/gh-pages/explainer.md).

### Existing standards:

### Comments:


