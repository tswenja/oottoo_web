AOS.init();

$('video[data-autoplay]').on('canplaythrough', function(e) {
  var promise = e.target.play();
  if (promise !== undefined) {
    promise.catch(error => {
      // Auto-play was prevented
      stepingVideo(e.target, 0.06)
    }).then(() => {
      // Auto-play started
    });
  }
});
$('#sec-top > video').on('canplaythrough', function(e) {
  $('.enter-animation').addClass('show');
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
