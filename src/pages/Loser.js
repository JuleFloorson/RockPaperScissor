import React from 'react';
import styled from '@emotion/styled';

const CardLoser = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  align-items: center;
`;
const OutputLoser = styled.div`
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

const LoserButton = styled(Button)`
  background-color: ${props => props.theme.colors.buttonPrimary};
`;

const PlayAgainButton = styled(Button)`
  background-color: ${props => props.theme.colors.buttonTertiary};
`;

function Loser() {
  return (
    <>
      <CardLoser>
        <OutputLoser>0 : 3</OutputLoser>
        <LoserButton>Loser</LoserButton>
        <PlayAgainButton>Play again</PlayAgainButton>
      </CardLoser>
    </>
  );
}
export default Loser;
