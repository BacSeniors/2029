document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!menuToggle || !mobileMenu) {
        console.error("Menu toggle or mobile menu element not found");
        return;
    }

    menuToggle.addEventListener("click", function () {
        console.log("Hamburger clicked"); // debug
        mobileMenu.classList.toggle("active");
    });
});
