import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const CartItem = (props) => {
    const {id, title, img, price, total, count} = props.item;
    const {increment, decrement, removeItem} = props.value;

    return (
        <Row className="row my-2 text-capitalize text-center">
            <Col className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width: '5rem', height: '5rem'}} className="img-fluid" alt="product"/>
            </Col>
            <Col className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product: </span> {title}
            </Col>
            <Col className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price: </span>$ {price}
            </Col>
            <Col className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div> 
                        <Button className="btn btn-black mx-1" onClick={() => decrement(id)}>-</Button>
                        <Button className="btn btn-black mx-1">{count}</Button>
                        <Button className="btn btn-black mx-1" onClick={() => increment(id)}>+</Button>
                    </div>
                </div>
            </Col>
            <Col className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </Col>
            <Col className="col-10 mx-auto col-lg-2">
                <strong> item total: $ {total}</strong>
            </Col>
        </Row>
    )
}

export default CartItem;