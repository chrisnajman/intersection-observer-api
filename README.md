# Intersection Observer API

The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or the viewport. It allows developers to efficiently implement features such as lazy loading, animations, and dynamic content loading without relying on continuous event listeners, improving performance and user experience.

This project demonstrates various use cases of the Intersection Observer API across a four-page website:

1. **Lazy Load Images**: Implements lazy loading for images to improve performance by only loading them when they enter the viewport.
2. **Reveal Single Element**: Observes a single element and applies a visual effect when it enters the viewport.
3. **Reveal Multiple Elements**: Observes multiple sections and triggers animations as they become visible.
4. **Reveal Multiple Mixed Elements**: Observes different types of elements (e.g., sections, headings, columns) and animates them as they scroll into view.

[View on GitPage](https://chrisnajman.github.io/intersection-observer-api)

## JavaScript

Built with **vanilla ES6 JavaScript**, focusing on modern syntax and browser APIs.

The JavaScript has been split into separate modules, improving code modularity:

- `lazy-load.js`: Implements lazy loading for images using the Intersection Observer API. It detects when images enter the viewport and dynamically loads them by replacing the `data-src` attribute with the actual `src`. This improves performance by loading images only when needed.
  - `generate-images.js`: Dynamically generates 50 placeholder images and appends them to a container. Each image is assigned attributes like `width`, `height`, `alt`, and a `data-src` placeholder for lazy loading.
- `reveal-single-element.js`: Observes a single element and applies a `loaded` class when it enters the viewport, triggering a visual effect (e.g., fade-in) to make the element visible.
- `reveal-multiple-elements.js`: Observes multiple sections on a page and applies the `loaded` class to each as they enter the viewport, allowing for staggered reveal animations.
- `reveal-multiple-mixed-elements.js`: Observes multiple sections on a page and applies the loaded class to each as they enter the viewport, allowing for staggered reveal animations.

### Other

- `primary-navigation.js`: See [Accessibile Mobile Menu Git repository](https://github.com/chrisnajman/accessible-mobile-menu)
- `loader.js`: See [Loader Git repository](https://github.com/chrisnajman/loader)
- `set-multiple-attributes.js`: This helper function is used to streamline the process of setting multiple attributes on HTML elements. It accepts an element and an object containing the attributes to set, and it dynamically applies each attribute to the target element.
- `theme.js`: Handles theme toggling (light/dark mode) and local storage management.

---

## Theme Toggling

The application includes a dark mode and light mode toggle:

- The current theme state is stored in **local storage** and applied automatically on page reload.
- Accessible buttons with appropriate ARIA attributes are used to improve usability.

> [!IMPORTANT]
> Remember to change `const LOCAL_STORAGE_PREFIX` in `js-modules/theme.js` to a unique identifier.

---

## Accessibility

The site is fully navigable using tab keys and up/down arrows.

---

## Testing and Compatibility

The application has been tested on the following platforms and browsers:

- **Operating System**: Windows 10
- **Browsers**:
  - Google Chrome
  - Mozilla Firefox
  - Microsoft Edge

### Device View Testing

The layout and functionality have been verified in both browser and device simulation views to ensure responsiveness and usability.

---

## How to Run

1. Clone or download the repository to your local machine.
2. Open the project folder and start a simple HTTP server (e.g., using `Live Server` in VS Code or Python's `http.server` module).
3. Open the project in a modern browser (e.g., Chrome, Firefox, or Edge).
