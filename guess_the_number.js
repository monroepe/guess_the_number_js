var hiddenNumber = Math.floor((Math.random() * 100) + 1);
console.log(hiddenNumber);

$('#play_again').hide()

$(document).ready(function(){

  $('.guess_form').on('submit', function(event){
    event.preventDefault();

    var guess = $('#guess').val()

    if (guess > hiddenNumber){
      $('#special_text').html(guess + ' is too high. Try again...');
    } else if (guess < hiddenNumber){
      $('#special_text').html(guess + ' is too low. Try again...');
    } else {
      $('#special_text').html(guess + ' is just right. You win');
      $('#play_again').show()
    };

    $('#play_again').on('click', function(event){
      document.location.reload();
    });


  });

});
