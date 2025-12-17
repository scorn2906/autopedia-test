import "./section-trusted.js";
import "./section-product.js";
import "./section-help.js";

$(document).ready(function () {
  $(".menu-toggle").on("click", function () {
    $(".navbar nav").toggleClass("active");
  });

  $(".card").hover(
    function () {
      $(this).css("transform", "translateY(-5px)");
    },
    function () {
      $(this).css("transform", "translateY(0)");
    }
  );
});
