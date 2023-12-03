$(function () {
  //Fixed header

  let header = $("#header"),
    intro = $("#intro"),
    introH = intro.innerHeight(),
    scrollPosition = $(window).scrollTop(),
    nav = $("#nav"),
    navToggle = $("#nav__toggle");

  console.log(scrollPosition);

  $(window).on("scroll resize", function () {
    introH = intro.innerHeight();
    scrollPosition = $(this).scrollTop();
    checkScroll(introH, scrollPosition);
  });
  header.addClass("header__fixed");

  function checkScroll(introH, scrollPosition) {
    if (scrollPosition > introH) {
      header.addClass("header__fixed");
    } else {
      header.removeClass("header__fixed");
    }
  }

  // Smooth scroll
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let blockId = $(this).data("scroll");
    let blockOffset = $(blockId).offset().top;
    $("html, body").animate(
      {
        scrollTop: blockOffset,
      },
      500
    );
  });

  //Nav Toggle
  $(document).ready(function () {
    $("menu-burger__header").click(function () {
      $(this).toggleClass("open-menu");
      $(nav).toggleClass("open-menu");
    });
  });
});

const person = (firstName, lastName) => ({ first: firstName, last: lastName });

