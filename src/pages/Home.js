import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="card_home">
        <Link to="/game">
          {' '}
          <button className="CPU button_home">1 vs CPU</button>
        </Link>

        <button className="twoPlayer button_home">1 vs 1</button>
      </div>
    </>
  );
}
export default Home;
