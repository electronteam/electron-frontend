import React, {Component} from 'react';
import './App.css';

import {HeaderMainMenu} from "./components/HeaderMainMenu";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

    render()
    {
        return (
                <MuiThemeProvider>
                    <HeaderMainMenu/>
                </MuiThemeProvider>
        );
    }
}

export default App;
