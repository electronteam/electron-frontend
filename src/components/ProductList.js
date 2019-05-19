import React, {Component} from 'react';

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
        fetch('http://localhost:8080/products')
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
                <div>
                    <h3>Product List</h3>
                    <br/>

                    {this.state.products.map((product, index) => {
                        return (
                                <ul key={index}>
                                    <li>
                                        {product.code}
                                    </li>
                                    <li>
                                        {product.name}
                                    </li>
                                    <li>
                                        {product.description}
                                    </li>
                                </ul>
                        )
                    })}
                </div>
        );
    }
}

export default ProductList;