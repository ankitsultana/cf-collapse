window.onload = $('.format-humantime').click(function() {
	var divcomment = $(this).parents().eq(6);
	divcomment.toggleClass('cfc-voila');
});
