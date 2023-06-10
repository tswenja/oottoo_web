AOS.init();

$('#sec-top > video').on('loadeddata', function(e) {
  $('#navbar1.enter-animation').addClass('show');
});

$('.nav-item.dropdown')
  .on('mouseenter', function(e) {
    $(this).find('[data-bs-toggle="dropdown"]').dropdown('show');
  }).on('mouseleave', function(e) {
    $(this).find('[data-bs-toggle="dropdown"]').dropdown('hide');
  });
