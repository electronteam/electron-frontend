import React, {Component} from 'react';
import {properties} from "../properties";

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
                    <h1>Pagina de vizualizare detaliilor produsului</h1>
                    Codul produsului - {this.state.product.code}
                    <br/>
                    Numele produsului - {this.state.product.name}
                    <br/>
                    Descrierea produsului - {this.state.product.description}
                    <br/>
                </div>
        );
    }
}

export default ProductView;