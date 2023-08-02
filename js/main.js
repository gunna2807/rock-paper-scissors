// Set up access to DOM elements
const choices = document.querySelectorAll('.choice');
const playerScoreElem = document.querySelector('#playerScore');
const computerScoreElem = document.querySelector('#computerScore');
const resultElem = document.querySelector('#result');
const resetBtn = document.querySelector('#reset');
const computerChoiceElem = document.querySelector('#computerChoice');

// Event listeners
choices.forEach((choice) => choice.addEventListener('click', selectWeapon));
resetBtn.addEventListener('click', resetGame);

// Set up weapon string
const weapons = ['rock', 'paper', 'scissors'];

// Set up score variables
let playerScore = 0;
let computerScore = 0;

// Generate random weapon for computer
function computerPlay() {
    const weaponIndex = Math.floor(Math.random() * weapons.length);
    return weapons[weaponIndex];
}

// Play a round then display result and update score
function playRound(playerWeapon, computerWeapon) {
    computerChoiceElem.innerHTML = 'Computer chose: ' + computerWeapon + '.';
    if (playerWeapon === computerWeapon) {
        resultElem.innerHTML = "It's a tie!";
    } else if (
        (playerWeapon === 'rock' && computerWeapon === 'scissors') ||
        (playerWeapon === 'paper' && computerWeapon === 'rock') ||
        (playerWeapon === 'scissors' && computerWeapon === 'paper')
    ) {
        resultElem.innerHTML = 'You win!';
        playerScore++;
        playerScoreElem.innerHTML = playerScore;
    } else {
        resultElem.innerHTML = 'Computer wins!';
        computerScore++;
        computerScoreElem.innerHTML = computerScore;
    }

    // Check scores to see if game is over
    if (playerScore === 5) {
        resultElem.textContent = 'You won the game!';
        resultElem.style.color = 'darkgreen';
        computerChoiceElem.innerHTML = 'Game over!';
        disableOptions();
    }

    if (computerScore === 5) {
        resultElem.textContent = 'You lost the game!';
        resultElem.style.color = 'red';
        computerChoiceElem.innerHTML = 'Game over!';
        disableOptions();
    }
}

// Get player choice and start game
function selectWeapon() {
    const playerWeapon = this.id;
    const computerWeapon = computerPlay();
    playRound(playerWeapon, computerWeapon);
}

// Reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreElem.innerHTML = 0;
    computerScoreElem.innerHTML = 0;
    resultElem.style.color = 'black';
    resultElem.innerHTML = "Make a choice to start the game"
    enableOptions();
}

function disableOptions() {
    choices.forEach((choice) => {
        choice.style.pointerEvents = 'none';
    });
}

function enableOptions() {
    choices.forEach((choice) => {
        choice.style.pointerEvents = 'auto';
    });
}