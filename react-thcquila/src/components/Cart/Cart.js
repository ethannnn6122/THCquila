import React, {Component} from 'react';
import Title from '../Products/Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList'
import CartTotals from './CartTotals';
import {ProductConsumer} from '../../context';

class Cart extends Component {
    render() {
        return (
            <>
                <ProductConsumer>
                    { val => {
                        const {cart, inc} = val;
                        if (cart.length > 0 ) {
                            return (
                                <>
                                    <Title name="your" title="cart" />
                                    <CartColumns/>
                                    <CartList value={val} inc={inc}/>
                                    <CartTotals value={val} />
                                </>
                            )
                        } else {
                            return <EmptyCart/>
                        }
                    }}
                </ProductConsumer>
            </>
        )
    }
}

export default Cart;
