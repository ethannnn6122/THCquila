import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

// components
import ProductList from '../../components/Products/ProductList';
import Placeholder from '../../components/Products/Placeholder';
import Details from '../../components/Products/Details';
import Cart from '../../components/Cart/Cart';
import Default from '../../components/Default';

class ShopContainer extends Component {
    state = {
        showSuccessModal: false
    };

    componentDidMount() {
        // Check URL for Stripe redirect parameters
        const query = new URLSearchParams(window.location.search);
        if (query.get("redirect_status") === "succeeded") {
            this.setState({ showSuccessModal: true });
        }
    }

    handleClose = () => {
        this.setState({ showSuccessModal: false });
    };

    render() {
        // TOGGLE: Set to 'false' to show actual Shop
        const showPlaceholder = false; 

        return(
            <>
                <Switch>
                    <Route 
                        path="/shop" 
                        exact 
                        component={showPlaceholder ? Placeholder : ProductList} 
                    />
                    <Route path="/shop/details" component={Details} />
                    <Route path="/shop/cart" component={Cart} />
                    <Route component={Default} />
                </Switch>

                {/* Success Modal */}
                <Modal show={this.state.showSuccessModal} onHide={this.handleClose} centered>
                    <Modal.Header closeButton className="bg-success text-white">
                        <Modal.Title><i className="fas fa-check-circle"></i> Payment Successful!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center p-4">
                        <h4>Thank You for Your Order</h4>
                        <p className="lead mt-3">
                            Your payment has been processed successfully.
                        </p>
                        <p className="text-muted">
                            A receipt has been sent to your email address.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose} style={{background: 'var(--mainBlue)'}}>
                            Continue Shopping
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default ShopContainer;