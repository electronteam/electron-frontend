import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import {properties} from '../properties.js';
import {Category} from "./Category";
import {SearchResults} from "./SearchResults";
import ProductView from "./ProductView";
import Cart from "./Cart";
import Checkout from "./Checkout";
import ThankYou from "./ThankYou";
import { withTranslation } from 'react-i18next';

class HeaderMainMenu extends Component {

    constructor(props)
    {
        super(props);

        // Bind the this context to the handler function
        this.displayCurrentCartCount = this.displayCurrentCartCount.bind(this);

        this.state = {
            cartCount: 0
        };
    }

    displayCurrentCartCount()
    {
        let api = process.env.REACT_APP_CURRENT_CART_COUNT;

        fetch(api, {credentials: 'include'})
                .then(response => response.json())
                .then(response => {
                    this.setState({
                        cartCount: response
                    });
                })
                .catch(error => {
                    console.log(error);
                });
    }

    componentDidMount()
    {
        this.displayCurrentCartCount();
    }

    render()
    {
        return (
                <BrowserRouter>
                    <header className="site-navbar">
                        <div className="site-navbar-top">
                            <div className="container">
                                <div className="row d-flex flex-wrap align-items-center">
                                    <div className="col-sm-3 text-left">
                                        <Link to="/" className="logo">
                                            <img src="/electron-logo.png" alt="LOGO" className="logo"/>
                                            <span>ELECTRON</span>
                                        </Link>
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        <div className="header_search_form_container">
                                            <form action={properties.search.path} className="header_search_form clearfix">
                                                <input type="search" name={properties.search.term} required="required" className="header_search_input"
                                                       placeholder="Search for products..."/>
                                                <button type="submit" className="header_search_button trans_300" value="Submit">
                                                    <img src="/search.png" alt=""/>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 text-right">
                                        <div className="basket-icon">
                                            <Link to="/cart">
                                                <img src="/cart.png" alt=""/>
                                                <div className="cart_count">
                                                    <span>{this.state.cartCount}</span>
                                                </div>
                                            </Link>
                                        </div>
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
                                                    {this.props.t('header.' + link.id + '.display')}
                                                </Link>
                                            </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </header>

                    {properties.header.links.map((link, index) => {
                        if (link.isCategoryLink)
                        {
                            return <Route path={link.path}
                                          exact={true}
                                          render={(props) => <Category {...props}
                                                                       suggestiveText={this.props.t('header.' + link.id + '.suggestive')}/>}
                                          key={index}/>
                        }
                        else
                        {
                            return <Route path={link.path} exact={true} component={link.component} key={index}/>
                        }
                    })}

                    <Route path={properties.search.path}
                           exact={true}
                           render={(props) => <SearchResults {...props} />}
                    />
                    <Route path={properties.product.path + ":" + properties.product.paramName}
                           render={(props) => <ProductView {...props} displayCurrentCartCount={this.displayCurrentCartCount}/>}
                    />
                    <Route path={properties.cart.path} exact={true}
                           render={(props) => <Cart {...props} displayCurrentCartCount={this.displayCurrentCartCount}/>}
                    />
                    <Route path={properties.checkout.path} exact={true} component={Checkout}/>
                    <Route path={properties.thankyou.path} exact={true}
                           render={(props) => <ThankYou {...props} displayCurrentCartCount={this.displayCurrentCartCount}/>}
                    />
                </BrowserRouter>
        );
    }
}

export default withTranslation()(HeaderMainMenu);