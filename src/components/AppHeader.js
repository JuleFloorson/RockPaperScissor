// import './AppHeader.css';
import React from 'react';
import styled from '@emotion/styled';

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  font-family: Hiragino Maru Gothic ProN;
  font-size: 28px;
  margin: 0px;
`;
const HeadingOne = styled.h1`
  padding-left: 15px;
  flex-basis: 75%;
  border-left: 4px dashed black;
  border-top: 4px dashed black;
  margin: 0px;
`;
const DivOne = styled.div`
  flex-basis: 25%;
  border-left: 4px dashed black;
  border-top: 4px dashed black;
  border-right: 4px dashed black;
`;
const DivTwo = styled.div`
  flex-basis: 25%;
  border-left: 4px dashed black;
  border-top: 4px dashed black;
  border-bottom: 4px dashed black;
`;
const HeadingTwo = styled.h1`
  margin: 0px;
  padding-right: 15px;
  text-align: right;
  flex-basis: 75%;
  border: 4px dashed black;
`;
const HeadingThree = styled.h1`
  margin: 0px;
  text-align: center;
  border-right: 4px dashed black;
  border-left: 4px dashed black;
  border-bottom: 4px dashed black;
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
