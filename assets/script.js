var start= document.querySelector('#start');
var startBtn= document.querySelector('#start-btn');
var quiz= document.querySelector('#quiz');
var end= document.querySelector('#end');
var timer=document.querySelector('#timer');
// Timer
var time=60;
var timeInterval;
var questionIndex = 0;


var questionItems = [
  {
    question:  "Question #1: What does HTML stand for?", 
    choices: ["A. Hyper Text Marking Language", "B. Hyper Text Marketing Language", "C. Hyper Text Markup Language", "D. Hyper Text Markup Leveler"],
    answer: "C. Hyper Text Markup Language"
  },
  {
    question:  "Question #2: _____ is the process of finding errors and fixing them within a program.",
    choices: ["A. Compiling", "B. Executing", "C. Debugging", "D. Scanning"],
    answer: "C. Debugging"
  },
  { 
    question: "Question #3: If I say the word ALGORITHM, what am I talking about?",
    choices: ["A. We all to to a store called Rithm", "B. Algae that can dance", "C. A new dance move", "D. A list of steps you follow to finish a task"],
    answer: "D. A list of steps you follow to finish a task"
  },
  {
    question: "Question #4: What does CSS stand for?",
    choices: ["A. Cash Spending Secrets", "B. Cascading Style Sheets", "C. Computer Stupid System", "D. Corporate Secret Service"],
    answer: "B. Cascading Style Sheets"
  },
  {
    question: "Question #5: Which keyboard symbol is used to indicate a closing tag?",
    choices: ["A. Angle bracket", "B. Hashtag or number sign", "C. Asterisk", "D. Forward slash"],
    answer: "D. Forward slash"
  },
  {
    question: "Question #6: What tag is used to define a hyperlink, or link to another page?",
    choices: ["A. <blockquote>", "B. <strong>", "C. <a>", "D. <em>"],
    answer: "C. <a>"
  },
  {
    question: "Question #7: What tag is used to define a standard cell inside a table",
    choices: ["A. <button>", "B. <footer>", "C. <h1> to <h6>", "D. <td>"],
    answer: "D. <td>"
  },
  {
    question: "Question #8: In CSS and HTML, colors are displayed by combining these three shades of light:",
    choices: ["A. Mauve, Salmon, and Black", "B. Red, Blue, and Green", "C. Yellow, Blue, and Green", "D. Violet, Red, and Orange"],
    answer: "B. Red, Blue, and Green"
  },
  {
    question: "Question #9: What is the value called that defines colors such as the following: #FFFF00?",
    choices: ["A. Color value", "B. RGB value", "C. Hex value", "D. Decimal value" ],
    answer: "C. Hex value"
  },
  {
    question: "Question #10: What is the CSS property that offers extra information about something when you hover over an element?",
    choices: ["A. Tooltip", "B. Tutorial", "C. Hint", "D. Info block"],
    answer: "A. Tooltip"
  },
  {
    question:  "Question #11: What is a JavaScript element that represents either TRUE or FALSE values?",
    choices: ["A. Boolean", "B. Condition", "C. Event", "D. Do something"],
    answer: "A. Boolean"
  },
  {
    question:  "Question #12: What can loops offer JavaScript code as a whole?",
    choices: ["A. Added plug-ins", "B. Cross-platform support", "C. Cleaner syntax", "D. Improved performance"],
    answer: "D. Improved performance"
  }
];


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

function quizOver() {
  console.log('Quiz Over');
  // stop timer
  clearInterval(timeInterval);
  // hide quiz section

  // show end quiz section

}


startBtn.addEventListener("click", startQuiz)

