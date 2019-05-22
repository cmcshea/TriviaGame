//create Global Vars

var correctAnswers = 0;
var incorrectAnswers = 0;
var correctArr = ["Pete Rose", "27", "Cooperstown, NY","",""];
var timer = 0; 

// Create a function to start the game 


$(".startBtn").on ("click", function(){
    start()
    var timeRemaining = 30;
    timer = setInterval(function () {
        $("#timer").innerHTML = timeRemaining + " seconds remaining";
        timeRemaining -= 1;
        if (timeRemaining <= 0) {
            done()  
        }
    }, 1000);
});
console.log(timeRemaining);

//Need onclick functions for the game answers for correct and incorrect answers

//Add up correct and incorrect answers

//Let player know when the timer is up 

//Let player know final score

