'use client';

import React, { useState } from 'react';

export default function MediterraneanDietDiabetes() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "Is the Mediterranean diet good for diabetes?",
      answer: "Yes. Multiple studies show the Mediterranean diet improves HbA1c by 0.3-0.6% and reduces cardiovascular risk in people with diabetes. It's one of the most evidence-based dietary patterns for diabetes management."
    },
    {
      question: "What foods are eaten on the Mediterranean diet?",
      answer: "The diet emphasizes olive oil, vegetables, fruits, whole grains, legumes, nuts, seeds, fish, and moderate poultry and dairy. It limits red meat, processed foods, and added sugars while allowing moderate red wine consumption."
    },
    {
      question: "How much olive oil should I use?",
      answer: "Aim for 3-4 tablespoons of extra virgin olive oil daily. Use it as primary cooking fat and for dressings. The PREDIMED study found that olive oil-rich Mediterranean diet reduced diabetes risk by 52%."
    },
    {
      question: "Can I eat carbs on the Mediterranean diet?",
      answer: "Yes, but focus on whole grains, legumes, and fruits rather than refined carbohydrates. The diet typically provides 45-60% of calories from carbohydrates, primarily from high-fiber, low-GI sources."
    },
    {
      question: "How quickly does the Mediterranean diet work for diabetes?",
      answer: "Improvements in blood glucose can be seen within 3 months, with significant HbA1c reductions occurring after 6 months of consistent adherence. Cardiovascular risk reduction continues with long-term adherence."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-[#d4ff00] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Mediterranean Diet for Diabetes: Complete Guide
            </h1>
            <p className="text-black text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              How the Mediterranean diet helps manage diabetes. Evidence-based benefits, meal planning, and practical implementation strategies for optimal blood glucose control.
            </p>
            
            {/* Download CTA */}
            <div className="bg-black text-[#d4ff00] p-8 rounded-2xl inline-block">
              <h2 className="text-2xl font-bold mb-4">
                Start Your Mediterranean Journey
              </h2>
              <p className="mb-6">
                Bettera creates Mediterranean-style meal plans personalized to your diabetes management needs and cultural preferences.
              </p>
              <button 
                className="w-full bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
              >
                Download Bettera App
              </button>
              <p className="text-sm mt-4">
                📱 Diabetes tracking • 🫒 Mediterranean recipes • 📊 Progress monitoring
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
              <em>"The PREDIMED trial found that a Mediterranean diet supplemented with extra virgin olive oil reduced the incidence of Type 2 Diabetes by 52% compared to a low-fat control diet (Salas-Salvadó et al., 2014). Participants also showed significant improvements in HbA1c, fasting glucose, and insulin sensitivity."</em>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Why the Mediterranean Diet Works for Diabetes</h2>
          
          <h3 className="text-2xl font-semibold text-white mb-4">Evidence-Based Benefits</h3>
          <p className="text-gray-300 mb-6">
            The Mediterranean diet is one of the most studied dietary patterns for diabetes management. Research consistently shows it improves glycemic control, reduces cardiovascular risk factors, and enhances quality of life for people with diabetes.
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">Key Mechanisms of Action</h3>
          <div className="space-y-2 mb-6 text-gray-300">
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>High monounsaturated fats:</strong> Olive oil improves insulin sensitivity</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Rich in antioxidants:</strong> Reduces inflammation and oxidative stress</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>High fiber content:</strong> Slows glucose absorption and improves gut health</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Omega-3 fatty acids:</strong> Support cardiovascular health</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Core Components of the Mediterranean Diet</h2>
          
          <h3 className="text-2xl font-semibold text-white mb-4">The Mediterranean Food Pyramid</h3>
          <div className="bg-gray-900 p-4 rounded-lg mb-6">
            <div className="space-y-3 text-gray-300">
              <div><strong>Daily Foundation:</strong> Vegetables, fruits, whole grains, olive oil, beans, nuts, legumes, seeds, herbs, spices</div>
              <div><strong>Weekly Moderate:</strong> Fish and seafood (2+ servings), poultry, eggs, cheese, yogurt</div>
              <div><strong>Monthly Limited:</strong> Red meats and sweets</div>
              <div><strong>Hydration:</strong> Water as primary beverage</div>
              <div><strong>Optional:</strong> Moderate red wine with meals (if appropriate)</div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Extra Virgin Olive Oil — The Foundation</h3>
          <p className="text-gray-300 mb-6">
            Extra virgin olive oil is the cornerstone of the Mediterranean diet and provides powerful anti-inflammatory and insulin-sensitizing compounds. Aim for 3-4 tablespoons daily for optimal benefits.
          </p>

          <h2 className="text-3xl font-bold text-white mb-6">Mediterranean Diet Meal Plan for Diabetes</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-900 p-4 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Breakfast Options</h4>
              <ul className="space-y-1 text-gray-300">
                <li>• Greek yogurt with berries and walnuts</li>
                <li>• Whole grain toast with avocado and tomato</li>
                <li>• Oatmeal with olive oil, cinnamon, and fruit</li>
                <li>• Vegetable omelet with olive oil and whole grain bread</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Lunch Options</h4>
              <ul className="space-y-1 text-gray-300">
                <li>• Mediterranean salad with grilled fish</li>
                <li>• Lentil soup with whole grain bread</li>
                <li>• Chickpea and vegetable stew</li>
                <li>• Quinoa bowl with roasted vegetables</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Dinner Options</h4>
              <ul className="space-y-1 text-gray-300">
                <li>• Baked salmon with roasted vegetables</li>
                <li>• Chicken with herbs and vegetables</li>
                <li>• White bean and vegetable pasta</li>
                <li>• Grilled fish with Greek salad</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Snack Options</h4>
              <ul className="space-y-1 text-gray-300">
                <li>• Handful of nuts and seeds</li>
                <li>• Fresh fruit with small cheese portion</li>
                <li>• Hummus with vegetable sticks</li>
                <li>• Greek yogurt with honey</li>
              </ul>
            </div>
          </div>

          {/* Mid-content CTA */}
          <div className="bg-[#d4ff00] text-black p-8 rounded-2xl my-8">
            <h3 className="text-2xl font-bold mb-4">
              Transform Your Diabetes Management
            </h3>
            <p className="mb-6">
              Bettera's AI creates Mediterranean-style meal plans that optimize your blood glucose while preserving the joy of eating delicious, satisfying foods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="flex-1 bg-black text-[#d4ff00] px-6 py-3 rounded-full font-bold hover:bg-gray-900 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
              >
                Download Bettera App
              </button>
              <button 
                className="flex-1 bg-black text-[#d4ff00] px-6 py-3 rounded-full font-bold hover:bg-gray-900 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
              >
                Get Mediterranean Plan
              </button>
            </div>
            <p className="text-sm mt-4">
              🫒 Olive oil rich • 🐟 Omega-3 focused • 📊 Glucose optimized
            </p>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Mediterranean Diet and Blood Sugar Control</h2>
          
          <h3 className="text-2xl font-semibold text-white mb-4">Impact on HbA1c</h3>
          <p className="text-gray-300 mb-6">
            Studies show the Mediterranean diet reduces HbA1c by 0.3-0.6% in people with Type 2 diabetes. This improvement is comparable to some diabetes medications and comes with additional cardiovascular benefits.
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">Cardiovascular Protection</h3>
          <p className="text-gray-300 mb-6">
            People with diabetes have 2-4 times higher risk of cardiovascular disease. The Mediterranean diet reduces this risk by improving blood pressure, cholesterol levels, and inflammation markers.
          </p>

          <h2 className="text-3xl font-bold text-white mb-6">Practical Implementation Tips</h2>
          
          <h3 className="text-2xl font-semibold text-white mb-4">Getting Started</h3>
          <div className="space-y-2 mb-6 text-gray-300">
            <div className="flex items-start gap-2">
              <span className="text-green-600">1.</span>
              <span>Replace butter with extra virgin olive oil</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">2.</span>
              <span>Add vegetables to every meal</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">3.</span>
              <span>Choose fish over red meat twice weekly</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">4.</span>
              <span>Snack on nuts and fruit instead of processed snacks</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">5.</span>
              <span>Use herbs and spices instead of salt</span>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Mediterranean Shopping List</h3>
          <div className="bg-gray-900 p-4 rounded-lg mb-6">
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <strong>Produce:</strong>
                <ul className="ml-4">
                  <li>• Tomatoes, cucumbers, bell peppers</li>
                  <li>• Leafy greens, onions, garlic</li>
                  <li>• Eggplant, zucchini, olives</li>
                  <li>• Lemons, herbs (basil, oregano, rosemary)</li>
                </ul>
              </div>
              <div>
                <strong>Proteins & Fats:</strong>
                <ul className="ml-4">
                  <li>• Fatty fish (salmon, sardines)</li>
                  <li>• Beans, lentils, chickpeas</li>
                  <li>• Nuts (walnuts, almonds)</li>
                  <li>• Extra virgin olive oil</li>
                </ul>
              </div>
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
                      className={`w-5 h-5 text-[#d4ff00] transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
                    </svg>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="p-4 border-t border-gray-700">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="bg-[#d4ff00] text-black p-8 rounded-2xl mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Embrace the Mediterranean Lifestyle
            </h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Start your journey to better diabetes management with delicious Mediterranean meals personalized to your health needs and preferences.
            </p>
            <button 
              className="bg-black text-[#d4ff00] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
            >
              Get Started with Bettera
            </button>
            <p className="text-sm mt-4">
              ⚡ 7-day free trial • 📱 Android & iOS • 🫒 Mediterranean optimized
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
