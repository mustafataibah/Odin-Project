function getComputerChoice() {
    const availableChoices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * availableChoices.length)

    const choice = availableChoices[randomIndex];

    return choice
}

function playRound(playerSelection) {
    let computerCounter = 0;
    let playerCounter = 0;
    const computerSelection = getComputerChoice(); 
  switch (playerSelection) {
    case "rock":
        if (computerSelection === "rock") {
            break;}
        else if (computerSelection === "paper") {
            computerCounter = computerCounter + 1;
            break;}
        else if (computerSelection === "scissors") {
            playerCounter = playerCounter + 1;
            break;}
    case "paper":
        if (computerSelection === "rock") { 
            playerCounter = playerCounter + 1;}
        else if (computerSelection === "paper") {
            break;}
        else if (computerSelection === "scissors") {
            computerCounter = computerCounter + 1;
            break;}
    case "scissors":    
        if (computerSelection === "rock") { 
            computerCounter = computerCounter + 1;
            break;}
        else if (computerSelection === "paper") {
            playerCounter = playerCounter + 1;
            break;}
        else if (computerSelection === "scissors") {
            break;}
    default:
       break;
  }
  
  console.log(`Player: ${playerCounter} Computer: ${computerCounter}`);
}
