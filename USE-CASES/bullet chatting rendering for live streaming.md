## Title: bullet chatting rendering for live streaming

### Submitter

Zhaoxin Tan

### Reviewer(s):

Fuqiao Xue, Yajun Chen, Huaqi Shan, Larry Zhao

### Tracker Issue ID:

### Category:

Live streaming

### Status: 

### Target Users

- service provider
- normal user

### Motivation:

In this scenario, Bullet Chatting can be a real-time comments for live stream, or direct interaction between the anchor and the viewers in the live streaming scenario. Compared with the traditional real-time comments, the anchor can understand the audience's needs and feedback more intuitively according to the display of the Bullet Chatting on the screen, adjust the next action and processing more conveniently, and can also interact according to the viewers' input. And different from on-demand video, bullet chatting is not needed to sync with the video timeline. so the bullet chatting rendering behavior standardized should cover this scenario.

### Expected Data:

Data structure to render a bullet chatting, such as color, font size, animation duration, images etc.

### Dependencies - Affected Bullet Chatting deliverables and/or work items:

### Description:

There are some details covered in this use case 

- The bullet chatting comment content can include both text and images.
- The bullet chatting comment can be animated.
- The bullet chatting comment can be statically displayed at the top or bottom of the specified area(like display wall or big screen).
- The bullet chatting comment can be displayed in the specified area by scrolling in a fixed direction, such as scrolling from right to left.
- The bullet chatting comment should be displayed on the screen in real time after it is being sent.
- The bullet chatting overlapping behavior can be controlled.
- The bullet chatting continues playing or pause can be controlled when live streaming paused.
- The bullet chatting can be cleared when live streaming resumes from pause.

#### Variants:

### Screenshot:
![Screenshot of Live streaming](https://w3c.github.io/danmaku/images/video-live.png "Live streaming")
> Screenshot of Live streaming interaction


### Gaps:

Please refer [Bullet Chatting Rendering for On-demand Videos](./bullet%20chatting%20rendering%20for%20on-demand%20videos.md#gaps)

### Existing standards:

### Comments:


