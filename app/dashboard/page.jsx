'use client'
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPayments() {
      try {
        const res = await fetch('/api/payments');
        const data = await res.json();
        setPayments(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching payment records:', error);
        setLoading(false);
      }
    }

    fetchPayments();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
            <th>Customer Email</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>${(payment.amount / 100).toFixed(2)}</td>
              <td>{payment.status}</td>
              <td>{new Date(payment.created * 1000).toLocaleDateString()}</td>
              <td>{payment.customerEmail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}