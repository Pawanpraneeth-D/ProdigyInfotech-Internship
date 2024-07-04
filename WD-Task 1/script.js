// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Change navigation background on scroll
window.addEventListener('scroll', function() {
  const nav = document.getElementById('main-nav');
  if (window.scrollY > 50) {
      nav.classList.add('scrolled');
  } else {
      nav.classList.remove('scrolled');
  }
});
