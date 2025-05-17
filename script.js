// Single DOMContentLoaded event listener for all functionality
document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle functionality
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    // Check for saved theme preference or use default dark theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      // Set the new theme
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
  
  // Mobile menu functionality
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const closeMenu = document.querySelector('.close-menu');
  
  if (mobileMenuToggle && mobileMenuOverlay && closeMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenuOverlay.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });
    
    closeMenu.addEventListener('click', function() {
      mobileMenuOverlay.style.display = 'none';
      document.body.style.overflow = ''; // Re-enable scrolling
    });
  }
  
  // Mobile search functionality
  const searchIcon = document.querySelector('.search-icon-container');
  const mobileSearchOverlay = document.querySelector('.mobile-search-overlay');
  const closeSearch = document.querySelector('.close-search');
  const searchInput = document.querySelector('.mobile-search-overlay .search-input');
  
  if (searchIcon && mobileSearchOverlay && closeSearch && searchInput) {
    searchIcon.addEventListener('click', function() {
      mobileSearchOverlay.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Prevent scrolling when search is open
      searchInput.focus(); // Focus on the search input
    });
    
    closeSearch.addEventListener('click', function() {
      mobileSearchOverlay.style.display = 'none';
      document.body.style.overflow = ''; // Re-enable scrolling
    });
  }
});