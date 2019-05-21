// Create a Start button to begin game and count down clock

// Function to start the game 
$("#Start").click(function(){
    start()
    var timeleft = 15;
    Timer = setInterval(function () {
        document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
        timeleft -= 1;
        if (timeleft <= 0) {
            done()  
        }
    }, 1000);
})

//Create coundown clock starting at 30 secs going to 0 secs

//Need onclick functions for the game answers which are multiple choice

//

