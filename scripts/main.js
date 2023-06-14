AOS.init();

$('video[data-autoplay]').on('loadeddata', function(e) {
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

var timeStart;
function rollingVideo(video) {
  var step = 40;

  if ((video.currentTime + step / 1000) <= video.duration)
    setTimeout(rollingVideo.bind(null, video), step - 3);

  var timeNow = (new Date()).getTime();
  if (!timeStart) timeStart = timeNow;
  video.currentTime = (timeNow - timeStart + step) / 1000;
}

$('.nav-item.dropdown')
  .on('mouseenter', function(e) {
    $(this).find('[data-bs-toggle="dropdown"]').dropdown('show');
  }).on('mouseleave', function(e) {
    $(this).find('[data-bs-toggle="dropdown"]').dropdown('hide');
  });
