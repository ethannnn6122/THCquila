import {Component} from 'react';
import classes from './Product.module.css';
import {Link} from "react-router-dom";
import {ProductConsumer} from '../../context';
import {Col, Card, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        
        // LOGIC: Products with ID > 2 are "Coming Soon"
        const isComingSoon = id > 2;

        return (
            <Col className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <Card className={classes.Card}>
                    
                    {/* WRAPPER: Handles the Hover State */}
                    <div className={isComingSoon ? classes.ComingSoonWrapper : ""}>
                        
                        {/* BLUR CONTAINER: Holds the Image and Add Button */}
                        <div className={isComingSoon ? classes.ContentBlur : ""}>
                            <ProductConsumer>
                                {val => (
                                <>
                                    <div 
                                        className={classes.imgContainer} 
                                        // Disable click if coming soon
                                        onClick={() => !isComingSoon && val.handleDetail(id)}
                                    >
                                        <Link to={isComingSoon ? "#" : "/shop/details"}>
                                            <img src={img} alt="product" className={classes.CardImgTop} />
                                        </Link>
                                    </div>
                                    
                                    <Card.Body>
                                        <Button 
                                            className={classes.CartBtn} 
                                            disabled={inCart || isComingSoon} 
                                            onClick={() => {
                                                if (!isComingSoon) {
                                                    val.addToCart(id);
                                                    val.openModal(id);
                                                }
                                            }}
                                        >
                                            {inCart ? (
                                                <p className="mb-0 text-capitalize" disabled>In Cart</p>
                                            ) : (
                                                <i className="fas fa-cart-plus"/>
                                            )}
                                        </Button>
                                    </Card.Body>
                                </>)}
                            </ProductConsumer>
                        </div>

                        {/* OVERLAY: Only shows if isComingSoon is true */}
                        {isComingSoon && (
                            <div className={classes.Overlay}>
                                <span className={classes.Badge}>Coming Soon</span>
                            </div>
                        )}

                    </div>

                    {/* FOOTER: Remains visible and unblurred */}
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