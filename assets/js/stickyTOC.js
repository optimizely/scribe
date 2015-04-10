$(document).ready(function(){

  var offset = $(".ebook-toc").offset();

  $(window).scroll(function() {
    var s = $(window).scrollTop();
    if ( s > offset.top - 40) {
      $("body").addClass("toc-sticky");
    } else {
      $("body").removeClass("toc-sticky");
    }
  });

});