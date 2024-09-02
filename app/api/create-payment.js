// pages/api/create-payment-intent.js

import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-08-16',
});

export default async function handler(req = NextApiRequest, res = NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { paymentMethodId, amount } = req.body;

      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        payment_method: paymentMethodId,
        confirmation_method: 'manual',
        confirm: true,
      });

      // If payment is successful, you can redirect or respond with a URL
      if (paymentIntent.status === 'succeeded') {
        return res.status(200).json({ success: true, redirectUrl: 'https://stripe-payment-nu.vercel.app/' });
      } else {
        return res.status(200).json(paymentIntent);
      }
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}