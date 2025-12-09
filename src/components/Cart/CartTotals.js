import React, { useState } from 'react';
import { Container, Row, Col, Button, Spinner, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CartTotals = (props) => {
    const { cartSubTotal, cartTax, cartTotal, clearCart, cart } = props.value;
    
    const [clientSecret, setClientSecret] = useState("");
    const [showCheckout, setShowCheckout] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Helper to ensure 2 decimal places safely
    const formatPrice = (amount) => {
        return Number(amount).toFixed(2);
    };

    const handleCheckout = () => {
        setLoading(true);
        setError(null);

        fetch("https://api.milehighcoding.com/api/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: cart }),
        })
        .then((res) => {
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
        })
        .then((data) => {
            setClientSecret(data.clientSecret);
            setShowCheckout(true);
            setLoading(false);
        })
        .catch((err) => {
            console.error("Error creating payment intent:", err);
            setError("Could not initiate checkout. Please try again.");
            setLoading(false);
        });
    };

    const appearance = { 
        theme: 'stripe',
        variables: {
            colorPrimary: '#468B56', 
        },
    };
    const options = { clientSecret, appearance };

    return (
        <Container className="py-5">
            <Row>
                {/* Changed to 'mx-auto' for centering and 'col-md-8' for wider display */}
                <Col className="col-10 mx-auto col-md-8 text-center text-capitalize">
                    
                    <Card className="p-4 shadow-sm border-0 bg-white">
                        <div className="mb-4">
                            <Link to="/shop">
                                <Button 
                                    className="btn text-uppercase px-4 py-2 mb-3"
                                    type="button"
                                    onClick={() => clearCart()}
                                    disabled={showCheckout}
                                >
                                    Clear Cart
                                </Button>
                            </Link>
                            <br/>
                            <Link to="/shop">
                                <Button 
                                    className="btn text-uppercase px-4 py-2 mb-3"
                                    type="button"
                                    disabled={showCheckout} 
                                >
                                    Continue Shopping
                                </Button>
                            </Link>
                            <div className="d-flex justify-content-between px-md-5 my-2">
                                <span className="text-title font-weight-bold">Subtotal:</span>
                                <strong>$ {formatPrice(cartSubTotal)}</strong>
                            </div>
                            
                            <div className="d-flex justify-content-between px-md-5 my-2">
                                <span className="text-title font-weight-bold">Tax:</span>
                                <strong>$ {formatPrice(cartTax)}</strong>
                            </div>
                            
                            <hr />
                            
                            <div className="d-flex justify-content-between px-md-5 my-3">
                                <span className="text-title font-weight-bold" style={{fontSize: '1.5rem'}}>Total:</span>
                                <strong style={{fontSize: '1.5rem', color: 'var(--mainBlue)'}}>$ {formatPrice(cartTotal)}</strong>
                            </div>
                        </div>

                        {/* Checkout Section */}
                        <div className="w-100">
                            {!showCheckout ? (
                                <>
                                    {error && <p className="text-danger small">{error}</p>}
                                    <Button 
                                        className="btn btn-primary text-uppercase btn-block py-3 mt-3" 
                                        onClick={handleCheckout}
                                        disabled={loading}
                                        style={{ background: "var(--mainBlue)", border: "none", fontSize: "1.1rem" }}
                                    >
                                        {loading ? (
                                            <>
                                                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                                <span className="ml-2">Secure Checkout...</span>
                                            </>
                                        ) : (
                                            "Proceed to Checkout"
                                        )}
                                    </Button>
                                </>
                            ) : (
                                clientSecret && (
                                    <div className="text-left mt-3">
                                        <h5 className="mb-4 text-center text-muted">
                                            <i className="fas fa-lock mr-2"></i> Enter Payment Details
                                        </h5>
                                        <Elements options={options} stripe={stripePromise}>
                                            <CheckoutForm />
                                        </Elements>
                                    </div>
                                )
                            )}
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default CartTotals;