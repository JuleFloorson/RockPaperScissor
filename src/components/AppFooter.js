import React from 'react';
import rpcLogo from './logo.png';
import styled from '@emotion/styled';

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  border-top: ${props => props.theme.borders.footerBorder};
  width: 100%;
`;
const Image = styled.img`
  height: 120px;
  display: block;
  margin: 0 auto;
`;

function AppFooter() {
  return (
    <Footer>
      <Image src={rpcLogo} alt="Rock Paper Scissor" />
    </Footer>
  );
}
export default AppFooter;
