import lazyLoad from "./lazy-load.js"
import revealSingleElement from "./reveal-single-element.js"
import revealMultipleElements from "./reveal-multiple-elements.js"
import revealMultipleMixedElements from "./reveal-multiple-mixed-elements.js"

export default function observers() {
  lazyLoad()
  revealSingleElement()
  revealMultipleElements()
  revealMultipleMixedElements()
}
