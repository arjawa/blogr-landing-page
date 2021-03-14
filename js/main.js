var menuToggler = document.querySelector('#menuToggler'),
    menuCollapse = document.querySelector('#menuCollapse');

menuToggler.addEventListener("click", function(e) {
  e.preventDefault();
  var menuIcon = this.firstElementChild.getAttribute("src");

  if (menuIcon == "images/icon-hamburger.svg") {
    menuCollapse.classList.remove("hidden");
    this.firstElementChild.setAttribute("src", "images/icon-close.svg")
    setTimeout(function() {
      menuCollapse.classList.remove("opacity-0", "scale-90", "hidden");
      menuCollapse.classList.add("opacity-100", "scale-100");
    }, 50);
  } else {
    this.firstElementChild.setAttribute("src", "images/icon-hamburger.svg")
    menuCollapse.classList.add("opacity-0", "scale-90");
    menuCollapse.classList.remove("opacity-100", "scale-100");
    setTimeout(function() {
      menuCollapse.classList.add("hidden");
    }, 500);

    /* close the dropdown when menu is closed */
    var array = ["#product", "#company", "#connect"];
    array.forEach(a => {
      document.querySelector(a).classList.add("hidden");
      document.querySelector("#arrow_" + a.substring(1) + "_dark").classList.remove("rotate-180");
      document.querySelector("#arrow_" + a.substring(1) + "_light").classList.remove("rotate-180");
    });
  }
});

/* dropdown */
var menu = document.querySelectorAll(".menu");

menu.forEach(events => {

  events.addEventListener("click", function(e) {
    e.preventDefault();

    target = events.getAttribute("href");
    document.querySelector(target).classList.toggle("hidden");

    document.querySelector("#arrow_" + target.substring(1) + "_dark").classList.toggle("rotate-180");
    document.querySelector("#arrow_" + target.substring(1) + "_light").classList.toggle("rotate-180");
    /* if a dropdown active when open another dropdown then close it */
    var array = ["#product", "#company", "#connect"];
    array.forEach(a => {
      if (a != target) {
        document.querySelector(a).classList.add("hidden");
        document.querySelector("#arrow_" + a.substring(1) + "_dark").classList.remove("rotate-180");
        document.querySelector("#arrow_" + a.substring(1) + "_light").classList.remove("rotate-180");
      }
    });
  });
});