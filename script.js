
// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll progress bar
const scrollBar = document.getElementById("scrollBar");
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollBar.style.width = progress + "%";
});

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.2 }
);
revealEls.forEach((el) => observer.observe(el));

// Tilt effect
const tiltCards = document.querySelectorAll(".tilt-card");
tiltCards.forEach((card) => {
    const strength = 10;
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const middleX = rect.width / 2;
        const middleY = rect.height / 2;

        const rotateX = ((y - middleY) / middleY) * -strength;
        const rotateY = ((x - middleX) / middleX) * strength;

        card.style.transform =
            "rotateX(" + rotateX.toFixed(2) + "deg) rotateY(" +
            rotateY.toFixed(2) + "deg) translateZ(6px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";
    });
});

// Dummy contact form
function handleFormSubmit(event) {
    event.preventDefault();
    alert("Thanks for reaching out! Connect this form to your backend or a service (Formspree, EmailJS, Django API).");
    event.target.reset();
}

const isTouch = window.matchMedia("(pointer: coarse)").matches;

if (!isTouch) {
    const tiltCards = document.querySelectorAll(".tilt-card");
    tiltCards.forEach((card) => {
        const strength = 10;

        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = ((y / rect.height) - 0.5) * -strength;
            const rotateY = ((x / rect.width) - 0.5) * strength;

            card.style.transform =
                `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "rotateX(0deg) rotateY(0deg)";
        });
    });
}


function openCert(src) {
    const modal = document.getElementById("certModal");
    const img = document.getElementById("certModalImg");
    img.src = src;
    modal.style.display = "flex";
}

function closeCert() {
    document.getElementById("certModal").style.display = "none";
}

// Close modal on background click
document.getElementById("certModal").addEventListener("click", function (e) {
    if (e.target === this) closeCert();
});

const el = document.querySelector(".type-text");
const text = el.dataset.text;
let i = 0;

function typeEffect() {
    if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 55);
    }
}

typeEffect();

const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");
const navOverlay = document.getElementById("navOverlay");

function closeMenu() {
  mobileNav.classList.remove("active");
  navOverlay.classList.remove("active");
  navToggle.classList.remove("active");
}

navToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileNav.classList.toggle("active");
  navOverlay.classList.toggle("active");
  navToggle.classList.toggle("active");
});

// overlay click → close
navOverlay.addEventListener("click", closeMenu);

// link click → close
mobileNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});
