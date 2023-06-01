function getComputerChoice() {
    const availableChoices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * availableChoices.length)

    const choice = availableChoices[randomIndex];

    return choice
}


function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
  switch (playerSelection) {
    case "rock":
        if (computerSelection === "rock") {
            return "It's a tie!"}
        else if (computerSelection === "paper") {
            return "You lose! Paper beats rock."}
        else if (computerSelection === "scissors") {
            return "You win! Rock beats scissors."}
    case "paper":
        if (computerSelection === "rock") { 
            return "You win! Paper beats rock."}    
        else if (computerSelection === "paper") {
            return "It's a tie!"}
        else if (computerSelection === "scissors") {
            return "You lose! Scissors beats paper."}
    case "scissors":    
        if (computerSelection === "rock") { 
            return "You lose! Rock beats scissors."}
        else if (computerSelection === "paper") {
            return "You win! Scissors beats paper."}
        else if (computerSelection === "scissors") {
            return "It's a tie!"}
    default:
        break;
  }
}   