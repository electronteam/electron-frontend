import React, {Component} from 'react';

class ProductImage extends Component {
    render()
    {
        return (
                <img src={process.env.REACT_APP_CONTENT_SERVER_URL + this.props.imageURL} alt={this.props.imageURL}/>
        )
    }
}

export default ProductImage;