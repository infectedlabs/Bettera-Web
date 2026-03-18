export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Acceptance of Terms</h2>
            <p>
              By downloading and using Bettera, you agree to these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Service Description</h2>
            <p>
              Bettera provides AI-powered nutrition guidance and personalized meal planning based on your health conditions, blood test results, and food preferences. We are not a medical service and do not provide medical diagnosis or treatment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Medical Disclaimer</h2>
            <p className="mb-4">
              <strong>IMPORTANT:</strong> Bettera is a nutrition planning tool, not a medical device. Our meal plans are:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>For informational and educational purposes only</li>
              <li>Not a substitute for professional medical advice</li>
              <li>Not intended to diagnose, treat, cure, or prevent any disease</li>
              <li>Not suitable for emergency medical situations</li>
            </ul>
            <p className="mt-4">
              Always consult your healthcare provider before making significant dietary changes, especially if you have chronic conditions or take medication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">User Responsibilities</h2>
            <p className="mb-4">
              As a user, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete health information</li>
              <li>Use the service for personal, non-commercial purposes only</li>
              <li>Not share your account credentials with others</li>
              <li>Consult healthcare professionals for medical decisions</li>
              <li>Report any adverse reactions to your healthcare provider</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Subscription and Payments</h2>
            <p className="mb-4">
              Bettera offers both free and premium subscription options:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Free tier includes basic meal planning features</li>
              <li>Premium subscriptions provide unlimited access and advanced features</li>
              <li>Subscriptions auto-renew unless cancelled</li>
              <li>No refunds for partial subscription periods</li>
              <li>Prices may change with 30 days notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Intellectual Property</h2>
            <p>
              Bettera owns all rights to the app, its content, and technology. You may not copy, modify, distribute, or create derivative works without our written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Limitation of Liability</h2>
            <p>
              Bettera is not liable for any health outcomes, nutritional deficiencies, or medical complications that may result from following our meal plans. Your use of the service is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Termination</h2>
            <p>
              We may terminate or suspend your account if you violate these terms. You can delete your account at any time through the app settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Changes to Terms</h2>
            <p>
              We may update these terms periodically. Changes will be effective immediately upon posting. Your continued use of the service constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at legal@bettera.app
            </p>
          </section>

          <section className="border-t pt-8">
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
