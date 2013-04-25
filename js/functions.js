$(document).on('ready', function () {

	// For parallax effect on section and body backgrounds
	//$('[data-type="background"]').each( function () {
		//var $bgElement = $(this); // assigning the object

		//$(window).on('scroll', function () {
			//var yPos = -($(window).scrollTop() / $bgElement.data('speed')); 

			// Put together our final background position
			//var coords = '50% '+ yPos + 'px';

			// Move the background
			//$bgElement.css({ backgroundPosition: coords });
		//})
	//});

}); 

// Click handlers for nav
$('#header-site a').on('click', function (e) {

	extraOffset = 0;
	linkId = $(this).attr('href');

	if (linkId == '#services') { extraOffset = 150}
	if ($(window).scrollTop() > 0) {
		scrollPage($(linkId).offset().top + extraOffset);
	}else{
		scrollPage($(linkId).offset().top - 40 + extraOffset);
	}
	e.preventDefault();

});

function scrollPage(scrollOffset) {
	$('html, body').animate({
		scrollTop: scrollOffset
	}, 1000);
}

// Set fixed header
$(window).on('scroll', function () {
	if ( $(window).width() > 500) {
		if ($(this).scrollTop() > 10) {
			$('#header-site').addClass('header-persist');
			$('#about').addClass('darken');
		} else {
			$('#header-site').removeClass('header-persist');		
			$('#about').removeClass('darken');
		}
	}
});