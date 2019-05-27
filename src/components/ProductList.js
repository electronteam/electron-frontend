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
                                            <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" key={index}>
                                                <div className="block-4 text-center border">
                                                    <figure className="block-4-image">
                                                        <a href="shop-single.html">
                                                            <img src={"img/product_" + product.code + ".png"} alt="Image placeholder" className="img-fluid"/>
                                                        </a>
                                                    </figure>
                                                    <div className="block-4-text p-4">
                                                        <h3><a href="shop-single.html">{product.name}</a></h3>
                                                        <p className="mb-0">{product.description}</p>
                                                        <p className="text-primary font-weight-bold">$50</p>
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