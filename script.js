function resetGame() {
  // 1️⃣ Reset the scores
  playerScore = 0;
  computerScore = 0;

  // 2️⃣ Update the score display
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;

  // 3️⃣ Hide the reset button
  resetGameBtn.style.display = "none";

  // 4️⃣ Show the game options
  optionsContainer.style.display = "block";

  // 5️⃣ Clear the winner and round result messages
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
}
