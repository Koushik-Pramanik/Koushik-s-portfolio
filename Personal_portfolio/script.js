 const texts = [
    "Frontend Developer",
    "Competitive Programmer",
    "Familiar with Java DSA"
  ];

  const textEl = document.querySelector(".changing-text");
  let i = 0; // text index
  let j = 0; // character index
  let currentText = "";
  let isDeleting = false;

  function typeEffect() {
    currentText = texts[i];

    if (isDeleting) {
      textEl.textContent = currentText.substring(0, j--);
    } else {
      textEl.textContent = currentText.substring(0, j++);
    }

    if (!isDeleting && j === currentText.length + 1) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // wait before deleting
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
      setTimeout(typeEffect, 200);
    } else {
      setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
  }

  document.addEventListener("DOMContentLoaded", typeEffect);











const animatedElements = document.querySelectorAll('.animate-on-scroll');

const animationObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible'); // <-- Re-trigger on exit
    }
  });
}, {
  threshold: 0.3
});

animatedElements.forEach(el => {
  animationObserver.observe(el);
});









const skillBars = document.querySelectorAll('.skill-per');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const targetWidth = el.getAttribute('data-percent');
      el.style.width = targetWidth;
      observer.unobserve(el); // Only animate once
    }
  });
}, {
  threshold: 0.5
});

skillBars.forEach(bar => {
  observer.observe(bar);
});



















const navIcon = document.getElementById('nav-icon');
const navLinks = document.getElementById('nav-links');

navIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    navIcon.classList.toggle('active');

    // Toggle between hamburger and cross icon
    navIcon.innerHTML = navLinks.classList.contains('show') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});















