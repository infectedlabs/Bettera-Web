'use client';

import React, { useState } from 'react';

export default function InsulinResistanceDietPlan() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "What is the best diet for insulin resistance?",
      answer: "The Mediterranean diet, low-GI diet, and DASH diet all show strong evidence for improving insulin sensitivity. Key principles include: high fiber, lean proteins, healthy fats, and minimal processed foods. Consistency matters more than perfection."
    },
    {
      question: "How quickly can diet improve insulin sensitivity?",
      answer: "Insulin sensitivity can improve within 2-4 weeks of dietary changes, but significant changes take 8-12 weeks. The PREDICT study showed that individual responses to identical foods vary dramatically, emphasizing the need for personalized nutrition."
    },
    {
      question: "Can intermittent fasting help insulin resistance?",
      answer: "Yes. Time-restricted eating (8-10 hour eating window) improves insulin sensitivity by giving cells time to rest and repair. Start with 12-hour fasting and gradually extend to 16 hours as tolerated."
    },
    {
      question: "What supplements help insulin resistance?",
      answer: "Evidence supports berberine (500mg 2-3x daily), magnesium (300-400mg daily), alpha-lipoic acid (600mg daily), and omega-3 fatty acids. Always consult healthcare provider before starting supplements."
    },
    {
      question: "How much exercise is needed for insulin resistance?",
      answer: "150 minutes of moderate-intensity aerobic exercise plus 2 strength training sessions weekly significantly improves insulin sensitivity. Even 10 minutes of walking after meals reduces post-meal glucose spikes by 17%."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-[#d4ff00] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Insulin Resistance Diet Plan: Evidence-Based Guide
            </h1>
            <p className="text-black text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Comprehensive guide to managing insulin resistance through nutrition. Foods, meal timing, and lifestyle strategies to improve insulin sensitivity naturally.
            </p>
            
            {/* Download CTA */}
            <div className="bg-black text-[#d4ff00] p-8 rounded-2xl inline-block">
              <h2 className="text-2xl font-bold mb-4">
                Reverse Insulin Resistance with Bettera
              </h2>
              <p className="mb-6">
                Bettera analyzes your metabolic markers and creates personalized meal plans that improve insulin sensitivity and restore metabolic health.
              </p>
              <button 
                className="w-full bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
              >
                Download Bettera App
              </button>
              <p className="text-sm mt-4">
                📱 Metabolic analysis • 🍽 Insulin-sensitizing foods • 📊 Progress tracking
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
              <em>"The PREDICT study (Zeevi et al., 2015) demonstrated that two individuals eating identical foods can have dramatically different blood glucose responses, proving that personalized nutrition based on individual biology is significantly more effective than generic dietary guidelines."</em>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Understanding Insulin Resistance</h2>
          
          <h3 className="text-2xl font-semibold text-white mb-4">What is Insulin Resistance?</h3>
          <p className="text-gray-300 mb-6">
            Insulin resistance occurs when cells in muscle, liver, and fat tissue don't respond effectively to insulin, requiring the pancreas to produce more insulin to achieve normal blood glucose levels. This condition affects approximately 1 in 3 adults and is a precursor to Type 2 diabetes, cardiovascular disease, and metabolic syndrome.
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">How Insulin Resistance Develops</h3>
          <p className="text-gray-300 mb-6">
            Multiple factors contribute to insulin resistance: excess body weight (especially visceral fat), physical inactivity, poor diet quality, chronic stress, and inadequate sleep. The good news is that insulin resistance is reversible in most cases through targeted lifestyle interventions.
          </p>

          <h2 className="text-3xl font-bold text-white mb-6">Dietary Strategies for Insulin Sensitivity</h2>
          
          <h3 className="text-2xl font-semibold text-white mb-4">1. Prioritize High-Fiber Foods</h3>
          <p className="text-gray-300 mb-6">
            Fiber slows glucose absorption and feeds beneficial gut bacteria that improve insulin sensitivity. Aim for 25-35g fiber daily from diverse sources including vegetables, fruits, legumes, and whole grains.
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">2. Choose Low Glycemic Index Foods</h3>
          <p className="text-gray-300 mb-6">
            Low GI foods prevent sharp glucose spikes and reduce insulin demand. Focus on non-starchy vegetables, legumes, and whole grains. Pair carbohydrates with protein and healthy fats to further reduce glycemic impact.
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">3. Include Healthy Fats</h3>
          <p className="text-gray-300 mb-6">
            Omega-3 fatty acids and monounsaturated fats improve insulin sensitivity and reduce inflammation. Include fatty fish, olive oil, avocados, nuts, and seeds daily.
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">4. Optimize Meal Timing</h3>
          <p className="text-gray-300 mb-6">
            Time-restricted eating (8-10 hour eating window) improves insulin sensitivity by giving cells time to rest. Avoid eating within 3 hours of bedtime to optimize overnight insulin sensitivity.
          </p>

          <h2 className="text-3xl font-bold text-white mb-6">Best Foods for Insulin Resistance</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-900 p-4 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Excellent Choices</h4>
              <ul className="space-y-1 text-gray-300">
                <li>✓ Leafy greens (spinach, kale, Swiss chard)</li>
                <li>✓ Cruciferous vegetables (broccoli, cauliflower)</li>
                <li>✓ Berries and low-glycemic fruits</li>
                <li>✓ Legumes (lentils, chickpeas, beans)</li>
                <li>✓ Fatty fish (salmon, sardines, mackerel)</li>
                <li>✓ Nuts and seeds</li>
                <li>✓ Olive oil and avocado</li>
                <li>✓ Greek yogurt and kefir</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Foods to Limit</h4>
              <ul className="space-y-1 text-gray-300">
                <li>⚠ Refined carbohydrates (white bread, pasta)</li>
                <li>⚠ Sugary beverages and fruit juices</li>
                <li>⚠ Processed foods and fast food</li>
                <li>⚠ Excessive saturated fats</li>
                <li>⚠ Artificial sweeteners (may affect gut microbiome)</li>
                <li>⚠ Large portions of high-GI foods</li>
                <li>⚠ Fried foods and trans fats</li>
              </ul>
            </div>
          </div>

          {/* Mid-content CTA */}
          <div className="bg-[#d4ff00] text-black p-8 rounded-2xl my-8">
            <h3 className="text-2xl font-bold mb-4">
              Improve Your Insulin Sensitivity Today
            </h3>
            <p className="mb-6">
              Bettera's AI analyzes your fasting insulin, HbA1c, and metabolic markers to create personalized meal plans that reverse insulin resistance naturally.
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
                Start Reversing IR
              </button>
            </div>
            <p className="text-sm mt-4">
              🎯 Personalized nutrition • 📈 Insulin tracking • 🍽 Metabolic optimization
            </p>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Meal Timing and Frequency</h2>
          
          <h3 className="text-2xl font-semibold text-white mb-4">Time-Restricted Eating</h3>
          <p className="text-gray-300 mb-6">
            Restricting eating to an 8-10 hour window improves insulin sensitivity by allowing cells to rest and repair. Start with 12-hour fasting (8pm-8am) and gradually extend to 16 hours as tolerated.
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">Optimal Meal Frequency</h3>
          <p className="text-gray-300 mb-6">
            Three balanced meals per day work better than frequent snacking for most people with insulin resistance. If snacks are needed, choose protein-rich options like nuts, Greek yogurt, or vegetables with hummus.
          </p>

          <h2 className="text-3xl font-bold text-white mb-6">Lifestyle Factors That Impact Insulin Sensitivity</h2>
          
          <h3 className="text-2xl font-semibold text-white mb-4">Exercise</h3>
          <p className="text-gray-300 mb-6">
            Regular physical activity is crucial for improving insulin sensitivity. Aim for 150 minutes of moderate-intensity aerobic exercise plus 2 strength training sessions weekly. Even 10 minutes of walking after meals reduces post-meal glucose by 17%.
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">Sleep</h3>
          <p className="text-gray-300 mb-6">
            Poor sleep (less than 6 hours) increases insulin resistance by 25-30%. Prioritize 7-9 hours of quality sleep and maintain consistent sleep-wake times.
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">Stress Management</h3>
          <p className="text-gray-300 mb-6">
            Chronic stress elevates cortisol, which increases blood glucose and insulin resistance. Practice meditation, deep breathing, or yoga for 10-15 minutes daily.
          </p>

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
              Reverse Insulin Resistance Naturally
            </h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Join thousands who have improved their insulin sensitivity and metabolic health with Bettera's personalized nutrition planning.
            </p>
            <button 
              className="bg-black text-[#d4ff00] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
            >
              Get Started with Bettera
            </button>
            <p className="text-sm mt-4">
              ⚡ 7-day free trial • 📱 Android & iOS • 🎯 Metabolic reversal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
