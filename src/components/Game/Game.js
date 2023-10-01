import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import GameOverBanner from "../GameOverBanner/GameOverBanner";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function handleSubmitGuess(tentativeGuess) {
    const nextGuessResult = checkGuess(tentativeGuess, answer);
    const nextResults = [...results, nextGuessResult];
    setResults(nextResults);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResults results={results}></GuessResults>
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      ></GuessInput>
      {(gameStatus !== "running") && (
      <GameOverBanner
        gameStatus={gameStatus}
        answer={answer}
        numOfGuesses={results.length}
      ></GameOverBanner>
      )}
    </>
  );
}

export default Game;
