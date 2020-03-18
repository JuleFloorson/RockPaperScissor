import React from 'react';
import styled from '@emotion/styled';

const CardWinner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  align-items: center;
`;
const OutputWinner = styled.div`
  font-family: Hiragino Maru Gothic ProN;
  font-size: 40px;
  margin: 0;
`;

const Button = styled.button`
  width: 230px;
  height: 70px;
  border: 3px solid black;
  border-radius: 15px;
  font-size: 40px;
  font-family: Hiragino Maru Gothic ProN;
  margin: 18px;
`;
const WinnerButton = styled(Button)`
  background-color: #00ffa7;
`;
const PlayAgainButton = styled(Button)`
  background-color: #47bff5;
`;

function Winner() {
  return (
    <>
      <CardWinner>
        <OutputWinner>3 : 1</OutputWinner>
        <WinnerButton>Winner</WinnerButton>
        <PlayAgainButton>Play again</PlayAgainButton>
      </CardWinner>
    </>
  );
}
export default Winner;
