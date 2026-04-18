// Mobile Menu Toggle
(function() {
  const mobileBtn = document.getElementById('mobileMenu');
  const navLinks = document.getElementById('navLinks');
  
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });
  }
})();

// Smooth Scroll for Anchor Links
(function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === "#" || targetId === "") return;
      
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
        
        // Close mobile menu if open
        const navLinks = document.getElementById('navLinks');
        if (navLinks && navLinks.classList.contains('show')) {
          navLinks.classList.remove('show');
        }
      }
    });
  });
})();

// Active Navigation Highlight on Scroll
(function() {
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-links a');
  
  function updateActiveNav() {
    let current = '';
    const scrollPos = window.scrollY + 120;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        current = section.getAttribute('id');
      }
    });
    
    navItems.forEach(link => {
      link.style.color = '';
      link.style.fontWeight = '500';
      const href = link.getAttribute('href');
      if (href === `#${current}`) {
        link.style.color = 'var(--church-red)';
        link.style.fontWeight = '800';
      } else {
        link.style.color = '';
        link.style.fontWeight = '500';
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveNav);
  window.addEventListener('load', updateActiveNav);
})();

// Logo load error fallback (optional)
(function() {
  const logoImg = document.querySelector('.logo-img img');
  if (logoImg) {
    logoImg.addEventListener('error', function() {
      // If logo image fails to load, hide the image container or show a fallback
      // This prevents broken image icon from appearing
      this.style.display = 'none';
      console.log('Logo image not found. Please add church-logo.png to the same folder.');
    });
  }
})();

console.log('St. Joseph\'s Congregation website loaded successfully');