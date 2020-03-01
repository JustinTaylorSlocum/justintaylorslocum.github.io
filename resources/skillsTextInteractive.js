var skills = ["Java Developer.", "JavaScript Developer.", "React Developer.", "Agile Developer."];
var readyToWrite = true;

// setInterval(function() {
// 	var skillText = $('.main p').html();
// 	if (skillText.charAt(skillText.length - 1) == "|") {
// 		$('.main p').html(skillText.substring(0, skillText.length - 1));
// 	} else {
// 		$('.main p').html(skillText + "|");
// 	}
// }, 500);

function timePromise() {
	return new Promise(resolve => {setTimeout(resolve, 50)});
}

async function writeToDisplay(word) {
	for (var i = 0; i < word.length; i++) {
		await timePromise();
		var skillText = $('.main p').html();
		$('.main p').html(skillText + word[i]);
	}
	readyToWrite = false;
}

$('document').ready(function() {
	var word = skills[Math.floor(Math.random() * skills.length)];
	writeToDisplay("A software engineer with experience in both Front-end and Back-end technologies.");
});
// async function eraseSkillDisplayCharacterPromise() {
// 	await timePromise();
// 	var skillText = $('.main p').html();
// 	$('.main p').html(skillText.substring(0, skillText.length - 1));
// 	console.log($('.main p').html());
// }

// async function eraseSkillDisplay() {
// 	while ($('.main p').html() != "-") {
// 		await timePromise();
// 		var skillText = $('.main p').html();
// 		$('.main p').html(skillText.substring(0, skillText.length - 1));
// 	}
// 	readyToWrite = true;
// }

// async function writeToDisplay(word) {
// 	//eraseSkillDisplay();
// 	for (var i = 0; i < word.length; i++) {
// 		await timePromise();
// 		var skillText = $('.main p').html();
// 		$('.main p').html(skillText + word[i]);
// 	}
// 	readyToWrite = false;
// }


// setInterval(function() {
// 	if (document.hasFocus()) {
// 		if (readyToWrite) {
// 			var word = skills[Math.floor(Math.random() * skills.length)];
// 			writeToDisplay(word);
// 		} else {
// 			eraseSkillDisplay();
// 		}
// 	}
// }, 3000)
