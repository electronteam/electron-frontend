import React, {Component} from 'react';
import {properties} from "../properties";
import '../styles/thankyou.css';
import {Link} from "react-router-dom";

class ThankYou extends Component {

    constructor()
    {
        super();
        this.state = {
            order: null,
        };
    }

    componentDidMount()
    {
        let api = properties.api.lastPlacedOrder;

        fetch(api)
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
                                <h2>{properties.thankyou.header}</h2>
                                {properties.thankyou.orderNrText} <strong>{this.state.order.id}</strong>
                                <br/>
                                <br/>

                                <table className="order_details">
                                    <thead>
                                        <tr>
                                            <th colSpan="2">
                                                {properties.thankyou.orderedItem}
                                            </th>
                                            <th>
                                                {properties.thankyou.price}
                                            </th>
                                            <th className="text-center">
                                                {properties.thankyou.quantity}
                                            </th>
                                            <th className="text-center">
                                                {properties.thankyou.totalPrice}
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
                                                                <img src={properties.url.productImage + entry.product.code + ".png"} alt=""/>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {entry.product.name}
                                                    </td>
                                                    <td>
                                                        {entry.product.price} lei
                                                    </td>
                                                    <td className="text-center">
                                                        {entry.quantity}
                                                    </td>
                                                    <td className="text-center">
                                                        {entry.totalPrice} lei
                                                    </td>
                                                </tr>
                                        )
                                    })}
                                    <tr className="price_row">
                                        <td colSpan="4" className="text-right">
                                            {properties.thankyou.orderTotal}
                                        </td>
                                        <td className="text-center">
                                            <strong>
                                                {this.state.order.totalPrice} lei
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
                                            {properties.thankyou.customerDetails}
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

export default ThankYou;