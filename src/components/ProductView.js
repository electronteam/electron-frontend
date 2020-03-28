import React, {Component} from 'react';
import {properties} from "../properties";
import '../styles/product.css';
import ProductAddedPopup from "./ProductAddedPopup";
import ProductImage from "./ProductImage";

class ProductView extends Component {

    constructor()
    {
        super();
        this.state = {
            product: {
                code: null
            },
            showPopup: false
        };
        this.togglePopup = this.togglePopup.bind(this);
    }

    componentDidMount()
    {
        const {match: {params}} = this.props;
        let api = properties.api.productByCode + "/" + params.productCode;

        fetch(api)
                .then(response => response.json())
                .then(response => {
                    this.setState({
                        product: response
                    });
                })
                .catch(error => {
                    console.log(error);
                });
    }

    togglePopup()
    {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    // outer function scope                                        -
    // inside outer function"this" keyword refers to window(??? or ProductView object) object
    addProductToCart(code, callback)
    {
        let api = properties.api.addProductToCart;
        let formData = new FormData();
        formData.append('code', code);

        fetch(api, {
            method: 'post',
            body: formData
        }).then(function (response) {
            callback();// "this" inside callback also refers window object
        })
    }

    render()
    {
        return (
                <div className="container text-center">
                    <div className="single_product">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5">
                                    <div className="image_selected">
                                        {this.state.product.code ? <ProductImage productCode={this.state.product.code} /> : null}
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="product_description">
                                        <div className="product_name">{this.state.product.name}</div>
                                        <div className="product_text"><p>{this.state.product.description}</p></div>

                                        <div className="product_price">{this.state.product.price} lei</div>
                                        <div className="button_container">
                                            <button type="button" className="button cart_button"
                                                    onClick={() => this.addProductToCart(this.state.product.code, this.togglePopup)}>
                                                {properties.buttons.addToCart}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-1"></div>
                            </div>
                        </div>
                    </div>
                    {this.state.showPopup ? <ProductAddedPopup closePopup={this.togglePopup.bind(this)}/> : null}
                </div>
        );
    }
}

export default ProductView;