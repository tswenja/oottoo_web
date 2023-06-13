AOS.init();

$('#sec-top > video').on('loadeddata', function(e) {
  $('.enter-animation').addClass('show');
  console.log('loaded');
});
$('#sec-top > video')[0].load();

$('.nav-item.dropdown')
  .on('mouseenter', function(e) {
    $(this).find('[data-bs-toggle="dropdown"]').dropdown('show');
  }).on('mouseleave', function(e) {
    $(this).find('[data-bs-toggle="dropdown"]').dropdown('hide');
  });
