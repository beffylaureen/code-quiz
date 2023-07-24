var start = document.querySelector('#start');
var startBtn = document.querySelector('#start-btn');
var quiz = document.querySelector('#quiz');
var end = document.querySelector('#end');
var timer = document.querySelector('#timer');
var next = document.querySelector('#next-btn')
var questionIndex = 0;
var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("choices");
var nextButton = document.getElementById("next-btn");

//Timer
var time = 40;
var timeInterval;
var quizScore = 0;





var questions = [
  {
    question: "What does HTML stand for?",
    choices: [
      { text: "Hyper Text Marking Language", correct: false },
      { text: "Hyper Text Marketing Language", correct: false },
      { text: "Hyper Text Markup Language", correct: true }, { text: "Hyper Text Markup Leveler", correct: false },
    ]
  },

  {
    question: "_____ is the process of finding errors and fixing them within a program.",
    choices: [
      { text: "Compiling", correct: false },
      { text: "Executing", correct: false },
      { text: "Debugging", correct: true },
      { text: "Scanning", correct: false },
    ]

  },
  {
    question: "If I say the word ALGORITHM, what am I talking about?",
    choices: [
      { text: "We all to to a store called Rithm", correct: false },
      { text: "Algae that can dance", correct: false },
      { text: "A new dance move", correct: false },
      { text: "A list of steps you follow to finish a task", correct: true },
    ]

  },
  {
    question: "What does CSS stand for?",
    choices: [
      { text: "Cash Spending Secrets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Computer Stupid System", correct: false },
      { text: "Corporate Secret Service", correct: false },
    ]

  },
  {
    question: "Which keyboard symbol is used to indicate a closing tag?",
    choices: [
      { text: "Angle bracket", correct: false },
      { text: "Hashtag or number sign", correct: false },
      { text: "Asterisk", correct: false },
      { text: "Forward slash", correct: true },
    ]

  },

  {
    question: "In CSS and HTML, colors are displayed by combining these three shades of light:",
    choices: [
      { text: "Mauve, Salmon, and Black", correct: false },
      { text: "Red, Blue, and Green", correct: true },
      { text: "Yellow, Blue, and Green", correct: false },
      { text: "Violet, Red, and Orange", correct: false },
    ]

  },
  {
    question: "What is the value called that defines colors such as the following: #FFFF00?",
    choices: [
      { text: "Color value", correct: false },
      { text: "RGB value", correct: false },
      { text: "Hex value", correct: true },
      { text: "Decimal value", correct: false },
    ]

  },
  {
    question: "What is the CSS property that offers extra information about something when you hover over an element?",
    choices: [
      { text: "Tooltip", correct: true },
      { text: "Tutorial", correct: false },
      { text: "Hint", correct: false },
      { text: "Info block", correct: false },
    ]

  },
  {
    question: "What is a JavaScript element that represents either TRUE or FALSE values?",
    choices: [
      { text: "Boolean", correct: true },
      { text: "Condition", correct: false },
      { text: "Event", correct: false },
      { text: "Do something", correct: false },
    ]

  },
  {
    question: "What can loops offer JavaScript code as a whole?",
    choices: [
      { text: "Added plug-ins", correct: false },
      { text: "Cross-platform support", correct: false },
      { text: "Cleaner syntax", correct: false },
      { text: "Improved performance", correct: true },
    ]

  }
];


let currentQuestionIndex = 0;
let score = 0;








function startQuiz() {
  // Hide the start section
  start.style.display = "none";
  // Show the quiz section
  quiz.style.display = "block";
  // add time to the page
  timer.textContent = time;
  // start the timer
  timeInterval = setInterval(function () {
    //reduce the time by 1
    time--;
    //redisplay the time on the page
    timer.textContent = time;
    //check to make sure time doesn't go below 0
    if (time <= 0) {
      quizOver();
    }
  }, 1000)
  //  call the next function to get a question
  getQuestion();
}
function getQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

  currentQuestion.choices.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);

  });

}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }

}

function quizOver() {
  // stop timer
  clearInterval(timeInterval);
  // hide quiz section
  quiz.style.display = "none";
  // show end quiz section
  end.style.display = "block";
  showScore();
}



startBtn.addEventListener("click", startQuiz)

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
    time = time - 10;

  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}



function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    getQuestion();
  } else {
    quizOver();
  }
}

var yourScore = document.getElementById('your-score')
var initialsEl = document.querySelector ('#initials');
var enterInitials = document.querySelector ('#enter-initials');

function showScore() {
  resetState();
  console.log('Your Score', yourScore);
  yourScore.textContent=score;
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  let inputEl = document.createElement('input')
  let buttonEl = document.createElement('button')
  buttonEl.textContent = 'Submit'
  answerButtons.innerHTML = `Enter your initials:`
  answerButtons.appendChild(inputEl)
  answerButtons.appendChild(buttonEl)


}

enterInitials.addEventListener("click", () => {
  var initials=initialsEl.value;

  let scoreData = {
    initials: initials,
    score: score
  }
  updateHighScores(scoreData)
})


function updateHighScores(scoreData) {
  var scores = JSON.parse(localStorage.getItem("scores")) || [];

  scores.push(scoreData)

  localStorage.setItem("scores", JSON.stringify(scores))
}


nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
})