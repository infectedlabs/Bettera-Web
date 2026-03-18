'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BetteraHomepage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const faqs = [
    {
      question: "What is Bettera and how does it work?",
      answer: "Bettera is an AI nutritionist that creates personalized weekly meal plans based on your blood report and health conditions — in your own cuisine. Upload your blood test results, select your conditions and cuisine, and get a complete meal plan built for your biology."
    },
    {
      question: "Which conditions does Bettera support?",
      answer: "Bettera supports Type 2 Diabetes, PCOS, Hypertension (High Blood Pressure), Thyroid disorders, and Weight/Metabolic Health. It also handles multiple conditions simultaneously with one unified plan."
    },
    {
      question: "What cuisines does Bettera support?",
      answer: "Bettera supports American, Mediterranean, Italian, Mexican, South Asian, East Asian, Middle Eastern, African, and Eastern European cuisines. The nutritional science stays the same — the food changes to match yours."
    },
    {
      question: "How is Bettera different from a nutritionist?",
      answer: "A nutritionist costs $80-300 per visit and provides infrequent consultations. Bettera costs $9.99/month, provides weekly personalized meal plans, and is available 24/7 to answer questions. Bettera complements professional care, it doesn't replace it."
    },
    {
      question: "Is Bettera safe to use with my condition?",
      answer: "Bettera is a nutrition planning tool and not a medical device. Always consult your doctor before making significant dietary changes, especially if you are managing a chronic condition or taking medication."
    }
  ];

  const problems = [
    {
      title: "Most people with chronic conditions never get a real food plan.",
      description: "A diabetes diagnosis comes with 'eat healthy.' So does PCOS, hypertension, and thyroid. No specific plan for your actual blood values or food culture."
    },
    {
      title: "Generic nutrition apps weren't built for chronic conditions.",
      description: "They track calories. They don't plan meals for your condition. They don't read your blood report. They don't adapt to your cuisine."
    },
    {
      title: "Personalized nutrition is expensive and inaccessible.",
      description: "A single nutritionist session costs $80-300. Most people managing chronic conditions receive little or no specific dietary guidance."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-cabinet">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-all duration-300 ${isScrolled ? 'shadow-lg py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <img 
                src="/assets/icon.png" 
                alt="Bettera Logo" 
                className="w-8 h-8 rounded-lg"
              />
              <span className="font-bold text-black text-xl transform transition-transform duration-300 hover:scale-105">Bettera</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm text-black">
              <a href="#how-it-works" className="hover:text-gray-600 transition-colors duration-200 hover:scale-105 transform">How It Works</a>
              <a href="#features" className="hover:text-gray-600 transition-colors duration-200 hover:scale-105 transform">Features</a>
              <a href="#conditions" className="hover:text-gray-600 transition-colors duration-200 hover:scale-105 transform">Conditions</a>
              <a href="#pricing" className="hover:text-gray-600 transition-colors duration-200 hover:scale-105 transform">Pricing</a>
              <a href="#faq" className="hover:text-gray-600 transition-colors duration-200 hover:scale-105 transform">FAQ</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              className="bg-black text-[#d4ff00] px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
            >
              Download from Play Store
            </button>
            <button
              className="md:hidden text-black"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className={`block h-px bg-black transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-px bg-black transition-all ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-px bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-6 py-6">
            <a href="#how-it-works" className="block text-black py-2">How It Works</a>
            <a href="#features" className="block text-black py-2">Features</a>
            <a href="#conditions" className="block text-black py-2">Conditions</a>
            <a href="#pricing" className="block text-black py-2">Pricing</a>
            <a href="#faq" className="block text-black py-2">FAQ</a>
            <button className="bg-black text-[#d4ff00] font-semibold px-4 py-3 rounded-full mt-4 w-full" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}>
              Download from Play Store
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6 bg-[#d4ff00]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${visibleSections.has('hero') ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transform -rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-105"
              >
                <source src="/assets/hero.mp4" type="video/mp4" />
              </video>
            </div>
            <div className={`transform transition-all duration-1000 delay-300 ${visibleSections.has('hero') ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <h1 className="text-black text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Better health starts with
                <span className="italic"> better meals.</span><br />
              </h1>
              <p className="text-black text-lg mb-6 transform transition-all duration-800 delay-500">
                Whether you eat pasta, rice, tacos, or roti. Bettera builds your weekly meal plan around your health and the food you grew up eating.
              </p>
              <button 
                className="bg-black text-[#d4ff00] px-8 py-4 rounded-full font-medium hover:bg-gray-900 transition-all duration-300 mt-6 hover:scale-105 hover:shadow-xl transform"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
              >
                Download from Play Store
              </button>
              <p className="text-black mt-6 text-sm transform transition-all duration-800 delay-700">
                <span className="font-bold">Free download</span> • Start your health journey today · No credit card
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Large Text Section */}
      <section id="services" className="bg-[#d4ff00] py-12 overflow-hidden">
        <div className="flex items-center">
          <h2 className={`text-black text-[120px] md:text-[200px] font-black leading-none whitespace-nowrap transform transition-all duration-1500 ${visibleSections.has('services') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            #BETTERA
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 mt-8 text-center">
          {[
            "BLOOD REPORT ANALYSIS",
            "PERSONALIZED PLANS", 
            "30+ HEALTH CONDITIONS",
            "GLOBAL & REGIONAL CUISINES",
            "AI NUTRITIONIST"
          ].map((service, index) => (
            <div 
              key={index}
              className={`transform transition-all duration-800 delay-${index * 100} ${visibleSections.has('services') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-sm font-bold mb-2 text-black hover:scale-110 transform transition-transform duration-300">{service}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className={`transform transition-all duration-1000 ${visibleSections.has('problem') ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h2 className="text-black text-5xl font-bold mb-6">Most people with chronic conditions never get a real food plan.</h2>
              <div className="space-y-8">
                {problems.map((problem, index) => (
                  <div 
                    key={index} 
                    className={`flex gap-4 transform transition-all duration-800 delay-${index * 200} ${visibleSections.has('problem') ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="text-2xl font-bold text-[#d4ff00]">•</div>
                    <div>
                      <h3 className="text-black font-bold text-lg mb-2 hover:text-gray-700 transition-colors duration-300">{problem.title}</h3>
                      <p className="text-gray-600 text-sm">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`relative transform transition-all duration-1000 delay-500 ${visibleSections.has('problem') ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <p className="text-black text-sm mb-4">
                  537 million adults live with diabetes worldwide. 1.28 billion have hypertension. The majority receive little or no specific dietary guidance post-diagnosis.
                </p>
                <button className="text-black bg-white border-2 border-black px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg">
                  See how Bettera works
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-purple-600 h-48 rounded-lg hover:scale-105 transition-transform duration-300 p-6 flex flex-col justify-between text-white">
                  <div>
                    <div className="text-4xl font-bold mb-2">537M+</div>
                    <div className="text-sm">
                      Adults living with diabetes worldwide.<br />
                      Most received no specific dietary guidance<br />
                      after their diagnosis.
                    </div>
                  </div>
                </div>
                <div className="bg-[#d4ff00] h-48 rounded-lg hover:scale-105 transition-transform duration-300 p-6 flex flex-col justify-between text-black">
                  <div>
                    <div className="text-4xl font-bold mb-2">$80–$300</div>
                    <div className="text-sm">
                      Cost of a single nutritionist session.<br />
                      Most people managing chronic conditions<br />
                      never go back after the first visit.
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 h-48 rounded-lg col-span-2 hover:scale-105 transition-transform duration-300 p-6 flex flex-col justify-between text-white">
                  <div>
                    <div className="text-4xl font-bold mb-2">0</div>
                    <div className="text-sm">
                      Apps that build your meal plan<br />
                      around your blood report and<br />
                      your regional cuisine.<br />
                      <br />
                      <span className="text-[#d4ff00] font-bold">Until Bettera.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-black text-5xl font-bold text-center mb-12 transform transition-all duration-1000 ${visibleSections.has('how-it-works') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            From Blood/Health report to meal plan in 1 minute.
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Upload your Blood/Health report",
                description: "Photograph or upload your blood test results. Bettera reads your HbA1c, glucose, cholesterol, thyroid markers, and more."
              },
              {
                step: "02", 
                title: "Tell us your conditions and your cuisine",
                description: "Select from 30+ health conditions like General Wellness, Weight Gain/Loss, Skin/Hair, Fatty Liver, Infant Health, Brain Power. No report? Still get personalized meal plans."
              },
              {
                step: "03",
                title: "Get your personalized weekly meal plan",
                description: "A complete 7-day plan appears instantly. Your food. Your portions. Your conditions.",
                video: "/assets/meal.mp4"
              },
              {
                step: "04",
                title: "Ask anything, track everything",
                description: "Your AI nutritionist answers any question 24/7. Track your progress across blood reports.",
                video: "/assets/progress.mp4"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`p-6 bg-gray-100 rounded-2xl transform transition-all duration-800 hover:scale-105 hover:shadow-xl ${visibleSections.has('how-it-works') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-black text-xs font-mono font-bold mb-3">{item.step}</div>
                <h3 className="text-black font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                {item.video && (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-lg shadow-md hover:scale-105 transition-all duration-500"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-black text-5xl font-bold text-center mb-12 transform transition-all duration-1000 ${visibleSections.has('features') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Built around your biology.<br />Not a generic food pyramid.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                bg: "bg-black",
                text: "text-white",
                title: "Blood/Health report analysis",
                description: "The only nutrition app that starts with your actual blood values and builds your plan from there. Not from an average. From you."
              },
              {
                bg: "bg-purple-600", 
                text: "text-white",
                title: "Your cuisine, not ours",
                description: "Choose by your country and your region. From American, Mediterranean, Italian, Mexican, Indian, Chinese, Japanese, South Asian, East Asian, Middle Eastern, and more."
              },
              {
                bg: "bg-[#d4ff00]",
                text: "text-black", 
                title: "30+ Health Conditions",
                description: "General Wellness, Weight Gain/Loss, Skin/Hair, Fatty Liver, Infant Health, Brain Power, and more. No report? Still get personalized meal plans based on your profile."
              },
              {
                bg: "bg-gray-900",
                text: "text-white",
                title: "Weekly personalized meal plan",
                description: "A complete week of meals every Monday. Breakfast, lunch, dinner, and snacks. Updated every week as your health evolves."
              },
              {
                bg: "bg-gray-800",
                text: "text-white",
                title: "Progress that connects food to health",
                description: "Upload blood reports over time and watch your HbA1c, blood pressure, and cholesterol trend in the right direction."
              },
              {
                bg: "bg-gray-700",
                text: "text-white",
                title: "Built for real life",
                description: "Restaurants, holidays, travel, stress, celebrations. Bettera provides guidance for all of it."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`${feature.bg} ${feature.text} p-8 rounded-2xl transform transition-all duration-800 hover:scale-105 hover:shadow-xl ${visibleSections.has('features') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-2xl font-bold mb-4">{feature.title}</div>
                <p className="text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Video Section */}
      <section id="health-video" className="py-20 px-6 bg-[#d4ff00]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${visibleSections.has('health-video') ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h2 className="text-black text-5xl font-bold mb-6">
                No blood report?<br />
                <span className="italic">Still get personalized meal plans.</span>
              </h2>
              <p className="text-black text-lg mb-6">
                Bettera supports 30+ health conditions - from General Wellness to Brain Power, Skin/Hair to Fatty Liver. Just tell us your health goals and preferences, and we'll build your meal plan around your profile.
              </p>
              <ul className="space-y-3 text-black mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>General Wellness & Weight Management</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Skin, Hair & Beauty Health</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Brain Power & Mental Clarity</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Fatty Liver & Organ Health</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Infant & Child Health</span>
                </li>
              </ul>
              <button 
                className="bg-black text-[#d4ff00] px-8 py-4 rounded-full font-medium hover:bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
              >
                Start Your Health Journey
              </button>
            </div>
            <div className={`transform transition-all duration-1000 delay-300 ${visibleSections.has('health-video') ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-all duration-500"
              >
                <source src="/assets/health.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <div className={`mb-12 transform transition-all duration-1000 ${visibleSections.has('faq') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <img src="/app-screenshot.png" alt="Bettera App" className="w-full rounded-lg mb-4 hover:scale-105 transition-transform duration-500" />
          </div>
          
          <h2 className={`text-5xl font-bold mb-8 transform transition-all duration-1000 delay-300 ${visibleSections.has('faq') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            FAQ Section: <span className="text-[#d4ff00]">Your Questions, Answered</span>
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border-b border-gray-800 transform transition-all duration-800 delay-${index * 100} ${visibleSections.has('faq') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100 + 500}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className={`w-full text-left py-6 px-6 flex items-center justify-between transition-all duration-300 hover:px-8 ${
                    openFaq === index ? 'bg-[#d4ff00] text-black' : 'bg-transparent hover:bg-gray-900'
                  }`}
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="text-2xl transform transition-transform duration-300">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 bg-[#d4ff00] text-black transform transition-all duration-500">
                    <p className="text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-6 bg-[#d4ff00]">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-black text-5xl font-bold mb-6 transform transition-all duration-1000 ${visibleSections.has('cta') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Your personalized meal plan is two minutes away.
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              "Upload your blood report. Choose your conditions and your cuisine.",
              "Get your first weekly plan before you finish your morning coffee.",
              "Free download. Start your health journey today."
            ].map((text, index) => (
              <div 
                key={index}
                className={`transform transition-all duration-800 delay-${index * 200} ${visibleSections.has('cta') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <p className={`text-sm text-black ${index === 0 ? '' : 'font-bold'}`}>{text}</p>
              </div>
            ))}
          </div>
          
          <div className={`bg-black text-white p-8 rounded-2xl inline-block transform transition-all duration-1000 delay-600 hover:scale-105 hover:shadow-xl ${visibleSections.has('cta') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-4">Download Bettera now</h3>
            <button 
              className="bg-[#d4ff00] text-black px-8 py-3 rounded-full font-medium hover:bg-[#c4ef00] transition-all duration-300 hover:scale-110 hover:shadow-lg"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.bettera.app', '_blank')}
            >
              Download from Play Store
            </button>
            <p className="text-sm mt-4">Free download • Start your health journey</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#d4ff00] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-start mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm w-full">
              <div className="space-y-2">
                <h4 className="font-bold text-black mb-3">Product</h4>
                {["How It Works", "Features", "Pricing", "Download"].map((link, index) => (
                  <a 
                    key={index}
                    href="#about" 
                    className="block hover:underline text-black transition-colors duration-200 hover:scale-105 transform"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {link}
                  </a>
                ))}
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-black mb-3">Company</h4>
                {["About", "Blog", "Contact", "Careers"].map((link, index) => (
                  <a 
                    key={index}
                    href="#twitter" 
                    className="block hover:underline text-black transition-colors duration-200 hover:scale-105 transform"
                    style={{ transitionDelay: `${index * 50 + 200}ms` }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-black text-[120px] md:text-[180px] font-black leading-none">
            #BETTERA.
          </div>
          
          <div className="mt-8 mb-6 text-sm text-black">
            <p>Bettera is an AI nutrition app that creates personalized meal plans based on your blood report and health conditions. Built for your biology. Designed for your food.</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-xs mt-8 text-black space-y-2 md:space-y-0">
            <div className="flex space-x-4">
              <a href="#terms" className="hover:underline">Terms of Service</a>
              <a href="#privacy" className="hover:underline">Privacy Policy</a>
            </div>
            <div>© 2024 Better AI Lab. All rights reserved</div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-700 text-xs max-w-3xl mx-auto">
              <strong>Medical Disclaimer:</strong> Bettera is a nutrition planning tool and does not constitute medical advice. 
              Always consult a qualified healthcare provider before making significant dietary changes, 
              especially if you are managing a chronic health condition or are taking medication.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
