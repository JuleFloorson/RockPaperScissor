import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="../pages/home">
              <Home />
            </Route>
          </Switch>
        </main>

        <Footer />
      </Router>
    </>
  );
}

export default App;
