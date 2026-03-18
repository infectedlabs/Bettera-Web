'use client';

import Link from 'next/link';

const blogPosts = [
  {
    slug: 'type-2-diabetes-diet-plan-complete-guide',
    title: 'The Complete Diet Plan for Type 2 Diabetes (2025)',
    description: 'Evidence-based diet plan for Type 2 Diabetes. Includes best and worst foods for blood sugar, glycemic index explained, a 7-day sample meal plan, and FAQ answered by nutrition science.',
    category: 'Diabetes',
    readTime: '15 min read',
    date: '2025-03-18',
    featured: true,
    image: '/blog/diabetes-meal-plan.jpg'
  },
  {
    slug: 'pcos-diet-plan-complete-guide',
    title: 'The Complete Diet Plan for PCOS: Evidence-Based Guide',
    description: 'PCOS affects approximately 1 in 10 women of reproductive age globally. Evidence-based dietary strategies for hormone balance, insulin resistance, and symptom management.',
    category: 'PCOS',
    readTime: '12 min read',
    date: '2025-03-18',
    featured: true,
    image: '/blog/pcos-hormone-balance.jpg'
  },
  {
    slug: 'hba1c-normal-range',
    title: 'HbA1c Normal Range: What Your Result Means',
    description: 'Understanding your HbA1c test results. Complete guide to normal ranges, diabetes diagnosis, and what your numbers mean for your health.',
    category: 'Blood Tests',
    readTime: '8 min read',
    date: '2025-03-18',
    featured: true,
    image: '/blog/hba1c-chart.jpg'
  },
  {
    slug: 'low-glycemic-diet-beginners-guide',
    title: 'Low Glycemic Diet: Complete Beginner\'s Guide',
    description: 'Learn how to stabilize blood sugar with low GI foods. Evidence-based strategies for sustained energy, reduced cravings, and better glucose control.',
    category: 'Nutrition',
    readTime: '10 min read',
    date: '2025-03-18',
    image: '/blog/low-gi-foods.jpg'
  },
  {
    slug: 'blood-sugar-spikes-prevention',
    title: 'How to Prevent Blood Sugar Spikes After Meals',
    description: 'Evidence-based strategies to stabilize blood glucose. Simple habits that make a measurable difference in your daily energy levels.',
    category: 'Diabetes',
    readTime: '7 min read',
    date: '2025-03-18',
    image: '/blog/blood-sugar-stability.jpg'
  },
  {
    slug: 'thyroid-diet-hypothyroidism',
    title: 'Thyroid Diet: Complete Guide for Hypothyroidism',
    description: 'Evidence-based nutrition strategies for hypothyroidism. Foods that support thyroid function and those to avoid for optimal hormone balance.',
    category: 'Thyroid',
    readTime: '11 min read',
    date: '2025-03-18',
    image: '/blog/thyroid-nutrition.jpg'
  },
  {
    slug: 'insulin-resistance-diet-plan',
    title: 'Insulin Resistance Diet Plan: Evidence-Based Guide',
    description: 'Comprehensive guide to managing insulin resistance through nutrition. Foods, meal timing, and lifestyle strategies to improve insulin sensitivity.',
    category: 'Metabolic Health',
    readTime: '13 min read',
    date: '2025-03-18',
    image: '/blog/insulin-sensitivity.jpg'
  },
  {
    slug: 'mediterranean-diet-diabetes',
    title: 'Mediterranean Diet for Diabetes: Complete Guide',
    description: 'How the Mediterranean diet helps manage diabetes. Evidence-based benefits, meal planning, and practical implementation strategies.',
    category: 'Diabetes',
    readTime: '9 min read',
    date: '2025-03-18',
    image: '/blog/mediterranean-diet.jpg'
  },
  {
    slug: 'weight-loss-diabetes',
    title: 'Weight Loss for Diabetes: Safe and Effective Strategies',
    description: 'Evidence-based weight loss strategies specifically for people with diabetes. How to lose weight while maintaining optimal blood glucose control.',
    category: 'Weight Management',
    readTime: '10 min read',
    date: '2025-03-18',
    image: '/blog/diabetes-weight-loss.jpg'
  },
  {
    slug: 'intermittent-fasting-diabetes',
    title: 'Intermittent Fasting for Diabetes: Safety and Benefits',
    description: 'Complete guide to intermittent fasting for diabetes management. Evidence-based protocols, safety considerations, and expected outcomes.',
    category: 'Diabetes',
    readTime: '12 min read',
    date: '2025-03-18',
    image: '/blog/intermittent-fasting.jpg'
  },
  {
    slug: 'vitamin-d-deficiency-diabetes',
    title: 'Vitamin D Deficiency and Diabetes: Evidence-Based Guide',
    description: 'The critical link between vitamin D and diabetes management. Testing, supplementation, and dietary strategies for optimal levels.',
    category: 'Nutrition',
    readTime: '8 min read',
    date: '2025-03-18',
    image: '/blog/vitamin-d-diabetes.jpg'
  },
  {
    slug: 'fiber-blood-sugar-control',
    title: 'Fiber for Blood Sugar Control: Complete Guide',
    description: 'How dietary fiber impacts blood glucose. Types of fiber, recommended intake, and practical strategies to increase fiber consumption.',
    category: 'Nutrition',
    readTime: '9 min read',
    date: '2025-03-18',
    image: '/blog/fiber-glucose.jpg'
  },
  {
    slug: 'plant-based-diet-diabetes',
    title: 'Plant-Based Diet for Diabetes: Evidence-Based Guide',
    description: 'Complete guide to managing diabetes with plant-based nutrition. Benefits, challenges, and practical meal planning strategies.',
    category: 'Nutrition',
    readTime: '11 min read',
    date: '2025-03-18',
    image: '/blog/plant-based-diabetes.jpg'
  },
  {
    slug: 'sleep-diabetes-management',
    title: 'Sleep and Diabetes: The Critical Connection',
    description: 'How sleep quality impacts blood glucose control. Evidence-based strategies to improve sleep for better diabetes management.',
    category: 'Lifestyle',
    readTime: '7 min read',
    date: '2025-03-18',
    image: '/blog/sleep-diabetes.jpg'
  },
  {
    slug: 'stress-blood-sugar-impact',
    title: 'Stress and Blood Sugar: Managing the Impact',
    description: 'Evidence-based guide to how stress affects glucose levels. Practical stress management techniques for better diabetes control.',
    category: 'Lifestyle',
    readTime: '8 min read',
    date: '2025-03-18',
    image: '/blog/stress-glucose.jpg'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-[#d4ff00] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            Bettera Blog
          </h1>
          <p className="text-black text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Evidence-based nutrition guidance for diabetes, PCOS, thyroid health, and blood sugar management. Backed by science and personalized for your unique health profile.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Latest Articles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden border border-gray-800"
              >
                {/* Featured Badge */}
                {post.featured && (
                  <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}

                {/* Image */}
                <div className="h-48 bg-gray-800 rounded-t-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <span className="text-4xl text-gray-400">📖</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#d4ff00] text-black px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">
                      • {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#d4ff00] transition-colors duration-200">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center justify-between">
                    <span className="text-[#d4ff00] font-semibold text-sm group-hover:underline">
                      Read Full Article →
                    </span>
                    <svg 
                      className="w-5 h-5 text-[#d4ff00] group-hover:translate-x-1 transition-transform duration-200"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12l19 19 5-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-[#d4ff00] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Get Personalized Nutrition Plans
          </h2>
          <p className="text-white text-lg mb-8 max-w-3xl mx-auto">
            Stop guessing what to eat. Let Bettera's AI analyze your blood report and create personalized meal plans that actually work for your body.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
            >
              Download Bettera App
            </button>
            <button 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
            >
              Start Free Trial
            </button>
          </div>
          <p className="text-white text-sm mt-4">
            📱 Free 7-day trial • 🎯 Personalized meal plans • 📊 Progress tracking
          </p>
        </div>
      </section>
    </div>
  );
}
