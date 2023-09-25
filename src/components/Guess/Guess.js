import React from "react";
import { range } from "../../utils";

function Guess({ word }) {
  return (
    <>
      {range(0, 5).map((index) => {
        return <span className="cell">{word.charAt(index) || " "}</span>;
      })}
    </>
  );
}

export default Guess;
