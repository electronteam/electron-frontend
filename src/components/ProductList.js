import React, {Component} from 'react';
import {properties} from '../properties.js';
import {Link} from 'react-router-dom';

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
        let api = properties.api.allProducts;

        if (this.props.searchTerm)
        {
            api = properties.api.searchProducts + "/?" + properties.search.term + "=" + this.props.searchTerm;
        }

        fetch(api)
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
                        <div className="row mb-5">

                            {this.state.products.map((product, index) => {
                                return (
                                        <div className="col-sm-6 col-lg-3 mb-3" data-aos="fade-up" key={index}>
                                            <div className="block-4 text-center">
                                                <div className="product">
                                                    <div className="product-img">
                                                        <figure className="block-4-image">
                                                            <Link to={{ pathname: properties.product.path + product.code}}>
                                                                <img src={"/img/product_" + product.code + ".png"} alt="Image placeholder"
                                                                     className="img-fluid"/>
                                                            </Link>
                                                        </figure>
                                                    </div>
                                                    <div className="product-body">
                                                        <div className="block-4-text p-4">
                                                            <h3 className="product-name"><a href="#">{product.name}</a></h3>
                                                            <h4 className="product-price">$50</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                )
                            })}
                        </div>
                    </div>
                    {/*col-lg-12*/}
                </div>
        );
    }
}

export default ProductList;