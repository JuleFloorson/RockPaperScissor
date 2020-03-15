import './Game.css';
import React from 'react';

function Game() {
  return (
    <>
      <div className="card_game">
        <div className="output_game">1 : 1</div>
        <button className="rock button_game">Rock</button>
        <button className="paper button_game">Paper</button>
        <button className="scissor button_game">Scissor</button>
      </div>
    </>
  );
}
export default Game;
