import React, { Component } from 'react';
import { DataTable } from '../DataTable/dataTable';
import './app.css';
import { AppBar, Toolbar, Typography, Card, CardContent } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import FirebaseService from '../../services/firebaseServices';
import { urls } from '../../utils/urlUtils';
import  { Add } from '../Add/add';
import  { Welcome } from '../Welcome/welcome';
import { Route } from 'react-router-dom';
import { TopBar } from '../App/topBar';

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});

class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    FirebaseService.getDataList('leituras', (dataReceived) => {
      this.setState({data: dataReceived})
    })
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
        <TopBar/>
          {/* <DataTable data={this.state.data}/> */}
          <Card style={{margin: '50px'}}>
            <CardContent>

              <Route exact
                path={urls.home.path}
                render={(props) => <Welcome {...props}/>}
              />
              <Route exact
                path={urls.data.path}
                render={(props) => 
                <DataTable {...props} data={this.state.data}/>}
              />              

              <Route exact
                path={urls.add.path}
                render={(props) =>
                  <Add {...props}/>}
              />
            </CardContent>            
          </Card>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
