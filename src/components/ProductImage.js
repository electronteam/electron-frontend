import React, {Component} from 'react';
import {properties} from "../properties";

class ProductImage extends Component {
    render()
    {
        return (
                <img src={properties.url.productImage + this.props.productCode + ".png"} alt=""/>
        )
    }
}

export default ProductImage;