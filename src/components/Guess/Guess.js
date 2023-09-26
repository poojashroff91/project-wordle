import React from "react";
import { range } from "../../utils";

function Guess({ result }) {
  return (
    <p className="guess">
      {range(5).map((num) => {
        const resultClass = (result && result[num]) ? result[num].status : '';
        return <span key={num} className={`cell ${resultClass}`}>
        {(result && result[num]) ? result[num].letter : undefined}</span>;
      })}
    </p>
  );
}

export default Guess;
