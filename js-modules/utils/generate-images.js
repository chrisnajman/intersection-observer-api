import setMultipleAttributes from "./set-multiple-attributes.js"

export default function generateImages() {
  // Get the container where images will be appended
  const images = document.getElementById("images")

  // Create 50 placeholder images and append them to the container
  for (let i = 0; i < 50; i++) {
    const image = document.createElement("img")

    setMultipleAttributes(image, {
      width: "200",
      height: "300",
      alt: "W:200px, H:300px",
      class: "image",
      "data-src": "https://imageplaceholder.net/200x300/",
    })

    images.append(image)
  }
}
