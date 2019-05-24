import React, {useState, useEffect} from 'react';
import './App.css';

import {HeaderMainMenu} from "./components/HeaderMainMenu";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Constants} from "./constants";

function App() {
    const [token, setToken] = useState('');

    useEffect(() => {
        fetch(Constants.TOKEN_REQUEST, {
            method: 'GET',
            headers: new Headers({
                'X-Auth-Token': localStorage.getItem(Constants.SESSION_TOKEN)
            })
        })
        .then(response => response.text())
        .then(authToken => {
            setToken(authToken);
            localStorage.setItem(Constants.SESSION_TOKEN, authToken);
        });
    }, []);
    return token && (
        <MuiThemeProvider>
            <HeaderMainMenu token={token}/>
        </MuiThemeProvider>
    );
}

export default App;
