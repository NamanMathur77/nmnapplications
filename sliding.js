$(document).ready(function() {
  $("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item1").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item1")
            .eq(i)
            .appendTo(".carousel-inner1");
        } else {
          $(".carousel-item1")
            .eq(0)
            .appendTo($(this).find(".carousel-inner1"));
        }
      }
    }
  });
});
