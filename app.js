let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3)
    return (choice == 0) ? "rock" : (choice == 1) ? "paper" : "scissors";
}

function getHumanChoice(choice) {
    return choice;
}

function playRound(humanChoice, computerChoice) {
    // Rock beats Scissors
    // Paper beats Rock
    // Scissors beats Paper

    if (humanChoice == "rock" && computerChoice == "scissors") {
        return "You win! Rock beats Scissors";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        return "You win! Paper beats Rock";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        return "You win! Scissors beats Paper";
    } else {
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }
}

let humanChoice = prompt("Rock, Paper, Scissors?");
console.log(playRound(getHumanChoice(humanChoice), getComputerChoice()));