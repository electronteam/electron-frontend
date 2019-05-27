import React, {Component} from 'react';
import {Constants} from "../constants";

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
        fetch('http://localhost:8080/products',
                {
                    method: 'GET',
                    headers: new Headers({
                        'X-Auth-Token': localStorage.getItem(Constants.SESSION_TOKEN)
                    })
                })
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
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row mb-5">

                                {this.state.products.map((product, index) => {
                                    return (
                                            <div className="col-sm-6 col-lg-3 mb-3" data-aos="fade-up" key={index}>
                                                <div className="block-4 text-center border">
                                                    <div className="product">
                                                        <div className="product-img">
                                                            <figure className="block-4-image">
                                                                <a href="shop-single.html">
                                                                    <img src={"img/product_" + product.code + ".png"} alt="Image placeholder"
                                                                         className="img-fluid"/>
                                                                </a>
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
                    {/*row*/}
                </div>
                // container
        );
    }
}

export default ProductList;