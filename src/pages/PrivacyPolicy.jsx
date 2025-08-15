import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8 md:p-10">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          <div className="prose prose-indigo max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              We value your privacy and ensure that your personal data is kept secure and confidential.
              Below you'll find detailed information about how we collect, use, and protect your information.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information to provide better services to all our users. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Personal information you provide when creating an account</li>
                <li>Usage data and analytics about how you interact with our services</li>
                <li>Device information for security and optimization purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                Your information helps us to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Provide, maintain, and improve our services</li>
                <li>Develop new features and functionality</li>
                <li>Protect against fraud and abuse</li>
                <li>Communicate with you about updates and offers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Data Security</h2>
              <p className="text-gray-600">
                We implement industry-standard security measures to protect your data, including encryption,
                access controls, and regular security audits. However, no method of transmission over the
                internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <div className="mt-12 pt-6 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-gray-500 text-sm mt-2">
                If you have any questions about our privacy policy, please contact us at privacy WearEdge@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}