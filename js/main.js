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

$('.hamburger').on('click', function (){
  $('.main-nav').addClass('active')
})

$('.close-nav').on('click', function (){
  $('.main-nav').removeClass('active')
})

$('.main-nav').on('click', function (){
  $('.main-nav').removeClass('active')
})

//Modal appears when register button is clicked //

$('.header-button').on('click', function () {
  $('.modal').fadeIn('fast');
})

$('.close').on('click', function () {
  $('.modal').fadeOut('fast');
})

//Modal text disappears when submit is clicked and TY language appears //

$('.submit').on('click', function () {
  $('.modal-copy').hide();
})

$('.submit').on('click', function () {
  $('.modal-thanks').show();
})

// When a user scrolls past the bottom of the header, nav bar changes to dark logo and text //

$(window).on('scroll', function () {
	var distanceScrolled = $(window).scrollTop();
  if (distanceScrolled >= 80) {
		$('.nav-info').addClass('scrolled');
    $('.hamburger').addClass('ham-color')
    $('.white-logo').hide();
    $('.dark-logo').show();
	} else {
		$('.nav-info').removeClass('scrolled');
    $('.hamburger').removeClass('ham-color')
    $('.white-logo').show();
    $('.dark-logo').hide();
	}

});

// when user hovers over a blog, color changes //
