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
        showPlaceholder: true,
        showSuccessModal: false
    };

    componentDidMount() {
        // Check URL for Stripe redirect parameters
        const query = new URLSearchParams(window.location.search);
        if (query.get("redirect_status") === "succeeded") {
            this.setState({ showSuccessModal: true });
        }
        // This attaches a function to the browser window
        window.toggleShop = () => {
            this.setState(prevState => ({
                showPlaceholder: !prevState.showPlaceholder
            }), () => {
                console.log(`Shop State: ${this.state.showPlaceholder ? "Placeholder (Hidden)" : "Live Shop (Visible)"}`);
            });
        };

        console.log("🙈 Dev Mode: Type 'window.toggleShop()' in console to see the store.");
    }

    componentWillUnmount() {
        // Cleanup to prevent memory leaks
        delete window.toggleShop;
    }

    handleClose = () => {
        this.setState({ showSuccessModal: false });
    };

    render() {
        // TOGGLE: Set to 'false' to show actual Shop
        const { showPlaceholder, showSuccessModal } = this.state;

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