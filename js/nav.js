// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const overlay = document.querySelector('.nav-overlay');
  const dropdownToggles = document.querySelectorAll('.nav__link--has-dropdown');

  // Toggle mobile menu
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('active');
      if (overlay) overlay.classList.toggle('active');
      document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
  }

  // Close menu on overlay click
  if (overlay) {
    overlay.addEventListener('click', function () {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Mobile dropdown toggles
  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        var parent = this.parentElement;
        // Close other open dropdowns
        dropdownToggles.forEach(function (otherToggle) {
          if (otherToggle !== toggle) {
            otherToggle.parentElement.classList.remove('dropdown-open');
          }
        });
        parent.classList.toggle('dropdown-open');
      }
    });
  });

  // Close mobile menu on window resize
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
