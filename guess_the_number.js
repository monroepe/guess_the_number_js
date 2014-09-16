var MAX = 100;
var guesses = 0;
var playAgain = true

function range(){
if (guess < number){
  alert(guess + ' is too low. Try again...');
} else {
  alert(guess + ' is too high. Try again...');
}
};

function validInput(input){
  typeof input === 'integer' && input > 1 && input < MAX
};

while (playAgain){
alert('Welcome to guess the number!');

var number = Math.floor((Math.random() * MAX) + 1);
alert(number);

var guess = prompt('Guess a number between 1-' + MAX);

while (validInput(guess)){
  guess = prompt('Guess a number between 1-' + MAX);
};

while (number != guess){
  if (number != guess){
    range();
    guess = prompt('Guess a number between 1-' + MAX);
    guesses++;
  };
};

alert('You won');

var again = prompt('Do you want to play again? (y/n)');
if (again == 'n'){
  playAgain = false;
};
};

