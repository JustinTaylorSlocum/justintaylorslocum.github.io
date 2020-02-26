var mouseOnConButton = false;

window.onload = function() {
	$('.wrapper').css('opacity', 1);
	contactIconInteraction();
	$('body').mousemove(function(e) {
		if (mouseOnConButton) {
			$('.tooltip').css('left', e.pageX - 35);
			$('.tooltip').css('top', e.pageY - 75);
		}
	});
}

function contactIconInteraction() {
	$('.ttButton').hover(function() {
		mouseOnConButton = true;
		let tipName = $(this).attr("label");
		$('.tooltip').text(tipName);
		$('.tooltip').css('opacity', "0.8");
	}, function() {
		mouseOnConButton = false;
		$('.tooltip').css('opacity', '0');
	});
}

var siteWidth = 800,
siteHeight = 1250;
var scale = screen.width /siteWidth

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', height='+siteHeight+'initial-scale='+scale+'');