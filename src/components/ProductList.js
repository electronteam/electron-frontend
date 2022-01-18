import React, {Component} from 'react';
import {properties} from '../properties.js';
import {Link} from 'react-router-dom';
import ProductImage from "./ProductImage";
import { withTranslation } from 'react-i18next';

class ProductList extends Component {

    constructor()
    {
        super();
        this.state = {
            products: []
        };
    }

    componentDidMount()
    {
        let api = process.env.REACT_APP_ALL_PRODUCTS;

        if (this.props.searchTerm)
        {
            api = properties.api.searchProducts + "/?" + properties.search.term + "=" + this.props.searchTerm;
        }

        fetch(api, {credentials: 'include'})
                .then(response => response.json())
                .then(response => {
                    this.setState({
                        products: response
                    });
                })
                .catch(error => {
                    console.log(error);
                });
    }

    render()
    {
        return (
                <div className="row">
                    <div className="col-lg-12">
                        {this.state.products.length > 0 ?
                                <div className="row mb-5">

                                    {this.state.products.map((product, index) => {
                                        return (
                                                <div className="col-sm-6 col-lg-3 mb-3" data-aos="fade-up" key={index}>
                                                    <div className="block-4 text-center">
                                                        <div className="product">
                                                            <div className="product-img">
                                                                <figure className="block-4-image">
                                                                    <Link to={{pathname: properties.product.path + product.code}}>
                                                                        <ProductImage imageURL={product.imageURL}/>
                                                                    </Link>
                                                                </figure>
                                                            </div>
                                                            <div className="product-body">
                                                                <div className="block-4-text p-4">
                                                                    <Link to={{pathname: properties.product.path + product.code}}>
                                                                        <h1 className="product-name">{product.name}</h1>
                                                                    </Link>
                                                                    <h4 className="product-price">{product.price} {this.props.t('currency')}</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        )
                                    })}
                                </div>
                                : <h1>{this.props.t('productList.noProductsDisplayText')}</h1>}
                    </div>
                </div>
        );
    }
}

export default withTranslation()(ProductList);