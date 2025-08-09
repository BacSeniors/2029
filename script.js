// Mobile menu toggle (if you have a mobile menu)
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
}

// Flip animation helper
function animateFlip(id, newValue) {
    const element = document.getElementById(id);
    if (element.innerText !== newValue.toString().padStart(2, "0")) {
        element.classList.add("flip");
        setTimeout(() => {
            element.innerText = newValue.toString().padStart(2, "0");
            element.classList.remove("flip");
        }, 250);
    }
}

// Countdown timer
function updateCountdown() {
    const graduationDate = new Date('August 10, 2025 12:00:00').getTime();
    const now = new Date().getTime();
    const distance = graduationDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    animateFlip("days", days >= 0 ? days : 0);
    animateFlip("hours", hours >= 0 ? hours : 0);
    animateFlip("minutes", minutes >= 0 ? minutes : 0);
    animateFlip("seconds", seconds >= 0 ? seconds : 0);
}

updateCountdown();
setInterval(updateCountdown, 1000);
