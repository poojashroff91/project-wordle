import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
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
      {gameStatus === "won" && (
        <WonBanner numOfGuesses={results.length}></WonBanner>
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer}></LostBanner>
      )}
    </>
  );
}

export default Game;
