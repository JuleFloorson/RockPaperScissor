import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const CardHome = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px;
  align-items: center;
`;
const Button = styled.button`
  width: 250px;
  height: 80px;
  border: 3px solid black;
  border-radius: 15px;
  font-size: 40px;
  font-family: Hiragino Maru Gothic ProN;
  margin: 25px;
  color: ${props => props.theme.colors.textPrimary};
`;

const CpuButton = styled(Button)`
  background-color: ${props => props.theme.colors.buttonPrimary};
`;

const PlayerButton = styled(Button)`
  background-color: ${props => props.theme.colors.buttonSecondary};
`;

function Home() {
  return (
    <>
      <CardHome>
        <Link to="/game">
          {' '}
          <CpuButton className="CPU button_home">1 vs CPU</CpuButton>
        </Link>

        <PlayerButton className="twoPlayer button_home">1 vs 1</PlayerButton>
      </CardHome>
    </>
  );
}
export default Home;
