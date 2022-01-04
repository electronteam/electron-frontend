import React, {Component} from 'react';
import {properties} from "../properties";
import '../styles/cart.css';
import {Link} from "react-router-dom";
import ProductImage from "./ProductImage";
import {Button, ButtonGroup} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { withTranslation } from 'react-i18next';

class Cart extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            cart: null
        };

        this.getCurrentCart = this.getCurrentCart.bind(this);
        this.updateCart = this.updateCart.bind(this);
        this.refreshCartDetails = this.refreshCartDetails.bind(this);
    }

    componentDidMount()
    {
        this.getCurrentCart();
    }

    getCurrentCart()
    {
        let api = properties.api.currentCart;

        fetch(api, {credentials: 'include'})
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

    refreshCartDetails()
    {
        this.getCurrentCart();
        this.props.displayCurrentCartCount();
    }

    deleteCartEntry(productCode, callback)
    {
        let api = properties.api.deleteCartEntry + "/" + productCode;

        fetch(api, {
            method: 'post',
            credentials: 'include'
        }).then(function (response) {
            callback();
        })
    }

    updateCart(productCode, newQty, callback)
    {
        let api = properties.api.updateCart;
        let formData = new FormData();
        formData.append('productCode', productCode);
        formData.append('newQty', newQty);

        fetch(api, {
            method: 'post',
            credentials: 'include',
            body: formData
        }).then(function (response) {
            callback();
        })
    }

    render()
    {
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <div className="cart_title">{this.props.t('cart.title')}</div>
                            <div className="cart_items">
                                {this.state.cart ?
                                        this.state.cart.entries.map((entry, index) => {
                                            return (
                                                    <ul className="cart_list" key={index}>
                                                        <li className="cart_item clearfix">
                                                            <div className="cart_item_image">
                                                                <Link to={{pathname: properties.product.path + entry.product.code}}>
                                                                    <ProductImage imageURL={entry.product.imageURL}/>
                                                                </Link>
                                                            </div>
                                                            <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                                                <div className="cart_item_name cart_info_col">
                                                                    <div className="cart_item_title">{this.props.t('cartentry.name')}</div>
                                                                    <div className="cart_item_text">{entry.product.name}</div>
                                                                </div>
                                                                <div className="cart_item_price cart_info_col">
                                                                    <div className="cart_item_title">{this.props.t('cartentry.price')}</div>
                                                                    <div className="cart_item_text">{entry.product.price} lei</div>
                                                                </div>
                                                                <div className="cart_item_quantity cart_info_col">
                                                                    <div className="cart_item_title">{this.props.t('cartentry.quantity')}</div>
                                                                    <div className="cart_item_text">
                                                                        <button type="button"
                                                                                className="cart-item__quantity__change decrease-quantity"
                                                                                onClick={
                                                                                    () => this.updateCart(entry.product.code, entry.quantity - 1, this.refreshCartDetails)
                                                                                }>
                                                                            -
                                                                        </button>
                                                                        {entry.quantity}
                                                                        <button type="button"
                                                                                className="cart-item__quantity__change increase-quantity"
                                                                                onClick={
                                                                                    () => this.updateCart(entry.product.code, entry.quantity + 1, this.refreshCartDetails)
                                                                                }>
                                                                            +
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className="cart_item_total cart_info_col">
                                                                    <div className="cart_item_title">{this.props.t('cartentry.total')}</div>
                                                                    <div className="cart_item_text">{entry.totalPrice} lei</div>
                                                                </div>
                                                                <div className="cart_item_total cart_info_col">
                                                                    <div className="cart_item_title">{this.props.t('cartentry.delete')}</div>
                                                                    <div className="cart_item_button">
                                                                        <ButtonGroup color="secondary" aria-label="outlined primary button group">
                                                                            <Button aria-label="delete"
                                                                                    onClick={() => this.deleteCartEntry(entry.product.code, this.refreshCartDetails)}>
                                                                                <DeleteIcon fontSize="small"/>
                                                                            </Button>
                                                                        </ButtonGroup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                            )
                                        })
                                        : null}
                            </div>
                            {this.state.cart ?
                                    <div className="order_total">
                                        <div className="order_total_content text-md-right">
                                            <div className="order_total_title">{this.props.t('cart.total')}</div>
                                            <div className="order_total_amount">{this.state.cart.totalPrice} lei</div>
                                        </div>
                                    </div>
                                    : null}

                            <div className="button_container">
                                <Link to={properties.checkout.path}>
                                    <button type="button" className="button cart_button to_checkout">
                                        {this.props.t('buttons.goToCheckout')}
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                </div>
        );
    }
}

export default withTranslation()(Cart);