import React, {Component} from "react";
import classes from './Modal.module.css';
import {ProductConsumer} from '../../context';
import {Button, Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                { val => {
                    const {modalOpen, closeModal} = val;
                    const {img, title, price} = val.modalProduct;
                    if (!modalOpen) {
                        return null
                    } else {
                        return (
                            <div className={classes.ModalContainer}>
                                <Container>
                                    <Row className={classes.Modal}>
                                        <Col className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                            <h5>Item added to the cart</h5>
                                            <img src={img} className="img-fluid" alt="product"/>
                                            <h5 className="mt-2">{title}</h5>
                                            <h5 className="text-muted">price : $ {price}</h5>
                                            <Link to="/shop">
                                                <Button className="btn" onClick={() => closeModal()}>
                                                    Continue Shopping
                                                </Button>
                                            </Link>
                                            <Link to="/shop/cart">
                                                <Button className="cartBtn" onClick={() => closeModal()}>
                                                    Go to Cart
                                                </Button>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        )
                    }
                    
                }}
            </ProductConsumer>
        )
    }
}

export default Modal;