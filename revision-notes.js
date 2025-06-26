// Enhanced Revision Notes functionality with multiple sections open capability
document.addEventListener("DOMContentLoaded", () => {
  // Topic section toggle functionality
  const topicHeaders = document.querySelectorAll(".topic-header")

  topicHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const topicSection = header.parentElement
      const isActive = topicSection.classList.contains("active")

      // Simply toggle current topic section without closing others
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

  // Update aria-expanded attribute when sections are toggled
  const updateAriaExpanded = () => {
    topicHeaders.forEach((header) => {
      const topicSection = header.parentElement
      const isActive = topicSection.classList.contains("active")
      header.setAttribute("aria-expanded", isActive.toString())
    })
  }

  // Call updateAriaExpanded whenever a section is toggled
  topicHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      setTimeout(updateAriaExpanded, 50) // Small delay to ensure class is updated
    })
  })
})