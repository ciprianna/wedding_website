$(window).bind("load", function() {
  navmenu = document.getElementById("menu_link");
  navmenu.addEventListener("click", show_menu);
  // navmenu.function({
  //     menuWidth: 300, // Default is 240
  //     edge: 'right', // Choose the horizontal origin
  //     closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  //   }
  // );
});

function show_menu() {
  nav = document.getElementById("home");
  if(nav.className == "hide_home"){
		nav.className = "show_home";
	} else {
		nav.className = "hide_home";
	}
};

// (function(window) {
//
//   'use strict';
//
//   /**
//    * Extend Object helper function.
//    */
//   function extend(a, b) {
//     for(var key in b) {
//       if(b.hasOwnProperty(key)) {
//         a[key] = b[key];
//       }
//     }
//     return a;
//   }
//
//   /**
//    * Each helper function.
//    */
//   function each(collection, callback) {
//     for (var i = 0; i < collection.length; i++) {
//       var item = collection[i];
//       callback(item);
//     }
//   }
//
//   /**
//    * Menu Constructor.
//    */
//   function Menu(options) {
//     this.options = extend({}, this.options);
//     extend(this.options, options);
//     this._init();
//   }
//
//   /**
//    * Menu Options.
//    */
//   Menu.prototype.options = {
//     wrapper: '#home',          // The content wrapper
//     type: '#home',             // The menu type
//     menuOpenerClass: '#menu-link',   // The menu opener class names (i.e. the buttons)
//     maskId: '#c-mask'               // The ID of the mask
//   };
//
//   /**
//    * Initialise Menu.
//    */
//   Menu.prototype._init = function() {
//     this.body = document.body;
//     this.wrapper = document.querySelector(this.options.wrapper);
//     this.mask = document.querySelector(this.options.maskId);
//     this.menu = document.querySelector('#home');
//     this.closeBtn = this.menu.querySelector('.close_menu');
//     this.menuOpeners = document.querySelectorAll(this.options.menuOpenerClass);
//     this._initEvents();
//   };
//
//   /**
//    * Initialise Menu Events.
//    */
//   Menu.prototype._initEvents = function() {
//     // Event for clicks on the close button inside the menu.
//     this.closeBtn.addEventListener('click', function(e) {
//       e.preventDefault();
//       this.close();
//     }.bind(this));
//
//     // Event for clicks on the mask.
//     this.mask.addEventListener('click', function(e) {
//       e.preventDefault();
//       this.close();
//     }.bind(this));
//   };
//
//   /**
//    * Open Menu.
//    */
//   Menu.prototype.open = function() {
//     this.body.classList.add('has-active-menu');
//     this.wrapper.classList.add('has-' + this.options.type);
//     this.menu.classList.add('is-active');
//     this.mask.classList.add('is-active');
//     this.disableMenuOpeners();
//   };
//
//   /**
//    * Close Menu.
//    */
//   Menu.prototype.close = function() {
//     this.body.classList.remove('has-active-menu');
//     this.wrapper.classList.remove('has-' + this.options.type);
//     this.menu.classList.remove('is-active');
//     this.mask.classList.remove('is-active');
//     this.enableMenuOpeners();
//   };
//
//   /**
//    * Disable Menu Openers.
//    */
//   Menu.prototype.disableMenuOpeners = function() {
//     each(this.menuOpeners, function(item) {
//       item.disabled = true;
//     });
//   };
//
//   /**
//    * Enable Menu Openers.
//    */
//   Menu.prototype.enableMenuOpeners = function() {
//     each(this.menuOpeners, function(item) {
//       item.disabled = false;
//     });
//   };
//
//   /**
//    * Add to global namespace.
//    */
//   window.Menu = Menu;
//
// })(window);
//
// var slideLeft = new Menu({
//   wrapper: '#home',
//   type: '#home',
//   menuOpenerClass: '#menu-link',
//   maskId: '#c-mask'
// });
//
// var slideLeftBtn = document.querySelector('#menu-link');
//
// slideLeftBtn.addEventListener('click', function(e) {
//   e.preventDefault;
//   slideLeft.open();
// });
