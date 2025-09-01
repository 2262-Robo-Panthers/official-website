// Toggle the menu's active state
function toggleMenu() {
    const navItems = document.querySelector('.nav-items');
    const navBar = document.querySelector('.navbar');

    // Toggle the 'active' class to show/hide the menu
    navItems.classList.toggle('active');
    navBar.classList.toggle('active');
}

// Check if all the links are visible on the screen
function checkLinksVisibility() {
    const navLinks = document.querySelectorAll('.nav-items a');
    
    // Check if all links are fully visible in the viewport
    const allVisible = Array.from(navLinks).every(link => {
        const rect = link.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    });

    // If all links are visible, automatically close the menu
    if (allVisible) {
        const navItems = document.querySelector('.nav-items');
        const navBar = document.querySelector('.navbar');
        
        // Remove the 'active' class to hide the menu
        navItems.classList.remove('active');
        navBar.classList.remove('active');
    }
}

// Add scroll event listener to check visibility of the links when scrolling
window.addEventListener('scroll', checkLinksVisibility);