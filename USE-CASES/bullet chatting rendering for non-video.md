## Title: bullet chatting rendering for non-video

### Submitter

Yajun Chen

### Reviewer(s):

Fuqiao Xue, Zhaoxin Tan, Huaqi Shan, Larry Zhao

### Tracker Issue ID:

### Category:

non-video

### Status: 

### Target Users

- service provider
- normal user

### Motivation:

In this scenario, the user can send the Bullet Chatting comments to the display wall (A large display) in an offline event. The wall can be a pure Bullet Chatting web application (Not native app, just built with HTML, CSS and Javascript), without any video in it. The wall only shows the discussions at the venue or online, and enhances the event atmosphere to make participants have a stronger sense of participation.This is a common scenario, so the bullet chatting rendering behavior standardized should cover this scenario.

### Expected Data:

Data structure to render a bullet chatting, such as color, font size, animation duration, images etc.

### Dependencies - Affected Bullet Chatting deliverables and/or work items:

### Description:

There are some details covered in this use case 

- **The bullet chatting does not need to be associated with timeline.**
- **In this scenario can be a pure Bullet Chatting application, without any video.**
- The bullet chatting content can include both text and images.
- The bullet chatting can be animated.
- The bullet chatting can be statically displayed at the top or bottom of the specified area(like display wall or big screen).
- The bullet chatting can be displayed in the specified area by scrolling in a fixed direction, such as scrolling from right to left.
- **The bullet chatting should be displayed on the screen in real time after it is being sent.**
- The bullet chatting overlapping behavior can be controlled.

#### Variants:

### Screenshot:
![Screenshot of Interactive wall](https://w3c.github.io/danmaku/images/bulletchat-wall.png "Interactive wall")
> Screenshot of Interactive wall interaction


### Gaps:

### Existing standards:

### Comments:


