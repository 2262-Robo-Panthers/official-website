let lastScrollPosition = 0; // Tracks the last scroll position
const slideInElements = document.querySelectorAll('.slide-in');

// Elements slide in
window.addEventListener('load', () => {
    slideInElements.forEach(el => {
        el.classList.add('slide-from-bottom');
    });
});

function handleScroll() {
    const currentScrollPosition = window.pageYOffset;

    // Determine scroll direction
    const isScrollingDown = currentScrollPosition > lastScrollPosition;

    slideInElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
            // Prevent re-triggering if already visible
            if (!el.classList.contains('visible')) {
                if (isScrollingDown) {
                    el.classList.add('slide-from-bottom', 'visible');
                    el.classList.remove('slide-from-top');
                } else {
                    el.classList.add('slide-from-top', 'visible');
                    el.classList.remove('slide-from-bottom');
                }
            }
        } else {
            // Reset visibility state when out of view
            el.classList.remove('slide-from-bottom', 'slide-from-top', 'visible');
        }
    });

    // Update the last scroll position
    lastScrollPosition = currentScrollPosition;
}

// Run on scroll and when the page loads
window.addEventListener('scroll', handleScroll);
handleScroll();

// Load image background
window.addEventListener('load', function() {
    const spacer = document.querySelector('.spacer');
    let offset = window.scrollY; // Get the current scroll position
    spacer.style.backgroundPosition = `center ${offset * -0.1}px`; // Set initial background position based on scroll
});
  
  window.addEventListener('scroll', function () {
    const spacer = document.querySelector('.spacer');
    let offset = window.scrollY; // Get current scroll position
    spacer.style.backgroundPosition = `center ${offset * -0.1}px`; // Apply parallax effect
});
  
window.addEventListener('scroll', function () {
    const video = document.getElementById('background-video');
    const scrollOffset = window.scrollY;

    // Apply parallax effect
    video.style.transform = `translate(-50%, calc(-50% + ${scrollOffset * -0.1}px))`;
});

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

 // Countdown
 function updateCountdown() {
    const targetDate = new Date('January 4, 2025 00:00:00').getTime(); // Target date in milliseconds
    const now = new Date().getTime(); // Current time in milliseconds
    const timeDifference = targetDate - now; // Difference in milliseconds

    if (timeDifference <= 0) {
        document.getElementById("countdown-timer").innerHTML = "Event in Progress!";
        clearInterval(timerInterval);
        return;
    }

    // Time calculations
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Pad numbers with leading zeros
    const paddedHours = hours.toString().padStart(2, '0');
    const paddedMinutes = minutes.toString().padStart(2, '0');
    const paddedSeconds = seconds.toString().padStart(2, '0');

    // Adjust "day" vs "days"
    const dayLabel = days === 1 ? "Day" : "Days";

    // Update HTML
    document.getElementById('days').textContent = `${days} ${dayLabel}`;
    document.getElementById('hours').textContent = paddedHours;
    document.getElementById('minutes').textContent = paddedMinutes;
    document.getElementById('seconds').textContent = paddedSeconds;
}

// Update every second
const timerInterval = setInterval(updateCountdown, 1000);

// Initial call to avoid delay
updateCountdown();