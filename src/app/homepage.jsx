'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Homepage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [isScrolled, setIsScrolled] = useState(false);

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
      question: "What is AI citation optimization?",
      answer: "AI citation optimization ensures your content is structured, clear, and trustworthy enough for AI assistants to retrieve and cite when answering user questions."
    },
    {
      question: "How is this different from SEO?",
      answer: "SEO optimizes for Google rankings. Citinger optimizes for AI answers that summarize and cite a few trusted sources."
    },
    {
      question: "Can Citinger guarantee ChatGPT citations?",
      answer: "No. No tool can guarantee citations. Citinger increases the probability by aligning your content with how AI systems retrieve sources."
    },
    {
      question: "Do I need technical knowledge?",
      answer: "No. Citinger provides plain-English explanations and copy-ready recommendations."
    },
    {
      question: "Is this a one-time audit tool?",
      answer: "No. AI answers change constantly. Citinger monitors your pages and competitors over time, which is why it's subscription-based."
    }
  ];

  const problems = [
    {
      title: "You don't exist in AI answers",
      description: "If your site isn't cited by AI assistants, you're invisible to users asking questions in your space."
    },
    {
      title: "Your competitors become the default truth",
      description: "When AI answers cite your competitors instead of you, they become the trusted source in users' minds."
    },
    {
      title: "Traffic loss is invisible until it's too late",
      description: "Traditional SEO tools don't measure AI answer visibility, so you won't know you're losing traffic until it's gone."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-cabinet">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-all duration-300 ${isScrolled ? 'shadow-lg py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-xl font-bold text-black transform transition-transform duration-300 hover:scale-105">Citinger</div>
            <div className="hidden md:flex items-center gap-6 text-sm text-black">
              <a href="#about" className="hover:text-gray-600 transition-colors duration-200 hover:scale-105 transform">About</a>
              <a href="#solution" className="hover:text-gray-600 transition-colors duration-200 hover:scale-105 transform">Solution</a>
              <a href="#pricing" className="hover:text-gray-600 transition-colors duration-200 hover:scale-105 transform">Pricing</a>
              <a href="#faq" className="hover:text-gray-600 transition-colors duration-200 hover:scale-105 transform">FAQ</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              className="bg-[#d4ff00] hover:bg-[#c4ef00] px-6 py-2 rounded-full text-sm font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6 bg-[#d4ff00]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${visibleSections.has('hero') ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <img 
                src="/image.png" 
                alt="You Will Succeed Book" 
                className="w-full max-w-md mx-auto transform -rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-105"
              />
            </div>
            <div className={`transform transition-all duration-1000 delay-300 ${visibleSections.has('hero') ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <h1 className="text-black text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Know if AI answers will cite you — <span className="italic">before they ignore you.</span>
              </h1>
              <p className="text-black text-lg mb-6 transform transition-all duration-800 delay-500">
                Citinger helps your website become a trusted source for ChatGPT, Perplexity, and Gemini by optimizing how AI engines understand, retrieve, and cite your content.
              </p>
              <button 
                onClick={() => user ? router.push('/analyze') : setShowSigninModal(true)}
                className="bg-black text-[#d4ff00] px-8 py-4 rounded-full font-medium hover:bg-gray-900 transition-all duration-300 mt-6 hover:scale-105 hover:shadow-xl transform"
              >
                Check my site for AI citations
              </button>
              <p className="text-black mt-6 text-sm transform transition-all duration-800 delay-700">
                <span className="font-bold">No credit card</span> • 1 free AI citation audit • Takes 60 seconds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Large Text Section */}
      <section id="services" className="bg-[#d4ff00] py-12 overflow-hidden">
        <div className="flex items-center">
          <h2 className={`text-black text-[120px] md:text-[200px] font-black leading-none whitespace-nowrap transform transition-all duration-1500 ${visibleSections.has('services') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            #CITINGER
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 mt-8 text-center">
          {[
            "AI CITATION AUDIT",
            "ANSWER BLOCKS", 
            "COMPETITOR ANALYSIS",
            "MONITORING",
            "ALERTS"
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

      {/* Your Problem, Solved Section */}
      <section id="problem" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className={`transform transition-all duration-1000 ${visibleSections.has('problem') ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h2 className="text-black text-5xl font-bold mb-6">AI answers replaced search results. Most websites didn't notice.</h2>
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
                  People no longer browse 10 links. They ask AI assistants and accept 1–3 cited answers. Traditional SEO tools don't measure this. Citinger does.
                </p>
                <button className="text-black bg-white border-2 border-black px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg">
                  View a sample report
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-purple-600 h-48 rounded-lg hover:scale-105 transition-transform duration-300"></div>
                <div className="bg-[#d4ff00] h-48 rounded-lg hover:scale-105 transition-transform duration-300"></div>
                <div className="bg-gray-900 h-48 rounded-lg col-span-2 hover:scale-105 transition-transform duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-black text-5xl font-bold text-center mb-12 transform transition-all duration-1000 ${visibleSections.has('features') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Citinger is AI Answer Visibility Monitoring.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                bg: "bg-black",
                text: "text-white",
                title: "See how likely AI is to cite your page.",
                description: "Citinger shows whether your pages are understandable, extractable, and trustworthy enough to be cited by AI answer engines."
              },
              {
                bg: "bg-purple-600", 
                text: "text-white",
                title: "Make your content extractable by AI.",
                description: "Citinger generates clear answer sections, bullet-friendly summaries, and definition-first structures designed for AI retrieval."
              },
              {
                bg: "bg-[#d4ff00]",
                text: "text-black", 
                title: "See who AI prefers — and why.",
                description: "Citinger shows which competitors are more citable and the exact content blocks that win citations."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`${feature.bg} ${feature.text} p-8 rounded-2xl transform transition-all duration-800 hover:scale-105 hover:shadow-xl ${visibleSections.has('features') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl font-bold mb-4">{feature.title}</div>
                <p className="text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <div className={`mb-12 transform transition-all duration-1000 ${visibleSections.has('faq') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <img src="/image.png" alt="Team Meeting" className="w-full rounded-lg mb-4 hover:scale-105 transition-transform duration-500" />
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
            Don't wait to disappear from AI answers.
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              "Citinger monitors your pages and competitors over time, alerting you when your AI citation visibility changes.",
              "+ See exactly why AI ignores your content",
              "+ Get actionable recommendations to improve citations"
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
            <h3 className="text-2xl font-bold mb-4">Check your AI citation readiness now</h3>
            <button 
              onClick={() => router.push('/analyze')}
              className="bg-[#d4ff00] text-black px-8 py-3 rounded-full font-medium hover:bg-[#c4ef00] transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              Start Free Audit
            </button>
            <p className="text-sm mt-4">Free analysis • No credit card required</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#d4ff00] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Sign in CTA for non-authenticated users */}
          {!loading && !user && (
            <div className="mb-12 p-8 bg-black rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to get started?</h3>
              <p className="text-gray-300 mb-6">
                Start your free trial and get your AI citation audit.
              </p>
              <button
                onClick={() => user ? router.push('/analyze') : setShowSigninModal(true)}
                className="bg-[#d4ff00] text-black px-8 py-3 rounded-full font-medium hover:bg-[#c4ef00] transition-all duration-300 hover:scale-105"
              >
                Get started now
              </button>
            </div>
          )}

          <div className="flex flex-wrap justify-between items-start mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm w-full">
              <div className="space-y-2">
                <h4 className="font-bold text-black mb-3">Company</h4>
                {["About Us", "Pricing", "Contact Us", "Blog"].map((link, index) => (
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
                <h4 className="font-bold text-black mb-3">Connect</h4>
                {["Twitter", "LinkedIn", "Discord"].map((link, index) => (
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
            #CITINGER.
          </div>
          
          <div className="mt-8 mb-6 text-sm text-black">
            <p>Citinger is an AI citation and answer visibility monitoring platform designed for modern SaaS, content teams, and agencies navigating the shift from search engines to AI answer engines.</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-xs mt-8 text-black space-y-2 md:space-y-0">
            <div className="flex space-x-4">
              <a href="#terms" className="hover:underline">Terms of Service</a>
              <a href="#privacy" className="hover:underline">Privacy Policy</a>
            </div>
            <div>© 2024. All rights reserved</div>
          </div>
        </div>
      </footer>

      {/* Signin Modal */}
      <SigninModal 
        isOpen={showSigninModal} 
        onClose={() => setShowSigninModal(false)} 
      />
    </div>
  );
}
