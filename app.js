
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3)
    return (choice == 0) ? "Rock" : (choice == 1) ? "Paper" : "Scissors";
}

function getHumanChoice(choice) {
    return choice;
}

console.log(getComputerChoice());

let humanChoice = prompt("Rock, Paper, Scissors?");
console.log(getHumanChoice(humanChoice));