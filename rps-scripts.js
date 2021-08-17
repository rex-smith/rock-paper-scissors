let wins = 0;
let losses = 0;
let ties = 0;
let winText = document.querySelector('#winTotal');
let lossText = document.querySelector('#lossTotal');
let tieText = document.querySelector('#tieTotal');

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

var buttonList = document.querySelectorAll('button');

buttonList.forEach((button) => {
    button.addEventListener('click', playerSubmit)
});

function playerSubmit(e) {
    game(this.id);
}

const resultOutput = document.querySelector('#result-text');

function playRPS(playerSelection, computerSelection) {

    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            resultOutput.textContent = 'You tied. Rock stalemates with Rock.';
            return 'tie';
        } else if (computerSelection === 'paper') {
            resultOutput.textContent = 'You Lose! Paper beats Rock';
            return 'loss';
        } else {
            resultOutput.textContent = 'You Win! Rock beats Scissors';
            return 'win';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            resultOutput.textContent = 'You tied. Paper stalemates with Paper.';
            return 'tie';
        } else if (computerSelection === 'scissors') {
            resultOutput.textContent = 'You Lose! Scissors beats Paper';
            return 'loss';
        } else {
            resultOutput.textContent = 'You Win! Paper beats Rock';
            return 'win';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'scissors') {
            resultOutput.textContent = 'You tied. Scissors stalemates with Scissors.';
            return 'tie';
        } else if (computerSelection === 'rock') {
            resultOutput.textContent = 'You Lose! Rock beats Scissors';
            return 'loss';
        } else {
            resultOutput.textContent = 'You Win! Scissors beats Paper';
            return 'win';
        }
    }
}




function game(playerChoice) {
        let computerChoice = computerPlay();
        let result = playRPS(playerChoice, computerChoice);
        switch (result) {
            case 'win':
                wins++;
                winText.textContent = wins;
                break;
            case 'loss':
                losses++;
                lossText.textContent = losses;
                break;
            case 'tie':
                ties++;
                tieText.textContent = ties;
                break;
            default:
                return "ERROR";
        }
        console.log(result);
        if (wins===5) {
            resultOutput.textContent = 'User wins!';
            wins = 0;
            winText.textContent = wins;
            losses = 0;
            lossText.textContent = losses;
            ties = 0;
            tieText.textContent = ties;
        } else if (losses===5) {
            resultOutput.textContent = 'CPU wins!';
            wins = 0;
            winText.textContent = wins;
            losses = 0;
            lossText.textContent = losses;
            ties = 0;
            tieText.textContent = ties;
        }
    }