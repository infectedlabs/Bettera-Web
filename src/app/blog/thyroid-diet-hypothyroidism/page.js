'use client';

import React, { useState } from 'react';

export default function ThyroidDietHypothyroidism() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "What foods should I avoid with hypothyroidism?",
      answer: "Limit goitrogenic foods like raw cruciferous vegetables (broccoli, cauliflower, kale), soy products, and excessive iodine. Cooking cruciferous vegetables reduces their goitrogenic activity by 60-90%, making them safer to consume."
    },
    {
      question: "Can diet reverse hypothyroidism?",
      answer: "Diet cannot cure hypothyroidism but can support thyroid function and improve symptoms. Proper nutrition helps optimize medication effectiveness and may reduce required dosage in some cases. Always work with your healthcare provider."
    },
    {
      question: "How much iodine do I need for thyroid health?",
      answer: "Adults need 150mcg iodine daily. Too much iodine (over 1,000mcg daily) can worsen thyroid conditions. Focus on food sources like seafood, dairy, and iodized salt rather than high-dose supplements."
    },
    {
      question: "Is selenium important for thyroid function?",
      answer: "Yes. Selenium supplementation of 200mcg daily for 3 months reduced anti-TPO antibodies by 40% in Hashimoto's patients (Toulis et al., 2010). Brazil nuts, seafood, and organ meats are excellent selenium sources."
    },
    {
      question: "When should I take thyroid medication with food?",
      answer: "Levothyroxine must be taken on an empty stomach 30-60 minutes before the first meal. Calcium-rich foods, iron supplements, coffee, and high-fiber foods all reduce absorption by 20-40% when consumed within 1 hour of medication."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-[#d4ff00] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Thyroid Diet: Complete Guide for Hypothyroidism
            </h1>
            <p className="text-black text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Evidence-based nutrition strategies for hypothyroidism. Foods that support thyroid function and those to avoid for optimal hormone balance.
            </p>
            
            {/* Download CTA */}
            <div className="bg-black text-[#d4ff00] p-8 rounded-2xl inline-block">
              <h2 className="text-2xl font-bold mb-4">
                Get Your Thyroid-Friendly Meal Plan
              </h2>
              <p className="mb-6">
                Bettera analyzes your thyroid blood tests and creates personalized meal plans that support optimal thyroid function.
              </p>
              <button 
                className="w-full bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
              >
                Download Bettera App
              </button>
              <p className="text-sm mt-4">
                📱 Thyroid test analysis • 🍽 Hormone-supporting foods • 📊 Progress tracking
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
              <em>"Selenium supplementation of 200mcg daily for 3 months reduced anti-TPO antibodies by 40% in Hashimoto's patients (Toulis et al., 2010). Cooking cruciferous vegetables reduces their goitrogenic activity by 60-90% (Felker et al., 2016)."</em>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Understanding Hypothyroidism and Nutrition</h2>
          
          <h3 className="text-2xl font-semibold text-white mb-4">What is Hypothyroidism?</h3>
          <p className="text-gray-300 mb-6">
            Hypothyroidism occurs when the thyroid gland doesn't produce enough thyroid hormones, affecting metabolism, energy levels, and overall health. Approximately 5% of the global population has hypothyroidism, with women being 5-8 times more likely to be affected than men.
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">How Nutrition Affects Thyroid Function</h3>
          <p className="text-gray-300 mb-6">
            Proper nutrition provides essential nutrients for thyroid hormone production and conversion. Key nutrients include iodine, selenium, zinc, iron, and vitamins A, D, and B12. Deficiencies in these nutrients can impair thyroid function and worsen symptoms.
          </p>

          <h2 className="text-3xl font-bold text-white mb-6">Critical Nutrients for Thyroid Health</h2>
          
          <h3 className="text-2xl font-semibold text-white mb-4">Iodine — The Essential Thyroid Mineral</h3>
          <p className="text-gray-300 mb-6">
            Iodine is crucial for thyroid hormone production. Adults need 150mcg daily, but excessive iodine intake can worsen thyroid conditions. Focus on food sources rather than supplements unless specifically recommended.
          </p>
          <div className="bg-gray-900 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-white mb-2">Best Iodine Sources:</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Seafood (fish, seaweed, shellfish)</li>
              <li>• Dairy products (milk, yogurt, cheese)</li>
              <li>• Eggs (especially yolks)</li>
              <li>• Iodized salt (use in moderation)</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Selenium — The Protective Mineral</h3>
          <p className="text-gray-300 mb-6">
            Selenium is essential for converting T4 to active T3 and protecting the thyroid from oxidative damage. The recommended intake is 55mcg daily, but therapeutic doses of 200mcg may benefit autoimmune thyroid conditions.
          </p>
          <div className="bg-gray-900 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-white mb-2">Best Selenium Sources:</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Brazil nuts (1-2 nuts provide 200mcg)</li>
              <li>• Seafood (tuna, sardines, shrimp)</li>
              <li>• Organ meats (liver, kidney)</li>
              <li>• Eggs and sunflower seeds</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Zinc — For T3 Conversion</h3>
          <p className="text-gray-300 mb-6">
            Zinc plays a crucial role in thyroid hormone production and conversion. Zinc deficiency is common and can impair thyroid function even when iodine levels are adequate.
          </p>
          <div className="bg-gray-900 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-white mb-2">Best Zinc Sources:</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Oysters (highest source)</li>
              <li>• Red meat and poultry</li>
              <li>• Pumpkin seeds and nuts</li>
              <li>• Legumes and whole grains</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Foods to Support Thyroid Function</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-900 p-4 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Thyroid-Supporting Foods</h4>
              <ul className="space-y-1 text-gray-300">
                <li>✓ Seaweed and sea vegetables</li>
                <li>✓ Fatty fish (salmon, sardines)</li>
                <li>✓ Brazil nuts (1-2 daily)</li>
                <li>✓ Eggs and dairy</li>
                <li>✓ Lean meats and poultry</li>
                <li>✓ Legumes and beans</li>
                <li>✓ Whole grains</li>
                <li>✓ Colorful fruits and vegetables</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Foods to Limit or Modify</h4>
              <ul className="space-y-1 text-gray-300">
                <li>⚠ Raw cruciferous vegetables (cook them)</li>
                <li>⚠ Soy products (moderate amounts)</li>
                <li>⚠ Excessive iodine supplements</li>
                <li>⚠ Goitrogens in large amounts</li>
                <li>⚠ Highly processed foods</li>
                <li>⚠ Excessive sugar and refined carbs</li>
              </ul>
            </div>
          </div>

          {/* Mid-content CTA */}
          <div className="bg-[#d4ff00] text-black p-8 rounded-2xl my-8">
            <h3 className="text-2xl font-bold mb-4">
              Optimize Your Thyroid Health Through Nutrition
            </h3>
            <p className="mb-6">
              Bettera's AI analyzes your TSH, T3, T4, and antibody levels to create personalized meal plans that support optimal thyroid function.
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
                Analyze Thyroid Tests
              </button>
            </div>
            <p className="text-sm mt-4">
              🎯 Personalized nutrition • 📊 Hormone tracking • 🍽 Thyroid-supporting recipes
            </p>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Thyroid Medication and Food Timing</h2>
          
          <h3 className="text-2xl font-semibold text-white mb-4">Critical Timing Guidelines</h3>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
            <p className="text-gray-700">
              <strong>IMPORTANT:</strong> Levothyroxine (Thyronorm, Eltroxin) must be taken on an empty stomach 30-60 minutes before the first meal. Calcium-rich foods, iron supplements, coffee, and high-fiber foods all reduce levothyroxine absorption by 20-40% when consumed within 1 hour of the medication (Dietrich et al., 1995).
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Foods That Interfere with Medication</h3>
          <div className="space-y-2 mb-6 text-gray-300">
            <div className="flex items-start gap-2">
              <span className="text-red-600">•</span>
              <span><strong>Calcium supplements and dairy:</strong> Wait 4 hours after medication</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-600">•</span>
              <span><strong>Iron supplements:</strong> Wait 4 hours after medication</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-600">•</span>
              <span><strong>Coffee and tea:</strong> Wait 1 hour after medication</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-600">•</span>
              <span><strong>High-fiber foods:</strong> May reduce absorption, space them apart</span>
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
              Support Your Thyroid with Bettera
            </h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Get personalized nutrition plans based on your thyroid blood tests. Optimize your hormone levels through evidence-based dietary strategies.
            </p>
            <button 
              className="bg-black text-[#d4ff00] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
            >
              Get Started with Bettera
            </button>
            <p className="text-sm mt-4">
              ⚡ 7-day free trial • 📱 Android & iOS • 🎯 Thyroid optimization
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
