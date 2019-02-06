//create secretNumber
var secretNumber = 4;

//ask user for guess
var guess = prompt("guess a number");

//check if guess is right
if (Number(guess) === secretNumber) {
    alert("you got it right!");
}
//check if guess is higher
else if (Number(guess) > secretNumber) {
    alert("Too High. guess again!");
}
//check if guess is lower
else {
    alert("too low guess again!");
}