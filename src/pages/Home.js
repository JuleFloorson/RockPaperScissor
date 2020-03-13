import './Home.css';
import React from 'react';

function Home() {
  return (
    <>
      <card className="card">
        <button className="CPU button">1 vs CPU</button>
        <button className="twoPlayer button">1 vs 1</button>
      </card>
    </>
  );
}
export default Home;
