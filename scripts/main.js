AOS.init();

$('#sec-top > video').on('loadeddata', function(e) {
  $('.enter-animation').addClass('show');
  e.target.controls = false;
});

$('.nav-item.dropdown')
  .on('mouseenter', function(e) {
    $(this).find('[data-bs-toggle="dropdown"]').dropdown('show');
  }).on('mouseleave', function(e) {
    $(this).find('[data-bs-toggle="dropdown"]').dropdown('hide');
  });
