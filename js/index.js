$(document).ready(function() {
  $(window).scroll(function() {
    $('.hideme').each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 100;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(this).addClass('in-view');
      } else {
        $(this).removeClass('in-view');
      }
    });
  });
  $(window).trigger('scroll');
  (function() {

    var quotes = $(".quote");
    var quoteIndex = -1;

    function showNextQuote() {
      ++quoteIndex;
      quotes.eq(quoteIndex % quotes.length)
        .fadeIn(2000)
        .delay(2300)
        .fadeOut(2000, showNextQuote);
    }
    showNextQuote();
  })();
});