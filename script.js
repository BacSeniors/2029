// script.js — robust stop-countdown + fade-in/stagger
document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------- Remove hamburger (if present) ---------------------- */
  const menuButton = document.getElementById("menu-toggle");
  if (menuButton) {
    menuButton.remove();
  }

  /* ---------------------- Clear known countdown intervals ------------------- */
  // Clear common globals if present
  try { if (window._countdownInterval) { clearInterval(window._countdownInterval); window._countdownInterval = null; } } catch(e){}
  try { if (window.timerInterval) { clearInterval(window.timerInterval); window.timerInterval = null; } } catch(e){}
  try { if (window.countdownFunction) { clearInterval(window.countdownFunction); window.countdownFunction = null; } } catch(e){}

  // Best-effort: clear a range of interval IDs (stops other stray intervals that update the countdown)
  // NOTE: this is intentionally limited to 1..1000 to avoid extreme side effects.
  for (let i = 1; i < 1000; i++) {
    try { clearInterval(i); } catch (e) { /* ignore */ }
  }

  /* ---------------------- Force countdown to always read 00 ----------------- */
  const COUNT_IDS = ["days", "hours", "minutes", "seconds"];

  function setAllZero() {
    COUNT_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = "00";
    });
  }

  setAllZero(); // initial set

  // MutationObserver — if another script tries to change these, immediately revert
  const observer = new MutationObserver(mutations => {
    mutations.forEach(m => {
      // find parent element in case mutation is text node
      const node = m.target.nodeType === 3 ? m.target.parentNode : m.target;
      if (!node || !node.id) return;
      if (COUNT_IDS.includes(node.id) && node.textContent !== "00") {
        node.textContent = "00";
      }
    });
  });

  COUNT_IDS.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      observer.observe(el, { characterData: true, childList: true, subtree: true });
    }
  });

  /* ---------------------- Fade-in & staggered animation -------------------- */
  const fadeElements = document.querySelectorAll(".fade-in, .stagger-fade-in");

  function runFadeOnce() {
    const triggerBottom = window.innerHeight * 0.85;
    fadeElements.forEach((el, index) => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom && !el.classList.contains("show")) {
        // If element uses stagger class, give it an increasing delay
        if (el.classList.contains("stagger-fade-in")) {
          el.style.transitionDelay = `${index * 0.15}s`;
        }
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", runFadeOnce, { passive: true });
  window.addEventListener("resize", runFadeOnce);
  // initial run
  runFadeOnce();

  /* ---------------------- Safety: fallback re-apply zeros periodically ---- */
  // In case something slips past observer, re-apply zeros lightly every 5s (low cost)
  setInterval(() => {
    setAllZero();
  }, 5000);

});
