import React, {Component} from 'react';
import { ProductConsumer } from '../../context';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {val => {
                  const {id, company, img, info, price, title, inCart} = val.detailProduct;
                  return (
                      <Container className='py-5'>
                        {/* title */}
                            <Row>
                                <Col className="mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </Col>
                            </Row>
                        {/* end title */}
                        {/* product info */}
                        <Row>
                            <Col className="mx-auto col-md-6 my-3">
                                <img src={img} alt="product" />
                            </Col>
                            {/* product Text */}
                            <Col className="mx-auto col-md-6 my-3 text-capitalize">
                                <h2>model: {title}</h2>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2"> Made By: <span className="text-uppercase">{company}</span></h4>
                                <h4 className="text-blue"> <strong>price: <span> $</span>{price}</strong> </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">{info}</p>
                                <br/>
                                {/* Buttons */}
                                <Link to='/shop' >
                                    <Button className="btn">Back to Products</Button>
                                </Link>
                                <Button className="btn cartBtn" disabled={inCart ? true : false} 
                                    onClick={ () => {
                                        val.addToCart(id);
                                        val.openModal(id);
                                    }}>
                                    {inCart ? "In Cart" : "Add to Cart"}
                                </Button> 
                            </Col>
                        </Row>
                      </Container>
                  )
                }}
            </ProductConsumer>
        )
    }
}

export default Details;
