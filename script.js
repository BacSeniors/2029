function updateCountdown() {
    const targetDate = new Date('August 10, 2025 00:00:00 GMT+0300').getTime();
    const now = new Date().getTime();
    let distance = targetDate - now;

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

    updateFlip("days", days);
    updateFlip("hours", hours);
    updateFlip("minutes", minutes);
    updateFlip("seconds", seconds);
}

function updateFlip(id, value) {
    const el = document.getElementById(id);
    const current = el.innerHTML;
    const newValue = value.toString().padStart(2, '0');

    if (current !== newValue) {
        el.classList.remove("flip");
        void el.offsetWidth; // re-trigger animation
        el.classList.add("flip");
        el.innerHTML = newValue;
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);
