function computerPlay() {
    numChoice = Math.floor(Math.random()*3+1);
    let actionChoice;
    switch (numChoice) {
        case 1:
            actionChoice = "Rock";
            break;
        case 2:
            actionChoice = 'Paper';
            break;
        case 3:
            actionChoice = 'Scissors';
            break;
        default: 
            actionChoice = 'Oops';
    }
    return actionChoice.toLowerCase();
}

function getPlayerSelection() {
    let playerChoice = prompt('Please type your selection: ');
    playerChoice = playerChoice.toLowerCase();
    console.log(playerChoice);
    while (playerChoice !== 'rock' && 
        playerChoice !== 'paper' && 
        playerChoice !== 'scissors') {
        alert('Your response is not a valid choice.');
        playerChoice = prompt('Please type your selection: ');
    }
    return playerChoice;
}

function playRPS(playerSelection, computerSelection) {

    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            console.log('You tied. Rock stalemates with Rock.');
            return 'tie';
        } else if (computerSelection === 'paper') {
            console.log('You Lose! Paper beats Rock');
            return 'loss';
        } else {
            console.log('You Win! Rock beats Scissors');
            return 'win';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            console.log('You tied. Paper stalemates with Paper.');
            return 'tie';
        } else if (computerSelection === 'scissors') {
            console.log('You Lose! Scissors beats Paper');
            return 'loss';
        } else {
            console.log('You Win! Paper beats Rock');
            return 'win';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'scissors') {
            console.log('You tied. Scissors stalemates with Scissors.');
            return 'tie';
        } else if (computerSelection === 'rock') {
            console.log('You Lose! Rock beats Scissors');
            return 'loss';
        } else {
            console.log('You Win! Scissors beats Paper');
            return 'win';
        }
    }
}

function game() {
    let wins = 0;
    let losses = 0;
    let ties = 0;
    let rounds = 0;
    for (i = 0; i < 5; i++) {
        let playerChoice = getPlayerSelection();
        let computerChoice = computerPlay();
        let result = playRPS(playerChoice, computerChoice);
        console.log(result);
        if (result === 'tie') {
            ties++;
        } else if (result === 'win') {
            wins++;
        } else {
            losses++;
        }
        rounds++;
    }
    alert(`You won ${wins} games, lost ${losses} games, and tied ${ties} games!`);
}

game();
