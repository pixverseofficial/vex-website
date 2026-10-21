
"use strict";

/* ======================================
   VEX CREATIVE DESIGNS
   Main Website JavaScript
====================================== */

const WHATSAPP_NUMBER = "918891404464";

/* ======================================
   SCROLL REVEAL ANIMATIONS
====================================== */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((item) => {
    const top = item.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll, {
  passive: true
});

// Show visible sections on page load
revealOnScroll();

/* ======================================
   ANIMATED ACHIEVEMENT COUNTERS
====================================== */

const counters = document.querySelectorAll(".count");

let countersStarted = false;

function startCounters() {
  const section = document.querySelector(".counter-section");

  if (!section || countersStarted) return;

  const top = section.getBoundingClientRect().top;

  if (top < window.innerHeight - 100) {
    countersStarted = true;

    counters.forEach((counter) => {
      const target = Number(counter.dataset.target);

      if (!Number.isFinite(target) || target < 0) {
        return;
      }

      let current = 0;
      const speed = target / 50;

      function updateCounter() {
        current += speed;

        if (current < target) {
          counter.innerText = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target;
        }
      }

      updateCounter();
    });
  }
}

window.addEventListener("scroll", startCounters, {
  passive: true
});

startCounters();

/* ======================================
   PROJECT REQUEST POPUP
====================================== */

function openForm() {
  const popup = document.getElementById("popupForm");

  if (!popup) return;

  popup.style.display = "flex";
}

function closeForm() {
  const popup = document.getElementById("popupForm");

  if (!popup) return;

  popup.style.display = "none";
}

/* ======================================
   CLOSE POPUP WITH ESCAPE KEY
====================================== */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeForm();
  }
});

/* ======================================
   SEND PROJECT REQUEST TO WHATSAPP
====================================== */

function sendWhatsApp() {
  const form = document.getElementById("projectForm");

  if (!form) {
    console.error("VEX project form not found.");
    return;
  }

  // Validate required fields before sending
  if (!form.reportValidity()) {
    return;
  }

  const name = document.getElementById("name")?.value.trim() || "";
  const email = document.getElementById("email")?.value.trim() || "";
  const phone = document.getElementById("phone")?.value.trim() || "";
  const brand = document.getElementById("brand")?.value.trim() || "";
  const service = document.getElementById("service")?.value || "";
  const details = document.getElementById("details")?.value.trim() || "";

  const message = [
    "*VEX CREATIVE DESIGNS*",
    "*NEW PROJECT REQUEST*",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Brand: ${brand || "Not provided"}`,
    "",
    `Service: ${service}`,
    "",
    "*Project Details:*",
    details || "Not provided"
  ].join("\n");

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  // Open WhatsApp in a new tab
  const newWindow = window.open(url, "_blank");

  // Fallback when popup is blocked
  if (!newWindow) {
    window.location.href = url;
  }
}
