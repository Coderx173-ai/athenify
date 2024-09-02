// components/CheckoutForm.js

import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    // Call your backend to create a PaymentIntent with the selected amount
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paymentMethodId: paymentMethod.id, amount }),
    });

    const paymentIntent = await response.json();

    if (paymentIntent.error) {
      console.error(paymentIntent.error);
      setLoading(false);
      return;
    }

    const { error: confirmError } = await stripe.confirmCardPayment(paymentIntent.clientSecret);

    if (confirmError) {
      console.error(confirmError);
      setLoading(false);
      return;
    }

    // Payment succeeded - Redirect the user based on the response
    setLoading(false);

    if (paymentIntent.success) {
      window.location.href = paymentIntent.redirectUrl; // Redirect to the URL provided by the backend
    } else {
      console.error('Payment not successful');
    }
  };

  return (
    <div>
      <div className="cards">
        <div className="card">
          <h3>$50</h3>
          <button onClick={() => setAmount(5000)}>Buy Now</button>
        </div>
        <div className="card">
          <h3>$125</h3>
          <button onClick={() => setAmount(12500)}>Buy Now</button>
        </div>
        <div className="card">
          <h3>$225</h3>
          <button onClick={() => setAmount(22500)}>Buy Now</button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <CardElement options={{ style: cardStyle }} />
        <button type="submit" disabled={!stripe || loading}>
          Pay ${amount / 100}
        </button>
      </form>
    </div>
  );
}

const cardStyle = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#a0aec0",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};