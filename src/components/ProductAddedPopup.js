import React, {Component} from 'react';
import '../styles/popup.css';
import {properties} from "../properties";
import {Link} from "react-router-dom";
import { withTranslation } from 'react-i18next';

class ProductAddedPopup extends Component {

    render()
    {
        return (
                <div className="popup">
                    <div className="popup_inner">
                        <a href="javascript:void(0)" className="close" onClick={this.props.closePopup}> </a>
                        <div className="popup-text">
                            <img src="/img/tick-icon.png" alt="" className="tick-icon"/>
                            <div className="popup_center">
                                <h4><p>{this.props.t('cart.productAddedConfirmation')}</p></h4>
                                <div className="actions">
                                    <Link to={properties.cart.path}>
                                        <button type="button" className="button cart_button">
                                            {this.props.t('buttons.goToCart')}
                                        </button>
                                    </Link>
                                    <button type="button" className="button cart_button" onClick={this.props.closePopup}>
                                        {this.props.t('buttons.continueShopping')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default withTranslation()(ProductAddedPopup);