$(document).ready(function(){

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

// Randomize materialize color classes

// Set materialize classes to only pairs

// Prevent user from clicking the second box-cell

// If the two boxes don't match, set it to 

});
