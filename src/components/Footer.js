import './Footer.css';
import React from 'react';
import rpcLogo from './logo.png';

function Footer() {
  return (
    <footer className="footer">
      <img src={rpcLogo} alt="Rock Paper Scissor" className="rpclogo" />
    </footer>
  );
}
export default Footer;
