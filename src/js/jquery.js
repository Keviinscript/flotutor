var fixedTop = $(".contactbar");
var scroll_top_open = $(".scroll-top");
var largeNav = $(".largenav");
var logo = $("#logo");
var mainLogo = $(".mainlogo")
var facility1 = $(".spin1");
var facility2 = $(".spin2");

// scroll-up button and navbar position on scroll
$(window).on("scroll", function () {
 
  if ($(this).scrollTop() > 25) {
    largeNav.addClass('navfixed')
    largeNav.removeClass('relative')
    
  } else {
    largeNav.removeClass('navfixed')
    largeNav.addClass('relative')

  }

  
  
});

