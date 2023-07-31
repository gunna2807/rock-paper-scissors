// initialise scores etc
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

// function to generate the computer selection
function computerPlay() {
    randomSelection = Math.floor( Math.random() * 3);

    if (randomSelection == '0') {
        return "ROCK";
    }
    else if (randomSelection == '1') {
        return 'PAPER';
    }
    else {
        return 'SCISSORS';
    }
}

// get player selection




// function to play a round
function playRound( playerSelection, computerSelection) {
    
    //get selections
        computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        roundWinner = 'It was a tie!'
    }

    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        playerScore++
        roundWinner = 'Congratulations you won!'
    }

    if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
        computerScore++
        roundWinner = 'Sorry the computer won!'
    }  

    return {roundWinner, 
            playerScore, 
            computerScore}
    
    
}





if ( playerScore > computerScore) {
    console.log('Congratulations you beat the computer ' + playerScore + ':' + computerScore);
}
else if (computerScore > playerScore) {
    console.log('Sorry the computer won ' + computerScore + ':' + playerScore);
}
else {
    console.log('It was a draw ' + playerScore + ':' + computerScore);
}