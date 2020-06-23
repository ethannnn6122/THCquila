import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CartColumns = () => {
    return (
        <Container fluid className="text-center d-none d-lg-block">
            <Row>
                <Col className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">product(s)</p>
                </Col>
                <Col className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">name of product</p>
                </Col>
                <Col className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">price</p>
                </Col>
                <Col className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">quantity</p>
                </Col>
                <Col className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">remove</p>
                </Col>
                <Col className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">total</p>
                </Col>
            </Row>
        </Container>
    )
}

export default CartColumns;