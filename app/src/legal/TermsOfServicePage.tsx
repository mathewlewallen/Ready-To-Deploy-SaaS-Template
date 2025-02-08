import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-boxdark text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">
        Welcome to <strong>Cloud Context</strong>. By accessing or using our platform, you agree to be bound by these 
        Terms of Service, “Terms”. Please read them carefully.
      </p>

      {/* 1. Acceptance of Terms */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="text-bodydark">
          By using Cloud Context, you agree to comply with these Terms and all applicable laws and regulations. 
          If you do not agree, you may not use our services.
        </p>
      </section>

      {/* 2. Changes to Terms */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">2. Changes to Terms</h2>
        <p className="text-bodydark">
          We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. 
          Your continued use of our platform constitutes acceptance of the updated Terms. If you disagree with the revised Terms, 
          please discontinue using our platform.
        </p>
      </section>

      {/* 3. User Accounts */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
        <ul className="list-disc list-inside space-y-2 text-bodydark">
          <li>To access certain features, you may need to create an account.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
          <li>You must notify us immediately of any unauthorized use of your account.</li>
        </ul>
      </section>

      {/* 4. Prohibited Activities */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">4. Prohibited Activities</h2>
        <p className="text-bodydark">You agree not to:</p>
        <ul className="list-disc list-inside space-y-2 text-bodydark">
          <li>Use our platform for any unlawful purpose.</li>
          <li>Attempt to interfere with or disrupt the platform&apos;s security or functionality.</li>
          <li>Engage in activities that violate the rights of others, including intellectual property rights or privacy rights.</li>
        </ul>
      </section>

      {/* 5. Intellectual Property */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
        <p className="text-bodydark">
          All content on Cloud Context—including text, graphics, logos, software, and any other materials—is the property 
          of Cloud Context or its licensors. You may not reproduce, distribute, or create derivative works without our 
          express written permission.
        </p>
      </section>

      {/* 6. Termination */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
        <p className="text-bodydark">
          We reserve the right to suspend or terminate your access to Cloud Context at our sole discretion, without notice, 
          for any reason, including violations of these Terms. Upon termination, your right to use the platform will 
          immediately cease.
        </p>
      </section>

      {/* 7. Limitation of Liability */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
        <p className="text-bodydark">
          Cloud Context is provided “as is” and “as available,” without warranties of any kind, either express or implied. 
          To the fullest extent permitted by law, Cloud Context and its affiliates, officers, employees, and agents shall 
          not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related 
          to your use of our platform. This limitation applies regardless of the form of action or theory of liability.
        </p>
      </section>

      {/* 8. Governing Law */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
        <p className="text-bodydark">
          These Terms shall be governed by and construed in accordance with the laws of <strong>the United States of America (U.S.A.)</strong>, 
          without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts 
          located in <strong>Texas, U.S.A.</strong> for any disputes arising out of or related to these Terms.
        </p>
      </section>

      {/* 9. Contact Information */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
        <p className="text-bodydark">
          If you have any questions about these Terms, please contact us at:
        </p>
        <p className="text-primary">
          <a href="mailto:mathewlewallen@cloudcontext.cc" className="hover:underline">
            mathewlewallen@cloudcontext.cc
          </a>
        </p>
      </section>

      {/* 10. Entire Agreement */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">10. Entire Agreement</h2>
        <p className="text-bodydark">
          These Terms constitute the entire agreement between you and Cloud Context regarding your use of our platform, 
          superseding any prior agreements or understandings, whether written or oral.
        </p>
      </section>
    </div>
  );
};

export default TermsOfServicePage;
