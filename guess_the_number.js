var hiddenNumber = Math.floor((Math.random() * 100) + 1);
var MAX = 100;
var guesses = 0;
console.log(hiddenNumber);

$('#play_again').hide()

$(document).ready(function(){

  $('.guess_form').on('submit', function(event){
    event.preventDefault();

    var guess = $('#guess').val()

    if (isNaN(guess)){
      alert('Invalid input, must enter a number between 0 and ' + MAX);
    } else{

    if (guess > hiddenNumber){
      ++guesses;
      $('#special_text').html(guess + ' is too high. Guesses: ' + guesses + ' Try again...');
    } else if (guess < hiddenNumber){
      ++guesses;
      $('#special_text').html(guess + ' is too low. Guesses: ' + guesses + '  Try again...');
    } else {
      $('#special_text').html(guess + ' is just right. You won in ' + guesses + ' guesses.');
      $('#play_again').show()
    };

    $('#play_again').on('click', function(event){
      document.location.reload();
    });
  };

  });

});
