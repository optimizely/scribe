$(document).ready(function(){

  function tocPosition() {

    var s = $(window).scrollTop();

    toc = {
      height: $(".ebook-toc").outerHeight(),
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

    var tocStop = toc.column.top + toc.column.height - toc.height;

    if ( s < toc.threshold.top ) {
      $("body").attr("toc-position", 0);
    } else if ( s > toc.threshold.bottom ) {
      $("body").attr("toc-position", 2);
      $(".ebook-toc").css("top", tocStop)
    } else {
      $(".ebook-toc").removeAttr("style");
      $("body").attr("toc-position", 1);
    }

    $("#marker").css("top", toc.column.top + toc.column.height - toc.height);

  }


  $(window).scroll(function(){
    tocPosition();
  });

  $(window).resize(function(){
    tocPosition();
  });

  tocPosition();

});