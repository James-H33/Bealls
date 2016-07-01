'use strict';

// HTML5 DATA-
var article = document.querySelector('article');

//*******************************************************
//                  Modular JavaScript
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
      this.$productListWrapper = $('.products-list-wrapper');
    },
    bindEvents: function bindEvents() {
      if (article.dataset.title === 'Index') {
        this.$el.on('click', this.menuToggle.bind(this));
      }

      if (article.dataset.title === 'Main-Categories') {
        this.$el.on('click', this.toggleMenuCate.bind(this));
      }

      if (article.dataset.title === 'Products-List') {
        this.$el.on('click', this.toggleMenuProducts.bind(this));
      }
    },
    menuToggle: function menuToggle() {
      this.$topbar.toggleClass('active-mobile');
      this.$mHeaderWrapper.toggleClass('active-mobile');
      this.$saleModal.toggleClass('active-mobile');
      this.$modularWrapper.toggleClass('active-mobile');
      this.cycleSpan();
    },
    toggleMenuCate: function toggleMenuCate() {
      this.$topbar.toggleClass('active-mobile');
      this.$modularWrapper.toggleClass('active-mobile');
      this.$mHeaderWrapper.toggleClass('active-mobile');
      this.cycleSpan();
    },
    toggleMenuProducts: function toggleMenuProducts() {
      this.$productListWrapper.toggleClass('active-mobile');
      this.$topbar.toggleClass('active-mobile');
      this.$modularWrapper.toggleClass('active-mobile');
      this.$mHeaderWrapper.toggleClass('active-mobile');
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

(function () {

  var panel = {
    init: function init() {
      this.cacheDOM();
      this.bindEvents();
    },
    cacheDOM: function cacheDOM() {
      this.$el = $('.panel p');
      // this.$self = this.$el.parent();
    },
    bindEvents: function bindEvents() {
      this.$el.on('click', event, this.togglePanel.bind(this));
    },
    togglePanel: function togglePanel(e) {
      var $self = $(e.target).closest('.panel');
      $self.toggleClass('active-panel');
    }
  };

  panel.init();
})();

(function () {

  var links = {
    init: function init() {
      this.cacheDOM();
      this.bindEvents();
    },
    cacheDOM: function cacheDOM() {
      this.$el = $('.mobile-link h3');
    },
    bindEvents: function bindEvents() {
      this.$el.on('click', event, this.toggleLinks.bind(this));
    },
    toggleLinks: function toggleLinks(e) {
      var $self = $(e.target).closest('.mobile-link');
      $self.toggleClass('active-link');
      $self.find('.mobile-inner-links').toggleClass('active-inner-links');
    }
  };

  links.init();
})();