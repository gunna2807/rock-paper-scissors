const optionBtns = document.querySelectorAll('div.optionBtns button');
const roundResults = document.querySelector('#roundResults');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const resetBtn = document.querySelector('#reset');

// Reset page for new game
resetBtn.addEventListener('click',() => location.reload());

// Add eventlistener for player choice
optionBtns.forEach(button => {button.addEventListener('click', getPlayerChoice) });

// Set up variables for the functions
let computerChoices = [{choice: 'Rock', value: 0}, {choice: 'Paper', value: 1},
                        {choice: 'Scissors,', value: 2}];
let playerScore = 0;
let computerScore = 0;
let playerChoice;

// Get computer choice
function computerPlay() {
    let result = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return result;
}

// Get player choice
function getPlayerChoice(e) {
    let playerSelection = (e.target.id);
    playerChoice = e.target.textContent;
    playRound(playerSelection, computerPlay());
}

// Play a round
function playRound(playerSelection, computerSelection) {
    let roundWinCombo = '${playerSelection} - ${computerSelection.value}';
    let playerWinCombo = ['1-0', '0-2', '2-1'];

    if (Number(playerSelection) === computerSelection.value) {
        playerPoints.textContent = ++playerScore
        computerPoints.textContent = ++computerScore
        roundResults.textContent = 'Tied round!'
    } else if (playerWinCombo.includes(roundWinCombo)) {
        playerPoints.textContent = ++playerScore
        roundResults.textContent = 'You win! ${playerChoice} beats ${computerSelection.choice}';
    } else {
        computerPoints.textContent = ++computerScore
        roundResults.textContent = 'You lose! ${computerSelection.choice} beats ${playerChoice}';
    }

    checkWinner();
}

// Set up output for results
const winningResults = {
    computer: ["You lost to the computer!", 'red'],
    player: ["You win, You beat the computer!", 'forestgreen'],
    tie: ["The game is a Tie!", 'darkslategrey']
}

function checkWinner() {
    
}