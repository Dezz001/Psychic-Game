


// Global Variables	
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesLeft; 
var guessedLetters; 
var computerAnswer;

// First time setup to begin the game 
beginLevel();
HTMLdisplay();


// Sets a new game round
function beginLevel() {
    computerAnswer = letters[Math.floor(Math.random() * letters.length)];
    guessesLeft = 9;
    guessedLetters = [];
}


// Displays results on the page via ID
function HTMLdisplay() {
	var winsP = document.getElementById("wins");
	winsP.innerHTML = "Wins: " + wins;

	var lossesP = document.getElementById("losses");
	lossesP.innerHTML = "Losses :" + losses;

	var guessLeft = document.getElementById("guessLeft");
	guessLeft.innerHTML = "Guesses Left: " + guessesLeft;

	var letterGuessed = document.getElementById("guessed");
	letterGuessed.innerHTML = guessedLetters.join(',');
}


// Once depressed your guess is logged as an event and assigned to a variable
document.onkeyup = function(event) {
  var myGuess = event.key;

  // Your guess is compared to the computer's random answer to determine if it's the same and if so it logs your guess as a win
  if (myGuess === computerAnswer) {
  	wins++;
    beginLevel();
  } 

  // Checks to determine if you ran out of guesses and if so it logs your round as a loss
  else if (guessesLeft === 1) {
  	losses++;
    beginLevel();
  } 

  // Everytime you make an incorrect guess this record and calculates your remaining guesses
  else {
	wrongLetter(myGuess);
	function wrongLetter(letter) {
	  guessesLeft--;
	  guessedLetters.push(letter);
	}

  }

  // Updates your newly collected results and display them on the page via Id 
  HTMLdisplay();
}

