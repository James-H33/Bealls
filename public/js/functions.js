'use strict';

// HTML5 DATA-
var article = document.querySelector('article');

//*******************************************************
//                   EVENT LISTENERS
//*******************************************************

(function () {

  var menu = {
    init: function init() {
      this.cacheDOM();
      this.bindEvents();
      this.remove;
    },
    cacheDOM: function cacheDOM() {
      this.$el = $('.mobile-menu-button');
      this.$spans = this.$el.find('span');
      this.$topbar = $('.mobile-topbar');
      this.$mHeaderWrapper = $('.mobile-header-wrapper');
      this.$saleModal = $('.sale-modal-wrapper');
      this.$modularWrapper = $('.modular-wrapper');
    },
    bindEvents: function bindEvents() {
      this.$el.on('click', this.menuToggle.bind(this));
    },
    menuToggle: function menuToggle() {
      this.$topbar.toggleClass('active-mobile');
      this.$mHeaderWrapper.toggleClass('active-mobile');
      this.$saleModal.toggleClass('active-mobile');
      this.$modularWrapper.toggleClass('active-mobile');
      this.cycleSpan();
    },
    cycleSpan: function cycleSpan() {
      this.$spans.toggleClass('active-mobile');
    }
  };

  menu.init();
})();

(function () {

  var modal = {
    init: function init() {
      this.cacheDOM();
      this.bindEvents();
    },
    cacheDOM: function cacheDOM() {
      this.$saleRemove = $('.sale-modal-wrapper');
    },
    bindEvents: function bindEvents() {
      this.$saleRemove.on('click', this.removeModal.bind(this));
    },
    removeModal: function removeModal() {
      this.$saleRemove.toggleClass('modal-remove');
    }

  };

  modal.init();
})();

//*********************************************************
//                 Index Page Events ONLY
//*********************************************************

// if ( article.dataset.title === 'Index' ) {
//   $('.mobile-menu-button').on('click', toggleMenuIndex);
//   $('.sale-modal-remove').on('click', removeModal);
//
//   window.addEventListener('load', function() {
//       $('.sale-modal-wrapper').css({
//         'transform' : 'translateY(0)'
//       });
//   });
// }

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

$('.mobile-link p').on('click', function () {
  var self = $(this).parent();
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

// function cycleSpans() {
//   $('.mobile-menu-button span').toggleClass('active-mobile');
// }

// function removeModal() {
//   $('.sale-modal-wrapper').toggleClass('modal-remove');
// }