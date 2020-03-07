var pageMessage = "A software engineer with experience in both Front-end and Back-end technologies.";
setInterval(function() {
	if ($('.main p').html().substring(0, pageMessage.length).length == pageMessage.length) {
	var skillText = $('.main p').html();
	if (skillText.charAt(skillText.length - 1) == "|") {
		$('.main p').html(skillText.substring(0, skillText.length - 1));
	} else {
		$('.main p').html(skillText + "|");
	}
	}
}, 500);

function timePromise() {
	return new Promise(resolve => {setTimeout(resolve, 50)});
}

async function writeToDisplay(word) {
	for (var i = 0; i < word.length; i++) {
		await timePromise();
		var skillText = $('.main p').html();
		$('.main p').html(skillText + word[i]);
	}
}

$('document').ready(function() {
	writeToDisplay(pageMessage);
});
