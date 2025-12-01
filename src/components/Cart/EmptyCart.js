import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
    return(
        <Container>
            <Row>
                <Col className="col-10 mx-auto text-center text-title pt-2">
                    <h1>Your Cart is Currently Empty!</h1>
                    <Link to="/shop"><Button>Shop Now</Button></Link>
                </Col>
            </Row>
        </Container>
    )
}

export default EmptyCart;

// 4:22:27