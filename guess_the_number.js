alert('Welcome to guess the number!');

var name = prompt('What is your name?');
alert('Hello ' + name);

var number = Math.floor((Math.random() * 100) + 1);
var guess = prompt('Guess a number between 1-100!');

if (number === guess){
  alert('You won');
} else {
  alert('You lose');
}
