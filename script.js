let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    //math.random returns number equal or greater than 0 or less than 1
    //multiply by 3 to get numbers upto 2
    //math.floor rounds them up to 0, 1 or 2
    const randomIndex = Math.floor(Math.random() * 3);
    return(choices[randomIndex]);
}

//console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt();
    return choice.toLowerCase();
}

//console.log(getHumanChoice());

function playRound(humanSelection, computerSelection) {
    if(humanSelection===computerSelection){
        console.log("it's a tie");
    }

    else if(humanSelection==="rock"&&computerSelection==="scissors" ||
            humanSelection==="paper"&&computerSelection==="rock" ||
            humanSelection==="scissors"&&computerSelection==="paper") {
                console.log(`Human wins! ${humanSelection} beats ${computerSelection}`);
                humanScore++
            }
    else {
        computerScore++
        console.log("computer wins!");
    }
}






function playGame() {
    for (let i=0; i<5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`score: you- ${humanScore}, computer- ${computerScore}`);
    }
}

playGame()
console.log(`Final score: you- ${humanScore} computer- ${computerScore}`);
if(humanScore>computerScore) {
    console.log("you win overall");
}

else if(humanScore===computerScore){
    console.log("it's a tie overall");
}

else console.log("computer wins overall");