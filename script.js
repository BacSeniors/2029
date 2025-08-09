// Mobile Menu Toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('active');
});

// Countdown Target Date - Sunday, 10 August 2025 at 12:00 PM
const graduationDate = new Date("August 10, 2025 12:00:00").getTime();

// Function to animate flip change
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

// Update Countdown Every Second
setInterval(function () {
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

    if (distance < 0) {
        animateFlip("days", 0);
        animateFlip("hours", 0);
        animateFlip("minutes", 0);
        animateFlip("seconds", 0);
    }
}, 1000);
