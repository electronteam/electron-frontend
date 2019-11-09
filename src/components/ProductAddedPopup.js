import React, {Component} from 'react';
import '../styles/popup.css';
import {properties} from "../properties";

class ProductAddedPopup extends Component {

    render()
    {
        return (
                <div className="popup">
                    <div className="popup_inner">
                        <a href="#" className="close" onClick={this.props.closePopup}/>
                        <div className="popup-text">
                            <img src="/img/tick-icon.png" alt="" className="tick-icon"/>
                            <div className="popup_center">
                                <p><h4>{properties.popup.displayText}</h4></p>
                                <div className="actions">
                                    <button type="button" className="button cart_button">
                                        {properties.buttons.goToCart}
                                    </button>
                                    <button type="button" className="button cart_button" onClick={this.props.closePopup}>
                                        {properties.buttons.continueShopping}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ProductAddedPopup;