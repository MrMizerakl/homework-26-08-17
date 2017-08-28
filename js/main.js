import React from 'react';
import ReactDOM from 'react-dom';
import Repositories from './components/table/table.component';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(<MuiThemeProvider><Repositories /></MuiThemeProvider>, document.getElementById('root'));
