import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import {properties} from '../properties.js';

export function HeaderMainMenu()
{
    return (
            <BrowserRouter>
                <header className="site-navbar">
                    <div className="site-navbar-top">
                        <Link to="/" className="logo">
                            <img src="electron-logo.png" alt="LOGO" className="logo"/>
                        </Link>
                    </div>
                    <nav className="site-navigation text-right text-md-center" role="navigation">
                        <ul className="main-nav">
                            {properties.header.links.map((link, index) => {
                                return (
                                        <li key={index}>
                                            <Link to={link.path} className="link">
                                                {link.displayText}
                                            </Link>
                                        </li>
                                )
                            })}
                        </ul>
                    </nav>
                </header>

                {properties.header.links.map((link, index) => {
                    return (
                            <Route path={link.path} exact={true} component={link.component} key={index}/>
                    )
                })}
            </BrowserRouter>
    );
}