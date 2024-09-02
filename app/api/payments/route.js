import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-08-16',
});

export async function GET() {
  try {
    // Fetch payment records from Stripe
    const payments = await stripe.paymentIntents.list({
      limit: 100, // adjust the limit as needed
    });

    // Retrieve customer information for each payment
    const enrichedPayments = await Promise.all(
      payments.data.map(async (payment) => {
        let customerEmail = 'N/A';

        if (payment.customer) {
          const customer = await stripe.customers.retrieve(payment.customer);
          customerEmail = customer.email || 'N/A';
        }

        return {
          id: payment.id,
          amount: payment.amount,
          status: payment.status,
          created: payment.created,
          customerEmail,
        };
      })
    );

    return NextResponse.json(enrichedPayments);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}