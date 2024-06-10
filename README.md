# Etch A Sketch

## Overview
Click here to see it live: [https://victorzottmann.github.io/etch-a-sketch/](https://victorzottmann.github.io/etch-a-sketch/)

Based on the popular toy Etch A Sketch, this project is a web app that allows users to draw and sketch on a virtual canvas. It consists of a few customizable configuration features, such as grid size, color selection, and even a rainbow drawing mode. Users can also choose to enable or disable the grid layout.

### Low-Fidelity Prototype vs. Final Design
At first, I designed a low-fidelity prototype to make it easier to think about the code and its features. 

![Low-fidelity wireframe of the finalized toy](./design/lofi-prototype.png)

And this is the final design:

![Overview of the app](./screenshots/complete-project.png)

## UI/UX Decisions

### Color Contrast
I chose a color scheme that would not only look nice but whose contrast between the foreground and background colors also complied the WCAG Accessibility Guidelines for color contrast (`AA` and `AAA`).

#### Link to the contrast checker: [Link to WebAIM's contrast checker](https://webaim.org/resources/contrastchecker/)

In addition, I opted for a dark blue background in order for the experience to be easier on the eyes as opposed to the original white background. 

### Key Usability Considerations
#### Cognitive Load, Consistency, and Aesthetics
In order to minimize cognitive load, I adopted a minimal design for the user interface and made sure to maintain elements consistent across the board. For example, all the available settings are located in a menu bar to the left of the drawing board.

#### Recognition Rather Than Recall
In contrast, since clearing the drawing board would potentially be something that users would do more frequently, I opted to place a button at the bottom of the board to make it easier to access it.

#### Help Users Recognize, Diagnose, and Recover from Errors
When users input an invalid `grid size`, such as 0 or a negative number, or any value above 100, they receive a friendly warning with instructions on what to do to fix it.

![Warning feedback given when users enter a grid size outside of the allowed range](/screenshots/grid-size-warning.png)
![Warning feedback given when the grid size input field is empty](/screenshots/grid-size-empty.png)

## How to Run Locally
1. Clone this repo
2. Open the `index.html` file in the browser, or run it through a live server

## Tech Stack
- HTML
- CSS
- JavaScript