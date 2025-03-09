export default function revealMultipleMixedElements() {
  // Get the HTML element with ID 'mixed' to ensure the script runs only if the element exists
  const mixed = document.getElementById("mixed")
  if (!mixed) return // Exit if the element is not found

  // Select all section elements on the page
  const sections = document.querySelectorAll("section")

  // Define options for the Intersection Observer
  const options = {
    root: null, // Uses the viewport as the root
    threshold: 0.3, // Triggers when 33.3% of the element is visible
  }

  // Create an Intersection Observer instance with a callback function (handleIntersection)
  const sectionObserver = new IntersectionObserver(handleIntersection, options)

  // Observe each section for visibility changes
  sections.forEach((section) => {
    sectionObserver.observe(section)
  })

  // Select all elements that need to be animated (headings and columns)
  const headings = document.querySelectorAll("section h2")
  const leftCols = document.querySelectorAll(".left-col")
  const rightCols = document.querySelectorAll(".right-col")

  // Initially hide headings and columns by adding the respective classes
  headings.forEach((heading) => {
    heading.classList.add("hidden-left")
  })
  leftCols.forEach((col) => {
    col.classList.add("hidden-left")
  })
  rightCols.forEach((col) => {
    col.classList.add("hidden-right")
  })

  // Callback function for the Intersection Observer
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return // Ignore elements that are not in view

      // Get the class name of the section that entered the viewport
      const currentSectionName = entry.target.getAttribute("class")

      // Select the corresponding section using its class name
      const currentSection = document.querySelector(`.${currentSectionName}`)
      currentSection.classList.add("element", "hidden-left") // Add 'hidden-left' class for animation ('element' is for style)

      // Select the inner container of the current section
      const currentSectionInner = document.querySelector(
        `.${currentSectionName} .section-inner`
      )

      // Remove hidden classes to trigger animations
      currentSection.classList.remove("hidden-left")
      currentSection.firstElementChild.classList.remove("hidden-left")
      currentSectionInner.firstElementChild.classList.remove("hidden-left")
      currentSectionInner.lastElementChild.classList.remove("hidden-right")

      // Stop observing this section since the animation runs only once
      observer.unobserve(entry.target)
    })
  }
}
