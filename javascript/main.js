(function ($) {
  "use strict";

  var cfg = {
      scrollDuration: 800,
      mailChimpURL: "", 
    },
    $WIN = $(window);

  var doc = document.documentElement;
  doc.setAttribute("data-useragent", navigator.userAgent);

//Preloader
  var ssPreloader = function () {
    $("html").addClass("ss-preload");

    $WIN.on("load", function () {
//force page refresh
      $("html, body").animate({ scrollTop: 0 }, "normal");

//loading animation
      $("#loader").fadeOut("slow", function () {
        $("#preloader").delay(300).fadeOut("slow");
      });

//content animations
      $("html").removeClass("ss-preload");
      $("html").addClass("ss-loaded");
    });
  };


// Initialize
(function clInit() {
    ssPreloader();
  })();
})(jQuery);
