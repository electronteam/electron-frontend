import React from 'react';
import './App.css';

import {HeaderMainMenu} from "./components/HeaderMainMenu";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function App()
{
    return (
            <MuiThemeProvider>
                <HeaderMainMenu/>
            </MuiThemeProvider>
    );
}

export default App;
