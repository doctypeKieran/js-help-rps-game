document.addEventListener("DOMContentLoaded", getComputerChoice);

function getUserChoice() {
  const userChoice = this.getAttribute("id");
  const computerChoice = getComputerChoice();
  if (userChoice === computerChoice) {
    console.log("YES");
    console.log(`User chose: ${userChoice}, computer chose: ${computerChoice}`);
  } else {
    console.log("NO");
    console.log(`User chose: ${userChoice}, computer chose: ${computerChoice}`);
  }
}

function getComputerChoice() {
  const computerChoices = ["fire", "water", "air", "ice"];
  const randomIndex = Math.floor(Math.random() * computerChoices.length);
  return computerChoices[randomIndex];
}

const choices = document.getElementsByClassName("choice");

for (choice of choices) {
  choice.addEventListener("click", getUserChoice);
}
