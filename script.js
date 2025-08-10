// Countdown date (Sunday, 10 August 2025)
const countdownDate = new Date("August 10, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    let distance = countdownDate - now;

    // Stop at zero and prevent negative numbers
    if (distance <= 0) {
        distance = 0;
        clearInterval(timerInterval);
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setFlipValue("days", days);
    setFlipValue("hours", hours);
    setFlipValue("minutes", minutes);
    setFlipValue("seconds", seconds);
}

// Adds flip animation when value changes
function setFlipValue(id, newValue) {
    const el = document.getElementById(id);
    const currentValue = el.textContent;

    if (currentValue !== String(newValue).padStart(2, "0")) {
        el.textContent = String(newValue).padStart(2, "0");
        el.classList.remove("flip");
        void el.offsetWidth; // force reflow to restart animation
        el.classList.add("flip");
    }
}

// Mobile Menu Toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.toggle("active");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

        // Close mobile menu if open
        if (document.getElementById("mobile-menu").classList.contains("active")) {
            document.getElementById("mobile-menu").classList.remove("active");
        }
    });
});

// Start countdown
updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);
