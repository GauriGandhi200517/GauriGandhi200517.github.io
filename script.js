// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 90);
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => io.observe(el));

// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  const y = window.scrollY + 130;
  sections.forEach(s => {
    const inView = y >= s.offsetTop && y < s.offsetTop + s.offsetHeight;
    links.forEach(a => {
      if (a.getAttribute('href') === '#' + s.id) a.classList.toggle('active', inView);
    });
  });
}, { passive: true });
