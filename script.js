function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    //math.random returns number equal or greater than 0 or less than 1
    //multiply by 3 to get numbers upto 2
    //math.floor rounds them up to 0, 1 or 2
    const randomIndex = Math.floor(Math.random() * 3);
    return(choices[randomIndex]);
}

console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt();
    return choice.toLowerCase();
}

//console.log(getHumanChoice());

var humanScore = 0;

var computerScore = 0;

function playRound(getHumanChoice, getComputerChoice) {
    if (getHumanChoice === getComputerChoice) {
        console.log("It's a tie!");
    }

    else if(getHumanChoice === "rock" && getComputerChoice === "paper") {
        console.log('Computer Wins!');
    }

    else if(getHumanChoice === "rock" && getComputerChoice === "scissors") {
        console.log('Human Wins!');
    }

    else if(getHumanChoice === "paper" && getComputerChoice === "rock") {
        console.log('Human Wins!');
    }

    else if(getHumanChoice === "paper" && getComputerChoice === "scissors") {
        console.log('Computer Wins!');
    }

    else if(getHumanChoice === "scissors" && getComputerChoice === "rock") {
        console.log('Computer Wins!');
    }

    else console.log('Human Wins!');
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);