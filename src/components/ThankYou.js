import React, {Component} from 'react';
import {properties} from "../properties";
import '../styles/thankyou.css';
import {Link} from "react-router-dom";
import ProductImage from "./ProductImage";
import {withTranslation} from 'react-i18next';

class ThankYou extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            order: null,
        };

        this.props.displayCurrentCartCount();
    }

    componentDidMount()
    {
        let api = process.env.REACT_APP_LAST_PLACED_ORDER;

        fetch(api, {credentials: 'include'})
                .then(response => response.json())
                .then(response => {
                    this.setState({
                        order: response
                    });
                })
                .catch(error => {
                    console.log(error);
                });
    }

    render()
    {
        return (
                <div className="container text-left justify-content-center thankyou">
                    {this.state.order ?
                            <div>
                                <h2>{this.props.t('thankyou.header')}</h2>
                                {this.props.t('thankyou.orderNrText')} <strong>{this.state.order.id}</strong>
                                <br/>
                                <br/>

                                <table className="order_details">
                                    <thead>
                                    <tr>
                                        <th colSpan="2">
                                            {this.props.t('thankyou.orderedItem')}
                                        </th>
                                        <th>
                                            {this.props.t('thankyou.price')}
                                        </th>
                                        <th className="text-center">
                                            {this.props.t('thankyou.quantity')}
                                        </th>
                                        <th className="text-center">
                                            {this.props.t('thankyou.totalPrice')}
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.order.entries.map((entry, index) => {
                                        return (
                                                <tr className="product_row" key={index}>
                                                    <td>
                                                        <div className="product_image">
                                                            <Link to={{pathname: properties.product.path + entry.product.code}}>
                                                                <ProductImage imageURL={entry.product.imageURL}/>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {entry.product.name}
                                                    </td>
                                                    <td>
                                                        {entry.product.price} {this.props.t('currency')}
                                                    </td>
                                                    <td className="text-center">
                                                        {entry.quantity}
                                                    </td>
                                                    <td className="text-center">
                                                        {entry.totalPrice} {this.props.t('currency')}
                                                    </td>
                                                </tr>
                                        )
                                    })}
                                    <tr className="price_row">
                                        <td colSpan="4" className="text-right">
                                            {this.props.t('thankyou.orderTotal')}
                                        </td>
                                        <td className="text-center">
                                            <strong>
                                                {this.state.order.totalPrice} {this.props.t('currency')}
                                            </strong>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <br/>
                                <br/>
                                <table className="user_details">
                                    <thead>
                                    <th>
                                        {this.props.t('thankyou.customerDetails')}
                                    </th>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            {this.state.order.userData.name} {this.state.order.userData.lastName}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {this.state.order.userData.email}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {this.state.order.userData.phone}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {this.state.order.deliveryAddress.city}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {this.state.order.deliveryAddress.street}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            : <h3>{properties.thankyou.noOrderDisplayText}</h3>}
                </div>
        );
    }
}

export default withTranslation()(ThankYou);