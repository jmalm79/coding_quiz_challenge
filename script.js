window.onload = function() {
  console.log("welcome");
}; //this checks to verify the javascript page is linked correctly

//vars and arrays

var qArray = [
  {
  question: "What does HTML stand for?", //Question1
  choices: ["High Texture Maker Language", "Hyphen Test Master Language", "Hyper Text Markup Language","Hyper Test Mark Language"],
  correct : "Hyper Text Markup Language"
  },  
  {
  question: "What language controls: Presentation, Formatting & Layout?", //Question2
  choices: ["HTML","CSS","JavaScript","Flex"],
  correct : "JavaScript"
  },  
  {
  question: "What Array method below joins two or more arrays?", //question3
  choices: ["push","forEach","reduce","concat"],
  correct : "concat"
  },  
  {
  question: "What is the correct statement for 'i' is NOT equal to 10?", //question4
  choices: ["if (i != 10)","if i=!10 then","if 1 <> 10","if (i!!10)"],
  correct : "if (i != 10)"
  },  
  {
  question: "What is the correct way to create an array?", //question5
  choices: ["var = 'cars','planes','trains'","var = cars + planes + tains'","var autos = ['cars', 'planes', 'trains']","var autos = (1:'cars' 2:'planes', 3:'trains'"],
  correct : "var autos = ['cars', 'planes', 'trains']"
  },
  {
  question: "What event is recorded when a user clicks on an HTML element?", //question6
  choices : ["onhover","onclick","onmouseover","onchange"],
  correct : "onclick"
  },  
  {
  question: "What operator assigns a value to a variable?", //question7
  choices : ["+","*","=","()"],
  correct : "="
  },  
  {
  question: "What is a local variable? ", //question8
  choices : ["a variable that can be called anywhere in the document","a variable inside a function","a variable declared before a function","a variable declared on a seperate page"],
  correct : "a variable inside a function"
  },
  {
  question: "What will the following Boolean return 'var x = 0;'?", //question9
  choices : ["false","x=0","x","0"],
  correct : "false"
  },
  {
  question: "Which of the following is an incorrect type of loop?", //question10
  choices : ["for","for/in","while","fore"],
  correct : "fore"
  }
]

var time;
var score = 0;
var incorrectAnswer = 1;
var correctAnswer = 1;
var questionsIndex = 0;
var start = document.getElementById("startBtn");
var main = document.querySelector("main") ;
var quizQuestions = document.getElementById("quizQuestions");
var askedQuestions = document.getElementById("askedQuestions");
var choices = document.getElementById("answers"); 



//the following code will set the timer to 100 and score to 0 when Start game is selected

function startCountdown(){
  var time = 100;
  setInterval(function(){
  if(time > 0){
  time--;
    document.getElementById("countdownEl").textContent = time; 
  } else {
  if(time = 0){
    stopCountdown()
  }}

  }, 1000);
}

//the following code will remove the welcome message, and show the questions and answers.
function removeMain(){
  main.style.display = "none";
    
}  

function startQuestions(){
  quizQuestions.style.display = "block";

  var questionsDiv = document.createElement("div");
  questionsDiv.setAttribute("id, questionsContainer");
  questionsDivContainter.appendChild(questionsDiv);

  var question = qArray[questionsIndex++];
  console.log(questionsIndex);

  var pTag = document.createElement("p");
  pTag.setAttribute("class", "h2"); 

}


start.addEventListener("click", function(){
  startCountdown();
  removeMain();
  startQuestions();
})
