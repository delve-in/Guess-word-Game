// Variables 
var startButton = document.getElementById('start-button');
var randomWord;
var placeHolderDiv = document.querySelector("#place-holder");
// var winCount = localStorage ?? 0;
// var loseCount = localStorage ?? 0;

// startButton onClick => startGame
startButton.addEventListener('click', startGame);

// Functions
function startGame() {
    // Word generation
    randomWord = generateRandomWord()
    console.log(randomWord)
    
    // Set placeholder 
        // Count word length
        // Create _ _ _ _ _ based on length
        // Render onto page


    var wordLen = randomWord.length;
    var placeHolder = [];
    for (var i=0;i<wordLen;i++)
    {
        placeHolder = placeHolder + "_ ";
    }

    placeHolderDiv.textContent = placeHolder; 
    
    // Timer
        // var timeLeft = 10;
        // startInterval
            // Function 
                // timeLeft --
                // If timeLeft === 0
                    // End Game, displayResult()
            // Duration 10 * 1000
}

function generateRandomWord() {
    var words = ['Funtion', 'Variable', 'Object', 'Array'];
    var index = Math.floor(Math.random()* words.length);
    return words[index];
}


// During the game

    // Track user input
    // Document addEventListner "keyDown"
        // if user typed a letter? 
            // lowercase the input
            // Compare input letter from user, against `word`
            // If match
                // replace _ with letter (_ _ j _ _)
                // checkResult()
            // if no match
                // Do nothing

// function displayResult() {
    // When win, increment win, render win
    // if (no more _) 
        // winCount++
        // store winCount into localStorage
        // Display win message


    // When lose, increment lose, render lose
    // if (_ exists) 
        // lossCount++
        // store lossCount into localStorage
        // Display lose message
// }

// Reset score