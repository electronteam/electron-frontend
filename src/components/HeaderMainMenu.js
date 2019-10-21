import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import {properties} from '../properties.js';

export function HeaderMainMenu()
{
    return (
            <BrowserRouter>

                <header className="site-navbar">
                    <div className="site-navbar-top">
                        <div className="container">
                            <div className="row d-flex flex-wrap align-items-center">
                                <div className="col-sm-3 text-left">
                                    <Link to="/" className="logo">
                                        <img src="electron-logo.png" alt="LOGO" className="logo"/>
                                        <span>ELECTRON</span>
                                    </Link>
                                </div>
                                <div className="col-sm-6 text-center">
                                    <div className="header_search_form_container">
                                        <form action="#" className="header_search_form clearfix">
                                            <input type="search" required="required" className="header_search_input" placeholder="Search for products..." />
                                            <button type="submit" className="header_search_button trans_300" value="Submit">
                                                <img src="search.png" alt=""/>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-sm-3 text-right">
                                    <Link to="/cart">
                                        <img src="cart.png"/>
                                        <div className="cart_count">
                                            <span>10</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Navigation menu*/}
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