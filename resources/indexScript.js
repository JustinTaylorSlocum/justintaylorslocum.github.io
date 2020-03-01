var mouseOnConButton = false;

window.onload = function() {
	$('.wrapper').css('opacity', 1);
	contactIconInteraction();
	resumeButton();
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

function resumeButton() {
	$('.ttButton').eq(3).click(function() {
		$("body").append("<div class=\"resumeOverlay\"><div class=\"closeResume\">X</div><div class=\"resumeView\"><iframe src=\"./resources/JustinTaylorSlocumResume.pdf\" style=\"height:100%;width:100%;\"></iframe></div></div>");
		$('.closeResume').click(function() {
			$('.resumeOverlay').remove();
		});
	});
}