import './Header.css';
import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="first_line">
        <h1 className="heading_first">Rock</h1>
        <div className="first_div"></div>
      </div>
      <div className="second_line">
        <div className="second_div"></div>
        <h1 className="heading_second">Paper</h1>
      </div>

      <h1 className="heading_third">Scissor</h1>
    </header>
  );
}
export default Header;
