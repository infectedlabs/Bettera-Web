'use client';

import React, { useState } from 'react';

export default function HbA1cNormalRange() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "How quickly can HbA1c levels change?",
      answer: "HbA1c reflects average blood glucose over the previous 3 months because it measures the percentage of hemoglobin — protein in red blood cells — that has glucose attached to it. Red blood cells live approximately 90 days, so HbA1c captures a 3-month blood sugar average. Expecting HbA1c improvement faster than 3 months is not physiologically accurate."
    },
    {
      question: "What HbA1c level requires medication?",
      answer: "Generally, HbA1c above 7.0% requires medication intervention, though this varies by individual circumstances. Levels between 6.5-7.0% may be managed with diet and lifestyle changes alone, especially in early-stage diabetes. Always consult your healthcare provider for personalized treatment decisions."
    },
    {
      question: "Can exercise lower HbA1c?",
      answer: "Yes. Regular physical activity improves insulin sensitivity and helps lower blood glucose levels, which gradually reflects in lower HbA1c values. Combined with dietary changes, exercise can reduce HbA1c by 0.5-2.0 percentage points over 3-6 months."
    },
    {
      question: "How often should HbA1c be tested?",
      answer: "For people with diabetes, HbA1c should be tested every 3 months to monitor treatment effectiveness. For those with stable readings, testing every 6 months may be sufficient. More frequent testing may be needed during treatment changes."
    },
    {
      question: "What factors affect HbA1c accuracy?",
      answer: "Recent blood transfusions, anemia, kidney disease, and certain blood disorders can affect HbA1c accuracy. Always inform your healthcare provider about these conditions when interpreting results."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-[#d4ff00] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              HbA1c Normal Range: What Your Result Means
            </h1>
            <p className="text-black text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Understanding your HbA1c test results. Complete guide to normal ranges, diabetes diagnosis, and what your numbers mean for your health.
            </p>
            
            {/* Download CTA */}
            <div className="bg-black text-[#d4ff00] p-8 rounded-2xl inline-block">
              <h2 className="text-2xl font-bold mb-4">
                Track Your HbA1c Progress
              </h2>
              <p className="mb-6">
                Bettera analyzes your blood reports and tracks HbA1c trends over time. Get personalized meal plans based on your results.
              </p>
              <button 
                className="w-full bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
              >
                Download Bettera App
              </button>
              <p className="text-sm mt-4">
                📊 Blood report analysis • 📈 HbA1c tracking • 🍽 Personalized meal plans
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
            <p className="text-lg font-semibold text-black mb-4">
              A normal HbA1c level is below 5.7%. An HbA1c between 5.7% and 6.4% indicates pre-diabetes. An HbA1c of 6.5% or above on two separate tests is diagnostic of Type 2 Diabetes, according to American Diabetes Association Standards of Medical Care (2024).
            </p>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Understanding HbA1c Test Results</h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">HbA1c Result</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">What It Means</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Action Required</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-300 px-4 py-2">Below 5.7%</td><td className="border border-gray-300 px-4 py-2">Normal</td><td className="border border-gray-300 px-4 py-2">Maintain healthy lifestyle</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">5.7% - 6.4%</td><td className="border border-gray-300 px-4 py-2">Pre-diabetes</td><td className="border border-gray-300 px-4 py-2">Lifestyle changes — reversible</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">6.5% or above</td><td className="border border-gray-300 px-4 py-2">Diabetes</td><td className="border border-gray-300 px-4 py-2">Medical care + dietary plan</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Below 7.0%</td><td className="border border-gray-300 px-4 py-2">Well-controlled diabetes</td><td className="border border-gray-300 px-4 py-2">Continue current plan</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">7.0% - 8.0%</td><td className="border border-gray-300 px-4 py-2">Needs improvement</td><td className="border border-gray-300 px-4 py-2">Review diet and activity</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Above 8.0%</td><td className="border border-gray-300 px-4 py-2">Poorly controlled</td><td className="border border-gray-300 px-4 py-2">Urgent medical review</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">What HbA1c Measures</h3>
          <p className="text-gray-700 mb-6">
            HbA1c reflects average blood glucose over the previous 3 months because it measures the percentage of hemoglobin — protein in red blood cells — that has glucose attached to it. Red blood cells live approximately 90 days, so HbA1c captures a 3-month blood sugar average.
          </p>
          <p className="text-gray-700 mb-6">
            This makes HbA1c a valuable long-term indicator of glucose control, unlike finger-prick blood glucose tests which only show current levels. HbA1c helps healthcare providers assess how well diabetes management strategies are working over time.
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">Expected Timeline for HbA1c Changes</h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-gray-700">
              Dietary changes take a minimum of 3 months to show measurable improvement in HbA1c values. A reduction of 0.5 to 2.0 percentage points is achievable through dietary intervention alone in people with Type 2 Diabetes (ADA, 2024).
            </p>
          </div>
          <p className="text-gray-700 mb-8">
            This timeline reflects the natural lifecycle of red blood cells — approximately 90 days — and how quickly dietary changes can affect the proportion of hemoglobin with attached glucose. Significant HbA1c improvements typically require consistent dietary adherence over multiple testing cycles.
          </p>

          <h2 className="text-3xl font-bold text-white mb-6">Clinical Significance of HbA1c Levels</h2>
          
          <h3 className="text-2xl font-semibold text-white mb-4">Diabetes Diagnosis Criteria</h3>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-6">
            <p className="text-black">
              <strong>Important:</strong> Diabetes diagnosis requires two separate HbA1c tests of 6.5% or above, unless there are clear symptoms of hyperglycemia. A single test result should be confirmed with a repeat test for accurate diagnosis.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">HbA1c and Cardiovascular Risk</h3>
          <p className="text-gray-700 mb-6">
            Every 1% reduction in HbA1c reduces cardiovascular disease risk by approximately 14% in people with diabetes. This relationship underscores the importance of maintaining optimal HbA1c levels not just for glucose control, but for long-term health outcomes.
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">HbA1c vs Daily Blood Glucose</h3>
          <p className="text-gray-700 mb-6">
            While HbA1c shows 3-month averages, daily blood glucose monitoring provides immediate feedback for meal timing, medication adjustments, and exercise decisions. Both measurements together give the most complete picture of glucose control.
          </p>

          {/* Mid-content CTA */}
          <div className="bg-black text-[#d4ff00] p-8 rounded-2xl my-8">
            <h3 className="text-2xl font-bold mb-4">
              Optimize Your HbA1c with Bettera
            </h3>
            <p className="mb-6">
              Bettera tracks your HbA1c trends and adjusts meal plans based on your progress. See how dietary changes impact your long-term glucose control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="flex-1 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
              >
                Track HbA1c
              </button>
              <button 
                className="flex-1 bg-[#d4ff00] text-black px-6 py-3 rounded-full font-bold hover:bg-[#c4ef00] transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
              >
                Get Meal Plan
              </button>
            </div>
            <p className="text-sm mt-4">
              📈 Progress tracking • 🎯 Goal setting • 🍽 Personalized adjustments
            </p>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">How Bettera Helps Manage HbA1c</h2>
          <p className="text-gray-700 mb-6">
            Bettera integrates with your blood test results to create personalized nutrition strategies that target HbA1c improvement. The app analyzes your current HbA1c, trends over time, and other biomarkers to generate meal plans designed for optimal glucose control.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Blood Report Analysis</h4>
              <p className="text-gray-700">
                Upload your latest blood test results and Bettera's AI analyzes over 50 biomarkers to understand your metabolic profile.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Progress Tracking</h4>
              <p className="text-gray-700">
                Monitor how dietary changes affect your HbA1c over time with visual progress charts and trend analysis.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-700 rounded-lg bg-gray-900">
                <button
                  className="w-full text-left p-4 hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-white">{faq.question}</h3>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
                    </svg>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="p-4 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="bg-[#d4ff00] text-black p-8 rounded-2xl mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Take Control of Your Blood Sugar Today
            </h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Start your journey to better HbA1c levels with personalized nutrition planning based on your blood test results.
            </p>
            <button 
              className="bg-black text-[#d4ff00] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
            >
              Get Started with Bettera
            </button>
            <p className="text-sm mt-4">
              ⚡ 7-day free trial • 📱 Android & iOS • 📊 Progress tracking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
