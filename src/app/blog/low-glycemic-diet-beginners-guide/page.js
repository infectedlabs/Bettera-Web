'use client';

import React, { useState } from 'react';

export default function LowGlycemicDietBeginners() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "What is considered low glycemic?",
      answer: "A low glycemic diet prioritizes foods with a glycemic index below 55, which produce a gradual, controlled rise in blood glucose compared to high GI foods. These foods help maintain stable blood sugar levels throughout the day."
    },
    {
      question: "How quickly does low GI food affect blood sugar?",
      answer: "Low GI foods typically raise blood glucose gradually over 2-3 hours, providing sustained energy without sharp spikes. This steady release helps prevent energy crashes and reduces insulin demand."
    },
    {
      question: "Can I eat fruit on a low glycemic diet?",
      answer: "Yes! Many fruits are low GI including cherries (20), grapefruit (25), apples (38), pears (38), and berries (40). Higher GI fruits like bananas and watermelon should be eaten in smaller portions with protein."
    },
    {
      question: "How do I start a low glycemic diet?",
      answer: "Start by replacing refined grains with whole grains, add more vegetables to meals, choose low GI fruits, and pair carbohydrates with protein and healthy fats. Gradual changes are more sustainable than complete overhauls."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-[#d4ff00] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Low Glycemic Diet: Complete Beginner's Guide
            </h1>
            <p className="text-black text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Learn how to stabilize blood sugar with low GI foods. Evidence-based strategies for sustained energy, reduced cravings, and better glucose control.
            </p>
            
            {/* Download CTA */}
            <div className="bg-black text-[#d4ff00] p-8 rounded-2xl inline-block">
              <h2 className="text-2xl font-bold mb-4">
                Start Your Low Glycemic Journey
              </h2>
              <p className="mb-6">
                Bettera creates personalized low GI meal plans based on your health goals and blood sugar patterns.
              </p>
              <button 
                className="w-full bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
              >
                Download Bettera App
              </button>
              <p className="text-sm mt-4">
                📱 Blood sugar tracking • 🍎 Low GI recipes • 📊 Progress monitoring
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-8">
            <p className="text-lg font-semibold text-black mb-4">
              <em>"A low glycemic diet prioritizes foods with a glycemic index below 55, which produce a gradual, controlled rise in blood glucose compared to high GI foods. A systematic review of 27 randomized trials found that replacing high-GI foods with low-GI alternatives improved HbA1c, fasting glucose, and LDL cholesterol significantly in people with Type 2 Diabetes (Brand-Miller et al., 2003)."</em>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-black mb-6">Understanding the Glycemic Index</h2>
          
          <h3 className="text-2xl font-semibold text-black mb-4">What is Glycemic Index?</h3>
          <p className="text-gray-700 mb-6">
            The glycemic index (GI) is a scale from 0 to 100 that measures how quickly a carbohydrate-containing food raises blood glucose levels compared to pure glucose. Foods are classified as:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span><strong>Low GI:</strong> 0-55</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span><strong>Medium GI:</strong> 56-69</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span><strong>High GI:</strong> 70-100</span>
              </div>
            </div>
          </div>
          <p className="text-gray-700 mb-6">
            For people with diabetes or insulin resistance, focusing on low and medium GI foods helps maintain stable blood glucose levels throughout the day.
          </p>

          <h3 className="text-2xl font-semibold text-black mb-4">How Glycemic Load Differs from GI</h3>
          <p className="text-gray-700 mb-6">
            Glycemic load (GL) extends glycemic index by accounting for portion size. A food can have a high GI but a low GL if it is consumed in small amounts. GL is calculated by multiplying GI by carbohydrate content per serving and dividing by 100.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="space-y-2">
              <p className="font-semibold">GL under 10 = low</p>
              <p className="font-semibold">GL 11-19 = medium</p>
              <p className="font-semibold">GL 20+ = high</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-black mb-6">Benefits of a Low Glycemic Diet</h2>
          
          <h3 className="text-2xl font-semibold text-black mb-4">Stable Blood Sugar Control</h3>
          <p className="text-gray-700 mb-6">
            Low GI foods prevent sharp blood sugar spikes and crashes, providing sustained energy throughout the day. This stability reduces insulin demand and helps prevent energy fluctuations that lead to cravings and overeating.
          </p>

          <h3 className="text-2xl font-semibold text-black mb-4">Reduced Risk of Chronic Diseases</h3>
          <p className="text-gray-700 mb-6">
            Studies show that low GI diets reduce risk factors for cardiovascular disease, Type 2 diabetes, and certain cancers. The anti-inflammatory nature of many low GI foods contributes to long-term health protection.
          </p>

          <h3 className="text-2xl font-semibold text-black mb-4">Improved Weight Management</h3>
          <p className="text-gray-700 mb-6">
            Low GI foods tend to be more filling and satisfying, reducing overall calorie intake without hunger. The steady glucose levels help prevent fat storage and support healthy weight management.
          </p>

          <h3 className="text-2xl font-semibold text-black mb-4">Better Energy and Mental Clarity</h3>
          <p className="text-gray-700 mb-6">
            By avoiding blood sugar spikes and crashes, you maintain consistent energy levels and mental focus throughout the day. Many people report improved concentration and reduced brain fog when following a low GI diet.
          </p>

          <h2 className="text-3xl font-bold text-black mb-6">How to Start a Low Glycemic Diet</h2>
          
          <h3 className="text-2xl font-semibold text-black mb-4">Step 1: Replace Refined Grains</h3>
          <div className="space-y-2 mb-6">
            <div className="flex items-start gap-2">
              <span className="text-red-600">❌</span>
              <span><strong>White bread, white rice, regular pasta</strong></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">✅</span>
              <span><strong>Whole grain bread, quinoa, brown rice, whole wheat pasta</strong></span>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-black mb-4">Step 2: Add More Vegetables</h3>
          <p className="text-gray-700 mb-6">
            Non-starchy vegetables are naturally low GI and add fiber, vitamins, and minerals to your meals. Aim to fill half your plate with vegetables at lunch and dinner.
          </p>

          <h3 className="text-2xl font-semibold text-black mb-4">Step 3: Include Protein and Healthy Fats</h3>
          <p className="text-gray-700 mb-6">
            Pair carbohydrates with protein and healthy fats to slow digestion and absorption. This combination helps you feel full longer and reduces the overall glycemic impact of your meal.
          </p>

          <h3 className="text-2xl font-semibold text-black mb-4">Step 4: Choose Low GI Fruits</h3>
          <div className="space-y-2 mb-6">
            <div className="flex items-start gap-2">
              <span className="text-green-600">✅</span>
              <span><strong>Best choices:</strong> Berries, cherries, grapefruit, apples, pears</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-yellow-600">⚠️</span>
              <span><strong>Moderate portions:</strong> Bananas, mangoes, oranges</span>
            </div>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Food Category</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Low GI Examples</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">High GI to Limit</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-300 px-4 py-2">Grains</td><td className="border border-gray-300 px-4 py-2">Quinoa, barley, steel-cut oats</td><td className="border border-gray-300 px-4 py-2">White bread, white rice, instant oatmeal</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Fruits</td><td className="border border-gray-300 px-4 py-2">Berries, cherries, apples</td><td className="border border-gray-300 px-4 py-2">Watermelon, dates, pineapple</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Vegetables</td><td className="border border-gray-300 px-4 py-2">Leafy greens, broccoli, peppers</td><td className="border border-gray-300 px-4 py-2">Potatoes, corn, winter squash</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Proteins</td><td className="border border-gray-300 px-4 py-2">Fish, chicken, eggs, legumes</td><td className="border border-gray-300 px-4 py-2">Processed meats, hot dogs, bacon</td></tr>
              </tbody>
            </table>
          </div>

          {/* Mid-content CTA */}
          <div className="bg-black text-[#d4ff00] p-8 rounded-2xl my-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Stabilize Your Blood Sugar?
            </h3>
            <p className="mb-6">
              Bettera's AI creates personalized low GI meal plans that help you maintain steady energy throughout the day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="flex-1 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
              >
                Download Bettera App
              </button>
              <button 
                className="flex-1 bg-[#d4ff00] text-black px-6 py-3 rounded-full font-bold hover:bg-[#c4ef00] transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
              >
                Get Started Free
              </button>
            </div>
            <p className="text-sm mt-4">
              📊 Blood sugar tracking • 🍎 Low GI recipes • 🎯 Personalized meal plans
            </p>
          </div>

          <h2 className="text-3xl font-bold text-black mb-6">Sample Low GI Meal Plan</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-black mb-2">Breakfast</h3>
              <p className="text-gray-700">Steel-cut oats with berries and almonds</p>
              <p className="text-sm text-gray-600">GI: ~55, Protein from nuts slows digestion</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-black mb-2">Lunch</h3>
              <p className="text-gray-700">Grilled chicken salad with quinoa and olive oil dressing</p>
              <p className="text-sm text-gray-600">GI: ~45, Balanced meal with protein and fiber</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-black mb-2">Dinner</h3>
              <p className="text-gray-700">Baked salmon with roasted vegetables and barley</p>
              <p className="text-sm text-gray-600">GI: ~50, Omega-3s reduce inflammation</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-black mb-2">Snack</h3>
              <p className="text-gray-700">Greek yogurt with mixed berries</p>
              <p className="text-sm text-gray-600">GI: ~35, Probiotics support gut health</p>
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
              Transform Your Health with Low GI Eating
            </h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Join thousands who have stabilized their blood sugar and improved their energy levels with Bettera's personalized nutrition planning.
            </p>
            <button 
              className="bg-black text-[#d4ff00] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
            >
              Get Started with Bettera
            </button>
            <p className="text-sm mt-4">
              ⚡ 7-day free trial • 📱 Android & iOS • 📈 Energy stabilization
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
