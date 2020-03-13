import './Header.css';
import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1 className="first wider_div line_left line_top">Rock</h1>
      <div className="spacer line_top"></div>
      <div className="spacer line_left"></div>
      <h1 className="second wider_div">Paper</h1>
      <h1 className="third widest_div">Scissors</h1>
    </header>
  );
}
export default Header;
