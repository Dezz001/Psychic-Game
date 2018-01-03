

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
			winsP.innerHTML = wins;

			var lossesP = document.getElementById("losses");
			lossesP.innerHTML = losses;

			var guessLeft = document.getElementById("guessLeft");
			guessLeft.innerHTML = guessesLeft;

			var letterGuessed = document.getElementById("guessed");
			letterGuessed.innerHTML = guessedLetters.join(',');
		}


		// Once depressed your guess is loged as an event and assigned to a variable
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

		  // Everytime you make an incorrect guess this records and calculates your remaining guesses
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











// // Global Variables


// var computeranswer = 0;

// var guesses = 9;

// var wins = 0;

// var losses = 0;



// var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


// function computerguess() {

// 	// Computer Guess
// 	var computeranswer = alphabet[Math.floor(Math.random() * alphabet.length)];

// 	// Testing
// 	console.log(computeranswer);

//     // Display to HTML
// 	var computeranswerH = document.getElementById("computeranswer");
// 	computeranswerH.innerHTML = computeranswer;

// 	// Your Guess
// 	document.onkeyup = function(event) {
	    


// 		var yourguess = event.key;

// 	    if (yourguess === computeranswer){
// 	        wins++;
	        
//             // Display to HTML
// 			var winsH = document.getElementById("wins");
// 			winsH.innerHTML = wins;

// 	        if(wins===10) {
	        	
// 	        	var youwin = "You Won! Game Over!"

// 	        	// Display to HTML
// 	        	var youwinH = document.getElementById("youwin");
// 	        	youwinH.innerHTML = youwin;
// 	        	break;
// 	        }


// 	    }

// 	    else {
// 	        guesses--;

// 	        // Display to HTML
// 	        var guessesH = document.getElementById("guesses"); 
// 	        guessesH.innerHTML = guesses;

// 	        // document.getElementById("guesses").innerHTML = guesses;
// 	        // console.log(guesses);
// 	        // alert(guesses);


// 	        if(guesses ===0) {
// 	        	losses++;
		        
// 	        	// Display to HTML
// 		        var lossesH = document.getElementById("losses");
// 		        lossesH.innerHTML = losses;

// 		        if(losses ===10){
		        	
// 		        	var youlost = "You Lost! Game Over!"

// 		        	// Display to HTML
// 		        	var youlostH = document.getElementById("youlost");
// 		        	youlostH.innerHTML = youlost;
// 		        	break;
// 		        }

	        	
// 	        }



// 	    }  

// 	}

// }






// var letters = "abcdefghijklmnopqrstuvwxyz".split("");
// var wins = 0;
// var losses = 0;
// var guesses = 9;
// var computerGuess = letters[Math.floor(Math.random() * letters.length)];
// var userGuessSoFar = [];
// var winPoints = document.getElementById("wins");
// var guessesLeft = document.getElementById("guessLeft");
// var losePoints = document.getElementById("losses");
// var guessSoFar = document.getElementById("guess-so-far");

// function updateDisplays() {
//   winPoints.textContent = wins;
//   guessesLeft.textContent = guesses;
//   losePoints.textContent = losses;
// }

// document.onkeyup = function(event) {

//   var userGuess = event.key;
//   userGuessSoFar.push(userGuess);
//   guessSoFar.textContent = userGuessSoFar;

//   if (userGuess == computerGuess) {

//     wins++;
//     guesses = 9
//     userGuessSoFar = [];
//     computerGuess = letters[Math.floor(Math.random() * letters.length)];

//   } else {

//     guesses--;

//     if (guesses == 0) {
//       losses++;
//       userGuessSoFar = [];
//       guesses = 9;
//     }

//   }

//   updateDisplays();

// }


// updateDisplays();









// var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var wins = 0;
// var loses = 0;
// var guessesLeft, guessedLetters, letterToGuess;

// resetGame();
// display();

// document.onkeyup = function(event) {
//   var guess = event.key;
//   if (guess === letterToGuess) {
//     win();
//   } else if (guessesLeft - 1 === 0) {
//     lost();
//   } else {
//     fail(guess);
//   }

//   display();
// }

// function display() {
//   var winsP = document.getElementById("wins");
//   var losesP = document.getElementById("loses");
//   var guessLeft = document.getElementById("guessLeft");
//   var letterGuessed = document.getElementById("guessed");
//   winsP.innerHTML = wins;
//   losesP.innerHTML = loses;
//   guessLeft.innerHTML = guessesLeft;
//   letterGuessed.innerHTML = guessedLetters.join(',');
// }

// function win() {
//   wins++;
//   resetGame();
// }

// function lost() {
//   loses++;
//   resetGame();
// }

// function fail(letter) {
//   guessesLeft--;
//   guessedLetters.push(letter);
// }

// function resetGame() {
//   guessesLeft = 12;
//   guessedLetters = [];
//   letterToGuess = letters[Math.floor(Math.random() * letters.length)];
//   console.log("Letter to guess: " + letterToGuess);
// }









// var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
//     'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// // Variables for tracking our wins, losses and ties. They begin at 0.
// var wins = 0;
// var losses = 0;
// var guesses = 10;

// var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

// // Testing
// console.log(computerChoice) 


// document.onkeypress = function(event) {
//     var userGuess = event.key;

//     // Testing
// 	console.log(userGuess)

//     if(userGuess === computerChoice){
//         wins++;
//     }else{
//         guesses--;
//     }

//     if(guesses === 0){
//         losses++
//     }

//     document.getElementById('wins').innerHTML = "Wins: " + wins;
//     document.getElementById('losses').innerHTML = "losses: " + losses;
//     document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;

//     // Testing
//     console.log(wins);
//     console.log(losses);
//     console.log(guesses);

// } 







// // Asks and Stores Your Guess
// var guess = function () {
// 	yourguess = prompt("What is your guess?");
// 	check();
// }

// // Checks Your Guess Against the Computer Number and tells you if it is correct, too high, or too low
// var check = function (){
// 	if (yourguess ==computerguess) {
// 		alert("Excellent! You Won!!!");
// 		var wins = wins++;
// 		// document.getElementById("w").innerHTML = wins;

// 	}

// 	else if (yourguess != computerguess){
// 		alert("Your Guess is incorrect! Try Again.");
// 		for (i=0; i<=guesses; i++) {
// 			var guessesleft = guesses-i;
// 			guess();
// 		}
// 	}

// 	else (yourguess)

// }

// // Starts The Game
// var gamestart = confirm("Do you want to play a letter guessing game?");

// if (gamestart = true){
// 	var name = prompt("What is your name?");
// 	alert("Hello " + name + " lets play!!!");
	
// 	computerguess = function (){

// 		// var letters = String.fromCharCode(Math.floor(Math.random()*26)+97);
// 		// console.log ("letters");

// 		var computeranswer = alphabet[Math.floor(Math.random() * alphabet.length)];
// 		document.getElementById("computeranswer").innerHTML= "The Computer Guessed: " + computeranswer;
// 	}

// 	document.write("Guess what letter I am thinking of");
// 	guess();
// }
// else{
// 	alert("Too Bad So Sad!!! Perhaps another time.");
// }


// // Continues The Game
// var gamecontinue = confirm("Do you want to play again?")

// if (gamecontinue = true){
// 	var computerguess = (Math.floor(Math.random()*10)+1);
// 	alert("I am thinking of a number from 1 to 10");
// 	guess();
// }




// var carmakes = ["porsche","hummer","ford","toyota","buick","oldsmobile","bugatti","fiat","volkswagen","seat","renault","lexus","daihatsu","chevrolet","cadillac","vauxhall","opel","lamborghini","bentley","skoda","audi","jeep","dodge","crysler","lancia","abarth","peugeot","citroen","mercedes","maybach","mini","rolls royce","nissan","infinity","mitsubishi","jaguar","land rover","hyundai","kia","genesis","volvo","geely","subaru","honda","mazda","suzuki","ferrari","smart","alfa romeo","skoda","holden","maserati","abarth","citroen","aston martin","mclaren","tesla","pagani","koenigsegg"];

// // Random Word Generator
// var randomcarmakes = carmakes[Math.floor(Math.random() * carmakes.length)];

// // Global Variables
// var s;
// var count = 0;
// var wins = 0;
// var loss = 0;
// var wrongletter = [];
// var guessesleft = 9;
// var underscores = [];
// var userguesses = [];

// // Store Answers
// var answercarmakes = [];



// // Underscore Setup
// function underscore()
// {
// 	for (var i=0; i<randomcarmakes.length; i++) 
// 	{
// 		answercarmakes[i].push("_");
// 	}

// 	// Stringging the Answers
// 	s = answercarmakes.join(" ");
// 	document.getElementById("answer").innerHTML = s;
// }

// function Letter()
// {
// 	// User Letter
// 	var letter = document.getElementById("letter").value;

// 	// Ensure Guess
// 	if (letter.length > 0)
// 	{
// 		for (var i=0; i < randomcarmakes.length; i++)
// 		{
// 			// Determines if random car has guessed letter
// 			if (randomcarmakes[i] === letter)
// 			{
// 				// Letter Asssignment
// 				answercarmakes[i] = letter; 
// 			}

// 		}
// 		// Guess Count
// 		count++;
// 		document.getElementById("counter").innerHTML = "Number of Clicks: " + count;
// 		document.getElementById("answer").innerHTML = answercarmakes.join(" ");

// 	}
// 	if (count>20)
// 	{
// 		document.getElementById("stat").innerHTML = "Too Many Guesses - You Lose!!!";
// 	}


// }















