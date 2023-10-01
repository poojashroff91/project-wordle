import React from "react";

function GameOverBanner({ gameOver, hasWon, answer, numOfGuesses }) {
  if (gameOver) {
    if (hasWon) {
      return (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{numOfGuesses} guesses</strong>.
          </p>
        </div>
      );
    } else {
      return (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      );
    }
  }
}

export default GameOverBanner;
