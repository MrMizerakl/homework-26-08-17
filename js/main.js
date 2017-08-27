import React from 'react';
import ReactDOM from 'react-dom';
import Statistics from './components/statistics';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
    <Statistics />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
