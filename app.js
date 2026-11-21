let humanScore = 0;
let computerScore = 0;

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3)
    return (choice == 0) ? "rock" : (choice == 1) ? "paper" : "scissors";
}

function getHumanChoice() {
    return prompt("Rock, Paper, Scissors?");
}

function playRound(humanChoice, computerChoice) {
    // Rock beats Scissors
    // Paper beats Rock
    // Scissors beats Paper

    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
        return "You win! Rock beats Scissors";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1;
        return "You win! Paper beats Rock";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
        return "You win! Scissors beats Paper";
    } else {
        if (humanChoice == computerChoice) {
            return "Tied!";
        } else {
            computerScore += 1;
            return "You lose! " + capitalize(computerChoice) + " beats " + capitalize(humanChoice);
        }
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));