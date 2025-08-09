// Countdown Target Date
const graduationDate = new Date("June 15, 2030 12:00:00").getTime();

// Update Countdown Every Second
const countdownFunction = setInterval(function () {
    const now = new Date().getTime();
    const distance = graduationDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update DOM
    document.getElementById("days").innerText = days >= 0 ? days : "00";
    document.getElementById("hours").innerText = hours >= 0 ? hours : "00";
    document.getElementById("minutes").innerText = minutes >= 0 ? minutes : "00";
    document.getElementById("seconds").innerText = seconds >= 0 ? seconds : "00";

    // If the countdown is over
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
    }
}, 1000);
