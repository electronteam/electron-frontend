import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import {properties} from '../properties.js';

export function Header()
{
    return (
            <BrowserRouter>
                <header>
                    <Link to="/" className="logo">
                        <img src="electron-logo.png" alt="LOGO" className="logo"/>
                    </Link>
                    <ul class="main-nav">
                        {properties.header.links.map((link) => {
                            return (
                                    <li>
                                        <Link to={link.path} className="link">{link.displayText}</Link>
                                    </li>
                            )
                        })}
                    </ul>
                </header>

                {properties.header.links.map((link) => {
                    return (
                            <Route path={link.path} exact={true} component={link.component}/>
                    )
                })}
            </BrowserRouter>
    );
}