export default function revealMultipleElements() {
  // Get the element with id "multiple" (ensures script runs only if it exists)
  const multiple = document.getElementById("multiple")

  if (!multiple) return

  // Select all sections
  const sections = document.querySelectorAll("section")

  // Intersection Observer callback: loads image when it enters viewport
  function handleIntersection(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        // Add "loaded" class to make section visible after entering the viewport
        entry.target.classList.add("loaded")
        observer.unobserve(entry.target)
      }
    })
  }

  const observer = new IntersectionObserver(handleIntersection)

  // Start observing sections when they enter the viewport
  sections.forEach((section) => observer.observe(section))
}
