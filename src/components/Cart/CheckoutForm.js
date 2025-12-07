import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { Button, Alert, Form } from 'react-bootstrap';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState(""); // State for email
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // ... [Keep useEffect for payment_intent_client_secret logic] ...

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);
    setMessage(null);

    try {
        const { error } = await stripe.confirmPayment({
          elements,
          confirmParams: {
            // Include the email here for Stripe Receipts & Webhook
            return_url: `${window.location.origin}/THCquila/shop`,
            receipt_email: email, 
          },
        });

        if (error) {
            if (error.type === "card_error" || error.type === "validation_error") {
                setMessage(error.message);
            } else {
                setMessage("Payment failed. Please try another card.");
            }
        }
    } catch (err) {
        console.error("Critical Stripe Error:", err);
        setMessage("Connection refused. Please disable AdBlocker and try again.");
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="mt-4">
      {/* Email Input Field */}
      <Form.Group className="mb-3 text-left">
        <Form.Label>Email Address (Required for Receipt)</Form.Label>
        <Form.Control 
            type="email" 
            placeholder="name@example.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
      </Form.Group>

      <PaymentElement id="payment-element" />
      
      <Button 
        disabled={isLoading || !stripe || !elements || !email} 
        type="submit"
        id="submit" 
        className="btn btn-success text-uppercase mt-4 w-100 py-2"
        style={{ fontWeight: "bold", letterSpacing: "0.1rem" }}
      >
        {isLoading ? "Processing..." : "Pay Now"}
      </Button>
      
      {message && <Alert variant="info" className="mt-3 text-center">{message}</Alert>}
    </form>
  );
}