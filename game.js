var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];



var start = false;
var level = 0;



$(document).keypress(function () {
        if (!start) {
                $("#level-title1").text("LEVEL " + level);
                nextSequence();
                start = true;
        }

});

$(".btn").click(function () {
        var userChosenColor = $(this).attr("id");
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
        animatePress(userChosenColor);
        checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
        if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
                
                
                if (gamePattern.length == userClickedPattern.length) { setTimeout(function () {
                        nextSequence();
                      }, 1000);}
        }
        else {

                

                playSound("wrong");
                $("body").addClass("game-over");
                setTimeout(function () {
                        $("body").removeClass("game-over");
                }, 200);
                $("#level-title1").text("Game Over, Press Any Key to Restart");
                startOver();
        }
}


        function nextSequence() {

                userClickedPattern = [];
                level++;


                $("#level-title1").text("Level " + level);

                var randomNumber = Math.floor(Math.random() * 4);
                var randomChosenColor = buttonColors[randomNumber];
                gamePattern.push(randomChosenColor);
                $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                playSound(randomChosenColor);
        }






        function playSound(name) {
                var audio = new Audio("sounds/" + name + '.mp3');
                audio.play();
        }

        function animatePress(currentColor) {
                $("#" + currentColor).addClass("pressed");
                setTimeout(function () {
                        $("#" + currentColor).removeClass("pressed")
                }, 100);
        }



        function startOver() {
                level = 0;
                gamePattern = [];
                start = false;
        }


