import React,{Component} from 'react';
import classes from './Product.module.css';
import {Link} from "react-router-dom";
import {ProductConsumer} from '../../context';
import {Col, Card, Button} from 'react-bootstrap';

class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return(
            <Col className={classes.ProductWrapper} className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <Card style={{ width: '15rem' }}>
                    <div className={classes.imgContainer} className="p-5" onClick={() => console.log('clicked')}>
                        <Link to="/shop/details">
                            <img src={img} alt="product" className="card-img-top" />
                        </Link>
                    </div>
                    <Card.Body>
                        <Button className={classes.CartBtn} disabled={inCart ? true : false} onClick={() => console.log("added to cart")}>
                            {inCart ? (<p className="mb-0 text-capitlize" disabled >In Cart</p>): (<i className="fas fa-cart-plus"/>) }
                        </Button>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between">
                            <p className="align-self-center mb-0">{title}</p>
                            <h5 className="text-blue font-italic mb-0 ">
                                <span className="mr-1">$</span>
                                {price}
                            </h5>
                        </Card.Footer>
                </Card>
            </Col>
        )
    }
}

// Stopped Video at 2:14:04


export default Product;