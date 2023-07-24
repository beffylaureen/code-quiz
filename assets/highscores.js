var initialsEl = document.querySelector ('#initials');
var yourScore = document.getElementById('your-score');
var enterInitials = document.querySelector ('#enter-initials');
var scoreList = document.querySelector ('#score-list');
var mostRecentScore=localStorage.getItem('mostRecentScore');
var highScoresList=document.getElementById('highScoresList');
var highScores=JSON.parse(localStorage.getItem('scores')) || [];

var maxHighScores=5;
console.log(highScores);



console.log(localStorage.getItem('highScores'));
finalScore.innerText=mostRecentScore;




highScores.sort( (a,b)=>{
  return b.score - a.score;
})
function displayScores(){
  highScores.forEach(score=>{
    var listEl=document.createElement("li");
    listEl.textContent=score.initials+": "+score.score;
    highScoresList.appendChild (listEl);
  })

}

displayScores();