var mouseOnConButton = false;

$('document').ready(function() {
	$('.wrapper').css('opacity', 1);
	contactIconInteraction();
	$('body').mousemove(function(e) {
		if (mouseOnConButton) {
			$('.tooltip').css('left', e.pageX - 47);
			$('.tooltip').css('top', e.pageY - 75);
		}
	});
});

function contactIconInteraction() {

	$('.ttbutton').mouseenter(function() {
		mouseOnConButton = true;
		let tipName = $(this).attr("label");
		$('.tooltip').text(tipName);
		$('.tooltip').css('opacity', "0.8");
	});

	$('.ttbutton').mouseleave(function() {
		mouseOnConButton = false;
		$('.tooltip').css('opacity', '0');
	});
}