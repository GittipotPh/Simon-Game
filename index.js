$(document).ready(function () {


alert("Ready")

var DataKept = ["red", "blue","green", "yellow"];

var UserInput = [];

var GamePattern = [];

var start = false;

var level = 0;


$(document).keypress(function () {
    if (!start) {

        $("#title-u").text("level " + level);
        nextSequence()

        start = true;

    }
    
    
});


$(".btn").click(function () { 
   
    var UserChooseColor = $(this).attr("id");
    UserInput.push(UserChooseColor);

    animatePress(UserChooseColor);    
    PlaySound(UserChooseColor); 

    checkAnswer(UserInput.length-1);

    });


function checkAnswer (CurrentValue){
    if (GamePattern[CurrentValue] === UserInput[CurrentValue]) {
        if (UserInput.length === GamePattern.length){
            setTimeout(function () {
                nextSequence();}, 1000);
        }
    }

    else {

        PlaySound("wrong")
        $("body").addClass("game-over");
        $("#title-u").text("Game Over, Press Any Key to Restart");
    
        

      setTimeout(function () {
        $("body").removeClass("game-over");
      

      }, 1000);

      
    
        gameOver();
    }

}



function nextSequence() {

    UserInput = [];

    level++;

    $("#title-u").text("level " + level);

    var RandomChoice = Math.floor(Math.random()*4);
    var ChoiceBorn = DataKept[RandomChoice];

    GamePattern.push(ChoiceBorn); 

    $("#" + ChoiceBorn).fadeIn(100).fadeOut(100).fadeIn(100)
    PlaySound(ChoiceBorn);

    


}


function PlaySound(name) {

    var audio = new Audio("./sounds/" + name +".mp3");
    audio.play();
}



function animatePress(currentColor) {

    $("#"+currentColor).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColor).removeClass("pressed");},100);}



function gameOver(){
    level = 0;
    GamePattern = [];
    start = false;
}


});