// pages/checkout.js

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Checkout() {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
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

    try {
      // Call your backend to create a PaymentIntent with the selected amount
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paymentMethodId: paymentMethod.id, amount }),
      });

      const paymentIntent = await response.json();

      if (paymentIntent.error) {
        throw new Error(paymentIntent.error);
      }

      const { error: confirmError } = await stripe.confirmCardPayment(paymentIntent.client_secret);

      if (confirmError) {
        throw new Error(confirmError);
      }

      alert('Payment successful!');
    } catch (error) {
      console.error(error);
      alert('Payment failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Elements stripe={stripePromise}>
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
        <CardElement />
        <button type="submit" disabled={!stripe || loading}>
          Pay ${amount / 100}
        </button>
      </form>
    </Elements>
  );
}
