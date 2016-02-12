$(window).bind("load", function() {
  navmenu = document.getElementById("menu_link");
  navmenu.addEventListener("click", show_menu);
});

function show_menu() {
  nav = document.getElementById("home");
  if(nav.className == "hide_home"){
		nav.className = "show_home";
	} else {
		nav.className = "hide_home";
	}
};
