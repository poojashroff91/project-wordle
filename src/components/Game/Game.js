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
  const [gameOver, setGameOver] = React.useState(false);
  const [hasWon, setHasWon] = React.useState(false);

  function handleSubmitGuess(tentativeGuess) {
    const nextGuessResult = checkGuess(tentativeGuess, answer);
    setResults([...results, nextGuessResult]);
    checkGameOver(tentativeGuess, results)
  }

  function checkGameOver(tentativeGuess, results) {
    console.log(results);
    if(results.length === NUM_OF_GUESSES_ALLOWED - 1 || answer === tentativeGuess) {
      setGameOver(true);
      setHasWon(answer === tentativeGuess);
    }
  }

  return (
    <>
      <GuessResults results={results}></GuessResults>
      <GuessInput handleSubmitGuess={handleSubmitGuess} disableInput={gameOver}></GuessInput>
      <GameOverBanner
        gameOver={gameOver}
        hasWon={hasWon}
        answer={answer}
        numOfGuesses={results.length}
      ></GameOverBanner>
    </>
  );
}

export default Game;
