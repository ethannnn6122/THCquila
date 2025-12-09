import {Component} from "react";
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
                    const {img, title, price, selectedColor, imageMap} = val.modalProduct;
                    const displayImage = (imageMap && selectedColor && imageMap[selectedColor]) 
                        ? imageMap[selectedColor][0] 
                        : img;
                    if (!modalOpen) {
                        return null
                    } else {
                        return (
                            <div className={classes.ModalContainer}>
                                <Container>
                                    <Row className={classes.Modal}>
                                        <Col className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                            <h5>Item added to the cart</h5>
                                            
                                            {/* Use displayImage instead of img */}
                                            <img 
                                                src={displayImage} 
                                                className="img-fluid" 
                                                alt="product"
                                                style={{ maxHeight: '300px', objectFit: 'contain' }}
                                            />
                                            
                                            <h5 className="mt-2">{title}</h5>
                                            
                                            {selectedColor && <h6 className="text-muted">Color: {selectedColor}</h6>}
                                            
                                            <h5 className="text-muted">price : $ {price}</h5>
                                            <Link to="/shop">
                                                <Button className="btn" style={{marginBottom: '1rem'}} onClick={() => closeModal()}>
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