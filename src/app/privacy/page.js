export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Information We Collect</h2>
            <p className="mb-4">
              Bettera collects information you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Health information (blood test results, health conditions)</li>
              <li>Personal information (name, email, age)</li>
              <li>Food preferences and dietary restrictions</li>
              <li>Usage data and app interactions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create personalized meal plans based on your health conditions</li>
              <li>Provide nutrition guidance and recommendations</li>
              <li>Improve our services and user experience</li>
              <li>Communicate with you about your account and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your health data is encrypted and stored securely.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Data Sharing</h2>
            <p>
              We do not sell, rent, or share your personal health information with third parties for marketing purposes. We may share anonymized, aggregated data for research purposes to improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Your Rights</h2>
            <p className="mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and data</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or your data rights, please contact us at support@bettera.app
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
