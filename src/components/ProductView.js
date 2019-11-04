import React, {Component} from 'react';
import {properties} from "../properties";
import SuggestiveBar from "./SuggestiveBar";

class ProductView extends Component {

    constructor()
    {
        super();
        this.state = {
            product: {}
        };
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

    render()
    {
        return (
                <div className="container text-center">
                    <div className="single_product">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="image_selected">
                                        <img src={"/img/product_" + this.state.product.code + ".png"} alt="Image placeholder" className="img-fluid"/>
                                    </div>
                                </div>

                                <div className="col-lg-7">
                                    <div className="product_description">
                                        <div className="product_name">{this.state.product.name}</div>
                                        <div className="product_text"><p>{this.state.product.description}</p></div>

                                        <div className="product_price">{this.state.product.price} lei</div>
                                        <div className="button_container">
                                            <button type="button" className="button cart_button">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ProductView;