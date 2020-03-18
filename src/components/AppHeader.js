// import './AppHeader.css';
import React from 'react';
import styled from '@emotion/styled';

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  font-family: Hiragino Maru Gothic ProN;
  font-size: 28px;
  color: ${props => props.theme.colors.textPrimary};
  margin: 0px;
`;
const HeadingOne = styled.h1`
  padding-left: 15px;
  flex-basis: 75%;
  border-left: ${props => props.theme.borders.headerBorder};
  border-top: ${props => props.theme.borders.headerBorder};
  margin: 0px;
`;
const DivOne = styled.div`
  flex-basis: 25%;
  border-left: ${props => props.theme.borders.headerBorder};
  border-top: ${props => props.theme.borders.headerBorder};
  border-right: ${props => props.theme.borders.headerBorder};
`;
const DivTwo = styled.div`
  flex-basis: 25%;
  border-left: ${props => props.theme.borders.headerBorder};
  border-top: ${props => props.theme.borders.headerBorder};
  border-bottom: ${props => props.theme.borders.headerBorder};
`;
const HeadingTwo = styled.h1`
  margin: 0px;
  padding-right: 15px;
  text-align: right;
  flex-basis: 75%;
  border: ${props => props.theme.borders.headerBorder};
`;
const HeadingThree = styled.h1`
  margin: 0px;
  text-align: center;
  border-right: ${props => props.theme.borders.headerBorder};
  border-left: ${props => props.theme.borders.headerBorder};
  border-bottom: ${props => props.theme.borders.headerBorder};
  flex-basis: 100%;
`;

function AppHeader() {
  return (
    <Header>
      <HeadingOne>Rock</HeadingOne>
      <DivOne></DivOne>
      <DivTwo></DivTwo>
      <HeadingTwo>Paper</HeadingTwo>
      <HeadingThree>Scissors</HeadingThree>
    </Header>
  );
}
export default AppHeader;
