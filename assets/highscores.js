var yourScore = document.getElementById('your-score')
var initialsEl = document.querySelector ('#initials');
var enterInitials = document.querySelector ('#enter-initials');

function displayHighScores(){
  scoreList.innerHTML="";
  var showScores = JSON.parse(localStorage.getItem('scores'))||[];
  if (showScores.length>0){
    getScore.forEach(function (scores){
      var liEl=document.createElement ("li");
      liEl.textContent=scores;
      liEl.setAttribute("class", "scores");
      scoreList.append(liEl);
    })
    
    
  }
}

displayHighScores();

submitInitials.addEventListener("click", function(){
  var addInitials=document.querySelector("#enter-initials");
  var newInitials=addInitials.value;
  if (newInitials===""){
    alert("Please enter your initials")
    return
  }

  var allScores = JSON.parse(localStorage.getItem('scores'))||[]

  allScores.push(scores);
  localStorage.setItem('scores', JSON.stringify(allScores));

  displayHighScores();

  addInitials.value="";
})
