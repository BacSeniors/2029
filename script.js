document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", function () {
            mobileMenu.classList.toggle("active");
        });
    }

    // Countdown Timer
    function updateCountdown() {
        // Target date (Lebanon time)
        const graduationDate = new Date("2025-08-10T00:00:00+03:00").getTime();
        const now = new Date().getTime();
        const distance = graduationDate - now;

        if (distance <= 0) {
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
        document.getElementById("hours").innerHTML = hours.toString().padStart(2, "0");
        document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
