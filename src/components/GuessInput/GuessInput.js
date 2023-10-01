import React from "react";

function GuessInput({handleSubmitGuess, gameStatus}) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmitGuess(tentativeGuess);
        setTentativeGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter Guess: </label>
      <input
        id="guess-input"
        type="text"
        required
        value={tentativeGuess}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={gameStatus !== 'running'}
        onChange={(event) => {
          setTentativeGuess(event.target.value.toUpperCase());
        }}
      ></input>
    </form>
  );
}

export default GuessInput;
