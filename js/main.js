// When in page anchor is clicked, scroll to id

$('nav a').on('click', function(event) {
  event.preventDefault();
  var anchorHref = $(this).attr('href');
  var distanceFromTop = $(anchorHref).offset().top;
  $('body').animate({
    scrollTop: distanceFromTop
  }, 600);
});

// When hamburger is clicked, sidebar nave slides out //

$('nav').on('click', function() {
  $('#hamburger').slideToggle('nav-mobile');
})

//Modal appears when register button is clicked //

$('.header-button').on('click', function () {
  $('.modal').fadeIn('fast');
})

$('.close').on('click', function () {
  $('.modal').fadeOut('fast');
})

//Modal text disappears when submit is clicked and TY language appears //

// When a user scrolls past the bottom of the header, nav bar changes to dark logo and text //

$(window).on('scroll', function () {
	var distanceScrolled = $(window).scrollTop();

  console.log(distanceScrolled);

  if (distanceScrolled >= 80) {
		$('.nav-info').addClass('scrolled');
    $('white-logo').hide();
    $('dark-logo').show();
	} else {
		$('.nav-info').removeClass('scrolled');
    $('white-logo').show();
    $('dark-logo').show();
	}

});

// when user hovers over a blog, color changes //
