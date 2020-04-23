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

In this scenario, the user can send the content of the Bullet Chatting to the display wall in an offline event. The wall can be a pure Bullet Chatting application, without any video or other content on the big screen. The wall only shows the discussions at the venue or online, and enhances the event atmosphere to make participants have a stronger sense of participation.This is a common scenario, so the bullet chatting rendering behavior standardized should cover this scenario.

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
For example，The WebVTT or TTML rendering subtitles is within the video playback area.In this kind of scenario, the Bullet Chatting is displayed separately and is not attached to the video. Therefore, it is helpful for this scenario that the rendering area(like size, z-index) can be configured.

### Existing standards:

### Comments:


