AOS.init();

$('#sec-top > video').on('loadeddata', function(e) {
  $('.enter-animation').addClass('show');
  console.log('loaded');
  e.target.play();
});
$('#sec-top > video').on('suspend', function(e) {
  console.log('suspended');
  stepingVideo(e.target, 0.06)
});
$('#sec-top > video')[0].load();

function stepingVideo(video, step) {
  video.currentTime += step;

  if (video.currentTime >= video.duration) return;
  setTimeout(stepingVideo.bind(null, video, step), step * 990);
}

$('.nav-item.dropdown')
  .on('mouseenter', function(e) {
    $(this).find('[data-bs-toggle="dropdown"]').dropdown('show');
  }).on('mouseleave', function(e) {
    $(this).find('[data-bs-toggle="dropdown"]').dropdown('hide');
  });
