var start= document.querySelector('#start');
var startBtn= document.querySelector('#start-btn');
var quiz= document.querySelector('#quiz');
var end= document.querySelector('#end');
var timer=document.querySelector('#timer');
// Timer
var time=60;
var timeInterval;
var questionIndex = 0;


var questions = [
  {
    question:  "Question #1: What does HTML stand for?", 
    choices:[
    {text:"Hyper Text Marking Language", correct: false}, 
    {text: "Hyper Text Marketing Language", correct: false}, 
    {text: "Hyper Text Markup Language", correct: true}, {text: "Hyper Text Markup Leveler", correct: false},
  ]
  },

  {
    question:  "Question #2: _____ is the process of finding errors and fixing them within a program.",
    choices: [
    {text: "Compiling", correct: false},
    {text: "Executing", correct: false},
    {text: "Debugging", correct: true},
    {text: "Scanning", correct: false},
    ]
  
  },
  { 
    question: "Question #3: If I say the word ALGORITHM, what am I talking about?",
    choices: [
      {text: "We all to to a store called Rithm", correct: false},
      {text: "Algae that can dance", correct: false},
      {text: "A new dance move", correct: false},
      {text: "A list of steps you follow to finish a task", correct: true},
    ]
    
  },
  {
    question: "Question #4: What does CSS stand for?",
    choices: [
      {text: "Cash Spending Secrets", correct: false},
      {text: "Cascading Style Sheets", correct: true},
      {text: "Computer Stupid System", correct: false},
      {text: "Corporate Secret Service", correct: false},
    ]
    
  },
  {
    question: "Question #5: Which keyboard symbol is used to indicate a closing tag?",
    choices: [
      {text: "Angle bracket", correct: false},
      {text: "Hashtag or number sign", correct: false},
      {text: "Asterisk", correct: false},
      {text: "Forward slash", correct: true},
    ]
    
  },
  {
    question: "Question #6: What tag is used to define a hyperlink, or link to another page?",
    choices: [
      {text: "<blockquote>", correct: false},
      {text: "<strong>", correct: false},
      {text: "<a>", correct: true},
      {text: "<em>", correct: false},
    ]
    
  },
  {
    question: "Question #7: What tag is used to define a standard cell inside a table",
    choices: [
      {text: "<button>", correct: false},
      {text: "<footer>", correct: false},
      {text: "<h1> to <h6>", correct: false},
      {text: "<td>", correct: true},
    ]
    
  },
  {
    question: "Question #8: In CSS and HTML, colors are displayed by combining these three shades of light:",
    choices: [
      {text: "Mauve, Salmon, and Black", correct: false},
      {text: "Red, Blue, and Green", correct: true},
      {text: "Yellow, Blue, and Green", correct: false},
      {text: "Violet, Red, and Orange", correct: false},
    ]
    
  },
  {
    question: "Question #9: What is the value called that defines colors such as the following: #FFFF00?",
    choices: [
      {text: "Color value", correct: false},
      {text: "RGB value", correct: false},
      {text: "Hex value", correct: true},
      {text: "Decimal value", correct: false},
     ]
    
  },
  {
    question: "Question #10: What is the CSS property that offers extra information about something when you hover over an element?",
    choices: [
      {text: "Tooltip", correct: true},
      {text: "Tutorial", correct: false},
      {text: "Hint", correct: false},
      {text: "Info block", correct: false},
    ]
    
  },
  {
    question:  "Question #11: What is a JavaScript element that represents either TRUE or FALSE values?",
    choices: [
      {text: "Boolean", correct: true},
      {text: "Condition", correct: false},
      {text: "Event", correct: false},
      {text: "Do something", correct: false},
    ]
    
  },
  {
    question:  "Question #12: What can loops offer JavaScript code as a whole?",
    choices: [
      {text: "Added plug-ins", correct: false},
      {text: "Cross-platform support", correct: false},
      {text: "Cleaner syntax", correct: false},
      {text: "Improved performance", correct: true},
    ]
    
  }
];
  for (let i=0; i<questionItems; i++){
    const currItem=questionItems[i]
  }


function startQuiz(){
  // Hide the start section
  start.style.display="none";
  // Show the quiz section
  quiz.style.display="block";
  // add time to the page
  timer.textContent=time;
  // start the timer
  timeInterval=setInterval(function() {
    // reduce the time by 1
    time--;
    // redisplay the time on the page
    timer.textContent=time;
    // check to make sure time doesn't go below 0
    if (time<=0) {
      quizOver();
    }
  },1000);
  // call the next function to get a question
  getQuestion()  

}

function getQuestion(n) {
  askQuestion.textContent=questionItems[n].question;
  answerBtn1.textContent=questionItems[n].choices[0];
  answerBtn2.textContent=questionItems[n].choices[1];
  answerBtn3.textContent=questionItems[n].choices[2];
  answerBtn4.textContent=questionItems[n].choices[3];
}

function showQuestions (questions, quizContainer){
  var outut = [];
  var answers;
  for (var i=0; i<questions.length; i++){
    answers = [];
    for(letter in questions [i].answers){
      answers.push(
        '<label>'
          +'<input type="radio" name="question'+i+'" value="'+letter+'>'
          + letter + ': '
          + questions[i].answers[letter]
        + '<label>'
    );
  }
}
function quizOver() {
  console.log('Quiz Over');
  // stop timer
  clearInterval(timeInterval);
  // hide quiz section

  // show end quiz section

}


startBtn.addEventListener("click", startQuiz);

