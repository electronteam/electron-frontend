import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import '../styles/checkout.css';
import {properties} from "../properties";
import { withTranslation } from 'react-i18next';

class Checkout extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            name: '',
            lastName: '',
            email: '',
            city: '',
            street: '',
            phone: '',
            toThankYouPage: false
        };
        this.goToThankYouPage = this.goToThankYouPage.bind(this);
    }

    inputsChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    placeOrder(callback)
    {
        let api = process.env.REACT_APP_PLACE_ORDER;
        let formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('lastName', this.state.lastName);
        formData.append('email', this.state.email);
        formData.append('address.city', this.state.city);
        formData.append('address.street', this.state.street);
        formData.append('phone', this.state.phone);

        fetch(api, {
            method: 'post',
            body: formData,
            credentials: 'include'
        }).then(function (response) {
            callback();
        })
    }

    goToThankYouPage()
    {
        this.setState(() => ({toThankYouPage: true}));
    }

    render()
    {
        if (this.state.toThankYouPage === true)
        {
            return <Redirect to={properties.thankyou.path}/>
        }

        return (
                <div className="container text-center checkout">
                    <div className="row justify-content-center">
                        <div className="billing">
                            <div className="checkout_title">{this.props.t('checkout.title')}</div>
                            <div className="checkout_form_container">
                                <div className="form-group row text-left">
                                    <label htmlFor="name" className="col-sm-3 col-form-label">{this.props.t('checkout.customerName')}</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="checkout_input" size="30"
                                               id="name"
                                               name="name"
                                               required="required"
                                               onChange={this.inputsChangeHandler}
                                               placeholder={this.props.t('checkout.customerNamePlaceholder')}/>
                                    </div>
                                </div>
                                <div className="form-group row text-left">
                                    <label htmlFor="lastName" className="col-sm-3 col-form-label">{this.props.t('checkout.customerLastName')}</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="checkout_input" size="30"
                                               id="lastName"
                                               name="lastName"
                                               required="required"
                                               onChange={this.inputsChangeHandler}
                                               placeholder={this.props.t('checkout.customerLastNamePlaceholder')}/>
                                    </div>
                                </div>
                                <div className="form-group row text-left">
                                    <label htmlFor="email" className="col-sm-3 col-form-label">{this.props.t('checkout.customerEmail')}</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="checkout_input" size="30"
                                               id="email"
                                               name="email"
                                               required="required"
                                               onChange={this.inputsChangeHandler}
                                               placeholder={this.props.t('checkout.customerEmailPlaceholder')}/>
                                    </div>
                                </div>
                                <div className="form-group row text-left">
                                    <label htmlFor="address" className="col-sm-3 col-form-label">{this.props.t('checkout.customerCity')}</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="checkout_input" size="30"
                                               id="city"
                                               name="city"
                                               required="required"
                                               onChange={this.inputsChangeHandler}
                                               placeholder={this.props.t('checkout.customerCityPlaceholder')}/>
                                    </div>
                                </div>
                                <div className="form-group row text-left">
                                    <label htmlFor="address" className="col-sm-3 col-form-label">{this.props.t('checkout.customerStreet')}</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="checkout_input" size="30"
                                               id="street"
                                               name="street"
                                               required="required"
                                               onChange={this.inputsChangeHandler}
                                               placeholder={this.props.t('checkout.customerStreetPlaceholder')}/>
                                    </div>
                                </div>
                                <div className="form-group row text-left">
                                    <label htmlFor="phone" className="col-sm-3 col-form-label">{this.props.t('checkout.customerPhone')}</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="checkout_input" size="30"
                                               id="phone"
                                               name="phone"
                                               required="required"
                                               onChange={this.inputsChangeHandler}
                                               placeholder={this.props.t('checkout.customerPhonePlaceholder')}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="button_container">
                        <button type="button" className="button cart_button"
                                onClick={() => this.placeOrder(this.goToThankYouPage)}>
                            {this.props.t('buttons.placeOrder')}
                        </button>
                    </div>
                </div>
        );
    }
}

export default withTranslation()(Checkout);