AOS.init();

$('#sec-top > video').on('canplaythrough', function(e) {
  $('.enter-animation').addClass('show');
  console.log('loaded');
  e.target.loaded = true;
  var promise = e.target.play();
  if (promise !== undefined) {
    promise.catch(error => {
      // Auto-play was prevented
      // Show a UI element to let the user manually start playback
      stepingVideo(e.target, 0.06)
    }).then(() => {
      // Auto-play started
    });
  }
});
//$('#sec-top > video').on('suspend', function(e) {
//  console.log('suspended');
//  if (!e.target.loaded) return;
//  console.log('suspended and loaded');
//  stepingVideo(e.target, 0.06)
//});
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
