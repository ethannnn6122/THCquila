import React from 'react';
import CartItem from './CartItem';
import { Container } from 'react-bootstrap';

const CartList = (props) => {
    return (
        <Container fluid>
            {props.value.cart.map(i => {
                return <CartItem key={i.id} item={i} value={props.value} inc={props.inc}/>
            })}
            
        </Container>
    )
}

export default CartList;