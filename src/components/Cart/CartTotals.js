import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PaypalButton from '../PaypalButton';

const CartTotals = (props) => {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = props.value;
    return (
        <>  
            <Container >
                <Row>
                    <Col className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/shop" ><Button className="btn btn-outline-danger text-uppercase mb-3 px-5"
                         type="button"
                         onClick={() => clearCart()}>Clear cart</Button></Link>
                        <h5>
                             <span className="text-title">Subtotal: </span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                             <span className="text-title">Tax: </span>
                            <strong>$ {cartTax}</strong>
                        </h5>
                        <h5>
                             <span className="text-title">Total: </span>
                            <strong>$ {cartTotal}</strong>
                        </h5>
                        <div className="mx-auto">
                            <PaypalButton total={cartTotal} />
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CartTotals;