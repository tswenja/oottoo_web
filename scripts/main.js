AOS.init();

$('video[data-autoplay]').on('canplaythrough', function(e) {
  var promise = e.target.play();
  if (promise !== undefined) {
    promise.catch(error => {
      // Auto-play was prevented
      rollingVideo(e.target);
    }).then(() => {
      // Auto-play started
    });
  }
});
$('#sec-top > video').on('canplaythrough', function(e) {
  $('.enter-animation').addClass('show');
});
$('#sec-top > video')[0].load();

function rollingVideo(video) {
  var step = 0.4;
  video.currentTime += step;

  if (video.currentTime >= video.duration) return;
  setTimeout(rollingVideo.bind(null, video), step * 1000 - 3);
}

$('.nav-item.dropdown')
  .on('mouseenter', function(e) {
    $(this).find('[data-bs-toggle="dropdown"]').dropdown('show');
  }).on('mouseleave', function(e) {
    $(this).find('[data-bs-toggle="dropdown"]').dropdown('hide');
  });
