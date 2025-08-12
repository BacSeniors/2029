// ===== Static Countdown at Zero =====
function updateCountdown() {
    document.getElementById('days').innerHTML = '00';
    document.getElementById('hours').innerHTML = '00';
    document.getElementById('minutes').innerHTML = '00';
    document.getElementById('seconds').innerHTML = '00';
}

// Set countdown to zero immediately
updateCountdown();

// ===== Fade-in & Stagger Animation =====
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in, .stagger-fade-in');

    elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const delay = el.classList.contains('stagger-fade-in') ? index * 150 : 0;

        if (rect.top < window.innerHeight - 100) {
            setTimeout(() => {
                el.classList.add('show');
            }, delay);
        }
    });
}

window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);
