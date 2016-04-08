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

function isScrolledIntoView(elem)
{
    var headingView = $('#header').offset().top;
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((headingView >= (elemTop - $('#header').height())) && (headingView <=  (elemBottom - $('#header').height())))
}

$(window).scroll(function() {
    if(isScrolledIntoView($('#top')))
    {
      var header = document.getElementById("header");
      header.setAttribute('style', 'opacity: .5');
    } else if (isScrolledIntoView($('#ring'))) {
      var header = document.getElementById("header");
      header.setAttribute('style', 'opacity: .5');
    } else {
      var header = document.getElementById("header");
      header.setAttribute('style', 'opacity: .9');
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
  var first_name_error = document.getElementById("first_name_error");
  var last_name_error = document.getElementById("last_name_error");
  var password_error = document.getElementById("password_error");
  var first_name = document.getElementsByName("guest[first_name]")[0];
  var last_name = document.getElementsByName("guest[last_name]")[0];
  var password = document.getElementsByName("guest[password]")[0];
  modal.style.display = "none";
  $('#form')[0].reset();
  password.className = "top_margin";
  password_error.className = "error_hint hide_element";
  first_name.className = "";
  first_name_error.className = "error_hint hide_element";
  last_name.className = "";
  last_name_error.className = "error_hint hide_element";
  body = document.getElementsByTagName("body");
  body[0].setAttribute("style", "overflow: auto;");
}

window.onclick = function(event) {
  var modal = document.getElementById('rsvp_modal');
  var thanks = document.getElementById('submission_thanks');
  var first_name_error = document.getElementById("first_name_error");
  var last_name_error = document.getElementById("last_name_error");
  var password_error = document.getElementById("password_error");
  var first_name = document.getElementsByName("guest[first_name]")[0];
  var last_name = document.getElementsByName("guest[last_name]")[0];
  var password = document.getElementsByName("guest[password]")[0];
  body = document.getElementsByTagName("body");
  if (event.target == modal || event.target == thanks) {
      modal.style.display = "none";
      $('#form')[0].reset();
      password.className = "top_margin";
      password_error.className = "error_hint hide_element";
      first_name.className = "";
      first_name_error.className = "error_hint hide_element";
      last_name.className = "";
      last_name_error.className = "error_hint hide_element";
      thanks.style.display = "none";
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
    var queryString = $('#form').serializeArray();
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
        if (password.value != "Unchained Melody") {
          password.className = "top_margin errors";
          password_error.className = "error_hint show_element";
        } else {
          password.className = "top_margin"
          password_error.className = "error_hint hide_element";
        };
        return false;
    } else if (last_name.value == null || last_name.value == "") {
        last_name.className = "errors";
        last_name_error.className = "error_hint show_element";
        if (password.value != "Unchained Melody") {
          password.className = "top_margin errors";
          password_error.className = "error_hint show_element";
        } else {
          password.className = "top_margin";
          password_error.className = "error_hint hide_element";
        };
        first_name.className = "";
        first_name_error.className = "error_hint hide_element";
        return false;
    } else if (password.value != "Unchained Melody") {
      password.className = "top_margin errors";
      password_error.className = "error_hint show_element";
      first_name.className = "";
      first_name_error.className = "error_hint hide_element";
      last_name.className = "";
      last_name_error.className = "error_hint hide_element";
      return false;
    } else {
      password.className = "top_margin";
      password_error.className = "error_hint hide_element";
      first_name.className = "";
      first_name_error.className = "error_hint hide_element";
      last_name.className = "";
      last_name_error.className = "error_hint hide_element";
      // $(this.form).submit();

      $.post("api/v1/guests",
      {guest:{
          first_name: queryString[0].value,
          last_name: queryString[1].value,
          attending: queryString[2].value,
          total_guests: queryString[3].value
      }},
      function(data, status){
          window.close_modal();
          window.open_thanks_modal();
          $('#form')[0].reset();
          var thanks_close = document.getElementsByClassName("close")[1];
          thanks_close.addEventListener("click", close_thanks_modal);
      });
    };
}

function open_thanks_modal() {
  var thanks = document.getElementById('submission_thanks');
  thanks.style.display = "block";
  body = document.getElementsByTagName("body");
  body[0].setAttribute("style", "overflow: hidden;");
}

function close_thanks_modal() {
  var thanks = document.getElementById('submission_thanks');
  thanks.style.display = "none";
  body = document.getElementsByTagName("body");
  body[0].setAttribute("style", "overflow: auto;");
}


// --Make website responsive!
// --Continue work on style of rsvp modal/submission confirmation modal
// --Re-evaluate the nav bar & header on larger screens
// --Clean-up old/unnecessary code
// --Scroll background photos at different speeds
// --Countdown of days
// --Tab avatar a heart <3
