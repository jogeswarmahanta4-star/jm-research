// IMPORTANT: Replace this with the email address where you want to receive enquiries.
const CONTACT_EMAIL = "your-email@example.com";

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const status = document.getElementById("formStatus");

  if (CONTACT_EMAIL === "your-email@example.com") {
    status.textContent = "Website setup needed: replace CONTACT_EMAIL in script.js with your real email address.";
    return;
  }

  const subject = encodeURIComponent("JM Research website enquiry from " + name);
  const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  status.textContent = "Your email app should open with your enquiry prepared.";
});
