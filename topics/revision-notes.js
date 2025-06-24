// Enhanced Revision Notes functionality with smooth scrolling
document.addEventListener("DOMContentLoaded", () => {
  // Topic section toggle functionality
  const topicHeaders = document.querySelectorAll(".topic-header")

  topicHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const topicSection = header.parentElement
      const isActive = topicSection.classList.contains("active")

      // Close all other topic sections first
      topicHeaders.forEach((otherHeader) => {
        const otherSection = otherHeader.parentElement
        if (otherSection !== topicSection) {
          otherSection.classList.remove("active")
        }
      })

      // Toggle current topic section
      if (isActive) {
        topicSection.classList.remove("active")
      } else {
        topicSection.classList.add("active")

        // Optional: Smooth scroll to the opened section
        setTimeout(() => {
          topicSection.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          })
        }, 100)
      }
    })
  })

  // Optional: Add keyboard support (Enter/Space to toggle)
  topicHeaders.forEach((header) => {
    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        header.click()
      }
    })

    // Make headers focusable for accessibility
    header.setAttribute("tabindex", "0")
    header.setAttribute("role", "button")
    header.setAttribute("aria-expanded", "false")
  })
})
