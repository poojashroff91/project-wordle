import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import {checkGuess} from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    const nextGuessResult = checkGuess(tentativeGuess, answer);
    setResults([...results, nextGuessResult]);
  }

  return (
    <>
      <GuessResults results={results}></GuessResults>
      <GuessInput handleSubmitGuess={handleSubmitGuess}></GuessInput>
    </>
  );
}

export default Game;
