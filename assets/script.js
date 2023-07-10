var start= document.querySelector('#start');
var startBtn= document.querySelector('#start-btn');
var quiz= document.querySelector('#quiz');
var end= document.querySelector('#end');
var timer=document.querySelector('#timer');
var next=document.querySelector('#next-btn')
var questionIndex = 0;
var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("choices");
var nextButton = document.getElementById("next-btn");

//Timer
var secondsLeft = 90;
var quizScore = 0;
var questionTally = 1;

function countdown (){
  var timerInterval = setInterval(function(){
    secondsLeft--;
    timeLeft.textContext = "Time left: " + secondsLeft + " s";
      if (secondsLeft <=0){
        clearInterval(timerInterval);
        timeLeft.textContent = "Time's up!";
        finish.textContent = "Time's up!";
        gameOver();
      }else if (questionTally>=questionIndex.length +1){
        clearInterval(timerInterval);
        gameOver();
      }
      

  },1000);

}


var questions = [
  {
    question:  "What does HTML stand for?", 
    choices:[
    {text:"Hyper Text Marking Language", correct: false}, 
    {text: "Hyper Text Marketing Language", correct: false}, 
    {text: "Hyper Text Markup Language", correct: true}, {text: "Hyper Text Markup Leveler", correct: false},
  ]
  },

  {
    question:  "_____ is the process of finding errors and fixing them within a program.",
    choices: [
    {text: "Compiling", correct: false},
    {text: "Executing", correct: false},
    {text: "Debugging", correct: true},
    {text: "Scanning", correct: false},
    ]
  
  },
  { 
    question: "If I say the word ALGORITHM, what am I talking about?",
    choices: [
      {text: "We all to to a store called Rithm", correct: false},
      {text: "Algae that can dance", correct: false},
      {text: "A new dance move", correct: false},
      {text: "A list of steps you follow to finish a task", correct: true},
    ]
    
  },
  {
    question: "What does CSS stand for?",
    choices: [
      {text: "Cash Spending Secrets", correct: false},
      {text: "Cascading Style Sheets", correct: true},
      {text: "Computer Stupid System", correct: false},
      {text: "Corporate Secret Service", correct: false},
    ]
    
  },
  {
    question: "Which keyboard symbol is used to indicate a closing tag?",
    choices: [
      {text: "Angle bracket", correct: false},
      {text: "Hashtag or number sign", correct: false},
      {text: "Asterisk", correct: false},
      {text: "Forward slash", correct: true},
    ]
    
  },
  {
    question: "What tag is used to define a hyperlink, or link to another page?",
    choices: [
      {text: "<blockquote>", correct: false},
      {text: "<strong>", correct: false},
      {text: "<a>", correct: true},
      {text: "<em>", correct: false},
    ]
    
  },
  {
    question: "What tag is used to define a standard cell inside a table",
    choices: [
      {text: "<button>", correct: false},
      {text: "<footer>", correct: false},
      {text: "<h1> to <h6>", correct: false},
      {text: "<td>", correct: true},
    ]
    
  },
  {
    question: "In CSS and HTML, colors are displayed by combining these three shades of light:",
    choices: [
      {text: "Mauve, Salmon, and Black", correct: false},
      {text: "Red, Blue, and Green", correct: true},
      {text: "Yellow, Blue, and Green", correct: false},
      {text: "Violet, Red, and Orange", correct: false},
    ]
    
  },
  {
    question: "What is the value called that defines colors such as the following: #FFFF00?",
    choices: [
      {text: "Color value", correct: false},
      {text: "RGB value", correct: false},
      {text: "Hex value", correct: true},
      {text: "Decimal value", correct: false},
     ]
    
  },
  {
    question: "What is the CSS property that offers extra information about something when you hover over an element?",
    choices: [
      {text: "Tooltip", correct: true},
      {text: "Tutorial", correct: false},
      {text: "Hint", correct: false},
      {text: "Info block", correct: false},
    ]
    
  },
  {
    question:  "What is a JavaScript element that represents either TRUE or FALSE values?",
    choices: [
      {text: "Boolean", correct: true},
      {text: "Condition", correct: false},
      {text: "Event", correct: false},
      {text: "Do something", correct: false},
    ]
    
  },
  {
    question:  "What can loops offer JavaScript code as a whole?",
    choices: [
      {text: "Added plug-ins", correct: false},
      {text: "Cross-platform support", correct: false},
      {text: "Cleaner syntax", correct: false},
      {text: "Improved performance", correct: true},
    ]
    
  }
];


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}


function showQuestion(){
  
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex +1;
  questionElement.innerHTML = questionNumber + ". "+ currentQuestion.question;

  currentQuestion.choices.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
  });
  
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    answerButtons.addEventListener("click", selectAnswer);
  } 
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");

  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct==="true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";

}


function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex<questions.length){
    showQuestion();
  }else{
    showScore();
  }
  }


nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz()
  }

start-btn.addEventListener("click", startQuiz
());
  
})

startQuiz()



