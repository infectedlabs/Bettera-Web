'use client';

import React, { useState, useEffect } from 'react';
import { useAnalytics } from '../../../hooks/useAnalytics';

export default function Type2DiabetesDietPlan() {
  const analytics = useAnalytics();
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    // Only track blog view on client side
    if (typeof window !== 'undefined') {
      analytics.trackBlogView('Type 2 Diabetes Diet Plan');
    }
  }, [analytics]);

  const faqs = [
    {
      question: "Can people with Type 2 Diabetes eat carbohydrates?",
      answer: "Yes. Carbohydrates are not eliminated in a diabetes diet — they are managed. The quality (low vs high glycemic index), quantity (portion size), and combination (with protein and fiber) of carbohydrates determines their impact on blood glucose. Complete carbohydrate elimination is neither necessary nor sustainable for most people."
    },
    {
      question: "What is best diet for Type 2 Diabetes?",
      answer: "No single diet is universally best for Type 2 Diabetes. The Mediterranean diet, low-GI diet, and DASH diet have the strongest evidence base for diabetes management. All three share common principles: whole grains over refined, abundant vegetables, lean protein, healthy fats, and minimal added sugar."
    },
    {
      question: "Does eating sugar cause Type 2 Diabetes?",
      answer: "Eating sugar does not directly cause Type 2 Diabetes. The condition results from insulin resistance, which develops from a combination of genetic predisposition, excess body weight, physical inactivity, and overall dietary patterns — not sugar consumption alone. However, high sugar intake contributes to weight gain and metabolic dysfunction that increase diabetes risk over time."
    },
    {
      question: "Can Type 2 Diabetes be reversed through diet?",
      answer: "Type 2 Diabetes can achieve remission — defined as HbA1c below 6.5% without medication — through significant dietary change and weight loss. The DiRECT trial found that 46% of participants achieved remission at 12 months through intensive dietary intervention. Remission is most achievable in early-stage diabetes and with significant weight reduction (15kg or more in trial)."
    },
    {
      question: "How much water should a diabetic drink daily?",
      answer: "Adults with diabetes should aim for 2-3 liters of water daily. Adequate hydration supports kidney function, which is under greater stress in people with elevated blood glucose. Dehydration concentrates blood glucose further, worsening glycemic control. Water is the preferred beverage — unsweetened tea and black coffee are acceptable alternatives."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-[#d4ff00] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              The Complete Diet Plan for Type 2 Diabetes (2025)
            </h1>
            <p className="text-black text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Evidence-based diet plan for Type 2 Diabetes. Includes best and worst foods for blood sugar, glycemic index explained, a 7-day sample meal plan, and FAQ answered by nutrition science.
            </p>
            
            {/* Download CTA */}
            <div className="bg-black text-[#d4ff00] p-8 rounded-2xl inline-block">
              <h2 className="text-2xl font-bold mb-4">
                Get Your Personalized Diabetes Meal Plan
              </h2>
              <p className="mb-6">
                Bettera analyzes your blood report and creates a meal plan specifically for your diabetes management needs.
              </p>
              <button 
                className="w-full bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                onClick={() => {
                analytics.trackAppDownload('blog_hero');
                window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank');
              }}
              >
                Download Bettera App
              </button>
              <p className="text-sm mt-4">
                📱 Free 7-day trial • No credit card required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          
          <h2 className="text-3xl font-bold text-white mb-6">How Food Affects Blood Sugar in Type 2 Diabetes</h2>
          
          <h3 className="text-2xl font-semibold text-white mb-4">What is Glycemic Index?</h3>
          <p className="text-gray-300 mb-6">
            The glycemic index (GI) is a numerical scale from 0 to 100 that measures how quickly a carbohydrate-containing food raises blood glucose levels compared to pure glucose. Foods with a GI above 70 are classified as high glycemic and cause rapid blood sugar elevation. Foods below 55 are classified as low glycemic and produce a gradual, controlled glucose response (Jenkins et al., 1981).
          </p>
          <p className="text-gray-300 mb-6">
            For people with Type 2 Diabetes, low and medium GI foods are preferred because they reduce post-meal glucose spikes and improve overall glycemic control.
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">What is Glycemic Load?</h3>
          <p className="text-gray-300 mb-6">
            Glycemic load (GL) extends glycemic index by accounting for portion size. A food can have a high GI but a low GL if it is consumed in small amounts. GL is calculated by multiplying GI by carbohydrate content per serving and dividing by 100.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <p className="font-semibold text-white">GL under 10 = low</p>
            <p className="font-semibold text-white">GL 11-19 = medium</p>
            <p className="font-semibold text-white">GL 20+ = high</p>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Why Carbohydrate Quality Matters More Than Quantity</h3>
          <p className="text-gray-300 mb-6">
            A meta-analysis of 15 randomized controlled trials found that replacing high-GI carbohydrates with low-GI alternatives reduced HbA1c by 0.5 percentage points on average — a clinically meaningful improvement achievable without medication changes (Ajala et al., 2013).
          </p>

          <h2 className="text-3xl font-bold text-white mb-6">Best Foods for Type 2 Diabetes</h2>
          
          <h3 className="text-2xl font-semibold text-white mb-4">Best Whole Grains for Diabetics</h3>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-600">
              <thead className="bg-gray-700">
                <tr>
                  <th className="border border-gray-600 px-4 py-2 text-left text-white">Grain</th>
                  <th className="border border-gray-600 px-4 py-2 text-left text-white">GI</th>
                  <th className="border border-gray-600 px-4 py-2 text-left text-white">Why Beneficial</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Barley</td><td className="border border-gray-600 px-4 py-2 text-gray-300">28</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Highest beta-glucan — slows digestion</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Bulgur wheat</td><td className="border border-gray-600 px-4 py-2 text-gray-300">46</td><td className="border border-gray-600 px-4 py-2 text-gray-300">High fiber, slow glucose release</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Whole oats</td><td className="border border-gray-600 px-4 py-2 text-gray-300">55</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Beta-glucan improves insulin response</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Quinoa</td><td className="border border-gray-600 px-4 py-2 text-gray-300">53</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Complete protein + low GI</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Whole wheat bread</td><td className="border border-gray-600 px-4 py-2 text-gray-300">51</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Higher fiber than refined white</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Brown rice</td><td className="border border-gray-600 px-4 py-2 text-gray-300">55</td><td className="border border-gray-600 px-4 py-2 text-gray-300">More fiber than white rice</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">White rice</td><td className="border border-gray-600 px-4 py-2 text-gray-300">73</td><td className="border border-gray-600 px-4 py-2 text-gray-300">High GI — limit portions</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">White bread</td><td className="border border-gray-600 px-4 py-2 text-gray-300">75</td><td className="border border-gray-600 px-4 py-2 text-gray-300">High GI — limit significantly</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Best Vegetables for Diabetics</h3>
          <p className="text-gray-300 mb-4">
            Non-starchy vegetables are the foundation of a diabetic diet. They are low in carbohydrates, high in fiber, and rich in micronutrients that support metabolic function.
          </p>
          <div className="space-y-2 mb-6">
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Leafy greens (spinach, kale, Swiss chard):</strong> Very low GI, high magnesium which improves insulin sensitivity</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Broccoli:</strong> Contains sulforaphane, which reduces glucose production in liver (Axelsson et al., 2017)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Bell peppers:</strong> High vitamin C, low carbohydrate</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Zucchini:</strong> Very low GI, high water content</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Mushrooms:</strong> Low GI, contain beta-glucans</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Tomatoes:</strong> Low GI, lycopene reduces cardiovascular risk (elevated in diabetics)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Asparagus:</strong> Low GI, contains inulin (prebiotic fiber)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Bitter melon:</strong> Compounds charantin and polypeptide-P mimic insulin action (Joseph and Jini, 2013)</span>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Best Proteins for Diabetics</h3>
          <p className="text-gray-300 mb-4">
            Protein has minimal impact on blood glucose and helps slow absorption of carbohydrates when consumed together.
          </p>
          <div className="space-y-2 mb-6">
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Legumes (lentils, chickpeas, beans):</strong> GI 25-40, protein + fiber combination ideal for diabetes</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Eggs:</strong> Zero carbohydrates, high satiety, no GI impact</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span><strong>Fish (especially fatty fish):</strong> Omega-3 reduces inflammation associated with insulin resistance</span>
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

          <h3 className="text-2xl font-semibold text-white mb-4">Best Fats for Diabetics</h3>
          <p className="text-gray-300 mb-4">
            Dietary fat has no direct glycemic impact but affects insulin resistance over time. The type of fat matters more than amount.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-white mb-2">Beneficial fats:</h4>
              <ul className="space-y-1">
                <li className="flex items-start gap-2"><span className="text-green-600">•</span>Olive oil: Monounsaturated fats reduce insulin resistance</li>
                <li className="flex items-start gap-2"><span className="text-green-600">•</span>Avocado: Monounsaturated fats and fiber, zero GI</li>
                <li className="flex items-start gap-2"><span className="text-green-600">•</span>Nuts (almonds, walnuts, pistachios): Improve insulin sensitivity, reduce post-meal glucose response</li>
                <li className="flex items-start gap-2"><span className="text-green-600">•</span>Fatty fish (salmon, sardines, mackerel): Omega-3 reduces inflammation and improves insulin signaling</li>
                <li className="flex items-start gap-2"><span className="text-green-600">•</span>Seeds (flaxseed, chia): Omega-3 and fiber combination</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Fats to limit:</h4>
              <ul className="space-y-1">
                <li className="flex items-start gap-2"><span className="text-red-600">•</span>Saturated fats (processed meats, full-fat dairy in excess)</li>
                <li className="flex items-start gap-2"><span className="text-red-600">•</span>Trans fats (partially hydrogenated oils in processed food)</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Best Fruits for Diabetics</h3>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-600">
              <thead className="bg-gray-700">
                <tr>
                  <th className="border border-gray-600 px-4 py-2 text-left text-white">Fruit</th>
                  <th className="border border-gray-600 px-4 py-2 text-left text-white">GI</th>
                  <th className="border border-gray-600 px-4 py-2 text-left text-white">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Cherries</td><td className="border border-gray-600 px-4 py-2 text-gray-300">20</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Anthocyanins improve insulin action</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Grapefruit</td><td className="border border-gray-600 px-4 py-2 text-gray-300">25</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Naringenin improves glucose control</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Pear</td><td className="border border-gray-600 px-4 py-2 text-gray-300">38</td><td className="border border-gray-600 px-4 py-2 text-gray-300">High fiber, slow sugar release</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Apple</td><td className="border border-gray-600 px-4 py-2 text-gray-300">38</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Pectin fiber slows digestion</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Strawberries</td><td className="border border-gray-600 px-4 py-2 text-gray-300">40</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Low sugar, high antioxidants</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Orange</td><td className="border border-gray-600 px-4 py-2 text-gray-300">43</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Fiber slows glucose absorption</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Peach</td><td className="border border-gray-600 px-4 py-2 text-gray-300">42</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Low GI, moderate portion</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Mango</td><td className="border border-gray-600 px-4 py-2 text-gray-300">60</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Limit to half cup with a meal</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Banana (ripe)</td><td className="border border-gray-600 px-4 py-2 text-gray-300">62</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Limit to half, with protein</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Watermelon</td><td className="border border-gray-600 px-4 py-2 text-gray-300">72</td><td className="border border-gray-600 px-4 py-2 text-gray-300">High GI — small portions only</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Dates</td><td className="border border-gray-600 px-4 py-2 text-gray-300">103</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Very high — limit to 1-2 pieces</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Foods to Avoid or Limit with Type 2 Diabetes</h2>
          
          <h3 className="text-2xl font-semibold text-white mb-4">High Glycemic Foods That Spike Blood Sugar</h3>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-600">
              <thead className="bg-gray-700">
                <tr>
                  <th className="border border-gray-600 px-4 py-2 text-left text-white">Food</th>
                  <th className="border border-gray-600 px-4 py-2 text-left text-white">GI</th>
                  <th className="border border-gray-600 px-4 py-2 text-left text-white">Why Problematic</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">White bread</td><td className="border border-gray-600 px-4 py-2 text-gray-300">75</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Rapid glucose spike</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Cornflakes</td><td className="border border-gray-600 px-4 py-2 text-gray-300">81</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Very fast digestion</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Instant white rice</td><td className="border border-gray-600 px-4 py-2 text-gray-300">87</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Fastest-digesting grain</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Rice cakes</td><td className="border border-gray-600 px-4 py-2 text-gray-300">82</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Low fat but high GI</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Pretzels</td><td className="border border-gray-600 px-4 py-2 text-gray-300">83</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Refined carb, no fiber</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Bagel</td><td className="border border-gray-600 px-4 py-2 text-gray-300">72</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Large portion = high GL</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">French fries</td><td className="border border-gray-600 px-4 py-2 text-gray-300">75</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Fat + high GI = double risk</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Sweetened cereal</td><td className="border border-gray-600 px-4 py-2 text-gray-300">70+</td><td className="border border-gray-600 px-4 py-2 text-gray-300">High sugar + refined grain</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">The Hidden Sugar Problem</h3>
          <p className="text-gray-300 mb-4">
            Sugar appears under many names on ingredient labels. People with diabetes need to recognize all of them:
          </p>
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <span>High fructose corn syrup</span>
              <span>Dextrose</span>
              <span>Maltose</span>
              <span>Sucrose</span>
              <span>Corn syrup</span>
              <span>Fruit juice concentrate</span>
              <span>Cane juice</span>
              <span>Barley malt</span>
              <span>Rice syrup</span>
              <span>Agave nectar</span>
            </div>
          </div>
          <p className="text-gray-300 mb-6">
            A food labeled "no added sugar" can still contain naturally occurring sugars from fruit concentrates that raise blood glucose significantly.
          </p>

          <h2 className="text-3xl font-bold text-white mb-6">The 7-Day Type 2 Diabetes Meal Plan</h2>
          <p className="text-gray-300 mb-6">
            <strong>PRINCIPLES USED IN THIS PLAN:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 ml-6">
            <li>Every meal pairs carbohydrates with protein and fiber</li>
            <li>No meal is above medium glycemic load</li>
            <li>Total daily carbohydrates: 130-180g (moderate approach)</li>
            <li>Vegetables at every meal</li>
            <li>Water as primary beverage</li>
          </ul>

          <div className="space-y-8">
            <div className="border-l-4 border-[#d4ff00] pl-4">
              <h3 className="text-xl font-semibold text-black mb-3">DAY 1 — MONDAY:</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Breakfast:</strong> Whole oats with berries + 2 eggs</p>
                <p><strong>Snack:</strong> Apple + 10 almonds</p>
                <p><strong>Lunch:</strong> Lentil soup + whole grain bread + side salad</p>
                <p><strong>Snack:</strong> Greek yogurt + cucumber slices</p>
                <p><strong>Dinner:</strong> Grilled salmon + steamed broccoli + quinoa</p>
              </div>
            </div>
            
            <div className="border-l-4 border-[#d4ff00] pl-4">
              <h3 className="text-xl font-semibold text-black mb-3">DAY 2 — TUESDAY:</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Breakfast:</strong> Greek yogurt + mixed seeds + fresh berries</p>
                <p><strong>Snack:</strong> Handful walnuts + pear</p>
                <p><strong>Lunch:</strong> Chickpea salad + whole grain wrap + avocado</p>
                <p><strong>Snack:</strong> Boiled egg + cherry tomatoes</p>
                <p><strong>Dinner:</strong> Chicken stir-fry with vegetables + brown rice (half cup)</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Understanding Your Blood Test for Diabetes</h2>
          
          <h3 className="text-2xl font-semibold text-white mb-4">What HbA1c Means and What Your Number Tells You</h3>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-600">
              <thead className="bg-gray-700">
                <tr>
                  <th className="border border-gray-600 px-4 py-2 text-left text-white">HbA1c Level</th>
                  <th className="border border-gray-600 px-4 py-2 text-left text-white">Classification</th>
                  <th className="border border-gray-600 px-4 py-2 text-left text-white">What It Means</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Below 5.7%</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Normal</td><td className="border border-gray-600 px-4 py-2 text-gray-300">No diabetes risk</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">5.7% - 6.4%</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Pre-diabetes</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Reversible with intervention</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">6.5% - 7.0%</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Controlled diabetes</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Well-managed</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">7.1% - 8.0%</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Needs improvement</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Dietary changes required</td></tr>
                <tr><td className="border border-gray-600 px-4 py-2 text-gray-300">Above 8.0%</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Poorly controlled</td><td className="border border-gray-600 px-4 py-2 text-gray-300">Comprehensive plan needed</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-300 mb-6">
            HbA1c reflects average blood glucose over the previous 3 months. It takes one complete blood cell cycle — approximately 90 days — for dietary changes to fully reflect in HbA1c values.
          </p>
          <p className="text-gray-300 mb-6">
            Dietary changes alone can reduce HbA1c by 0.5 to 2.0 percentage points over 3-6 months (ADA Standards of Medical Care, 2024). This is clinically significant and, for people in early-stage diabetes, can delay or reduce medication needs.
          </p>

          <h2 className="text-3xl font-bold text-white mb-6">How Bettera Creates Your Personalized Diabetes Meal Plan</h2>
          <p className="text-gray-300 mb-6">
            Bettera uses advanced AI to analyze your blood test results and create a personalized meal plan based on your specific health markers. Unlike generic diet advice, Bettera considers your individual HbA1c, lipid profile, and micronutrient levels to generate meal recommendations that work for your unique biology.
          </p>
          <p className="text-gray-300 mb-8">
            The app processes over 50 blood markers and cross-references them with evidence-based nutrition databases to create meal plans that address your specific deficiencies and optimize your blood sugar management. Each meal plan is designed to improve your glycemic control while incorporating foods you enjoy.
          </p>

          {/* Mid-content CTA */}
          <div className="bg-black text-[#d4ff00] p-8 rounded-2xl my-8">
            <h3 className="text-2xl font-bold mb-4">
              Transform Your Diabetes Management Today
            </h3>
            <p className="mb-6">
              Stop guessing what to eat. Let Bettera's AI analyze your blood report and create a personalized meal plan that actually works for your body.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="flex-1 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                onClick={() => {
                analytics.trackAppDownload('blog_hero');
                window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank');
              }}
              >
                Download Bettera App
              </button>
              <button 
                className="flex-1 bg-[#d4ff00] text-black px-6 py-3 rounded-full font-bold hover:bg-[#c4ef00] transition-all duration-300 hover:scale-105"
                onClick={() => {
                analytics.trackAppDownload('blog_hero');
                window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank');
              }}
              >
                Start Free Trial
              </button>
            </div>
            <p className="text-sm mt-4">
              🎯 Personalized to your blood markers • 🍽 Regional cuisine support • 📊 Progress tracking
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
              Ready to Take Control of Your Diabetes?
            </h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Join thousands of users who have improved their HbA1c and blood sugar control with personalized AI nutrition planning.
            </p>
            <button 
              className="bg-black text-[#d4ff00] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105"
              onClick={() => {
                analytics.trackAppDownload('blog_hero');
                window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank');
              }}
            >
              Get Started with Bettera
            </button>
            <p className="text-sm mt-4">
              ⚡ 7-day free trial • 📱 Android & iOS • 🎯 Personalized meal plans
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
