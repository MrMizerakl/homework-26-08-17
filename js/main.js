import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// custom compontents
import Statistics from './components/statistics';

const App = () => (
  <div>
    <MuiThemeProvider>
      <Statistics />
    </MuiThemeProvider>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
