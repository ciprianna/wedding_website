$(window).bind("load", function() {
  navmenu = document.getElementById("menu_link");
  navmenu.addEventListener("click", show_menu);
});

function show_menu() {
  nav = document.getElementById("home");
  cloak = document.getElementById("c-mask");
  if(nav.className == "hide_home"){
		nav.className = "show_home";
    cloak.className = "c-mask is-active";
	} else {
		nav.className = "hide_home";
    cloak.className = "c-mask";
	}
};
