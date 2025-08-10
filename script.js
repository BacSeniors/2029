// script.js - robust mobile menu + countdown helpers (drop-in replacement)
document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  // Safety checks
  if (!menuToggle) {
    console.warn("menu-toggle element not found");
    return;
  }
  if (!mobileMenu) {
    console.warn("mobile-menu element not found");
    return;
  }

  // Ensure initial state (hidden)
  mobileMenu.classList.remove("active"); // custom class
  mobileMenu.classList.add("hidden");    // Tailwind helper if used

  // Toggle function: toggles both 'active' and 'hidden' for compatibility
  function toggleMobileMenu() {
    mobileMenu.classList.toggle("active");
    mobileMenu.classList.toggle("hidden");
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", (!expanded).toString());
  }

  // Click the hamburger
  menuToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMobileMenu();
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!mobileMenu.classList.contains("active")) return;
    if (!mobileMenu.contains(e.target) && e.target !== menuToggle && !menuToggle.contains(e.target)) {
      mobileMenu.classList.remove("active");
      mobileMenu.classList.add("hidden");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Close menu when a link inside it is clicked
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      mobileMenu.classList.add("hidden");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // (Optional) Accessibility: close menu with Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active");
      mobileMenu.classList.add("hidden");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  // --- rest of your existing script (countdown etc) can remain below ---
  // If you already have countdown code elsewhere in this file, keep it.
});
