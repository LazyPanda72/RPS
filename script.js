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
    return choice;
}

console.log(getHumanChoice());