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

