var scoreList = document.querySelector('#score-list')

var allScores = JSON.parse(localStorage.getItem("scores"))


console.log('All Scores: ', allScores)





// loop through all scores

// dynamically create element li
    var liEl = document.createElement('li');

  // Give Li content (hint: use object dot notation!!!!)

// Append to the page


scoreList.textContent = allScores;