// HTML5 DATA-
const article = document.querySelector('article');

//*******************************************************
//                  Modular JavaScript
//*******************************************************

(function() {

  let menu = {
    init: function() {
      this.cacheDOM();
      this.bindEvents();
    },
    cacheDOM: function() {
      this.$el                  = $('.mobile-menu-button');
      this.$spans               = this.$el.find('span');
      this.$topbar              = $('.mobile-topbar');
      this.$mHeaderWrapper      = $('.mobile-header-wrapper');
      this.$saleModal           = $('.sale-modal-wrapper');
      this.$modularWrapper      = $('.modular-wrapper');
      this.$productListWrapper  = $('.products-list-wrapper');
    },
    bindEvents: function() {
      if ( article.dataset.title === 'Index' ) {
      this.$el.on('click', this.menuToggle.bind(this));
      }

      if ( article.dataset.title === 'Main-Categories' ) {
        this.$el.on('click', this.toggleMenuCate.bind(this));
      }

      if ( article.dataset.title === 'Products-List' ) {
        this.$el.on('click', this.toggleMenuProducts.bind(this));
      }
    },
    menuToggle: function() {
      this.$topbar.toggleClass('active-mobile');
      this.$mHeaderWrapper.toggleClass('active-mobile');
      this.$saleModal .toggleClass('active-mobile');
      this.$modularWrapper.toggleClass('active-mobile');
      this.cycleSpan();
    },
    toggleMenuCate: function() {
      this.$topbar.toggleClass('active-mobile');
      this.$modularWrapper.toggleClass('active-mobile');
      this.$mHeaderWrapper.toggleClass('active-mobile');
      this.cycleSpan();
    },
    toggleMenuProducts: function() {
      this.$productListWrapper.toggleClass('active-mobile');
      this.$topbar.toggleClass('active-mobile');
      this.$modularWrapper.toggleClass('active-mobile');
      this.$mHeaderWrapper.toggleClass('active-mobile');
      this.cycleSpan();
    },
    cycleSpan: function() {
      this.$spans.toggleClass('active-mobile');
    },
  }

  menu.init();

})();



(function () {

  let modal = {
      init: function() {
        this.cacheDOM();
        this.bindEvents();
      },
      cacheDOM: function() {
        this.$modalWrapper = $('.sale-modal-wrapper');
        this.$saleRemove    = this.$modalWrapper.find('.sale-modal-remove');
      },
      bindEvents: function() {
        this.$saleRemove.on('click', this.removeModal.bind(this));
      },
      removeModal: function() {
        this.$modalWrapper.toggleClass('modal-remove');
      }
  }

  modal.init();

})();



(function() {

  let panel = {
    init: function() {
      this.cacheDOM();
      this.bindEvents();
    },
    cacheDOM: function() {
      this.$el   = $('.panel p');
      // this.$self = this.$el.parent();
    },
    bindEvents: function() {
      this.$el.on('click', event, this.togglePanel.bind(this));
    },
    togglePanel: function(e) {
       let $self = $(e.target).closest('.panel');
      $self.toggleClass('active-panel');
    }
  }

  panel.init();

})();



(function() {

  let links = {
    init: function() {
      this.cacheDOM();
      this.bindEvents();
    },
    cacheDOM: function() {
      this.$el         = $('.mobile-link h3');
    },
    bindEvents: function() {
      this.$el.on('click', event, this.toggleLinks.bind(this));
    },
    toggleLinks: function(e) {
      let $self = $(e.target).closest('.mobile-link');
      $self.toggleClass('active-link');
      $self.find('.mobile-inner-links').toggleClass('active-inner-links');
    }
  }

  links.init();

})();
