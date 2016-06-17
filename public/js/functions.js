// Global Variables
var body                = document.querySelector('body');
var mobileMenuBtn       = document.querySelector('.mobile-menu-button');
var mobileHeaderWrapper = document.querySelector('.mobile-header-wrapper');
var mobileMenuSpans     = document.querySelectorAll('.mobile-menu-button span')
var modularWrapper      = document.querySelector('.modular-wrapper');
var mobileTopBar        = document.querySelector('.mobile-topbar');


// Mobile Nav
var panels      = document.querySelectorAll('.panel');
var mobileLinks = document.querySelectorAll('.mobile-link');
var innerLinks  = document.querySelectorAll('.mobile-inner-links');


// Sale Modal
var saleModalWrapper = document.querySelector('.sale-modal-wrapper');
var saleModalRemove  = document.querySelector('.sale-modal-remove');

// Products
var productsListWrapper = document.querySelector('.products-list-wrapper');

// HTML5 DATA
var article = document.querySelector('article');

//*******************************************************
//                   EVENT LISTENERS
//*******************************************************

//*********************************************************
//                 Index Page Events ONLY
//*********************************************************

if ( article.dataset.title === 'Index' ) {
  mobileMenuBtn.addEventListener('click', toggleMenuIndex);
  saleModalRemove.addEventListener('click', removeModal);

  window.addEventListener('load', function() {
      saleModalWrapper.style.transform = 'translateY(0)';
  });
}

//*********************************************************
//                 Categories Pages Events
//*********************************************************

if ( article.dataset.title === 'Main-Categories' ) {
  mobileMenuBtn.addEventListener('click', toggleMenuMCate);
}

//*********************************************************
//                 Product Pages Events
//*********************************************************

if ( article.dataset.title === 'Products-List' ) {
  mobileMenuBtn.addEventListener('click', toggleMenuProducts);
}


//*********************************************************
//                     FOR EACH
//*********************************************************

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
    innerLinks.forEach(function(innerLinkage) {
      innerLinkage.classList.toggle('active-inner-links');
    })
  })
});


//*******************************************************
//                     FUNCTIONS
//*******************************************************


function toggleMenuIndex() {
  saleModalWrapper.classList.toggle('active-mobile');
  modularWrapper.classList.toggle('active-mobile');
  toggleMenu();
}

function toggleMenuMCate() {
  modularWrapper.classList.toggle('active-mobile');
  toggleMenu();
}

function toggleMenuProducts() {
  productsListWrapper.classList.toggle('active-mobile');
  toggleMenu();
}

function toggleMenu() {
  mobileTopBar.classList.toggle('active-mobile');
  mobileHeaderWrapper.classList.toggle('active-mobile');
  cycleSpans();
}

function cycleSpans() {
  mobileMenuSpans.forEach(function(spn) {
    spn.classList.toggle('active-mobile');
  })
}

function removeModal() {
  saleModalWrapper.classList.toggle('modal-remove');
}
