function getComputerChoice() {
    const availableChoices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * availableChoices.length)

    const choice = availableChoices[randomIndex];

    return choice
}

const el = document.querySelector("#body");
const bg = document.querySelector("#bg");

window.addEventListener("mousemove", (e) => {
    const xPercent = e.clientX / window.innerWidth * 5 - 2.5;  
    const yPercent = e.clientY / window.innerHeight * 5 - 2.5;
    bg.style.transform = `translate(${xPercent}%, ${yPercent}%)`;
});

let computerCounter = 0;
let playerCounter = 0;
let gamesPlayed = 0;

function playRound(playerSelection) {
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
    
        document.getElementById('computer').innerHTML = computerCounter;
        document.getElementById('you').innerHTML = playerCounter;
        console.log(`Player: ${playerCounter} Computer: ${computerCounter}`);
        if (computerCounter === 5 || playerCounter === 5) {
            playerCounter = 0;
            computerCounter = 0;
            gamesPlayed = gamesPlayed + 1;
            console.log("Game Over");
        }
    }
