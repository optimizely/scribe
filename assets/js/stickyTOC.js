$(document).ready(function(){

  var offset = $(".ebook-toc").offset();

  $(window).scroll(function() {
    var s = $(window).scrollTop();
    var tocOffset = ($(".ebook-toc-wrap").offset()).top;
    var tocWrapHeight = $(".ebook-toc-wrap").height();
    var tocHeight = $(".ebook-toc").height();

    if ( s > offset.top - 40) {
      $("body").addClass("toc-stick-top");
    } else {
      $("body").removeClass("toc-stick-top");
    }

    console.log(s);

    if ( tocOffset + tocWrapHeight - tocHeight - 80 < s ) {
      var tocBottomOffset = ($(".ebook-toc").offset()).top;
      $(".ebook-toc").css({
        position: "absolute",
        top: "3721px"
      })
    }
  });

});