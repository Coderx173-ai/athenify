import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-08-16',
});

export async function POST(req) {
  try {
    const { paymentMethodId, email, name, amount } = await req.json();

    if (!paymentMethodId || !email || !name || !amount) {
      return new Response(JSON.stringify({ error: 'Missing required parameters.' }), { status: 400 });
    }

    // Step 1: Create or retrieve a customer
    let customer;
    const existingCustomers = await stripe.customers.list({
      email: email,
      limit: 1,
    });

    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];
    } else {
      customer = await stripe.customers.create({
        email: email,
        name: name,
      });
    }

    // Step 2: Create a PaymentIntent with the associated customer
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert amount to cents
      currency: 'usd',
      payment_method: paymentMethodId,
      confirmation_method: 'manual',
      confirm: true,
      return_url: "http://localhost.com",
      customer: customer.id,  // Associate the customer with the PaymentIntent
      metadata: {
        email,
        name,
      },
    });

    return new Response(JSON.stringify(paymentIntent), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}

export async function GET() {
  try {
    // Fetch payment records from Stripe
    const payments = await stripe.paymentIntents.list({
      limit: 5, // adjust the limit as needed
    });
    
    // Retrieve customer information for each payment
    const enrichedPayments = await Promise.all(
      payments.data.map(async (payment) => {
        let customerEmail = 'N/A';
        let customerName = 'N/A';

        if (payment.customer) {
          const customer = await stripe.customers.retrieve(payment.customer);
          
          customerEmail = customer.email || customer.metadata.email || 'N/A';
          customerName = customer.name || customer.metadata.name || 'N/A';
        }

        return {
          id: payment.id,
          amount: payment.amount,
          status: payment.status,
          created: payment.created,
          customerEmail,
          customerName,
        };
      })
    );

    return NextResponse.json(enrichedPayments);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
