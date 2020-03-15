import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Game from './pages/Game';
import Winner from './pages/Winner';
import Loser from './pages/Loser';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/rpc">
              <Game />
            </Route>
            <Route path="/winner">
              <Winner />
            </Route>
            <Route path="/loser">
              <Loser />
            </Route>
          </Switch>
        </main>

        <Footer />
      </Router>
    </>
  );
}

export default App;
