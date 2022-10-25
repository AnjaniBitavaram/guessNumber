let secretNum = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector(".message");
document.querySelector(".check").addEventListener("click", gamefunction);
let score = 20;
let highScore = 0;

function gamefunction() {
  const guess = +document.querySelector(".guess").value;

  if (!guess) {
    message.textContent = " ⛔No Number";
  } else if (guess === secretNum) {
    message.textContent = "You Won 🏆";
    document.querySelector(".number").textContent = secretNum;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNum) {
    if (score > 1) {
      message.textContent = guess > secretNum ? "📈 Too High" : "📉 Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You Lost the game 😓";
      document.querySelector(".score").textContent = 0;
    }
  }
  //
}

document.querySelector(".again").addEventListener("click", resetGame);

function resetGame() {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  message.textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
}

// long method
// else if (guess > secretNum) {
//     if (score > 1) {
//       message.textContent = "📈 Too High";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       message.textContent = "You Lost the game 😓";
//       document.querySelector(".score").textContent = 0;
//     }
//   } else if (guess < secretNum) {
//     if (score > 1) {
//       message.textContent = "📉 Too Low";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       message.textContent = "You Lost the game 😓";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
