$(window).bind("load", function() {
  navmenu = document.getElementById("menu_link");
  navmenu.addEventListener("click", show_menu);
  closeNav = document.getElementsByClassName("close_menu");
  closeNav[0].addEventListener("click", close_nav);
  nav_links = document.getElementsByClassName("navbar_links");
  for (i = 0; i < nav_links.length; i++) {
    nav_links[i].addEventListener("click", close_nav);
  }
});

function show_menu() {
  nav = document.getElementById("home");
  cloak = document.getElementById("c-mask");
  navicon = document.getElementsByClassName("menu_icon");
  body = document.getElementsByTagName("body");
  if(nav.className == "hide_home"){
		nav.className = "show_home";
    cloak.className = "c-mask is-active";
    navicon[0].className = "menu_icon hide_element";
    body[0].setAttribute("style", "overflow: hidden;");
	} else {
    nav.className = "hide_home";
    cloak.className = "c-mask";
    navicon[0].className = "menu_icon show_element";
    body[0].setAttribute("style", "overflow: auto;");
	}
};

function close_nav() {
  nav = document.getElementById("home");
  cloak = document.getElementById("c-mask");
  navicon = document.getElementsByClassName("menu_icon");
  body = document.getElementsByTagName("body");
  nav.className = "hide_home";
  cloak.className = "c-mask";
  navicon[0].className = "menu_icon show_element";
  body[0].setAttribute("style", "overflow: auto;");
};


// --Pin header to top when scroll
// --Fix RSVP button (style and functionality)
// --Scroll background photos at different speeds
// --Update text to match wedding details
// --HOST!!!
