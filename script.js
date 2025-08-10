// script.js
// Robust countdown with flip animation and no negative values

// TARGET: Sunday, 10 August 2025 at 00:00:00 local time
const countdownDate = new Date(2025, 7, 10, 0, 0, 0).getTime(); // monthIndex: 7 => August

// Make sure we don't create multiple intervals if script is re-run
if (window._countdownInterval) {
  clearInterval(window._countdownInterval);
}
let timerInterval = null;
window._countdownInterval = null;

// Helper: set value with flip animation (safe if element missing)
function setFlipValue(id, newValue) {
  const el = document.getElementById(id);
  if (!el) return; // element not present, do nothing

  const str = String(Math.max(0, newValue)).padStart(2, "0");
  if (el.textContent !== str) {
    // restart animation
    el.classList.remove("flip");
    // force reflow to allow animation to re-trigger
    void el.offsetWidth;
    el.textContent = str;
    el.classList.add("flip");
  }
}

// Core update function
function updateCountdown() {
  const now = Date.now();
  let distance = countdownDate - now;

  // If the target is reached or passed, freeze at 0 and stop interval
  if (distance <= 0) {
    distance = 0;
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
      window._countdownInterval = null;
    }
  }

  // compute values (step-by-step)
  const msInSecond = 1000;
  const msInMinute = msInSecond * 60;           // 60,000
  const msInHour   = msInMinute * 60;           // 3,600,000
  const msInDay    = msInHour * 24;             // 86,400,000

  const days = Math.floor(distance / msInDay);
  const hours = Math.floor((distance % msInDay) / msInHour);
  const minutes = Math.floor((distance % msInHour) / msInMinute);
  const seconds = Math.floor((distance % msInMinute) / msInSecond);

  // update DOM with animation
  setFlipValue("days", days);
  setFlipValue("hours", hours);
  setFlipValue("minutes", minutes);
  setFlipValue("seconds", seconds);
}

// Start the interval and run immediately
updateCountdown();
timerInterval = setInterval(updateCountdown, 1000);
window._countdownInterval = timerInterval;

// Mobile Menu Toggle (keeps existing behavior)
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
}

// Smooth scrolling + close mobile menu on link click (safe if no links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    if (mobileMenu && mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active");
    }
  });
});
