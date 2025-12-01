import {Component} from 'react';
import classes from './Product.module.css';
import {Link} from "react-router-dom";
import {ProductConsumer} from '../../context';
import {Col, Card, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';


class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <Col className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <Card className={classes.Card}>
                    <ProductConsumer>
                        {val => (
                        <>
                            <div className={classes.imgContainer} onClick={() => val.handleDetail(id)}>
                                <Link to="/shop/details">
                                    <img src={img} alt="product" className={classes.CardImgTop} />
                                </Link>
                            </div>
                            <Card.Body>
                                <Button className={classes.CartBtn} disabled={inCart ? true : false} 
                                    onClick={() => {
                                        val.addToCart(id);
                                        val.openModal(id);
                                    }}>
                                    {inCart ? (<p className="mb-0 text-capitlize" disabled >In Cart</p>): (<i className="fas fa-cart-plus"/>) }
                                </Button>
                            </Card.Body>
                        </>)}
                    </ProductConsumer>
                    <Card.Footer className={classes.CardFooter}>
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

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}



export default Product;