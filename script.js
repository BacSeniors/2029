document.addEventListener("DOMContentLoaded", () => {

    /* ===== Remove Hamburger Menu ===== */
    const menuButton = document.getElementById("menu-toggle");
    if (menuButton) {
        menuButton.remove();
    }

    /* ===== Countdown Timer (Lebanon Time, Stops at 0) ===== */
    function updateCountdown() {
        const graduationDate = new Date("August 10, 2029 00:00:00 GMT+0300").getTime();
        const now = new Date().getTime();
        let distance = graduationDate - now;

        if (distance < 0) distance = 0; // Stop at zero

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

    /* ===== Fade-in on Scroll with Staggered Delay ===== */
    const fadeElements = document.querySelectorAll(".fade-in, .stagger-fade-in");

    function checkFade() {
        const triggerBottom = window.innerHeight * 0.85;
        fadeElements.forEach((el, index) => {
            const boxTop = el.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                el.style.transitionDelay = `${index * 0.15}s`;
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkFade);
    checkFade(); // Initial run
});
