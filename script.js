// ===== Countdown always at zero =====
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

// ===== Add Reserve Ticket Button to Winter Fest Card =====
document.addEventListener('DOMContentLoaded', () => {
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
        const titleElement = card.querySelector('h3');
        if (titleElement && titleElement.textContent.trim().toLowerCase() === 'winter fest') {
            // Create button
            const button = document.createElement('a');
            button.href = 'https://docs.google.com/forms/d/e/1FAIpQLSeXr-qKyWSgJwvhld5ZYBXPhDX_ixU-JvLF5fzW1qv-VzZnIQ/viewform?usp=header';
            button.textContent = 'Reserve Ticket';
            button.target = '_blank';
            button.className = 'reserve-btn';
            // Append button after event description
            const desc = card.querySelector('p');
            if (desc) {
                desc.insertAdjacentElement('afterend', button);
            }
        }
    });
});
