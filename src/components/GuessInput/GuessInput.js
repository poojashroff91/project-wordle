import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter Guess: </label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        minLength={5}
        maxLength={5}
        onChange={(event) => {
          const guess = event.target.value;
          setGuess(guess.toLocaleUpperCase());
        }}
      ></input>
    </form>
  );
}

export default GuessInput;
