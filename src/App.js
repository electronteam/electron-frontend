import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import './App.css';

import {Header} from "./components/Header";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

    state = {message : ''};

    healthCheckFromBackend () {
        fetch('http://localhost:8080/healthCheck')
        .then(response => response.text())
        .then(message => {
            this.setState({message: message});
        });
    }

    render()
    {
        return (
                <MuiThemeProvider>
                    <BrowserRouter>
                        <Header/>

                        <RaisedButton label="Health check from backend" onClick={this.healthCheckFromBackend.bind(this)}/>

                        <p>{this.state.message}</p>
                    </BrowserRouter>
                </MuiThemeProvider>
    );
    }
}

export default App;
