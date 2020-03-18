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

const LoserButton = styled(Button)`
  background-color: #ab47f5;
`;

const PlayAgainButton = styled(Button)`
  background-color: #47bff5;
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
