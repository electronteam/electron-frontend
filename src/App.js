import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import './App.css';
import {Home} from "./Home";
import {Test} from "./Test";

class App extends Component {
    render()
    {
        return (
                <BrowserRouter>
                    <nav>
                        <Link to="/" className="link">Home</Link>
                        <Link to="/test"  className="link">Test</Link>
                    </nav>

                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/test" component={Test}/>
                </BrowserRouter>
        );
    }
}

export default App;
