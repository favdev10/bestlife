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

const form = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = new FormData(form);

    // Send via Formspree
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: "application/json" },
    });

    // Clear previous message
    formMessage.classList.add("hidden");
    formMessage.innerHTML = "";

    if (response.ok) {
      form.reset();
      formMessage.innerHTML = `
        <div class="p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg shadow-sm animate-fadeIn">
          ✅ Thank you! Your appointment request has been sent successfully.
        </div>
      `;
      formMessage.classList.remove("hidden");
    } else {
      formMessage.innerHTML = `
        <div class="p-4 bg-red-100 border border-red-300 text-red-800 rounded-lg shadow-sm animate-fadeIn">
          ❌ Oops! There was an error sending your message. Please try again later.
        </div>
      `;
      formMessage.classList.remove("hidden");
    }
  });
}

const videoSlider = document.getElementById("videoSlider");
const nextVideo = document.getElementById("nextVideo");
const prevVideo = document.getElementById("prevVideo");

let currentVideo = 0;

function updateVideoPosition() {
  const slideWidth = videoSlider.clientWidth;
  videoSlider.style.transform = `translateX(-${currentVideo * slideWidth}px)`;
}

nextVideo.addEventListener("click", () => {
  const totalVideos = videoSlider.children.length;
  currentVideo = (currentVideo + 1) % totalVideos;
  updateVideoPosition();
});

prevVideo.addEventListener("click", () => {
  const totalVideos = videoSlider.children.length;
  currentVideo = (currentVideo - 1 + totalVideos) % totalVideos;
  updateVideoPosition();
});

window.addEventListener("resize", updateVideoPosition);

// Appointment form success handler
document
  .getElementById("appointmentForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();

    const successBox = document.getElementById("appointmentSuccess");
    successBox.classList.remove("hidden");

    setTimeout(() => {
      successBox.classList.add("hidden");
      e.target.reset();
    }, 4000);
  });
