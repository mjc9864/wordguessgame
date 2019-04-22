// pokemon .
var wordsList = ["pikachu", "charmander", "weedle", "pidgey", "caterpie"];

// pokemon to choose.
var chosenWord = "";

// Individual letters to be stored.
var lettersInChosenWord = [];

// blanks for pokemon names
var numBlanks = 0;

// blanks and proper guesses
var blanksAndSuccesses = [];

// wrong guesses
var wrongGuesses = [];

// counters for game
var winCounter = 0;

var lossCounter = 0;

var numGuesses = 9;


// starting game
function startGame() {
  
  numGuesses = 9;

  // get pokemon
  chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
  
  // split the letters.
  lettersInChosenWord = chosenWord.split("");
  
  numBlanks = lettersInChosenWord.length;

  // reset each round
  blanksAndSuccesses = [];

  wrongGuesses = [];

  // for loop for blanks
  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }


  // update guesses left
  document.getElementById("guesses-left").innerHTML = numGuesses;

  // update blanks
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

  // updates guesses
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

// checks for comparisons
function checkLetters(letter) {

  
  var letterInWord = false;

  // Check if a letter exists in name
  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
     
      letterInWord = true;
    }
  }

  // If the letter exists
  if (letterInWord) {

    // Loop for the word.
    for (var j = 0; j < numBlanks; j++) {

      // writes the blanksAndSuccesses of each letter
      if (chosenWord[j] === letter) {
        // proper lettering and spacing
        blanksAndSuccesses[j] = letter;
      }
    }
    
  }
  // If no letter
  else {
    
    wrongGuesses.push(letter);
    numGuesses--;
  }
}


// function for each guess made
function roundComplete() {

  // Update the page
  document.getElementById("guesses-left").innerHTML = numGuesses;
  
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  // guess the pokemon correctly
  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
    
    winCounter++;
    alert("You win!");

    document.getElementById("win-counter").innerHTML = winCounter;
    startGame();
  }

  // No more guesses left
  else if (numGuesses === 0) {
  
    lossCounter++;
    
    alert("You lose");

    
    document.getElementById("loss-counter").innerHTML = lossCounter;
    // Reset the game.
    startGame();
  }

}

// Starts the Game
startGame();

//  key clicks.
document.onkeyup = function(event) {
 
    // lowercase lettering.
  var letterGuessed = String.fromCharCode(event.which).toLowerCase();

  checkLetters(letterGuessed);
  
  roundComplete();
};
