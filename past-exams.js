// Past Exams Page Functionality

document.addEventListener("DOMContentLoaded", () => {
  // Sidebar Toggle Functionality for Mobile
  const sidebarToggle = document.getElementById("sidebarToggle")
  const pastExamsSidebar = document.getElementById("pastExamsSidebar")

  if (sidebarToggle && pastExamsSidebar) {
    sidebarToggle.addEventListener("click", () => {
      pastExamsSidebar.classList.toggle("active")
    })

    // Close sidebar when clicking a sidebar item
    const sidebarItems = pastExamsSidebar.querySelectorAll(".sidebar-item")
    sidebarItems.forEach((item) => {
      item.addEventListener("click", () => {
        pastExamsSidebar.classList.remove("active")
      })
    })

    // Close sidebar when clicking outside on mobile
    document.addEventListener("click", (event) => {
      const isMobile = window.innerWidth <= 1024
      if (isMobile && !pastExamsSidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
        pastExamsSidebar.classList.remove("active")
      }
    })
  }

  // Load More Buttons Functionality
  const loadMoreBtns = document.querySelectorAll(".load-more-btn")
  loadMoreBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Load more items - Add your logic here")
    })
  })
})
