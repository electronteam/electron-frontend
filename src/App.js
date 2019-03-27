import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import './App.css';
import {Home} from "./Home";
import {Test} from "./Test";
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
                        <nav>
                            <Link to="/" className="link">Home</Link>
                            <Link to="/test"  className="link">Test</Link>
                        </nav>

                        <Route path="/" exact={true} component={Home}/>
                        <Route path="/test" component={Test}/>


                        <RaisedButton label="Health check from backend" onClick={this.healthCheckFromBackend.bind(this)} style="color:green"/>

                        <p>{this.state.message}</p>
                    </BrowserRouter>
                </MuiThemeProvider>
    );
    }
}

export default App;
