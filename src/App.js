import React from 'react';
import './App.css';

import {HeaderMainMenu} from "./components/HeaderMainMenu";
import {TopBar} from "./components/TopBar";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function App()
{
    return (
            <MuiThemeProvider>
                <TopBar/>
                <HeaderMainMenu/>
            </MuiThemeProvider>
    );
}

export default App;
