import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import '../styles/checkout.css';
import {properties} from "../properties";

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
        let api = properties.api.placeOrder;
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
                            <div className="checkout_title">{properties.checkout.title}</div>
                            <div className="checkout_form_container">
                                <div className="form-group row">
                                    <label htmlFor="name" className="col-sm-2 col-form-label">{properties.checkout.customerName}</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="checkout_input" size="30"
                                               id="name"
                                               name="name"
                                               required="required"
                                               onChange={this.inputsChangeHandler}
                                               placeholder={properties.checkout.customerNamePlaceholder}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="lastName" className="col-sm-2 col-form-label">{properties.checkout.customerLastName}</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="checkout_input" size="30"
                                               id="lastName"
                                               name="lastName"
                                               required="required"
                                               onChange={this.inputsChangeHandler}
                                               placeholder={properties.checkout.customerLastNamePlaceholder}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="email" className="col-sm-2 col-form-label">{properties.checkout.customerEmail}</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="checkout_input" size="30"
                                               id="email"
                                               name="email"
                                               required="required"
                                               onChange={this.inputsChangeHandler}
                                               placeholder={properties.checkout.customerEmailPlaceholder}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="address" className="col-sm-2 col-form-label">{properties.checkout.customerCity}</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="checkout_input" size="30"
                                               id="city"
                                               name="city"
                                               required="required"
                                               onChange={this.inputsChangeHandler}
                                               placeholder={properties.checkout.customerCityPlaceholder}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="address" className="col-sm-2 col-form-label">{properties.checkout.customerStreet}</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="checkout_input" size="30"
                                               id="street"
                                               name="street"
                                               required="required"
                                               onChange={this.inputsChangeHandler}
                                               placeholder={properties.checkout.customerStreetPlaceholder}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="phone" className="col-sm-2 col-form-label">{properties.checkout.customerPhone}</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="checkout_input" size="30"
                                               id="phone"
                                               name="phone"
                                               required="required"
                                               onChange={this.inputsChangeHandler}
                                               placeholder={properties.checkout.customerPhonePlaceholder}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="button_container">
                        <button type="button" className="button cart_button"
                                onClick={() => this.placeOrder(this.goToThankYouPage)}>
                            {properties.buttons.placeOrder}
                        </button>
                    </div>
                </div>
        );
    }
}

export default Checkout;