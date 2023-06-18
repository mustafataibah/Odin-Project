let counter = 1;
let playerSelection = 1;
// 1 = rock, 2 = paper, 3 = scissor
function frontClickChange() {
  if (counter == 0) {
    document.getElementById("clickChange").src = "images/rock.png";
    counter++;
    playerSelection = counter;
  } else if (counter == 1) {
    document.getElementById("clickChange").src = "images/paper.png";
    counter++;
    playerSelection = counter;
  } else if (counter == 2) {
    document.getElementById("clickChange").src = "images/scissor.png";
    counter = 0;
    playerSelection = counter;
  }
}

function backClickChange() {
  if (counter == 0) {
    document.getElementById("clickChange").src = "images/paper.png";
    counter = 2;
    playerSelection = counter;
  } else if (counter == 2) {
    document.getElementById("clickChange").src = "images/rock.png";
    counter--;
    playerSelection = counter;
  } else if (counter == 1) {
    document.getElementById("clickChange").src = "images/scissor.png";
    counter--;
    playerSelection = counter;
  }
}

let computerCounter = 0;
let playerCounter = 0;
let gamesPlayed = 0;

function getComputerChoice() {
  const availableChoices = [1, 2, 0];
  const randomIndex = Math.floor(Math.random() * availableChoices.length);

  const choice = availableChoices[randomIndex];

  return choice;
}

function playRound() {
  let computerSelection = getComputerChoice();
  switch (playerSelection) {
    case 1:
      if (computerSelection === 1) {
        document.getElementById("prompt").innerHTML = "Tie! Play again!";
        break;
      } else if (computerSelection === 2) {
        computerCounter = computerCounter + 1;
        document.getElementById("computerScore").innerHTML = computerCounter;
        document.getElementById("prompt").innerHTML = "You lose!";
        break;
      } else if (computerSelection === 0) {
        playerCounter = playerCounter + 1;
        document.getElementById("playerScore").innerHTML = playerCounter;
        document.getElementById("prompt").innerHTML = "You Win!";
        break;
      }
    case 2:
      if (computerSelection === 1) {
        playerCounter = playerCounter + 1;
        document.getElementById("playerScore").innerHTML = playerCounter;
        document.getElementById("prompt").innerHTML = "You Win!";
        break;
      } else if (computerSelection === 2) {
        document.getElementById("prompt").innerHTML = "Tie! Play again!";
        break;
      } else if (computerSelection === 0) {
        computerCounter = computerCounter + 1;
        document.getElementById("computerScore").innerHTML = computerCounter;
        document.getElementById("prompt").innerHTML = "You lose!";
        break;
      }
    case 0:
      if (computerSelection === 1) {
        computerCounter = computerCounter + 1;
        document.getElementById("computerScore").innerHTML = computerCounter;
        document.getElementById("prompt").innerHTML = "You lose!";
        break;
      } else if (computerSelection === 2) {
        playerCounter = playerCounter + 1;
        document.getElementById("playerScore").innerHTML = playerCounter;
        document.getElementById("prompt").innerHTML = "You Win!";
        break;
      } else if (computerSelection === 0) {
        document.getElementById("prompt").innerHTML = "Tie! Play again!";
        break;
      }
    default:
      break;
  }
}
