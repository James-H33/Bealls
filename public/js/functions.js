'use strict';

// HTML5 DATA
var article = document.querySelector('article');

//*******************************************************
//                   EVENT LISTENERS
//*******************************************************

//*********************************************************
//                 Index Page Events ONLY
//*********************************************************

if (article.dataset.title === 'Index') {
  $('.mobile-menu-button').on('click', toggleMenuIndex);
  $('.sale-modal-remove').on('click', removeModal);

  window.addEventListener('load', function () {
    $('.sale-modal-wrapper').css({
      'transform': 'translateY(0)'
    });
  });
}

//*********************************************************
//                 Categories Pages Events
//*********************************************************

if (article.dataset.title === 'Main-Categories') {
  $('.mobile-menu-button').on('click', toggleMenuMCate);
}

//*********************************************************
//                 Product Pages Events
//*********************************************************

if (article.dataset.title === 'Products-List') {
  $('.mobile-menu-button').on('click', toggleMenuProducts);
}

//*********************************************************
//                     FOR EACH
//*********************************************************

$('.panel p').on('click', function () {
  var self = $(this).parent();
  self.toggleClass('active-panel');
});

$('.mobile-link').on('click', function () {
  var self = $(this).parent();
  // console.log(self.children('.mobile-inner-links'));
  self.toggleClass('active-link');
  self.find('.mobile-inner-links').toggleClass('active-inner-links');
});

//*******************************************************
//                     FUNCTIONS
//*******************************************************

function toggleMenuIndex() {
  $('.sale-modal-wrapper').toggleClass('active-mobile');
  $('.modular-wrapper').toggleClass('active-mobile');
  toggleMenu();
}

function toggleMenuMCate() {
  $('.modular-wrapper').toggleClass('active-mobile');
  toggleMenu();
}

function toggleMenuProducts() {
  $('.products-list-wrapper').toggleClass('active-mobile');
  toggleMenu();
}

function toggleMenu() {
  $('.mobile-topbar').toggleClass('active-mobile');
  $('.mobile-header-wrapper').toggleClass('active-mobile');
  cycleSpans();
}

function cycleSpans() {
  $('.mobile-menu-button span').toggleClass('active-mobile');
}

function removeModal() {
  $('.sale-modal-wrapper').toggleClass('modal-remove');
}