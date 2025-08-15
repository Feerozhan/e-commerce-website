import React from "react";

export default function ReturnsPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-8 md:p-10">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Returns & Refunds Policy
            </h1>
            <div className="w-24 h-1.5 bg-rose-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              We want you to be completely satisfied with your purchase. If you're not happy with your order,
              you may return eligible items within 30 days of receipt for a full refund or exchange.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-6 h-6 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mr-3">
                  1
                </span>
                Return Eligibility
              </h2>
              <ul className="list-disc pl-8 space-y-3 text-gray-600">
                <li>Items must be returned within 30 days of delivery</li>
                <li>Products must be unused, in original condition with all tags attached</li>
                <li>Original proof of purchase is required</li>
                <li>Certain items like undergarments or personalized products may not be returnable</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-6 h-6 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mr-3">
                  2
                </span>
                Return Process
              </h2>
              <ol className="list-decimal pl-8 space-y-3 text-gray-600">
                <li>Contact our customer service to initiate your return</li>
                <li>Pack the item securely in its original packaging</li>
                <li>Include the original invoice or packing slip</li>
                <li>Ship the package to our returns center (cha faqeer wala choti zareen)</li>
              </ol>
              <p className="mt-4 text-gray-500 text-sm">
                Note: Return shipping costs are the customer's responsibility unless the return is due to our error.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-6 h-6 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mr-3">
                  3
                </span>
                Refund Information
              </h2>
              <div className="bg-rose-50 p-5 rounded-lg border border-rose-100">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Refunds are processed within 5-7 business days after we receive your return</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Your refund will be credited to your original payment method</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Shipping charges are non-refundable unless the return is due to our error</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-6 h-6 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mr-3">
                  4
                </span>
                Exchanges
              </h2>
              <p className="text-gray-600 mb-4">
                We're happy to exchange items for a different size or color, subject to availability.
              </p>
              <p className="text-gray-600">
                Please follow the standard return process and include a note specifying your desired exchange.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-2">
                Contact our customer service team for any return-related questions:
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>Email: return  WearEdge@gmail.com </li>
                <li>Phone: +92 123-4567</li>
                <li>Hours: Monday-Friday, 9AM-5PM EST</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}