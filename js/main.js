// Smooth scrolling para navegación
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Cambio de estilo del navbar al hacer scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(1, 4, 64, 0.98)";
    navbar.style.backdropFilter = "blur(15px)";
  } else {
    navbar.style.background = "rgba(1, 4, 64, 0.95)";
    navbar.style.backdropFilter = "blur(10px)";
  }
});

// Animaciones de scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observar todos los elementos con clase fade-in
document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Efecto de escritura en terminal (opcional)
const terminalText = document.querySelector(".terminal-content");
if (terminalText) {
  const originalContent = terminalText.innerHTML;
  terminalText.innerHTML = "";

  setTimeout(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < originalContent.length) {
        terminalText.innerHTML = originalContent.slice(0, i + 1);
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    typeWriter();
  }, 1000);
}

// Paralax suave para el hero
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".hero::before");
  if (parallax) {
    const speed = scrolled * 0.5;
    parallax.style.transform = `translateY(${speed}px)`;
  }
});

// Efecto hover mejorado para skill items
document.querySelectorAll(".skill-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "translateY(-10px) scale(1.05)";
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "translateY(0) scale(1)";
  });
});
