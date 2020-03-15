import './Game.css';
import React from 'react';

function Game() {
  let symbolCpu;
  let symbolPlayer;
  // let numberOfRounds = 0;
  let winCpu = 0;
  let winPlayer = 0;
  let winningCondition = 3;

  do {
    let randomNumber = Math.random() * 3;
    randomNumber = Math.round(randomNumber + 0.5);

    if (randomNumber === 1) {
      symbolCpu = 'rock';
    }
    if (randomNumber === 2) {
      symbolCpu = 'paper';
    }
    if (randomNumber === 3) {
      symbolCpu = 'scissor';
    }
    let choosePlayer = prompt('1 is rock, 2 is paper, 3 is scissor');
    if (choosePlayer === '1') {
      symbolPlayer = 'rock';
    }
    if (choosePlayer === '2') {
      symbolPlayer = 'paper';
    }
    if (choosePlayer === '3') {
      symbolPlayer = 'scissor';
    }
    if (symbolCpu === symbolPlayer) {
      alert('unentschieden');
    }
    if (symbolCpu === 'scissor' && symbolPlayer === 'rock') {
      winPlayer++;
      alert('You win against scissor.');
    }
    if (symbolCpu === 'scissor' && symbolPlayer === 'paper') {
      winCpu++;
      alert('Cpu wins with scissor.');
    }
    if (symbolCpu === 'rock' && symbolPlayer === 'scissor') {
      winCpu++;
      alert('Cpu wins with rock.');
    }
    if (symbolCpu === 'rock' && symbolPlayer === 'paper') {
      winPlayer++;
      alert('You win against rock.');
    }
    if (symbolCpu === 'paper' && symbolPlayer === 'rock') {
      winCpu++;
      alert('Cpu wins with paper.');
    }
    if (symbolCpu === 'paper' && symbolPlayer === 'scissor') {
      winPlayer++;
      alert('You win against paper.');
    }
  } while (winPlayer < winningCondition && winCpu < winningCondition);
  if (winPlayer >= winningCondition) {
    alert('You win the game.');
  } else {
    alert('The Cpu win.');
  }

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
