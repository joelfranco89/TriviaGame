$(document).ready(function(){
	var time = 20
	var timer;
	var correctAnswers = 0
	var incorrectAnswers = 0
	function displayTime(){
		$("#timer").text("Time remaining: " + time)
	}
	function displayScore(){
		$("#wins").text("Correct Answers: " + correctAnswers)
		$("#losses").text("Incorrect Answers: " + incorrectAnswers)
	}
	function timeFunction(){
		displayTime()
		time -= 1
		if (time < 0){
			if ($('input[value=Miami-Dolphins]').is(":checked")) {
				correctAnswers += 1;
			}else{
				incorrectAnswers += 1;
			}
			if ($('input[value=6]').is(":checked")) {
				correctAnswers += 1;
			}else{
				incorrectAnswers += 1;
			}
			if ($('input[value=18]').is(":checked")) {
				correctAnswers += 1;
			}else{
				incorrectAnswers += 1;
			}
			if ($('input[value=10]').is(":checked")) {
				correctAnswers += 1;
			}else{
				incorrectAnswers += 1;
			}
			console.log(correctAnswers)
			stopTime()
			displayScore()
			$("#questionsBody").hide()
		}
	}
	function startTime(){
		timer = setInterval(timeFunction, 1000)
	}
	function stopTime(){
		clearInterval(timer)
	}
	$("#questionsBody").hide()
	$(".button").on("click", function(){
		$(this).hide();
		$("#questionsBody").show()
		$(".col-lg-12").css("height", "1000");
		displayTime()
		startTime()
	});





});