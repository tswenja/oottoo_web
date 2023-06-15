AOS.init();

// rollingVideo
function rollingVideo(video) {
  var step = 40;

  if ((video.currentTime + step / 1000) <= video.duration)
    setTimeout(rollingVideo.bind(null, video), step - 3);

  var timeNow = (new Date()).getTime();
  if (!video.timeStartRolling) video.timeStartRolling = timeNow;
  video.currentTime = (timeNow - video.timeStartRolling + step) / 1000;
}

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


// navbarMenu, dropdown: trigger dropdown by hovering
$('#navbarMenu .nav-item.dropdown')
  .on('mouseenter', function(e) {
    if ($('#navbarMenu').hasClass('show')) return;

    $(this).find('[data-bs-toggle="dropdown"]').dropdown('show');
  }).on('mouseleave', function(e) {
    if ($('#navbarMenu').hasClass('show')) return;

    $(this).find('[data-bs-toggle="dropdown"]').dropdown('hide').blur();
  });

// navbarMenu, mobile: disable body scroll when menu showed
$('#navbarMenu')
  .on('shown.bs.collapse', function() {
    setTimeout(function() { $('.page-volumn').addClass('disable-scroll') }, 350);
  })
  .on('hidden.bs.collapse', function() {
    $('.page-volumn').removeClass('disable-scroll');
  });


// Add slideDown animation to Bootstrap dropdown when expanding.
$('.dropdown').on('show.bs.dropdown', function() {
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

// Add slideUp animation to Bootstrap dropdown when collapsing.
$('.dropdown').on('hide.bs.dropdown', function() {
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});
