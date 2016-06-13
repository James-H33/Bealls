// Global Variables
var body                = document.querySelector('body');
var mobileMenuBtn       = document.querySelector('.mobile-menu-button');
var mobileHeaderWrapper = document.querySelector('.mobile-header-wrapper');
var mobileMenuSpans     = document.querySelectorAll('.mobile-menu-button span')
var modularWrapper      = document.querySelector('.modular-wrapper');
var mobileTopBar        = document.querySelector('.mobile-topbar');


// Modular Product
var panels      = document.querySelectorAll('.panel');
var mobileLinks = document.querySelectorAll('.mobile-link');

// Sale Modal
var saleModalWrapper = document.querySelector('.sale-modal-wrapper');
var saleModalRemove  = document.querySelector('.sale-modal-remove');

//*******************************************************
//                   EVENT LISTENERS
//*******************************************************

mobileMenuBtn.addEventListener('click', toggleMenu);
saleModalWrapper.addEventListener('click', function() {

});
saleModalRemove.addEventListener('click', function() {
  saleModalWrapper.style.transform = 'translateY(-50px)';
});


window.addEventListener('load', function() {
  saleModalWrapper.style.transform = 'translateY(0)';
})

// panels.addEventListener('click', function() {
//   panels.forEach(function(pan) {
//     console.log(pan);
//   });
// });

panels.forEach(function(pan) {
  pan.addEventListener('click', function() {
    panels.forEach(function(panList) {
        panList.classList.remove('active-panel');
    })
    this.classList.add('active-panel');
  })
});

mobileLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    this.classList.toggle('active-link');
  })
});

//*******************************************************
//                     FUNCTIONS
//*******************************************************

function toggleMenu() {
      body.classList.toggle('active-mobile');
      modularWrapper.classList.toggle('active-mobile');
      mobileTopBar.classList.toggle('active-mobile');
      mobileHeaderWrapper.classList.toggle('active-mobile');
      saleModalWrapper.classList.toggle('active-mobile');
      cycleSpans();
}

function cycleSpans() {
  mobileMenuSpans.forEach(function(spn) {
    spn.classList.toggle('active-mobile');
  })
}
