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

function displayScore(humanScore, computerScore) {
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore += 1;
            displayScore(humanScore, computerScore);
            return "You win! Rock beats Scissors";
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore += 1;
            displayScore(humanScore, computerScore);
            return "You win! Paper beats Rock";
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore += 1;
            displayScore(humanScore, computerScore);
            return "You win! Scissors beats Paper";
        } else {
            if (humanChoice == computerChoice) {
                displayScore(humanScore, computerScore);
                return "Tied!";
            } else {
                computerScore += 1;
                displayScore(humanScore, computerScore);
                return "You lose! " + capitalize(computerChoice) + " beats " + capitalize(humanChoice);
            }
        }        
    }

    console.log(playRound(getHumanChoice(), getComputerChoice()));    
    console.log(playRound(getHumanChoice(), getComputerChoice()));    
    console.log(playRound(getHumanChoice(), getComputerChoice()));    
    console.log(playRound(getHumanChoice(), getComputerChoice()));    
    console.log(playRound(getHumanChoice(), getComputerChoice()));    
}

playGame();