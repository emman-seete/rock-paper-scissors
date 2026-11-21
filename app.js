let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3)
    return (choice == 0) ? "rock" : (choice == 1) ? "paper" : "scissors";
}

function getHumanChoice(choice) {
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    return null;
}

console.log(getComputerChoice());

let humanChoice = prompt("Rock, Paper, Scissors?");
console.log(getHumanChoice(humanChoice));