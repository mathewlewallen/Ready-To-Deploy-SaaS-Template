import React from 'react';

export default function RefundAndCancellationPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-white bg-boxdark rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-primary">Refund and Cancellation Policy</h1>
      
      {/* Effective Date */}
      <p className="mb-4 text-bodydark">
        Effective Date: <strong>[01 January 2025]</strong>
      </p>

      {/* 1. General Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">1. General Policy</h2>
        <p className="mb-4">
          All sales of products and services offered by <strong>Cloud Context</strong> are final. Once a purchase
          is completed, it cannot be refunded, canceled, or exchanged unless otherwise required by applicable law. This
          no-refund policy applies to all our offerings, including but not limited to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Digital products</li>
          <li>Subscriptions</li>
          <li>One-time services</li>
          <li>Downloadable content</li>
          <li>Paid consultations or bookings</li>
        </ul>
        <p className="mt-4">
          We encourage you to carefully review the details of the product or service before making a purchase. If you
          have any questions prior to purchasing, please reach out to our support team.
        </p>
      </section>

      {/* 2. Subscription Cancellations */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">2. Subscription Cancellations</h2>
        <p className="mb-4">
          If you have subscribed to a recurring service, you may cancel your subscription at any time. However, any
          charges already processed prior to the cancellation are non-refundable. Your subscription will remain active
          until the end of the current billing cycle.
        </p>
        <p className="mb-4">
          To cancel a subscription, please follow the instructions provided in your account settings or contact our
          support team at{' '}
          <a href="mailto:mathewlewallen@cloudcontext.cc" className="text-primary hover:underline">
            mathewlewallen@cloudcontext.cc
          </a>.
        </p>
        <p>
          Cancellations must be made at least <strong>5 days</strong> before the next billing date to avoid additional
          charges for the subsequent billing cycle.
        </p>
      </section>

      {/* 3. Exceptional Circumstances */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">3. Exceptional Circumstances</h2>
        <p className="mb-4">
          While our general policy does not allow for refunds, we may consider exceptions under the following
          circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Duplicate Transactions:</strong> If you were accidentally charged more than once for the same
            purchase, please contact our support team at{' '}
            <a href="mailto:mathewlewallen@cloudcontext.cc" className="text-primary hover:underline">
              mathewlewallen@cloudcontext.cc
            </a>{' '}
            with proof of the duplicate transaction.
          </li>
          <li>
            <strong>Non-Delivery of Services:</strong> If a technical issue on our end prevents you from accessing the
            purchased product or service, we will work to resolve the issue. If resolution is not possible, we may
            provide a refund or credit at our discretion.
          </li>
          <li>
            <strong>Compliance with Law:</strong> Refunds required under applicable consumer protection laws will be
            honored.
          </li>
        </ul>
      </section>

      {/* 4. How to Request Assistance */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">4. How to Request Assistance</h2>
        <p className="mb-4">
          If you believe you qualify for an exception under this policy, please contact our customer support team within{' '}
          <strong>5 days</strong> of the purchase date. Include the following details in your request:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Full name</li>
          <li>Order number</li>
          <li>Date of purchase</li>
          <li>Reason for your request</li>
          <li>Supporting documentation (if applicable)</li>
        </ul>
        <p>
          Our team will review your request and respond within <strong>[5 business days]</strong>.
        </p>
      </section>

      {/* 5. No Refund for Change of Mind */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">5. No Refund for Change of Mind</h2>
        <p>
          We do not offer refunds for change of mind, dissatisfaction with the product or service, or inability to use
          the product due to technical limitations or compatibility issues. It is the customer&apos;s responsibility to
          review all product details and requirements before purchasing.
        </p>
      </section>

      {/* 6. Non-Transferability */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">6. Non-Transferability</h2>
        <p>
          Refunds, if granted under exceptional circumstances, will only be issued to the original payment method used
          during the purchase. Refunds are non-transferable to any other person or account.
        </p>
      </section>

      {/* 7. Updates to This Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">7. Updates to This Policy</h2>
        <p>
          We may update this Refund and Cancellation Policy from time to time. Any changes will be posted on this page
          with the updated effective date. It is your responsibility to review this policy periodically.
        </p>
      </section>

      {/* 8. Contact Us */}
      <section>
        <h2 className="text-2xl font-semibold text-secondary mb-3">8. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Refund and Cancellation Policy or require assistance, please contact us:
        </p>
        <ul className="list-none pl-0 space-y-1">
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:mathewlewallen@cloudcontext.cc" className="text-primary hover:underline">
              mathewlewallen@cloudcontext.cc
            </a>
          </li>
          <li>
            <strong>Phone:</strong> +49 0 15152547133
          </li>
        </ul>
      </section>
    </div>
  );
}
