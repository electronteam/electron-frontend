import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import {Home} from "./Home";
import {Test} from "./Test";

export function Header()
{
    return (
            <BrowserRouter>
                <header className="header">
                    <nav>
                        <Link to="/" className="logo">
                            <img src="electron-logo.png" alt="LOGO" className="logo"/>
                        </Link>
                        <Link to="/" className="link">Home</Link>
                        <Link to="/test" className="link">Test</Link>
                    </nav>
                </header>

                <Route path="/" exact={true} component={Home}/>
                <Route path="/test" component={Test}/>
            </BrowserRouter>
    );
}