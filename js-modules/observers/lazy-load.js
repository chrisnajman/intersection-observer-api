import generateImages from "../utils/generate-images.js"

export default function lazyLoad() {
  // Get the html element with id "lazy"
  const lazy = document.getElementById("lazy")

  // Ensure script runs only if #lazy exists
  if (!lazy) return

  generateImages()

  // Select all generated images for lazy-loading
  const generatedImages = document.querySelectorAll(".image")

  // Mark images as lazy-load before they are observed
  generatedImages.forEach((image) => {
    image.classList.add("lazy-load")
  })

  // Intersection Observer callback: loads image when it enters viewport
  function handleIntersection(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        // Replace placeholder (empty) src with actual image source from data-src
        entry.target.src = entry.target.dataset.src

        // Add "loaded" class to make image visible after loading
        entry.target.classList.add("loaded")

        // 'observer.unobserve(entry.target)' is used to stop tracking the image once it has loaded.
        // This prevents unnecessary processing and improves performance by ensuring the Intersection
        // Observer doesn't keep checking elements that no longer need lazy loading.
        observer.unobserve(entry.target)
      }
    })
  }

  const observer = new IntersectionObserver(handleIntersection)

  // Start observing images for lazy loading when they enter the viewport
  generatedImages.forEach((image) => observer.observe(image))
}
