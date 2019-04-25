import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import {Home} from "./Home";
import {Test} from "./Test";

export function Header()
{
    return (
            <BrowserRouter>
                <header>
                    <Link to="/" className="logo">
                        <img src="electron-logo.png" alt="LOGO" className="logo"/>
                    </Link>
                    <ul class="main-nav">
                        <li>
                            <Link to="/" className="link">Electronice</Link>
                        </li>
                        <li>
                            <Link to="/test" className="link">Electromontaj</Link>
                        </li>
                    </ul>
                </header>

                <Route path="/" exact={true} component={Home}/>
                <Route path="/test" component={Test}/>
            </BrowserRouter>
    );
}