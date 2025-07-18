document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container")
  if (container) {
    // Add a class to trigger the fade-in animation after the DOM is loaded
    container.classList.add("fade-in")
  }
})
