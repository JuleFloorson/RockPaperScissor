import './Loser.css';
import React from 'react';

function Loser() {
  return (
    <>
      <div className="card_loser">
        <div className="output_loser">0 : 3</div>
        <button className="loser button_loser">Loser</button>
        <button className="playAgain_loser button_loser">Play again</button>
      </div>
    </>
  );
}
export default Loser;
