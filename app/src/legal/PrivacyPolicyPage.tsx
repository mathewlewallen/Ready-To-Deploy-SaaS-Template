import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-white bg-boxdark rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-primary">Privacy Policy</h1>
      <p className="mb-4">
        Welcome to <strong>Cloud Context</strong>. Your privacy is critically important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
      </p>

      {/* 1. Information We Collect */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2 text-bodydark">
          <li>
            <strong>Personal Information:</strong> We collect personal information such as your name, email address, phone number, and password when you create an account or fill out forms.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about your interactions with our platform, including pages visited, actions taken, timestamps, and basic diagnostic data.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your user experience, gather usage statistics, and offer personalized content.
          </li>
        </ul>
      </section>

      {/* 2. How We Use Your Information */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="text-bodydark">
          The information we collect is used to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-bodydark">
          <li>Provide and maintain our services.</li>
          <li>Respond to customer support inquiries.</li>
          <li>Analyze usage to improve our platform and services.</li>
          <li>Send promotional and administrative communications (if you opt in).</li>
          <li>Comply with legal obligations in your jurisdiction.</li>
        </ul>
      </section>

      {/* 3. Sharing Your Information */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
        <p className="text-bodydark">
          We do not sell your personal information. However, we may share your data with:
        </p>
        <ul className="list-disc list-inside space-y-2 text-bodydark">
          <li>
            Service providers who help us operate and improve our platform (e.g., hosting providers, analytics services).
          </li>
          <li>
            Law enforcement or government agencies when required to comply with applicable laws or protect our legal rights.
          </li>
          <li>
            Third-party analytics providers, to help us understand usage trends, but only in aggregate or anonymized form whenever possible.
          </li>
        </ul>
      </section>

      {/* 4. Data Retention */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
        <p className="text-bodydark">
          We retain your data for as long as necessary to provide you with our services, comply with legal obligations, resolve disputes, and enforce our agreements. The retention period may vary based on applicable regulations and internal policies.
        </p>
      </section>

      {/* 5. Your Rights */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <ul className="list-disc list-inside space-y-2 text-bodydark">
          <li>Access your personal data.</li>
          <li>Request correction of inaccurate or incomplete data.</li>
          <li>Request deletion of your data, subject to legal or contractual obligations.</li>
          <li>Opt out of marketing communications at any time.</li>
          <li>Exercise data portability rights (if applicable in your region).</li>
        </ul>
      </section>

      {/* 6. Data Security */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p className="text-bodydark">
          We implement reasonable security measures (e.g., encryption in transit and encryption at rest) to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure.
        </p>
      </section>

      {/* 7. Children's Privacy */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Children&apos;s Privacy</h2>
        <p className="text-bodydark">
          Our platform is not intended for individuals under 13 years of age. We do not knowingly collect data from children. If you believe we have inadvertently collected information from a minor, please contact us immediately so we can delete it.
        </p>
      </section>

      {/* 8. International Users */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">International Users</h2>
        <p className="text-bodydark">
          If you access our platform from outside the United States, please note that your information may be transferred to and processed in the United States or other jurisdictions. By using our platform, you consent to such transfers.
        </p>
      </section>

      {/* 9. Changes to This Privacy Policy */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
        <p className="text-bodydark">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date. We encourage you to periodically review this page for the latest information on our privacy practices.
        </p>
      </section>

      {/* 10. Contact Us */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-bodydark">
          If you have questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <p className="text-primary">
          <a href="mailto:mathewlewallen@cloudcontext.cc" className="hover:underline">
            mathewlewallen@cloudcontext.cc
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
