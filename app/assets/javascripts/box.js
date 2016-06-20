$(document).ready(function(){
var bgArray = ["blue-grey", "red lighten-3", "teal accent-4", "light-green darken-1", "orange accent-4", "brown darken-2", "deep-orange darken-4", "lime darken-4", "blue-grey", "red lighten-3", "teal accent-4", "light-green darken-1", "orange accent-4", "brown darken-2", "deep-orange darken-4", "lime darken-4"]

// Shuffle array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

$('#new-game').on('click', resetBoard);
function resetBoard() {
  debugger
  var $divs = $('.box-cell')
  $divs.removeClass();
  $divs.addClass('box-cell flip-text');
}

// New Game

function newGame() {
  resetBoard();
  shuffle(bgArray);

}


newGame();


var counter = 0;


// Randomize materialize color classes


  $('.box-cell').click(function(){
    if($(this).hasClass('blue-grey')){
      $(this).text('').removeClass('blue-grey');
      $(this).text('Flip Me!').addClass('.flip-text');
    } else {
      // add the class
      // add the text
      $(this).text('').addClass('blue-grey');
    }

  });

// Check match
function matchChecker () {

}

// Set materialize classes to only pairs

// Prevent user from clicking the second box-cell

// If the two boxes don't match, set it to

});
