AOS.init();

$('#sec-top > video').load();
$('#sec-top > video').on('loadeddata', function(e) {
  $('.enter-animation').addClass('show');
  console.log('loaded');
});

$('.nav-item.dropdown')
  .on('mouseenter', function(e) {
    $(this).find('[data-bs-toggle="dropdown"]').dropdown('show');
  }).on('mouseleave', function(e) {
    $(this).find('[data-bs-toggle="dropdown"]').dropdown('hide');
  });
