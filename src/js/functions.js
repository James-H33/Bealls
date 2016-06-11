// Global Variables
var mobileMenuBtn = document.querySelector('.mobile-menu-button');
var mobileHeaderWrapper = document.querySelector('.mobile-header-wrapper');
var mobileMenuSpans = document.querySelectorAll('.mobile-menu-button span')
var body = document.querySelector('body');



mobileMenuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
      body.classList.toggle('active-mobile');
      cycleSpans();
}

function cycleSpans() {
  mobileMenuSpans.forEach(function(spn) {
    spn.classList.toggle('active-mobile');
  })
}
