'use client';

import React, { useState } from 'react';

export default function PCOSDietPlan() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "What is the relationship between PCOS and insulin resistance?",
      answer: "Insulin resistance is present in 50-70% of PCOS cases. When cells don't respond effectively to insulin, the pancreas produces more insulin, leading to elevated insulin levels that stimulate excess androgen production — the primary driver of PCOS symptoms including irregular periods, acne, and excess hair growth."
    },
    {
      question: "Can diet really help manage PCOS symptoms?",
      answer: "Yes. A randomized controlled trial by Marsh et al. (2010) found that a low-GI diet improved menstrual regularity in women with PCOS — 95% of participants on low-GI diet experienced improved cycle regularity compared to 73% on a conventional healthy diet over 12 weeks."
    },
    {
      question: "Which foods should women with PCOS avoid?",
      answer: "Women with PCOS should limit high-GI foods, processed foods, and excess dairy. Focus on anti-inflammatory foods, high-fiber vegetables, lean proteins, and healthy fats. The key is managing insulin resistance through dietary choices rather than complete food elimination."
    },
    {
      question: "Are supplements necessary for PCOS management?",
      answer: "Some supplements show evidence. Myo-inositol supplementation at 4g daily improved insulin sensitivity, reduced testosterone, and restored menstrual regularity in PCOS patients in multiple randomized controlled trials (Unfer et al., 2017). Always consult healthcare provider before starting supplements."
    },
    {
      question: "Can PCOS be reversed through diet?",
      answer: "PCOS cannot be cured, but symptoms can be effectively managed through diet and lifestyle changes. Many women achieve regular menstrual cycles, reduced androgen levels, and improved fertility through consistent dietary interventions focused on insulin sensitivity."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-[#d4ff00] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              The Complete Diet Plan for PCOS: Evidence-Based Guide
            </h1>
            <p className="text-black text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              PCOS affects approximately 1 in 10 women of reproductive age globally. Evidence-based dietary strategies for hormone balance, insulin resistance, and symptom management.
            </p>
            
            {/* Download CTA */}
            <div className="bg-black text-[#d4ff00] p-8 rounded-2xl inline-block">
              <h2 className="text-2xl font-bold mb-4">
                Get Your Personalized PCOS Meal Plan
              </h2>
              <p className="mb-6">
                Bettera analyzes your health profile and creates meal plans designed to manage PCOS symptoms through nutrition.
              </p>
              <button 
                className="w-full bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
              >
                Download Bettera App
              </button>
              <p className="text-sm mt-4">
                📱 Free 7-day trial • No credit card required • Hormone-balancing nutrition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          
          <h2 className="text-3xl font-bold text-white mb-6">The Biology of PCOS and Why Diet Matters</h2>
          
          <h3 className="text-2xl font-semibold text-white mb-4">Insulin Resistance — Present in 50-70% of PCOS Cases</h3>
          <p className="text-gray-300 mb-6">
            PCOS (Polycystic Ovary Syndrome) affects approximately 1 in 10 women of reproductive age globally — an estimated 190 million women worldwide (Bozdag et al., 2016). It is the most common hormonal disorder among women of reproductive age and the leading cause of anovulatory infertility.
          </p>
          <p className="text-gray-300 mb-6">
            Insulin resistance is a condition in which cells in muscle, liver, and fat tissue do not respond effectively to insulin, requiring the pancreas to produce more insulin to achieve normal blood glucose levels. This elevated insulin stimulates excess androgen production, driving the classic PCOS symptoms.
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">How Elevated Insulin Drives Androgen Excess</h3>
          <p className="text-gray-300 mb-6">
            When the ovaries and adrenal glands produce excess androgens (male hormones), it leads to the physical symptoms associated with PCOS: hirsutism (excess hair growth), acne, and male pattern baldness. The androgen excess also disrupts normal menstrual cycles and contributes to infertility.
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">The Inflammation Connection</h3>
          <p className="text-gray-300 mb-6">
            Chronic low-grade inflammation is present in many women with PCOS and contributes to insulin resistance. Anti-inflammatory dietary approaches can help reduce this inflammatory burden and improve metabolic function.
          </p>

          <h2 className="text-3xl font-bold text-white mb-6">Dietary Principles for PCOS Management</h2>
          
          <h3 className="text-2xl font-semibold text-white mb-4">Low Glycemic Index Eating for PCOS</h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-gray-700">
              <em>"A randomized controlled trial by Marsh et al. (2010) found that a low-GI diet improved menstrual regularity in women with PCOS — 95% of participants on low-GI diet experienced improved cycle regularity compared to 73% on a conventional healthy diet over 12 weeks."</em>
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Anti-Inflammatory Eating for PCOS</h3>
          <p className="text-gray-300 mb-6">
            Reducing inflammation through diet choices can help improve insulin sensitivity and reduce androgen levels. Focus on foods rich in omega-3 fatty acids, antioxidants, and anti-inflammatory compounds.
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">The Role of Fiber in Hormone Metabolism</h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-gray-700">
              <em>"Dietary fiber binds to estrogen in the digestive tract and facilitates its elimination, preventing recirculation of excess estrogen that contributes to hormonal imbalance in PCOS (Gaskins and Chavarro, 2018)."</em>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Best Foods for PCOS</h2>
          
          <h3 className="text-2xl font-semibold text-white mb-4">Anti-Inflammatory Foods</h3>
          <div className="space-y-2 mb-6">
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Fatty fish (salmon, sardines, mackerel):</strong> Omega-3 reduces testosterone and LH levels in PCOS (Nadjarzadeh et al., 2013)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Leafy greens:</strong> High magnesium, which improves insulin sensitivity</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Berries:</strong> Anthocyanins reduce inflammatory markers</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Extra virgin olive oil:</strong> Reduces CRP (inflammatory marker)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Turmeric:</strong> Curcumin reduces androgen levels in PCOS (Heshmati et al., 2021)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Cinnamon:</strong> Improves insulin sensitivity and menstrual regularity (Kort and Lobo, 2014)</span>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Best Protein Sources for PCOS</h3>
          <div className="space-y-2 mb-6">
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Legumes (lentils, chickpeas, beans):</strong> GI 25-40, protein + fiber combination ideal for PCOS</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Eggs:</strong> Zero carbohydrates, high satiety, no GI impact</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Greek yogurt:</strong> Probiotics improve gut health, linked to better glycemic control</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Tofu and tempeh:</strong> Plant protein with minimal GI impact</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Chicken and turkey (skinless):</strong> Lean protein, no carbohydrate content</span>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Best Fats for PCOS</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-white mb-2">Beneficial fats:</h4>
              <ul className="space-y-1">
                <li className="flex items-start gap-2"><span className="text-green-600">•</span>Olive oil: Monounsaturated fats reduce insulin resistance</li>
                <li className="flex items-start gap-2"><span className="text-green-600">•</span>Avocado: Monounsaturated fats and fiber, zero GI</li>
                <li className="flex items-start gap-2"><span className="text-green-600">•</span>Nuts (almonds, walnuts, pistachios): Improve insulin sensitivity</li>
                <li className="flex items-start gap-2"><span className="text-green-600">•</span>Fatty fish (salmon, sardines, mackerel): Omega-3 reduces inflammation</li>
                <li className="flex items-start gap-2"><span className="text-green-600">•</span>Seeds (flaxseed, chia): Omega-3 and fiber combination</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Fats to limit:</h4>
              <ul className="space-y-1">
                <li className="flex items-start gap-2"><span className="text-red-600">•</span>Saturated fats (processed meats, excess dairy)</li>
                <li className="flex items-start gap-2"><span className="text-red-600">•</span>Trans fats (partially hydrogenated oils)</li>
                <li className="flex items-start gap-2"><span className="text-red-600">•</span>Excess omega-6 fatty acids</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Foods to Avoid or Limit with PCOS</h2>
          
          <h3 className="text-2xl font-semibold text-white mb-4">Foods That Worsen Insulin Resistance</h3>
          <div className="space-y-2 mb-6">
            <div className="flex items-start gap-2">
              <span className="text-red-600">•</span>
              <span><strong>Refined carbohydrates:</strong> White bread, sugary cereals, pastries</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-600">•</span>
              <span><strong>Sugary beverages:</strong> Soda, sweetened juices, energy drinks</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-600">•</span>
              <span><strong>Processed foods:</strong> Fast food, packaged snacks, frozen meals</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-600">•</span>
              <span><strong>Excess dairy:</strong> For some women, dairy can worsen inflammation</span>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">The Dairy Debate in PCOS</h3>
          <p className="text-gray-300 mb-6">
            The relationship between dairy and PCOS is individual. Some women tolerate dairy well, while others find it worsens inflammation and hormonal symptoms. Fermented dairy (yogurt, kefir) is often better tolerated than milk due to probiotics and reduced lactose content.
          </p>

          <h2 className="text-3xl font-bold text-white mb-6">Supplements with Evidence for PCOS</h2>
          
          <h3 className="text-2xl font-semibold text-white mb-4">Inositol (Myo-inositol and D-chiro-inositol)</h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-gray-700">
              <em>"Myo-inositol supplementation at 4g daily improved insulin sensitivity, reduced testosterone, and restored menstrual regularity in PCOS patients in multiple randomized controlled trials (Unfer et al., 2017)."</em>
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Vitamin D</h3>
          <p className="text-gray-300 mb-6">
            Many women with PCOS have vitamin D deficiency, which can worsen insulin resistance. Supplementation may be beneficial, especially in those with low serum levels.
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">Magnesium</h3>
          <p className="text-gray-300 mb-6">
            Magnesium plays a role in insulin sensitivity and glucose metabolism. Deficiency is common in PCOS and supplementation may help improve metabolic function.
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">Omega-3</h3>
          <p className="text-gray-300 mb-6">
            Omega-3 fatty acids reduce inflammation and may improve insulin sensitivity. They also support hormonal balance and reduce androgen levels.
          </p>

          {/* Mid-content CTA */}
          <div className="bg-black text-[#d4ff00] p-8 rounded-2xl my-8">
            <h3 className="text-2xl font-bold mb-4">
              Balance Your Hormones Through Nutrition
            </h3>
            <p className="mb-6">
              Bettera's AI considers your hormonal profile and creates meal plans that support insulin sensitivity and reduce androgen excess naturally.
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
                Start Free Trial
              </button>
            </div>
            <p className="text-sm mt-4">
              🌿 Hormone-balancing • 🍽 Anti-inflammatory foods • 📊 Cycle tracking
            </p>
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
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="bg-[#d4ff00] text-black p-8 rounded-2xl mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Take Control of Your PCOS Naturally
            </h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Join thousands of women who have balanced their hormones and improved their symptoms with personalized PCOS nutrition planning.
            </p>
            <button 
              className="bg-black text-[#d4ff00] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
            >
              Get Started with Bettera
            </button>
            <p className="text-sm mt-4">
              ⚡ 7-day free trial • 📱 Android & iOS • 🌿 Hormone support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
