$(document).ready(function(){

  function tocPosition() {

    var scrollTop = $(window).scrollTop();

    toc = {
      height: $(".ebook-toc").height(),
      top: ($(".ebook-toc").offset()).top,
    }

    toc.column = {
      top: ($(".ebook-toc-wrap").offset()).top,
      height: $(".ebook-text").innerHeight()
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
        $(".ebook-toc").css("top", toc.stop.bottom)
        break;
      default: // if scrolling between top and bottom
        $(".ebook-toc").removeAttr("style");
        $("body").attr("data-toc-position", 1);
    }

  }

  $(window).scroll(function(){
    tocPosition();
  });

  $(window).resize(function(){
    tocPosition();
  });

});