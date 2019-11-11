import React, {Component} from 'react';
import {properties} from "../properties";
import '../styles/cart.css';
import {Link} from "react-router-dom";

class Cart extends Component {
    constructor()
    {
        super();
        this.state = {
            cart: null
        };
    }

    componentDidMount()
    {
        let api = properties.api.currentCart;

        fetch(api)
                .then(response => response.json())
                .then(response => {
                    this.setState({
                        cart: response
                    });
                })
                .catch(error => {
                    console.log(error);
                });
    }

    render()
    {
        return (

                <div className="container">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <div className="cart_title">{properties.cart.title}</div>
                            <div className="cart_items">
                                {this.state.cart ?
                                        this.state.cart.entries.map((entry) => {
                                            return (
                                                    <ul className="cart_list">
                                                        <li className="cart_item clearfix">
                                                            <div className="cart_item_image">
                                                                <Link to={{pathname: properties.product.path + entry.product.code}}>
                                                                    <img src={"/img/product_" + entry.product.code + ".png"} alt=""/>
                                                                </Link>
                                                            </div>
                                                            <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                                                <div className="cart_item_name cart_info_col">
                                                                    <div className="cart_item_title">{properties.cartentry.name}</div>
                                                                    <div className="cart_item_text">{entry.product.name}</div>
                                                                </div>
                                                                <div className="cart_item_price cart_info_col">
                                                                    <div className="cart_item_title">{properties.cartentry.price}</div>
                                                                    <div className="cart_item_text">{entry.product.price} lei</div>
                                                                </div>
                                                                <div className="cart_item_quantity cart_info_col">
                                                                    <div className="cart_item_title">{properties.cartentry.quantity}</div>
                                                                    <div className="cart_item_text">{entry.quantity}</div>
                                                                </div>
                                                                <div className="cart_item_total cart_info_col">
                                                                    <div className="cart_item_title">{properties.cartentry.total}</div>
                                                                    <div className="cart_item_text">{entry.product.price} lei</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                            )
                                        })
                                        : null}
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                </div>
        );
    }
}

export default Cart;