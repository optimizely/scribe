$(document).ready(function(){

  function tocPosition() {

    var scrollTop = $(window).scrollTop();

    toc = {
      height: $(".toc-block").height(),
      top: ($(".toc-block").offset()).top,
    }

    toc.column = {
      top: ($(".toc-wrap").offset()).top,
      height: $(".content-text").innerHeight()
    }

    toc.threshold = {
      top: toc.column.top - 40,
      bottom: toc.column.top + toc.column.height - toc.height - 40
    }

    toc.stop = {
      bottom: toc.column.top + toc.column.height - toc.height
    }

    switch (true) {
      case ( scrollTop < toc.threshold.top ): // if scrolled to top
        $("body").attr("data-toc-position", 0);
        break;
      case ( scrollTop > toc.threshold.bottom ): // if scrolled to bottom
        $("body").attr("data-toc-position", 2);
        $(".toc-block").css("top", toc.stop.bottom)
        break;
      default: // if scrolling between top and bottom
        $(".toc-block").removeAttr("style");
        $("body").attr("data-toc-position", 1);
    }

  }

  if ( $(".toc-wrap").length > 0 ) {
    $(window).scroll(function(){
      tocPosition();
    });

    $(window).resize(function(){
      tocPosition();
    });
  }


});