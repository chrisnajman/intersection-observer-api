export default function revealSingleElement() {
  // Get the html element #single (ensures script runs only if it exists)
  const single = document.getElementById("single")

  if (!single) return

  const section = document.querySelector("section")

  // Intersection Observer callback: display .section when it enters viewport
  function handleIntersection(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        // Add "loaded" class to make .section visible after loading
        entry.target.classList.add("loaded")
        observer.unobserve(entry.target)
      }
    })
  }

  const observer = new IntersectionObserver(handleIntersection)

  // Observe .section when it enters the viewport
  observer.observe(section)
}
