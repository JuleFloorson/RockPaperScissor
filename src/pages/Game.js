import './Game.css';
import React from 'react';

function Game() {
  let symbolCpu = '';
  let symbolPlayer = '';

  function handleClick(number) {
    if (number === 1) {
      symbolPlayer = 'rock';
    }
    if (number === 2) {
      symbolPlayer = 'paper';
    }
    if (number === 3) {
      symbolPlayer = 'scissor';
    }
    console.log(symbolPlayer);

    return symbolPlayer;
  }

  function cpu() {
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

    return symbolCpu;
  }

  // let winPlayer = 0;
  // let winCpu = 0;
  function getWinner() {
    let computer = cpu();
    let player = symbolPlayer;

    console.log(computer);
    console.log(player);
    if (computer === player) {
      alert('unentschieden');
    }
    if (symbolCpu === symbolPlayer) {
      alert('unentschieden');
    }
    if (symbolCpu === 'scissor' && symbolPlayer === 'rock') {
      // winPlayer++;
      alert('You win against scissor.');
    }
    if (symbolCpu === 'scissor' && symbolPlayer === 'paper') {
      // winCpu++;
      alert('Cpu wins with scissor.');
    }
    if (symbolCpu === 'rock' && symbolPlayer === 'scissor') {
      // winCpu++;
      alert('Cpu wins with rock.');
    }
    if (symbolCpu === 'rock' && symbolPlayer === 'paper') {
      // winPlayer++;
      alert('You win against rock.');
    }
    if (symbolCpu === 'paper' && symbolPlayer === 'rock') {
      // winCpu++;
      alert('Cpu wins with paper.');
    }
    if (symbolCpu === 'paper' && symbolPlayer === 'scissor') {
      // winPlayer++;
      alert('You win against paper.');
    }
    return;
  }
  getWinner(symbolCpu, symbolPlayer);

  // } while (winPlayer < winningCondition && winCpu < winningCondition);
  // if (winPlayer >= winningCondition) {
  //   alert('You win the game.');
  // } else {
  //   alert('The Cpu win.');
  // }

  return (
    <>
      <div className="card_game">
        <div className="output_game">1 : 1</div>
        <button
          value="1"
          onClick={() => handleClick(1)}
          className="rock button_game"
        >
          Rock
        </button>
        <button
          value="2"
          onClick={() => handleClick(2)}
          className="paper button_game"
        >
          Paper
        </button>
        <button
          value="3"
          onClick={() => handleClick(3)}
          className="scissor button_game"
        >
          Scissor
        </button>
      </div>
    </>
  );
}

export default Game;
