import React, { Component } from 'react';
import { DataTable } from '../DataTable/dataTable';
import './app.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});

class App extends Component {

  state = {
    data: [
      {
        key: 'teste key key',
        temperature: 'test temperature',
        umidade: 'teste de humidade',
        cliente: 'teste client',
        data: 'teste key data'
      }
    ]
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography type="title" color="inherit">
                My Awesome React App
              </Typography>
            </Toolbar>
          </AppBar>
          <DataTable data={this.state.data}/>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
