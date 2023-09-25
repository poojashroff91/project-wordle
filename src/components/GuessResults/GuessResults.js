import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => {
        const word = guesses[index] || "";
        return (
          <p key={crypto.randomUUID()} className="guess">
            <Guess word={word}></Guess>
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
