//create Global Vars

var triviaQuestions = [
    {
        question: "#1: Who holds the Major League Baseball record for most career hits?",
        answers: ["Ted Williams", "Mickey Mantle", "Pete Rose", "Derek Jeter"],
        correct: "Pete Rose"
    },
    {
        question: "#2: How many World Series Championsips have the New York Yankess won?",
        answers: ["35", "27", "12", "22"],
        correct: "27"
    },
]

var correctAnswers = 0;
var incorrectAnswers = 0;
// var correctArr = ["Pete Rose", "27", "Cooperstown, NY","Nolan Ryan",""];
var timer = 0; 

// Create a function to start the game 


for(var i = 0; i < triviaQuestions.length; i++){
    var questionDiv = $("<div>")
    var questionTitle = $("<h2>").addClass("question").text(triviaQuestions[i].question)
    var answerDiv = $("<ul>").addClass("answers");

    for(var j = 0; j < triviaQuestions[i].answers.length; j++){
        var li = $("<li>")
        var radio = $("<input type=radio>").attr("name", 'question-' + i)
        radio.addClass("answer")
        radio.val(triviaQuestions[i].answers[j])
        li.append(radio)
        li.append("  " + triviaQuestions[i].answers[j])
        answerDiv.append(li)
    }

    questionDiv.append(questionTitle)
    questionDiv.append(answerDiv)
    $("#triviaGame").append(questionDiv)
}

$(document).on("click", ".answer", function(){
    var choice = $(this).val()
    var name = $(this).attr("name")
    var nameArr = name.split("-")
    var index = parseInt(nameArr[1])
    var correctAnswer = triviaQuestions[index].correct
    console.log(correctAnswer)

    if(correctAnswer === choice){
        console.log("correct")
    } else {
        console.log("wrong")
    }
})


$(".startBtn").on ("click", function(){
    start()
    var timeRemaining = 30;
    timer = setInterval(function () {
        $("#timer").text = timeRemaining + " seconds remaining";
        timeRemaining -= 1;
        if (timeRemaining <= 0) {
            done()  
        }
    }, 1000);
});
console.log(timer);

//Need onclick functions for the game answers for correct and incorrect answers

//Add up correct and incorrect answers

//Let player know when the timer is up 

//Let player know final score

