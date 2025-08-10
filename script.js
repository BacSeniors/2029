// Countdown Timer (Lebanon Time, stops at 0)
function updateCountdown() {
    const graduationDate = new Date('August 10, 2025 00:00:00 GMT+0300').getTime();
    const now = new Date().getTime();
    let distance = graduationDate - now;

    if (distance < 0) distance = 0; // stop negative countdown

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
    document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Basic fade-in animation for sections
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('section, header, footer');
    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 200);
    });
});
