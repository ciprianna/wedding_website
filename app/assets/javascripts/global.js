$(window).bind("load", function() {
  navmenu = document.getElementById("menu_link");
  navmenu.addEventListener("click", show_menu);
  closeNav = document.getElementsByClassName("close_menu");
  closeNav[0].addEventListener("click", close_nav);
  nav_links = document.getElementsByClassName("navbar_links");
  for (i = 0; i < nav_links.length; i++) {
    nav_links[i].addEventListener("click", close_nav);
  }
  rsvp = document.getElementById("rsvp");
  rsvp.addEventListener("click", button_click);
  var span = document.getElementsByClassName("close")[0];
  span.addEventListener("click", close_modal);
  var submit = document.getElementById("submit_form");
  submit.addEventListener("click", form_submission);
});

function show_menu() {
  nav = document.getElementById("home");
  cloak = document.getElementById("c-mask");
  navicon = document.getElementsByClassName("menu_icon");
  body = document.getElementsByTagName("body");
  header = document.getElementsByClassName("fixed_header");
  if(nav.className == "hide_home"){
		nav.className = "show_home";
    cloak.className = "c-mask is-active";
    navicon[0].className = "menu_icon hide_element";
    body[0].setAttribute("style", "overflow: hidden;");
    header[0].className = "fixed_header heading_text_background hide_element";
	} else {
    nav.className = "hide_home";
    cloak.className = "c-mask";
    navicon[0].className = "menu_icon show_element";
    body[0].setAttribute("style", "overflow: auto;");
    header[0].className = "fixed_header heading_text_background show_element";
	}
};

function close_nav() {
  nav = document.getElementById("home");
  cloak = document.getElementById("c-mask");
  navicon = document.getElementsByClassName("menu_icon");
  body = document.getElementsByTagName("body");
  header = document.getElementsByClassName("fixed_header");
  nav.className = "hide_home";
  cloak.className = "c-mask";
  navicon[0].className = "menu_icon show_element";
  body[0].setAttribute("style", "overflow: auto;");
  header[0].className = "fixed_header heading_text_background show_element";
};

$(window).scroll(function () {
  if (window.pageYOffset > 1) {
    details = document.getElementById("details");
    ring = document.getElementById("ring");
    prop_text = document.getElementById("prop_text");
    story = document.getElementById("story");
    if ((window.pageYOffset > 555 && window.pageYOffset < 2345) || window.pageYOffset > 3020) {
      header = document.getElementById("header");
      header.setAttribute('style', 'opacity: .9');
    } else {
      header = document.getElementById("header");
      header.setAttribute('style', 'opacity: .5');
    }
  }
});

function button_click () {
  var modal = document.getElementById('rsvp_modal');
  modal.style.display = "block";
  body = document.getElementsByTagName("body");
  body[0].setAttribute("style", "overflow: hidden;");
}

function close_modal () {
  var modal = document.getElementById('rsvp_modal');
  modal.style.display = "none";
  body = document.getElementsByTagName("body");
  body[0].setAttribute("style", "overflow: auto;");
}

window.onclick = function(event) {
  var modal = document.getElementById('rsvp_modal');
  body = document.getElementsByTagName("body");
  if (event.target == modal) {
      modal.style.display = "none";
      body[0].setAttribute("style", "overflow: auto;");
  }
}

function form_submission () {
    event.preventDefault();
    var first_name = document.getElementsByName("guest[first_name]")[0];
    var last_name = document.getElementsByName("guest[last_name]")[0];
    var password = document.getElementsByName("guest[password]")[0];
    var first_name_error = document.getElementById("first_name_error");
    var last_name_error = document.getElementById("last_name_error");
    var password_error = document.getElementById("password_error");
    var attending = document.getElementsByName("guest[attending]")[0];
    var total_guests = document.getElementsByName("guest[total_guests]")[0];
    if (first_name.value == null || first_name.value == "") {
        first_name.className = "errors";
        first_name_error.className = "error_hint show_element";
        if (last_name.value == null || last_name.value == "") {
            last_name.className = "errors";
            last_name_error.className = "error_hint show_element";
        } else {
          last_name.className = "";
          last_name_error.className = "error_hint hide_element";
        };
        if (password.value != "Unchained_Melody") {
          password.className = "right top_margin errors";
          password_error.className = "error_hint right show_element";
        } else {
          password.className = "right top_margin"
          password_error.className = "error_hint right hide_element";
        };
        return false;
    } else if (last_name.value == null || last_name.value == "") {
        last_name.className = "errors";
        last_name_error.className = "error_hint show_element";
        if (password.value != "Unchained_Melody") {
          password.className = "right top_margin errors";
          password_error.className = "error_hint right show_element";
        } else {
          password.className = "right top_margin";
          password_error.className = "error_hint right hide_element";
        };
        first_name.className = "";
        first_name_error.className = "error_hint hide_element";
        return false;
    } else if (password.value != "Unchained_Melody") {
      password.className = "right top_margin errors";
      password_error.className = "error_hint right show_element";
      first_name.className = "";
      first_name_error.className = "error_hint hide_element";
      last_name.className = "";
      last_name_error.className = "error_hint hide_element";
      return false;
    } else {
      password.className = "right top_margin";
      password_error.className = "error_hint right hide_element";
      first_name.className = "";
      first_name_error.className = "error_hint hide_element";
      last_name.className = "";
      last_name_error.className = "error_hint hide_element";
      // $(this.form).submit();

      $.post("api/v1/guests",
      {
          first_name: params["first_name"],
          last_name: params["last_name"],
          attending: params["attending"],
          total_guests: params["total_guests"]
      },
      function(data, status){
          alert("Data: " + data + "\nStatus: " + status);
      });
    };
}


// --Create a "response submitted" notification
// --Update text to match wedding details
// --Make website responsive!
// --HOST!!! -AWS (S3 for front-end only; Heroku)
// --Scroll background photos at different speeds
