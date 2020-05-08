import React, {Component} from 'react';
import {properties} from "../properties";

class ProductImage extends Component {
    render()
    {
        return (
                <img src={properties.url.imageServerURL + this.props.imageURL} alt={this.props.imageURL}/>
        )
    }
}

export default ProductImage;