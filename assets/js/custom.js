
setTimeout(function() {
    $('#pre').fadeOut('fast');
}, 6000);
 setTimeout(function() {
    $('.preload').fadeOut('fast');
}, 6000);
$(function(){
  setTimeout(function(){
    $('html, body')
    .css({
      'overflow-y': 'auto',
            'overflow-x': 'hidden'

    })
    .animate({
      scrollTop: $('.one').offset().top
    }, 4000);
  }, 4000);
});
