import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from './routes/router';
import store from './config/store';

class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <MuiThemeProvider>
                    <Router />
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;
