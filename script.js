// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// Active nav highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 120;
  sections.forEach(section => {
    if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + section.id);
      });
    }
  });
}, { passive: true });

// Typing cursor blink effect on hero name accent (subtle)
const accent = document.querySelector('.hero-name-accent');
if (accent) {
  let show = true;
  setInterval(() => {
    accent.style.borderRight = show ? '3px solid #A855F7' : '3px solid transparent';
    show = !show;
  }, 600);
}
