let playerRoll1 = 0;
let playerRoll2 = 0;
let computerRoll1 = 0;
let computerRoll2 = 0;
let playerTotal = 0;
let computerTotal = 0;
let playerScore = 0;
let computerScore = 0;

// displayRolls();

function displayRolls() {

    document.getElementById("playerDice").innerHTML = `Player rolled a ${playerRoll1} and a ${playerRoll2}`
    document.getElementById("computerDice").innerHTML = `Computer rolled a ${computerRoll1} and a ${computerRoll2}`
}


document.getElementById("rollButton").addEventListener("click", rollDice);

/********* function to keepp playing rounds **********/
function playRound() {
    rollDice();
    displayRolls();
    calculateScore();
    displayResults();
    determineWinner();
    displayScores();
}


/********** function to generate random dice rolls *********/
function rollDice() {
    playerRoll1 = Math.floor(Math.random() * 6) + 1;
    playerRoll2 = Math.floor(Math.random() * 6) + 1;
    computerRoll1 = Math.floor(Math.random() * 6) + 1;
    computerRoll2 = Math.floor(Math.random() * 6) + 1;
    displayRolls();
    calculateScore();
    displayResults();
    determineWinner();
    displayScores();
}

/********* function to calculate the result, determine winner, and update the score **********/
function calculateScore() {
    playerTotal = playerRoll1 + playerRoll2;
    computerTotal = computerRoll1 + computerRoll2;
}

/********* function to display the results **********/
function displayResults() {

    document.getElementById("computerTotal").innerHTML = `Computer scored a ${computerTotal}`;
   
}

/********* function to determine the winner **********/
function determineWinner() {
    if (playerTotal > computerTotal) {
        document.getElementById("winner").innerHTML = `Player Wins!!!!`;
        playerScore += 1;
    } else if (playerTotal < computerTotal) {
        document.getElementById("winner").innerHTML = `Computer Wins!!!!`;
    } else if (playerTotal === computerTotal) {
        document.getElementById("winner").innerHTML = `Computer Wins!!!!`;
    } else {
        document.getElementById("winner").innerHTML = `Player Wins!!!!`;
    } 
}

/********* function to display scores of player and computer **********/
function displayScores() {

    document.getElementById("playerScore").innerHTML = `Player scored a ${playerTotal}`;

    calculateScore();
    displayResults();
    displayScores();

}