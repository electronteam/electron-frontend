import React, {Component} from 'react';
import '../styles/product.css';
import ProductAddedPopup from "./ProductAddedPopup";
import ProductImage from "./ProductImage";
import { withTranslation } from 'react-i18next';

class ProductView extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            product: {
                code: null
            },
            showPopup: false
        };
        this.togglePopup = this.togglePopup.bind(this);
    }

    componentDidMount()
    {
        const {match: {params}} = this.props;
        let api = process.env.REACT_APP_PRODUCT_BY_CODE + "/" + params.productCode;

        fetch(api, {credentials: 'include'})
                .then(response => response.json())
                .then(response => {
                    this.setState({
                        product: response
                    });
                })
                .catch(error => {
                    console.log(error);
                });
    }

    togglePopup()
    {
        this.setState({
            showPopup: !this.state.showPopup
        });

        //TODO - think about creating a CartChanged event
        this.props.displayCurrentCartCount();
    }

    // outer function scope                                        -
    // inside outer function"this" keyword refers to window(??? or ProductView object) object
    addProductToCart(code, callback)
    {
        let api = process.env.REACT_APP_ADD_PRODUCT_TO_CART;
        let formData = new FormData();
        formData.append('code', code);

        fetch(api, {
            method: 'post',
            credentials: 'include',
            body: formData
        }).then(function (response) {
            callback();// "this" inside callback also refers window object
        })
    }

    render()
    {
        // const { t } = this.props;
        // const {t} = useTranslation();

        return (
                <div className="container text-center">
                    <div className="single_product">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5">
                                    <div className="image_selected">
                                        {this.state.product.code ? <ProductImage imageURL={this.state.product.imageURL} /> : null}
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="product_description">
                                        <div className="product_name">{this.state.product.name}</div>
                                        <div className="product_text"><p>{this.state.product.description}</p></div>

                                        <div className="product_price">{this.state.product.price} {this.props.t('currency')}</div>
                                        <div className="button_container">
                                            <button type="button" className="button cart_button"
                                                    onClick={() => this.addProductToCart(this.state.product.code, this.togglePopup)}>
                                                {this.props.t('buttons.addToCart')}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-1"></div>
                            </div>
                        </div>
                    </div>
                    {this.state.showPopup ? <ProductAddedPopup closePopup={this.togglePopup.bind(this)}/> : null}
                </div>
        );
    }
}

export default withTranslation()(ProductView);