import './Winner.css';
import React from 'react';

function Winner() {
  return (
    <>
      <div className="card_winner">
        <div className="output_winner">3 : 1</div>
        <button className="winner button_winner">Winner</button>
        <button className="playAgain_winner button_winner">Play again</button>
      </div>
    </>
  );
}
export default Winner;
