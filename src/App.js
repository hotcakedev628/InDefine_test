import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  StylesProvider,
  ThemeProvider
} from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import ScrollReset from 'src/components/ScrollReset';
import { createTheme } from 'src/theme';
import routes, { renderRoutes } from 'src/routes';

const history = createBrowserHistory();

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <Router history={history}>
          <GlobalStyles />
          <ScrollReset />
          {renderRoutes(routes)}
        </Router>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
