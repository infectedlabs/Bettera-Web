'use client';

import React, { useState } from 'react';

export default function BloodSugarSpikesPrevention() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "What causes blood sugar spikes after meals?",
      answer: "Blood sugar spikes occur when carbohydrates are digested quickly without adequate fiber, protein, or fat to slow absorption. Common causes include eating high-GI foods alone, large portions of refined carbs, and consuming sugary beverages on empty stomach."
    },
    {
      question: "How quickly can I lower blood sugar after a meal?",
      answer: "Eat vegetables and protein before carbohydrates. A study found that eating vegetables and protein before carbs reduced post-meal glucose by 29% and insulin response by 20% compared to eating carbohydrates first."
    },
    {
      question: "Does apple cider vinegar really help with blood sugar?",
      answer: "Yes. Research shows consuming 1-2 tablespoons of apple cider vinegar before meals can reduce post-meal glucose spikes by 20-30%. The acetic acid slows stomach emptying and improves insulin sensitivity."
    },
    {
      question: "What is the best order to eat food to prevent blood sugar spikes?",
      answer: "The optimal order is: 1) Fiber-rich vegetables, 2) Lean protein, 3) Healthy fats, 4) Complex carbohydrates last. This sequence slows glucose absorption and provides sustained energy release."
    },
    {
      question: "How much should I walk after eating to lower blood sugar?",
      answer: "A meta-analysis found that 2-5 minutes of light walking after meals reduced post-meal blood glucose by 17% on average compared to sitting. The effect is dose-dependent - more walking provides greater benefits."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-[#d4ff00] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              How to Prevent Blood Sugar Spikes After Meals
            </h1>
            <p className="text-black text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Evidence-based strategies to stabilize blood glucose. Simple habits that make a measurable difference in your daily energy levels.
            </p>
            
            {/* Download CTA */}
            <div className="bg-black text-[#d4ff00] p-8 rounded-2xl inline-block">
              <h2 className="text-2xl font-bold mb-4">
                Stabilize Your Blood Sugar Naturally
              </h2>
              <p className="mb-6">
                Bettera helps you understand and prevent blood sugar spikes with personalized meal timing and food combinations.
              </p>
              <button 
                className="w-full bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
              >
                Download Bettera App
              </button>
              <p className="text-sm mt-4">
                📊 Glucose tracking • 🍽 Food pairing • ⏰ Meal timing reminders
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
              A study published in Diabetes Care (Shukla et al., 2017) found that eating vegetables and protein before carbohydrates at the same meal reduced post-meal glucose by 29% and insulin response by 20% compared to eating carbohydrates first.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-black mb-6">Evidence-Based Strategies to Prevent Blood Sugar Spikes</h2>
          
          <h3 className="text-2xl font-semibold text-black mb-4">1. Eat Vegetables First (Reduces Spikes by 20-30%)</h3>
          <p className="text-gray-700 mb-6">
            Starting meals with non-starchy vegetables creates a fiber buffer that slows carbohydrate absorption. Leafy greens, broccoli, bell peppers, and other low-GI vegetables provide essential nutrients while preparing your digestive system for the carbohydrates to follow.
          </p>

          <h3 className="text-2xl font-semibold text-black mb-4">2. Post-Meal Walking (Reduces Spikes by 17%)</h3>
          <p className="text-gray-700 mb-6">
            A 2022 meta-analysis found that 2-5 minutes of light walking after meals reduced post-meal blood glucose by 17% on average compared to sitting. This single habit costs nothing and produces measurable glycemic improvement immediately.
          </p>

          <h3 className="text-2xl font-semibold text-black mb-4">3. Pair Carbohydrates with Protein and Fat</h3>
          <p className="text-gray-700 mb-6">
            When you eat carbohydrates, always include protein and healthy fats. This combination slows stomach emptying and reduces the overall glycemic impact of your meal, preventing sharp glucose spikes.
          </p>

          <h3 className="text-2xl font-semibold text-black mb-4">4. Choose Low GI Carbohydrates</h3>
          <p className="text-gray-700 mb-6">
            Select whole grains, legumes, and low-GI fruits over refined carbohydrates. Small portion sizes of high-GI foods can be manageable when paired with adequate fiber, protein, and fat.
          </p>

          <h3 className="text-2xl font-semibold text-black mb-4">5. Apple Cider Vinegar Before Meals</h3>
          <p className="text-gray-700 mb-6">
            Consuming 1-2 tablespoons of apple cider vinegar 15-20 minutes before meals can reduce the glycemic response of the following meal by 20-30%. The acetic acid slows digestion and improves insulin sensitivity.
          </p>

          <h3 className="text-2xl font-semibold text-black mb-4">6. Meal Timing and Frequency</h3>
          <p className="text-gray-700 mb-6">
            Eating larger meals earlier in the day and avoiding eating within 2 hours of sleep aligns with your body's natural insulin sensitivity rhythm. Three balanced meals per day prevent glucose variability associated with skipping meals.
          </p>

          {/* Mid-content CTA */}
          <div className="bg-black text-[#d4ff00] p-8 rounded-2xl my-8">
            <h3 className="text-2xl font-bold mb-4">
              Master Your Blood Sugar Control
            </h3>
            <p className="mb-6">
              Bettera's AI analyzes your meal patterns and suggests optimal food combinations and timing to prevent glucose spikes throughout your day.
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
                Start Tracking
              </button>
            </div>
            <p className="text-sm mt-4">
              📈 Spike prevention • 🍽 Smart meal timing • 📊 Glucose monitoring
            </p>
          </div>

          <h2 className="text-3xl font-bold text-black mb-6">Foods That Help Stabilize Blood Sugar</h2>
          
          <h3 className="text-2xl font-semibold text-black mb-4">Fiber-Rich Foods</h3>
          <div className="space-y-2 mb-6">
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Legumes:</strong> Lentils, chickpeas, black beans (GI 25-40)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Whole grains:</strong> Steel-cut oats, barley, quinoa, brown rice</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Vegetables:</strong> Broccoli, spinach, bell peppers, zucchini</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Nuts and seeds:</strong> Almonds, walnuts, chia seeds, flaxseeds</span>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-black mb-4">Protein Sources</h3>
          <div className="space-y-2 mb-6">
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Fatty fish:</strong> Salmon, sardines, mackerel (omega-3s)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Greek yogurt:</strong> Probiotics support gut health</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Eggs:</strong> Complete protein, no impact on glucose</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Lean poultry:</strong> Chicken breast, turkey breast</span>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-black mb-4">Healthy Fats</h3>
          <div className="space-y-2 mb-6">
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Olive oil:</strong> Monounsaturated fats reduce insulin resistance</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Avocado:</strong> Healthy fats and fiber</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Nuts and seeds:</strong> Omega-3s and fiber</span>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h3>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full text-left p-4 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-black">{faq.question}</h3>
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
              Stop Blood Sugar Spikes for Good
            </h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Take control of your glucose response with evidence-based strategies and personalized meal planning from Bettera.
            </p>
            <button 
              className="bg-black text-[#d4ff00] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
            >
              Get Started with Bettera
            </button>
            <p className="text-sm mt-4">
              ⚡ Spike prevention • 📈 Energy stability • 🍽 Smart food combinations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
