import React from 'react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Game from './pages/Game';
import Winner from './pages/Winner';
import Loser from './pages/Loser';
import GlobalStyles from './components/GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import retro from './themes/retro';
import modern from './themes/modern';

function App() {
  const [theme, setTheme] = React.useState(retro);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <AppHeader />
        <main>
          <Switch>
            <Route exact path="/">
              <Home
                onThemeButtonClick={() => {
                  setTheme(theme === retro ? modern : retro);
                }}
              />
            </Route>
            <Route path="/game">
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

        <AppFooter />
      </Router>
    </ThemeProvider>
  );
}

export default App;
