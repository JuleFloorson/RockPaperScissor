import React from 'react';
import styled from '@emotion/styled';

const CardGame = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  align-items: center;
`;
const OutputGame = styled.div`
  font-family: Hiragino Maru Gothic ProN;
  font-size: 40px;
  margin: 0;
  color: ${props => props.theme.colors.textPrimary};
`;
const Button = styled.button`
  width: 230px;
  height: 70px;
  border: ${props => props.theme.borders.buttonBorder};
  border-radius: 15px;
  font-size: 40px;
  font-family: Hiragino Maru Gothic ProN;
  margin: 18px;
  color: ${props => props.theme.colors.textSecondary};
`;

const RockButton = styled(Button)`
  background-color: ${props => props.theme.colors.buttonPrimary};
`;
const PaperButton = styled(Button)`
  background-color: ${props => props.theme.colors.buttonSecondary};
`;
const ScissorButton = styled(Button)`
  background-color: ${props => props.theme.colors.buttonTertiary};
`;

function Game() {
  const [symbolCpu, setSymbolCpu] = React.useState(null);
  const [symbolPlayer, setSymbolPlayer] = React.useState(null);

  React.useEffect(() => {
    if (!symbolPlayer) {
      return;
    }
    let randomNumber = Math.random() * 3;
    randomNumber = Math.round(randomNumber + 0.5);
    if (randomNumber === 1) {
      setSymbolCpu('rock');
    }
    if (randomNumber === 2) {
      setSymbolCpu('paper');
    }
    if (randomNumber === 3) {
      setSymbolCpu('scissor');
    }
  }, [symbolPlayer]);
  React.useEffect(() => {
    if (!symbolCpu || !symbolPlayer) {
      return;
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
  }, [symbolCpu, symbolPlayer]);
  return (
    <>
      <CardGame>
        <OutputGame>1 : 1</OutputGame>
        <RockButton onClick={() => setSymbolPlayer('rock')}>Rock</RockButton>
        <PaperButton onClick={() => setSymbolPlayer('paper')}>
          Paper
        </PaperButton>
        <ScissorButton onClick={() => setSymbolPlayer('scissor')}>
          Scissor
        </ScissorButton>
      </CardGame>
    </>
  );
}
export default Game;
