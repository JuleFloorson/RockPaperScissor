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
  border: ${props => props.theme.borders.buttonBorder};
  border-radius: 15px;
  font-size: 40px;
  font-family: Hiragino Maru Gothic ProN;
  margin: 25px;
  color: ${props => props.theme.colors.textSecondary};
`;

const CpuButton = styled(Button)`
  background-color: ${props => props.theme.colors.buttonPrimary};
`;

const PlayerButton = styled(Button)`
  background-color: ${props => props.theme.colors.buttonSecondary};
`;
const ThemeCheckbox = styled.input`
  appearance: none;
  outline: none;
  width: 60px;
  height: 35px;
  border: ${props => props.theme.borders.buttonBorder};
  border-radius: 20px;
  margin: 25px;
  background-color: ${props => props.theme.colors.buttonSecondary};
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding: 2px;
  transition: background-color 0.2s ease-in-out;
  position: relative;
  &::after {
    content: '';
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 20px;
    position: absolute;
    transform: scale(0.95);
    left: 0.3;
    transition: left 0.2s ease-in-out;
  }
  &:checked::after {
    left: 25px;
  }
`;

// const ThemeCircle = styled.button`
//   width: 25px;
//   height: 25px;
//   border: none;
//   border-radius: 20px;
//   background-color: white;
// `;
function Home({ onThemeButtonClick }) {
  return (
    <>
      <CardHome>
        <Link to="/game">
          {' '}
          <CpuButton>1 vs CPU</CpuButton>
        </Link>

        <PlayerButton>1 vs 1 </PlayerButton>
        <ThemeCheckbox
          onClick={onThemeButtonClick}
          aria-label="Switch theme"
          type="checkbox"
        ></ThemeCheckbox>
      </CardHome>
    </>
  );
}
export default Home;
