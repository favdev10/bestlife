// Toggle mobile nav
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// Handle booking form
document.getElementById("bookingForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Your appointment request has been sent!");
});
