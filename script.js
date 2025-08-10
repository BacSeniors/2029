document.addEventListener("DOMContentLoaded", () => {
    // Completely remove hamburger button if it exists
    const menuButton = document.getElementById("menu-toggle");
    if (menuButton) {
        menuButton.remove();
    }

    // Countdown Timer (Lebanon time, stops at 0)
    function updateCountdown() {
        const targetDate = new Date("August 10, 2025 00:00:00 GMT+0300").getTime();
        const now = new Date().getTime();
        let distance = targetDate - now;

        if (distance < 0) {
            distance = 0; // Stop at zero
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = String(days).padStart(2, "0");
        document.getElementById("hours").innerHTML = String(hours).padStart(2, "0");
        document.getElementById("minutes").innerHTML = String(minutes).padStart(2, "0");
        document.getElementById("seconds").innerHTML = String(seconds).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Fade-in animation trigger
    const faders = document.querySelectorAll(".fade-in");
    faders.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("show");
        }, index * 150);
    });
});
