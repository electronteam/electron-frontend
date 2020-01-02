import React from 'react';
import '../styles/checkout.css';
import {properties} from "../properties";

export function Checkout()
{
    return (
            <div className="container text-center checkout">
                <div className="row justify-content-center">
                    <div className="billing">
                        <div className="checkout_title">{properties.checkout.title}</div>
                        <div className="checkout_form_container">
                            <div className="form-group row">
                                <label htmlFor="customer_name" className="col-sm-2 col-form-label">{properties.checkout.customerName}</label>
                                <div className="col-sm-10">
                                    <input type="text" id="customer_name" className="checkout_input" size="30" required="required" placeholder={properties.checkout.customerNamePlaceholder}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="customer_last_name" className="col-sm-2 col-form-label">{properties.checkout.customerLastName}</label>
                                <div className="col-sm-10">
                                    <input type="text" id="customer_last_name" className="checkout_input" size="30" required="required" placeholder={properties.checkout.customerLastNamePlaceholder}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="customer_email" className="col-sm-2 col-form-label">{properties.checkout.customerEmail}</label>
                                <div className="col-sm-10">
                                    <input type="text" id="customer_email" className="checkout_input" size="30" required="required" placeholder={properties.checkout.customerEmailPlaceholder}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="checkout_address" className="col-sm-2 col-form-label">{properties.checkout.customerAddress}</label>
                                <div className="col-sm-10">
                                    <input type="text" id="checkout_address" className="checkout_input" size="30" required="required" placeholder={properties.checkout.customerAddressPlaceholder}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="checkout_phone" className="col-sm-2 col-form-label">{properties.checkout.customerPhone}</label>
                                <div className="col-sm-10">
                                    <input type="text" id="checkout_phone" className="checkout_input" size="30" required="required" placeholder={properties.checkout.customerPhonePlaceholder}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="button_container">
                    <button type="button" className="button cart_button">
                        {properties.buttons.placeOrder}
                    </button>
                </div>
            </div>
    );
}