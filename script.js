// Countdown Timer
const targetDate = new Date("June 15, 2030 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById("timer");
    if (distance < 0) {
        countdownElement.innerHTML = "🎉 Graduation Day is Here! 🎓";
    } else {
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

setInterval(updateCountdown, 1000);
