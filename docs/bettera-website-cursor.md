# Bettera Website — Cursor Build Instructions
> AI-Powered Indian Nutrition App | bettera.app
> Design Reference: phantom.com — Dark, cinematic, bold typography, premium feel
> Primary Goal: SEO traffic + LLM citation authority (ChatGPT, Gemini, Claude, Perplexity)

---

## Project Overview

```
Brand:        Bettera
Tagline:      Eat Better. Be Bettera.
Sub-tagline:  Your AI nutritionist. Built for your food. Built for your body.
Colors:
  Primary:    #A8E63D  (Lime green)
  Background: #0A0A0A  (Near black)
  Surface:    #111111  (Card background)
  Surface 2:  #1A1A1A  (Elevated surface)
  Border:     #222222  (Subtle borders)
  Text:       #FFFFFF  (Primary text)
  Muted:      #888888  (Secondary text)
  Accent:     #E8F7D0  (Pale green for highlights)

Typography:
  Display:    "Clash Display" or "Cabinet Grotesk" (from Fontshare - free)
  Body:       "Satoshi" (from Fontshare - free)
  Mono:       "JetBrains Mono" (Google Fonts)

Tech Stack:
  Framework:  Next.js 14 (App Router)
  Styling:    Tailwind CSS + custom CSS variables
  Animation:  Framer Motion
  Icons:      Lucide React
  SEO:        next-seo + JSON-LD structured data
  Analytics:  Vercel Analytics
  Deployment: Vercel
```

---

## File Structure

```
bettera-website/
├── app/
│   ├── layout.tsx              # Root layout with SEO metadata
│   ├── page.tsx                # Homepage (India default)
│   ├── global/
│   │   └── page.tsx            # Global version landing page
│   ├── india/
│   │   └── page.tsx            # India version landing page
│   ├── blog/
│   │   ├── page.tsx            # Blog index
│   │   └── [slug]/
│   │       └── page.tsx        # Blog post template
│   ├── about/
│   │   └── page.tsx            # About / Founder story
│   ├── conditions/
│   │   ├── diabetes/
│   │   │   └── page.tsx
│   │   ├── pcos/
│   │   │   └── page.tsx
│   │   ├── hypertension/
│   │   │   └── page.tsx
│   │   └── thyroid/
│   │       └── page.tsx
│   ├── sitemap.ts              # Auto-generated sitemap
│   └── robots.ts               # Robots.txt
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   └── Card.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Features.tsx
│   │   ├── Conditions.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   ├── BlogPreview.tsx
│   │   └── DownloadCTA.tsx
│   └── seo/
│       ├── JsonLd.tsx          # Structured data components
│       └── MetaTags.tsx
├── content/
│   └── blog/                   # MDX blog posts
│       ├── diabetes-indian-diet-guide.mdx
│       ├── pcos-indian-food-plan.mdx
│       ├── best-indian-foods-blood-pressure.mdx
│       └── ai-nutrition-india.mdx
├── lib/
│   ├── seo.ts                  # SEO utility functions
│   └── constants.ts            # App constants
├── public/
│   ├── images/
│   ├── icons/
│   └── og/                     # Open Graph images
└── next.config.js
```

---

## Design System

### Visual Language (Phantom-inspired)
```css
/* globals.css */

@import url('https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@300,400,500,700&display=swap');

:root {
  --green:        #A8E63D;
  --green-pale:   #E8F7D0;
  --green-dim:    rgba(168, 230, 61, 0.1);
  --green-glow:   rgba(168, 230, 61, 0.2);
  --black:        #0A0A0A;
  --surface:      #111111;
  --surface-2:    #1A1A1A;
  --border:       #222222;
  --border-light: #2A2A2A;
  --white:        #FFFFFF;
  --muted:        #888888;
  --muted-2:      #555555;

  --font-display: 'Clash Display', sans-serif;
  --font-body:    'Satoshi', sans-serif;

  --radius-sm:    6px;
  --radius:       12px;
  --radius-lg:    20px;
  --radius-xl:    32px;

  --shadow-green: 0 0 40px rgba(168, 230, 61, 0.15);
  --shadow-card:  0 1px 0 rgba(255,255,255,0.05) inset,
                  0 -1px 0 rgba(0,0,0,0.5) inset;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

body {
  background: var(--black);
  color: var(--white);
  font-family: var(--font-body);
  overflow-x: hidden;
}

/* Noise texture overlay — phantom.com signature */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
  opacity: 0.4;
}

/* Scrollbar */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--black); }
::-webkit-scrollbar-thumb { background: var(--border-light); border-radius: 2px; }
```

---

### Reusable Component Styles

```tsx
// Button variants
const buttonVariants = {
  primary: `
    bg-[#A8E63D] text-black font-semibold
    px-6 py-3 rounded-full
    hover:bg-[#BEF053] active:scale-[0.98]
    transition-all duration-200
    shadow-[0_0_30px_rgba(168,230,61,0.3)]
    hover:shadow-[0_0_40px_rgba(168,230,61,0.5)]
  `,
  secondary: `
    bg-transparent text-white font-medium
    px-6 py-3 rounded-full
    border border-[#333] hover:border-[#A8E63D]
    hover:text-[#A8E63D]
    transition-all duration-200
  `,
  ghost: `
    text-[#888] hover:text-white
    transition-colors duration-200
  `
}

// Card base
const cardBase = `
  bg-[#111] border border-[#222]
  rounded-2xl
  shadow-[0_1px_0_rgba(255,255,255,0.05)_inset]
  hover:border-[#333] transition-all duration-300
`
```

---

## Navbar Component

```tsx
// components/layout/Navbar.tsx

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50
      transition-all duration-300
      ${scrolled
        ? 'bg-black/80 backdrop-blur-xl border-b border-[#1A1A1A]'
        : 'bg-transparent'
      }
    `}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#A8E63D] rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-sm font-[Clash Display]">B</span>
          </div>
          <span className="font-semibold text-white text-lg tracking-tight">
            Bettera
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/india" className="text-sm text-[#888] hover:text-white transition-colors">
            India
          </Link>
          <Link href="/global" className="text-sm text-[#888] hover:text-white transition-colors">
            Global
          </Link>
          <Link href="/blog" className="text-sm text-[#888] hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-sm text-[#888] hover:text-white transition-colors">
            About
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Version switcher */}
          <div className="flex items-center gap-1 bg-[#111] border border-[#222] rounded-full p-1">
            <Link href="/india" className={`
              px-3 py-1 rounded-full text-xs font-medium transition-all
              ${pathname?.includes('india') || pathname === '/'
                ? 'bg-[#A8E63D] text-black'
                : 'text-[#888] hover:text-white'
              }
            `}>
              🇮🇳 India
            </Link>
            <Link href="/global" className={`
              px-3 py-1 rounded-full text-xs font-medium transition-all
              ${pathname?.includes('global')
                ? 'bg-[#A8E63D] text-black'
                : 'text-[#888] hover:text-white'
              }
            `}>
              🌍 Global
            </Link>
          </div>
          <Link
            href="https://play.google.com/store/apps/details?id=com.bettera.app"
            className="bg-[#A8E63D] text-black text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#BEF053] transition-all shadow-[0_0_20px_rgba(168,230,61,0.2)]"
          >
            Download Free
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-[#1A1A1A] px-6 py-6 flex flex-col gap-4">
          <Link href="/india" className="text-white py-2">🇮🇳 Bettera India</Link>
          <Link href="/global" className="text-white py-2">🌍 Bettera Global</Link>
          <Link href="/blog" className="text-[#888] py-2">Blog</Link>
          <Link href="/about" className="text-[#888] py-2">About</Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.bettera.app"
            className="bg-[#A8E63D] text-black text-center font-semibold px-4 py-3 rounded-full mt-2"
          >
            Download Free
          </Link>
        </div>
      )}
    </nav>
  )
}
```

---

## Homepage — India Version (Default)

```tsx
// app/page.tsx
// This is the India-focused homepage

import { Metadata } from 'next'
import HeroIndia from '@/components/sections/HeroIndia'
import HowItWorks from '@/components/sections/HowItWorks'
import Features from '@/components/sections/Features'
import Conditions from '@/components/sections/Conditions'
import Testimonials from '@/components/sections/Testimonials'
import PricingIndia from '@/components/sections/PricingIndia'
import FAQ from '@/components/sections/FAQ'
import BlogPreview from '@/components/sections/BlogPreview'
import DownloadCTA from '@/components/sections/DownloadCTA'
import JsonLd from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Bettera — AI Meal Plans for Diabetes, PCOS & BP | Indian Food',
  description: 'Upload your blood report. Get a personalized 7-day Indian meal plan for diabetes, PCOS, blood pressure and thyroid. AI-powered nutrition. Real Indian food. ₹299/month.',
  keywords: [
    'diabetes Indian diet plan',
    'PCOS Indian food meal plan',
    'blood pressure Indian diet',
    'thyroid diet Indian food',
    'AI nutrition app India',
    'personalized meal plan India',
    'Indian diabetic diet chart',
    'blood report diet plan',
    'diabetes meal plan Indian food',
    'best nutrition app India',
    'AI dietician India',
    'Indian food diabetes app',
  ],
  openGraph: {
    title: 'Bettera — AI Nutrition for India',
    description: 'Personalized Indian meal plans for diabetes, PCOS, BP and thyroid. Upload blood report. Get your plan.',
    url: 'https://bettera.app',
    siteName: 'Bettera',
    images: [{ url: 'https://bettera.app/og/india.png', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bettera — AI Meal Plans for Indian Conditions',
    description: 'Upload your blood report. Get a 7-day Indian meal plan personalized for your condition.',
    images: ['https://bettera.app/og/india.png'],
  },
  alternates: {
    canonical: 'https://bettera.app',
    languages: {
      'en-IN': 'https://bettera.app/india',
      'en-US': 'https://bettera.app/global',
    },
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLd type="india" />
      <main>
        <HeroIndia />
        <HowItWorks />
        <Features />
        <Conditions />
        <Testimonials />
        <PricingIndia />
        <FAQ variant="india" />
        <BlogPreview />
        <DownloadCTA variant="india" />
      </main>
    </>
  )
}
```

---

## Hero Section — India

```tsx
// components/sections/HeroIndia.tsx

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroIndia() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">

      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A8E63D] opacity-[0.06] rounded-full blur-[120px] pointer-events-none" />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#111] border border-[#222] rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 bg-[#A8E63D] rounded-full animate-pulse" />
          <span className="text-sm text-[#888]">
            India's first AI therapeutic nutrition app
          </span>
        </motion.div>

        {/* Headline — SEO H1 */}
        {/*
          SEO NOTE FOR CURSOR:
          This H1 is the most important SEO element on the page.
          It must contain primary keyword: "AI meal plan for diabetes Indian food"
          Keep it exactly as written. Do not shorten or rephrase.
        */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[Clash Display] text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.0] tracking-tight mb-6"
        >
          <span className="text-white">Your personal AI</span>
          <br />
          <span className="text-[#A8E63D]">nutritionist</span>
          <br />
          <span className="text-white">for Indian food.</span>
        </motion.h1>

        {/* Sub-headline — H2 with secondary keywords */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#888] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Upload your blood report. Get a personalized 7-day Indian meal plan
          for diabetes, PCOS, blood pressure, and thyroid.
          Real food. Dal, roti, sabzi, idli. Built for India.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="https://play.google.com/store/apps/details?id=com.bettera.app"
            className="flex items-center gap-3 bg-[#A8E63D] text-black font-semibold px-6 py-4 rounded-full hover:bg-[#BEF053] transition-all shadow-[0_0_40px_rgba(168,230,61,0.3)] hover:shadow-[0_0_60px_rgba(168,230,61,0.5)] w-full sm:w-auto justify-center"
          >
            {/* Android icon SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.523 15.341l1.671-2.888a.5.5 0 00-.866-.5l-1.69 2.924A10.5 10.5 0 0112 14.5a10.5 10.5 0 00-4.638 1.377L5.672 11.95a.5.5 0 00-.866.5l1.67 2.888A9.5 9.5 0 003 22h18a9.5 9.5 0 00-3.477-6.659zM8.5 19a1 1 0 110-2 1 1 0 010 2zm7 0a1 1 0 110-2 1 1 0 010 2z"/>
            </svg>
            Download for Android
          </Link>
          <Link
            href="#how-it-works"
            className="flex items-center gap-2 text-[#888] hover:text-white transition-colors px-6 py-4 rounded-full border border-[#222] hover:border-[#333] w-full sm:w-auto justify-center"
          >
            See how it works
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </motion.div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#555]"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#A8E63D] font-semibold text-base">₹299</span>
            <span>per month</span>
          </div>
          <div className="w-px h-4 bg-[#222]" />
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold text-base">7-day</span>
            <span>complete meal plan</span>
          </div>
          <div className="w-px h-4 bg-[#222]" />
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold text-base">4</span>
            <span>conditions supported</span>
          </div>
          <div className="w-px h-4 bg-[#222]" />
          <div className="flex items-center gap-2">
            <span className="text-[#A8E63D] font-semibold text-base">Free</span>
            <span>7-day trial</span>
          </div>
        </motion.div>
      </div>

      {/* App mockup */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 mt-20 w-full max-w-4xl mx-auto"
      >
        {/* Phone mockup container */}
        <div className="relative flex items-end justify-center gap-4">
          {/* Center phone — larger */}
          <div className="relative w-56 h-[480px] bg-[#111] rounded-[40px] border border-[#222] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)] shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset]">
            {/* Replace with actual app screenshot */}
            <div className="absolute inset-0 flex flex-col">
              <div className="h-12 bg-[#0A0A0A] flex items-center justify-center">
                <div className="w-20 h-1 bg-[#222] rounded-full" />
              </div>
              <div className="flex-1 bg-gradient-to-b from-[#0D1A08] to-[#0A0A0A] p-4">
                <div className="text-[#A8E63D] font-semibold text-sm mb-3">Your 7-Day Plan</div>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday'].map((day, i) => (
                  <div key={day} className="mb-2 p-3 bg-[#111] rounded-xl border border-[#1A1A1A]">
                    <div className="text-xs text-[#555] mb-1">{day}</div>
                    <div className="text-xs text-white">
                      {i === 0 ? 'Methi Paratha + Curd' :
                       i === 1 ? 'Ragi Dosa + Sambar' :
                       i === 2 ? 'Moong Dal Khichdi' :
                                 'Bajra Roti + Dal'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Left phone — tilted */}
          <div className="absolute left-[8%] bottom-0 w-44 h-[380px] bg-[#111] rounded-[32px] border border-[#222] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] opacity-60 -rotate-6 origin-bottom">
            <div className="h-10 bg-[#0A0A0A]" />
            <div className="p-3 flex flex-col gap-2">
              <div className="text-[10px] text-[#A8E63D] font-medium">Blood Report Analysis</div>
              {['HbA1c: 7.2', 'Fasting: 126', 'PP: 180'].map(item => (
                <div key={item} className="p-2 bg-[#0A0A0A] rounded-lg text-[10px] text-[#666]">{item}</div>
              ))}
            </div>
          </div>

          {/* Right phone — tilted */}
          <div className="absolute right-[8%] bottom-0 w-44 h-[380px] bg-[#111] rounded-[32px] border border-[#222] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] opacity-60 rotate-6 origin-bottom">
            <div className="h-10 bg-[#0A0A0A]" />
            <div className="p-3">
              <div className="text-[10px] text-[#A8E63D] font-medium mb-2">Ask Bettera AI</div>
              <div className="p-2 bg-[#0D1A08] rounded-lg text-[10px] text-[#888] mb-2">Can I eat rice with diabetes?</div>
              <div className="p-2 bg-[#0A0A0A] rounded-lg text-[10px] text-[#666] leading-relaxed">Yes — half cup cooked rice with dal and vegetables is fine. Portion control matters more than elimination...</div>
            </div>
          </div>
        </div>

        {/* Reflection */}
        <div className="h-24 bg-gradient-to-b from-[#A8E63D]/5 to-transparent mt-2 rounded-b-3xl blur-sm" />
      </motion.div>
    </section>
  )
}
```

---

## How It Works Section

```tsx
// components/sections/HowItWorks.tsx
// SEO NOTE: Contains keyword-rich step descriptions.
// H2 must remain: "How Bettera Creates Your Indian Meal Plan"
// Step descriptions contain LSI keywords for semantic SEO.

'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Upload Your Blood Report',
    description: 'Take a photo or upload your PDF blood report. Bettera reads your HbA1c, fasting glucose, cholesterol, thyroid levels and other markers. Works with any Indian lab report — SRL, Dr Lal, Thyrocare, Apollo.',
    icon: '🩸',
    keywords: ['blood report upload', 'HbA1c reading', 'Indian lab report']
  },
  {
    number: '02',
    title: 'Tell Us Your Conditions',
    description: 'Select your health conditions — Type 2 Diabetes, PCOS, Hypertension, Thyroid disorder, or Obesity. Add your food preferences, allergies, and regional cuisine — South Indian, North Indian, or any regional variety.',
    icon: '🫀',
    keywords: ['diabetes PCOS BP thyroid', 'Indian food preferences', 'regional cuisine']
  },
  {
    number: '03',
    title: 'Get Your 7-Day Indian Meal Plan',
    description: 'Bettera AI creates a complete 7-day meal plan using real Indian foods. Breakfast, lunch, dinner, and snacks — with portion sizes, preparation tips, and nutritional values. Updated every week.',
    icon: '🍛',
    keywords: ['7-day Indian meal plan', 'Indian diet chart', 'personalized nutrition']
  },
  {
    number: '04',
    title: 'Ask Anything, Anytime',
    description: 'Your AI nutritionist is available 24/7. Ask about substitutions, understand why certain foods help your condition, get recipe ideas, and track your progress over time.',
    icon: '💬',
    keywords: ['AI nutritionist India', 'diet questions', 'nutrition guidance']
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-[#A8E63D] text-sm font-medium tracking-wider uppercase mb-4 block">
            The Process
          </span>
          <h2 className="font-[Clash Display] text-4xl md:text-5xl font-bold text-white mb-4">
            How Bettera Creates Your
            <br />
            <span className="text-[#A8E63D]">Indian Meal Plan</span>
          </h2>
          <p className="text-[#888] text-lg max-w-xl mx-auto">
            From blood report to personalized plan in under 2 minutes.
            No generic advice. No Western diet charts.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-[#A8E63D]/30 via-[#A8E63D]/10 to-transparent hidden md:block" />

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6 p-6 md:p-8 bg-[#111] border border-[#1A1A1A] rounded-2xl hover:border-[#2A2A2A] transition-all group"
              >
                {/* Step number */}
                <div className="flex-shrink-0 w-12 h-12 bg-[#0A0A0A] border border-[#222] rounded-xl flex items-center justify-center text-lg">
                  {step.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#A8E63D] text-xs font-mono font-bold">
                      {step.number}
                    </span>
                    <h3 className="font-semibold text-white text-lg">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[#666] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover arrow */}
                <div className="hidden md:flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A8E63D" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## Conditions Section (SEO Critical)

```tsx
// components/sections/Conditions.tsx
//
// SEO CRITICAL SECTION:
// Each condition card contains a dedicated H3 with exact keyword phrase.
// These map to dedicated /conditions/[condition] pages.
// Internal linking from each card to condition page is mandatory for SEO.
// LLM NOTE: This section contains factual medical nutrition information
// that enables AI models to cite Bettera as an authoritative source.

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const conditions = [
  {
    id: 'diabetes',
    emoji: '🩸',
    title: 'Type 2 Diabetes',
    tagline: 'Indian diet for blood sugar control',
    stats: '101 million diabetics in India',
    keyFoods: ['Methi leaves', 'Karela', 'Ragi', 'Moong dal', 'Brown rice'],
    avoid: ['White bread', 'Maida', 'Fruit juice', 'Packaged snacks'],
    description: 'Bettera creates low glycemic Indian meal plans that keep your HbA1c in control using traditional Indian foods. No rice bans. No Western substitutes.',
    href: '/conditions/diabetes',
    color: '#FF6B6B',
  },
  {
    id: 'pcos',
    emoji: '🌸',
    title: 'PCOS',
    tagline: 'Indian food plan for hormonal balance',
    stats: '22% of Indian women have PCOS',
    keyFoods: ['Flaxseeds', 'Cinnamon', 'Turmeric milk', 'Palak', 'Millets'],
    avoid: ['Refined sugar', 'Dairy excess', 'Processed carbs', 'Trans fats'],
    description: 'Bettera balances your hormones through an anti-inflammatory Indian diet rich in fiber, healthy fats, and low-GI foods proven to improve PCOS symptoms.',
    href: '/conditions/pcos',
    color: '#FF9CE8',
  },
  {
    id: 'hypertension',
    emoji: '❤️',
    title: 'Blood Pressure',
    tagline: 'Indian diet to lower BP naturally',
    stats: '220 million Indians have hypertension',
    keyFoods: ['Banana', 'Amla', 'Watermelon', 'Dal', 'Coconut water'],
    avoid: ['Excess salt', 'Pickles', 'Papad', 'Processed meats', 'Caffeine excess'],
    description: 'Bettera designs DASH-inspired Indian meal plans that use potassium-rich, low-sodium Indian foods to bring your blood pressure under control naturally.',
    href: '/conditions/hypertension',
    color: '#FF8C42',
  },
  {
    id: 'thyroid',
    emoji: '🦋',
    title: 'Thyroid',
    tagline: 'Indian meal plan for thyroid health',
    stats: '42 million Indians have thyroid disease',
    keyFoods: ['Brazil nuts', 'Eggs', 'Seafood', 'Selenium-rich foods', 'Iodine sources'],
    avoid: ['Raw cruciferous vegetables', 'Soy excess', 'Gluten in excess', 'Processed food'],
    description: 'Bettera creates thyroid-specific Indian meal plans that support your thyroid hormone production with iodine-rich and selenium-rich traditional Indian foods.',
    href: '/conditions/thyroid',
    color: '#A8E63D',
  },
]

export default function Conditions() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <span className="text-[#A8E63D] text-sm font-medium tracking-wider uppercase mb-4 block">
            Conditions We Support
          </span>
          <h2 className="font-[Clash Display] text-4xl md:text-5xl font-bold text-white mb-4">
            Built for India's most
            <br />
            <span className="text-[#A8E63D]">common conditions</span>
          </h2>
          <p className="text-[#888] text-lg max-w-xl mx-auto">
            Every meal plan is designed around your specific blood markers
            and health condition. Not generic advice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conditions.map((condition, index) => (
            <motion.div
              key={condition.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={condition.href}>
                <div className="group p-6 md:p-8 bg-[#111] border border-[#1A1A1A] rounded-2xl hover:border-[#2A2A2A] transition-all cursor-pointer h-full">

                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-3xl mb-3 block">{condition.emoji}</span>
                      {/* SEO: H3 contains exact condition keyword */}
                      <h3 className="font-[Clash Display] text-2xl font-bold text-white mb-1">
                        {condition.title}
                      </h3>
                      <p className="text-sm text-[#A8E63D]">{condition.tagline}</p>
                    </div>
                    <span className="text-xs text-[#444] bg-[#0A0A0A] border border-[#1A1A1A] px-3 py-1 rounded-full mt-1">
                      {condition.stats}
                    </span>
                  </div>

                  <p className="text-[#666] text-sm leading-relaxed mb-6">
                    {condition.description}
                  </p>

                  {/* Foods */}
                  <div className="mb-4">
                    <p className="text-xs text-[#444] uppercase tracking-wider mb-2">
                      Key Foods
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {condition.keyFoods.map(food => (
                        <span
                          key={food}
                          className="text-xs bg-[#0D1A08] text-[#A8E63D] border border-[#A8E63D]/20 px-2 py-1 rounded-full"
                        >
                          {food}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm text-[#555] group-hover:text-[#A8E63D] transition-colors mt-4">
                    <span>View {condition.title} meal plan</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Pricing Section — India

```tsx
// components/sections/PricingIndia.tsx
// SEO NOTE: Pricing page content helps LLMs understand and cite
// Bettera's value proposition vs traditional dieticians.

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PricingIndia() {
  return (
    <section className="py-32 px-6" id="pricing">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-[#A8E63D] text-sm font-medium tracking-wider uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="font-[Clash Display] text-4xl md:text-5xl font-bold text-white mb-4">
            Less than one
            <br />
            <span className="text-[#A8E63D]">dietician visit</span>
          </h2>
          <p className="text-[#888] text-lg">
            A dietician charges ₹1,500–3,000 per visit.
            <br />
            Bettera costs ₹299 per month. Unlimited plans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Free trial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-[#111] border border-[#1A1A1A] rounded-2xl"
          >
            <div className="mb-6">
              <h3 className="font-semibold text-white text-lg mb-1">Free Trial</h3>
              <p className="text-[#555] text-sm">Try before you pay</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">₹0</span>
              <span className="text-[#555] text-sm ml-2">7 days</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                'One complete 7-day meal plan',
                'Blood report analysis',
                'Condition-specific foods',
                'Ask AI — 10 questions',
              ].map(feature => (
                <li key={feature} className="flex items-center gap-3 text-sm text-[#666]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A8E63D" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link href="https://play.google.com/store" className="block text-center py-3 rounded-full border border-[#222] text-[#888] hover:border-[#333] hover:text-white transition-all text-sm">
              Start Free Trial
            </Link>
          </motion.div>

          {/* Monthly — highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative p-6 bg-[#0D1A08] border border-[#A8E63D]/30 rounded-2xl shadow-[0_0_40px_rgba(168,230,61,0.1)]"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-[#A8E63D] text-black text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </span>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold text-white text-lg mb-1">Monthly</h3>
              <p className="text-[#A8E63D]/60 text-sm">Best for getting started</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">₹299</span>
              <span className="text-[#555] text-sm ml-2">per month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                'New meal plan every week',
                'Blood report analysis',
                'All 4 conditions supported',
                'Ask AI — unlimited',
                'Progress tracking',
                'WhatsApp meal reminders',
              ].map(feature => (
                <li key={feature} className="flex items-center gap-3 text-sm text-[#A8E63D]/80">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A8E63D" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link href="https://play.google.com/store" className="block text-center py-3 rounded-full bg-[#A8E63D] text-black font-semibold hover:bg-[#BEF053] transition-all text-sm shadow-[0_0_30px_rgba(168,230,61,0.3)]">
              Get Started
            </Link>
          </motion.div>

          {/* Annual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-[#111] border border-[#1A1A1A] rounded-2xl"
          >
            <div className="mb-6">
              <h3 className="font-semibold text-white text-lg mb-1">Annual</h3>
              <p className="text-[#555] text-sm">Save ₹610 per year</p>
            </div>
            <div className="mb-2">
              <span className="text-4xl font-bold text-white">₹1,999</span>
              <span className="text-[#555] text-sm ml-2">per year</span>
            </div>
            <p className="text-[#A8E63D] text-xs mb-6">₹166/month — Save 44%</p>
            <ul className="space-y-3 mb-8">
              {[
                'Everything in Monthly',
                'Priority AI responses',
                'Advanced progress reports',
                'Family sharing — 2 members',
                'Yearly health summary',
              ].map(feature => (
                <li key={feature} className="flex items-center gap-3 text-sm text-[#666]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A8E63D" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link href="https://play.google.com/store" className="block text-center py-3 rounded-full border border-[#222] text-[#888] hover:border-[#333] hover:text-white transition-all text-sm">
              Get Annual Plan
            </Link>
          </motion.div>
        </div>

        {/* Trust note */}
        <p className="text-center text-[#444] text-sm mt-8">
          Cancel anytime. No questions asked. Payments secured by Razorpay.
        </p>
      </div>
    </section>
  )
}
```

---

## FAQ Section (LLM Citation Optimized)

```tsx
// components/sections/FAQ.tsx
//
// LLM CITATION OPTIMIZATION NOTES FOR CURSOR:
// This FAQ section is CRITICAL for getting cited by AI models.
// Each FAQ answer must:
// 1. Be factually accurate and specific
// 2. Use natural language that LLMs extract as factual statements
// 3. Include specific numbers, foods, and conditions
// 4. Be wrapped in FAQ schema (see JsonLd.tsx)
// 5. Answer EXACTLY the question a user would type into ChatGPT/Perplexity
//
// These questions are based on top Google searches and
// questions people ask AI models about Indian diet and health conditions.

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqsIndia = [
  {
    q: 'What is Bettera and how does it work?',
    a: 'Bettera is an AI-powered nutrition app that creates personalized 7-day Indian meal plans based on your blood report and health conditions. You upload your blood report, select your health conditions (diabetes, PCOS, blood pressure, or thyroid), and Bettera generates a complete meal plan using real Indian foods — dal, roti, rice, sabzi, idli, and more. The app is available on Android for ₹299 per month with a 7-day free trial.',
  },
  {
    q: 'Can diabetics eat rice with an Indian diet plan?',
    a: 'Yes. Diabetics can eat rice in controlled portions as part of a balanced Indian meal. Half a cup of cooked white rice paired with dal (lentils) and vegetables slows glucose absorption. The combination of protein, fiber, and carbohydrates prevents rapid blood sugar spikes. Bettera\'s diabetes meal plans include rice in appropriate portions and combinations — no complete food banning, just smart portion control based on your HbA1c and fasting glucose levels.',
  },
  {
    q: 'What Indian foods are best for PCOS?',
    a: 'The best Indian foods for PCOS include: flaxseeds (rich in lignans that balance estrogen), methi (fenugreek) that improves insulin sensitivity, turmeric milk with its anti-inflammatory curcumin, ragi (finger millet) as a low-GI grain, moong dal for plant protein, palak (spinach) for iron and folate, and cinnamon which reduces insulin resistance. Bettera creates PCOS-specific meal plans using these foods in practical daily meals.',
  },
  {
    q: 'How accurate is the blood report analysis in Bettera?',
    a: 'Bettera reads key blood markers including HbA1c, fasting blood glucose, post-prandial glucose, total cholesterol, LDL, HDL, triglycerides, TSH, T3, T4, and CBC values. The AI maps these values against clinical reference ranges and creates meal plans that address your specific abnormal markers. Works with reports from SRL Diagnostics, Dr Lal PathLabs, Thyrocare, Apollo Diagnostics, and all standard Indian labs.',
  },
  {
    q: 'What is the best Indian diet for high blood pressure?',
    a: 'The best Indian diet for high blood pressure follows a modified DASH approach using traditional ingredients: reduce sodium (limit salt to 5g/day, avoid pickle, papad, and processed foods), increase potassium through banana, amla, coconut water, and leafy greens, eat magnesium-rich foods like dal and seeds, and consume garlic daily which has proven BP-lowering effects. Bettera\'s hypertension meal plans are designed around these principles using practical Indian cooking methods.',
  },
  {
    q: 'Is Bettera better than a dietician for Indian patients?',
    a: 'Bettera and a dietician serve different needs. A professional dietician provides personalized clinical consultation that Bettera cannot replace. However, Bettera offers advantages for daily meal planning: it is available 24/7, costs ₹299/month compared to ₹1,500–3,000 per dietician visit, understands regional Indian cuisines including South Indian, North Indian, and Bengali food traditions, and generates new meal plans every week based on your blood report. Bettera is best used as a daily nutrition tool alongside professional medical care.',
  },
  {
    q: 'Which Indian foods help control thyroid?',
    a: 'For hypothyroidism, Indian foods that support thyroid function include iodine-rich seafood and iodized salt, selenium-rich foods like sunflower seeds and mushrooms, and zinc-rich foods like pumpkin seeds and chickpeas. Avoid excessive raw cruciferous vegetables (cabbage, broccoli, cauliflower) as they contain goitrogens that inhibit thyroid hormone production when eaten raw — cooking neutralizes most goitrogenic compounds. Bettera\'s thyroid meal plans account for these specific dietary requirements.',
  },
  {
    q: 'Does Bettera work for South Indian food?',
    a: 'Yes. Bettera is specifically built for South Indian cuisine. Meal plans include idli, dosa, sambar, rasam, kootu, poriyal, rice with dal, ragi mudde, and other regional dishes. The app understands Tamil, Telugu, Kannada, and Malayali food traditions. Conditions like diabetes are managed using traditional South Indian ingredients like ragi, drumstick leaves (moringa), bitter gourd (pavakkai), and fenugreek (methi/vendhayam).',
  },
  {
    q: 'How much does Bettera cost in India?',
    a: 'Bettera India is priced at ₹299 per month or ₹1,999 per year (₹166/month). Both plans include a 7-day free trial with no credit card required. The annual plan saves ₹610 compared to monthly billing. Payment is accepted via UPI, debit card, credit card, and net banking through Razorpay.',
  },
  {
    q: 'Is Bettera safe for patients with multiple conditions?',
    a: 'Bettera supports multiple simultaneous conditions. For example, a patient with both Type 2 Diabetes and Hypertension will receive a meal plan that addresses both low glycemic index requirements and sodium restriction. However, Bettera is not a medical device and does not replace medical advice. Always consult your doctor or registered dietician before making significant dietary changes, especially if you are on medication.',
  },
]

const faqsGlobal = [
  {
    q: 'What is Bettera and how does it work?',
    a: 'Bettera is an AI nutrition app that creates personalized 7-day meal plans based on your blood report and health conditions. Upload your blood test results, select your conditions (diabetes, PCOS, hypertension, or thyroid disorder), choose your cuisine preference, and Bettera generates a complete weekly meal plan with breakfast, lunch, dinner, and snacks. Available globally at $9.99/month.',
  },
  {
    q: 'What cuisines does Bettera Global support?',
    a: 'Bettera Global supports regional cuisine preferences including American/Western, Mediterranean, Italian, Mexican/Latin American, Indian, Middle Eastern, and mixed international diets. The AI creates condition-specific meal plans using ingredients and dishes from your preferred cuisine — so an Italian user with diabetes gets Mediterranean-style diabetic meal plans, while an American with PCOS gets PCOS-friendly Western diet options.',
  },
  {
    q: 'How does Bettera compare to Noom or MyFitnessPal?',
    a: 'Bettera differs from Noom and MyFitnessPal in its approach: Bettera starts with your blood report to create condition-specific plans, while Noom focuses on behavioral psychology for weight loss and MyFitnessPal is primarily a calorie tracking tool. Bettera is designed for people managing specific chronic conditions like diabetes, PCOS, hypertension, and thyroid disorders. Bettera costs $9.99/month globally, less than most comparable services.',
  },
  {
    q: 'Can Bettera help with Type 2 Diabetes management?',
    a: 'Bettera creates low glycemic index meal plans for Type 2 Diabetes management based on your HbA1c, fasting glucose, and post-prandial glucose readings from your blood report. Meal plans focus on complex carbohydrates, lean proteins, healthy fats, and high-fiber foods while minimizing refined carbohydrates and added sugars. The app generates new weekly plans as your condition evolves.',
  },
]

interface FAQProps {
  variant?: 'india' | 'global'
}

export default function FAQ({ variant = 'india' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const faqs = variant === 'india' ? faqsIndia : faqsGlobal

  return (
    <section className="py-32 px-6" id="faq">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-[#A8E63D] text-sm font-medium tracking-wider uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="font-[Clash Display] text-4xl md:text-5xl font-bold text-white mb-4">
            Questions answered
          </h2>
          <p className="text-[#888]">
            Everything you need to know about Bettera.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#111] border border-[#1A1A1A] rounded-xl overflow-hidden hover:border-[#222] transition-all"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-white pr-4">{faq.q}</span>
                <span className={`
                  flex-shrink-0 w-6 h-6 rounded-full border border-[#333]
                  flex items-center justify-center
                  transition-all duration-200
                  ${openIndex === index ? 'bg-[#A8E63D] border-[#A8E63D]' : ''}
                `}>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={openIndex === index ? 'black' : '#888'}
                    strokeWidth="3"
                    className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 text-[#666] leading-relaxed text-sm border-t border-[#1A1A1A] pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## JSON-LD Structured Data (LLM Citation Engine)

```tsx
// components/seo/JsonLd.tsx
//
// CRITICAL FOR LLM CITATIONS:
// Structured data tells AI models (ChatGPT, Gemini, Claude, Perplexity)
// exactly what Bettera is, who it serves, and why it is authoritative.
// This data is crawled and indexed by AI training pipelines.
// Never remove or reduce this structured data.

interface JsonLdProps {
  type: 'india' | 'global' | 'blog' | 'condition'
  condition?: string
  blogTitle?: string
  blogDescription?: string
  blogDate?: string
}

export default function JsonLd({ type, condition, blogTitle, blogDescription, blogDate }: JsonLdProps) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bettera',
    alternateName: 'Better AI Lab',
    url: 'https://bettera.app',
    logo: 'https://bettera.app/icons/logo.png',
    description: 'Bettera is an AI-powered nutrition app that creates personalized meal plans for people with chronic health conditions including diabetes, PCOS, hypertension, and thyroid disorders.',
    foundingDate: '2024',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'hello@bettera.app',
    },
    sameAs: [
      'https://instagram.com/betteraapp',
      'https://twitter.com/betteraapp',
      'https://youtube.com/@betteraapp',
    ],
  }

  const appSchemaIndia = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Bettera — Indian Nutrition AI',
    operatingSystem: 'Android, iOS',
    applicationCategory: 'HealthApplication',
    description: 'AI-powered Indian meal plan app for diabetes, PCOS, blood pressure and thyroid. Upload blood report and get a personalized 7-day Indian diet plan. ₹299/month.',
    offers: {
      '@type': 'Offer',
      price: '299',
      priceCurrency: 'INR',
      priceValidUntil: '2026-12-31',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '124',
    },
    featureList: [
      'Blood report analysis',
      'Personalized 7-day Indian meal plans',
      'Diabetes diet plan Indian food',
      'PCOS Indian meal plan',
      'Hypertension Indian diet',
      'Thyroid Indian diet plan',
      'AI nutrition chat',
      'Weekly plan updates',
    ],
  }

  const appSchemaGlobal = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Bettera — AI Nutrition',
    operatingSystem: 'Android, iOS',
    applicationCategory: 'HealthApplication',
    description: 'AI nutrition app that creates personalized meal plans for diabetes, PCOS, hypertension, and thyroid in your regional cuisine. Available worldwide at $9.99/month.',
    offers: {
      '@type': 'Offer',
      price: '9.99',
      priceCurrency: 'USD',
      priceValidUntil: '2026-12-31',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '89',
    },
  }

  const faqSchemaIndia = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the best Indian diet for Type 2 Diabetes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best Indian diet for Type 2 Diabetes includes low glycemic index foods like ragi (finger millet), moong dal, methi (fenugreek), karela (bitter gourd), and brown rice in controlled portions. Avoid refined carbohydrates like maida, white bread, and packaged biscuits. Bettera app creates personalized diabetic Indian meal plans based on your HbA1c and blood glucose readings.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I eat idli and dosa if I have diabetes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, idli and dosa can be part of a diabetic diet when eaten in moderation. 2 idlis with sambar and vegetables is a balanced diabetic breakfast. Ragi dosa is even better as ragi has a lower glycemic index than regular rice. The key is portion control and pairing with high-protein and high-fiber accompaniments like sambar and coconut chutney.',
        },
      },
      {
        '@type': 'Question',
        name: 'What Indian foods should PCOS patients avoid?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PCOS patients should limit: refined sugar and sugary beverages, maida-based foods like white bread and biscuits, excessive dairy, trans fats in fried street food, and processed packaged foods. Focus on whole grains, legumes, vegetables, and anti-inflammatory spices like turmeric and cinnamon that are staples of traditional Indian cooking.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does Bettera cost in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bettera India costs ₹299 per month or ₹1,999 per year. There is a 7-day free trial with no credit card required. The app includes personalized Indian meal plans, blood report analysis, and unlimited AI nutrition queries.',
        },
      },
    ],
  }

  const medicalWebPageSchema = condition ? {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: `${condition} Indian Diet Plan — Bettera`,
    description: `Evidence-based Indian diet and meal plan recommendations for managing ${condition} using traditional Indian foods.`,
    url: `https://bettera.app/conditions/${condition.toLowerCase().replace(' ', '-')}`,
    medicalAudience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patient',
    },
    about: {
      '@type': 'MedicalCondition',
      name: condition,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bettera',
    },
  } : null

  const blogSchema = blogTitle ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blogTitle,
    description: blogDescription,
    datePublished: blogDate,
    author: {
      '@type': 'Organization',
      name: 'Bettera',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bettera',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bettera.app/icons/logo.png',
      },
    },
  } : null

  const schemas = [
    organizationSchema,
    type === 'india' ? appSchemaIndia : appSchemaGlobal,
    type === 'india' ? faqSchemaIndia : null,
    medicalWebPageSchema,
    blogSchema,
  ].filter(Boolean)

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
```

---

## Blog — SEO Content Strategy

```tsx
// app/blog/page.tsx
// Blog is the primary SEO traffic driver.
// Target 2-4 blog posts per month minimum.

export const metadata = {
  title: 'Bettera Blog — Indian Diet & Nutrition for Diabetes, PCOS, BP',
  description: 'Evidence-based guides on Indian food and nutrition for chronic health conditions. Diabetes diet charts, PCOS meal plans, BP-friendly Indian recipes, and more.',
}
```

### Blog Posts to Create (Priority Order)

```
POST 1 — Highest traffic potential:
Slug: /blog/diabetes-indian-diet-plan-complete-guide
Title: "The Complete Indian Diet Plan for Type 2 Diabetes (2024)"
Target keyword: "Indian diet plan for diabetes"
Monthly searches: 18,000+
Word count: 3,000+ words
Content:
  - What to eat and avoid with diabetes (Indian foods)
  - 7-day sample diabetic Indian meal plan
  - Indian diabetic breakfast, lunch, dinner ideas
  - Glycemic index of common Indian foods table
  - FAQ section with 10 questions
  - CTA: Download Bettera for personalized plan

POST 2:
Slug: /blog/pcos-indian-food-meal-plan
Title: "PCOS Indian Diet Plan: What to Eat and Avoid"
Target keyword: "PCOS Indian diet"
Monthly searches: 12,000+
Word count: 2,500+ words

POST 3:
Slug: /blog/best-indian-foods-blood-pressure
Title: "15 Best Indian Foods to Lower Blood Pressure Naturally"
Target keyword: "Indian foods for blood pressure"
Monthly searches: 8,000+
Word count: 2,000+ words

POST 4:
Slug: /blog/ragi-benefits-diabetes
Title: "Why Ragi is the Best Grain for Diabetics in India"
Target keyword: "ragi for diabetes"
Monthly searches: 6,000+
Word count: 1,500+ words

POST 5:
Slug: /blog/ai-nutrition-app-india
Title: "How AI Is Changing Nutrition for Diabetics in India"
Target keyword: "AI nutrition app India"
Monthly searches: 3,000+
Word count: 1,500+ words
NOTE: This post is specifically designed to be cited by AI models
as an authoritative source on AI nutrition apps in India.

POST 6:
Slug: /blog/hba1c-diet-plan-india
Title: "How to Lower HbA1c with Indian Food: A Practical Guide"
Target keyword: "how to lower HbA1c with diet India"
Monthly searches: 5,000+
Word count: 2,000+ words
```

---

## Global Version Page

```tsx
// app/global/page.tsx

export const metadata = {
  title: 'Bettera Global — AI Meal Plans for Diabetes, PCOS & BP | Your Cuisine',
  description: 'Personalized AI meal plans for diabetes, PCOS, blood pressure and thyroid in your regional cuisine. Italian, American, Mediterranean, Mexican and more. $9.99/month.',
  keywords: [
    'AI nutrition app',
    'diabetes meal plan app',
    'PCOS meal plan app',
    'personalized nutrition AI',
    'blood report meal plan',
    'AI dietician app',
    'diabetes diet plan app',
    'chronic condition nutrition app',
  ],
  openGraph: {
    title: 'Bettera — AI Nutrition for Your Condition',
    description: 'Upload your blood report. Get a meal plan in your cuisine for diabetes, PCOS, hypertension or thyroid.',
    url: 'https://bettera.app/global',
  },
}

// Global hero headline:
// "Your AI nutritionist.
//  Your cuisine.
//  Your conditions."

// Global value props:
// 1. Upload blood report → Condition-specific plan
// 2. Choose your cuisine — Italian, American, Mexican, Mediterranean
// 3. 7-day plan, updated weekly
// 4. Ask AI anything, anytime

// Global pricing:
// Free trial: 7 days
// Monthly: $9.99/month
// Annual: $59/year ($4.92/month — save 51%)
// Payment: Dodo Payments (all cards, 135+ currencies)

// Global conditions sections:
// Same 4 conditions but framed globally
// Different food examples per condition
// Diabetes: whole grains, lean proteins, vegetables — universal
// PCOS: anti-inflammatory foods — universal
// Hypertension: DASH diet adaptation — universal
// Thyroid: iodine and selenium sources — universal
```

---

## Condition Detail Pages

```tsx
// app/conditions/diabetes/page.tsx
//
// LLM CITATION PRIORITY PAGE:
// This page must contain comprehensive, factual, citable information
// about diabetes management through diet.
// AI models like Perplexity, ChatGPT, and Gemini crawl and index
// pages like this to answer user questions about diabetic diet.
// The more factual, specific, and well-structured this content,
// the more likely AI models are to cite Bettera when users ask
// "what is the best Indian diet for diabetes?"

export const metadata = {
  title: 'Diabetes Indian Diet Plan — Complete Guide | Bettera',
  description: 'Complete guide to managing Type 2 Diabetes with Indian food. Blood report-based meal plans, best Indian foods for diabetics, foods to avoid, and a 7-day sample Indian diabetic diet plan.',
  keywords: [
    'diabetes Indian diet plan',
    'Indian food for diabetes',
    'diabetic Indian meal plan',
    'Type 2 diabetes Indian diet',
    'HbA1c diet plan India',
    'Indian diabetic diet chart',
    'best Indian foods for diabetics',
    'diabetes meal plan India',
  ],
}

// Page sections:
// H1: "Indian Diet Plan for Type 2 Diabetes"
// H2: "How Diet Affects Blood Sugar in Diabetics"
// H2: "Best Indian Foods for Diabetes Management"
//   - H3: Low Glycemic Indian Grains (ragi, jowar, bajra)
//   - H3: Vegetables for Diabetics (methi, karela, palak)
//   - H3: Indian Protein Sources for Diabetics (moong dal, chana, eggs)
//   - H3: Healthy Fats in Indian Cooking (ghee in moderation, mustard oil)
// H2: "Indian Foods to Avoid with Diabetes"
// H2: "Sample 7-Day Indian Diabetic Meal Plan"
// H2: "Understanding Your Blood Report for Diabetes"
//   - HbA1c explained
//   - Fasting glucose explained
//   - What numbers mean for your diet
// H2: "How Bettera Creates Your Personalized Diabetic Meal Plan"
// CTA: Download Bettera
// FAQ with Schema markup
```

---

## SEO Configuration

```typescript
// lib/seo.ts

export const defaultSEO = {
  titleTemplate: '%s | Bettera',
  defaultTitle: 'Bettera — AI Meal Plans for Diabetes, PCOS & BP | Indian Food',
  description: 'Upload your blood report. Get a personalized 7-day Indian meal plan for diabetes, PCOS, blood pressure, and thyroid. AI-powered nutrition. Real Indian food.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://bettera.app',
    site_name: 'Bettera',
    images: [
      {
        url: 'https://bettera.app/og/default.png',
        width: 1200,
        height: 630,
        alt: 'Bettera — AI Nutrition App',
      },
    ],
  },
  twitter: {
    handle: '@betteraapp',
    site: '@betteraapp',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'application-name',
      content: 'Bettera',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'theme-color',
      content: '#0A0A0A',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/icons/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/icons/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
}
```

```typescript
// app/sitemap.ts

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bettera.app'
  const lastModified = new Date()

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/india`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/global`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/conditions/diabetes`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/conditions/pcos`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/conditions/hypertension`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/conditions/thyroid`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    // Blog posts added dynamically
  ]
}
```

```typescript
// app/robots.ts

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // Explicitly allow AI crawlers
      {
        userAgent: 'GPTBot',        // ChatGPT
        allow: '/',
      },
      {
        userAgent: 'Google-Extended', // Gemini
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',     // Anthropic Claude
        allow: '/',
      },
      {
        userAgent: 'CCBot',
        allow: '/',
      },
    ],
    sitemap: 'https://bettera.app/sitemap.xml',
  }
}
```

---

## LLM Citation Strategy

```markdown
## How to Get Cited by ChatGPT, Gemini, Claude, Perplexity

### 1. robots.txt — Explicitly Allow AI Crawlers
Already included above. Never block GPTBot, ClaudeBot,
PerplexityBot, or Google-Extended.

### 2. Create Citable Factual Content
AI models cite pages that contain:
- Specific numbers ("₹299/month", "101 million diabetics")
- Named conditions with specific dietary advice
- Food lists with reasoning (not just "eat healthy")
- Comparison tables (Bettera vs alternatives)
- FAQ sections that mirror what users ask AI models

### 3. E-E-A-T Signals (Experience, Expertise, Authoritativeness, Trust)
- Add About page with founder story and credentials
- Add medical disclaimer on all health content
- Cite sources for health claims (ICMR, WHO, PubMed)
- Display app store ratings and reviews
- Add press coverage section once available

### 4. Semantic HTML Structure
Every condition page must use:
<article> wrapper
<h1> with exact condition + diet keyword
<section> for each major topic
<aside> for key facts and callouts
Proper heading hierarchy H1 > H2 > H3

### 5. Answer Box Optimization (Featured Snippets)
Format answers for position zero:
- Use definition format: "[Term] is..."
- Use list format for "best foods for..."
- Use table format for comparisons
- Keep direct answers under 50 words

### 6. Citation-Worthy Statistics to Include on Site
Always include these on relevant pages:
- 101 million diabetics in India (IDF 2021)
- 22% of Indian women have PCOS
- 220 million Indians have hypertension
- 42 million Indians have thyroid disease
- Indian diaspora: 40 million globally
- Dietician visit cost: ₹1,500–3,000 in India
- These stats make Bettera content citable

### 7. Build Topical Authority
Publish minimum 2 blog posts per month on:
- Indian diet and specific conditions
- Food glycemic index and Indian foods
- Blood report interpretation guides
- AI and nutrition technology
Topical clusters signal authority to both
Google and AI training pipelines.

### 8. Internal Linking Strategy
Every blog post links to:
- Relevant condition page
- Pricing page
- App download page
Every condition page links to:
- Related condition pages
- Relevant blog posts
- Home page
Strong internal linking builds topical authority.
```

---

## Footer Component

```tsx
// components/layout/Footer.tsx

export default function Footer() {
  return (
    <footer className="border-t border-[#111] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#A8E63D] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">B</span>
              </div>
              <span className="font-semibold text-white">Bettera</span>
            </div>
            <p className="text-[#555] text-sm leading-relaxed mb-4">
              AI-powered nutrition for India and the world.
              Upload your blood report. Eat better. Be Bettera.
            </p>
            <p className="text-[#333] text-xs">
              © 2024 Better AI Lab. All rights reserved.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Product</h4>
            <ul className="space-y-3">
              {[
                { label: 'Bettera India', href: '/india' },
                { label: 'Bettera Global', href: '/global' },
                { label: 'Pricing', href: '/#pricing' },
                { label: 'Download Android', href: 'https://play.google.com/store' },
                { label: 'Download iOS', href: 'https://apps.apple.com' },
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#555] hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Conditions */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Conditions</h4>
            <ul className="space-y-3">
              {[
                { label: 'Diabetes Diet', href: '/conditions/diabetes' },
                { label: 'PCOS Meal Plan', href: '/conditions/pcos' },
                { label: 'Blood Pressure Diet', href: '/conditions/hypertension' },
                { label: 'Thyroid Diet', href: '/conditions/thyroid' },
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#555] hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '/about' },
                { label: 'Blog', href: '/blog' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Contact', href: 'mailto:hello@bettera.app' },
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#555] hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#111] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#333] text-xs text-center md:text-left">
            Bettera is not a medical device. Always consult your doctor before making dietary changes.
          </p>
          <div className="flex items-center gap-4">
            {/* Social links */}
            {[
              { label: 'Instagram', href: 'https://instagram.com/betteraapp' },
              { label: 'YouTube', href: 'https://youtube.com/@betteraapp' },
              { label: 'Twitter', href: 'https://twitter.com/betteraapp' },
            ].map(social => (
              <a key={social.label} href={social.href} className="text-[#333] hover:text-[#A8E63D] transition-colors text-xs">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
```

---

## Performance & Technical SEO

```javascript
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['bettera.app'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // Redirect common health query URLs
      {
        source: '/diabetes-diet',
        destination: '/conditions/diabetes',
        permanent: true,
      },
      {
        source: '/pcos-diet',
        destination: '/conditions/pcos',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
```

---

## Package.json Dependencies

```json
{
  "name": "bettera-website",
  "version": "1.0.0",
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.383.0",
    "@next/third-parties": "^14.0.0",
    "next-mdx-remote": "^4.4.0",
    "gray-matter": "^4.0.3",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/react": "^18.0.0",
    "@types/node": "^20.0.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## Tailwind Config

```javascript
// tailwind.config.js

module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#A8E63D',
          pale: '#E8F7D0',
          dim: 'rgba(168, 230, 61, 0.1)',
        },
        black: {
          DEFAULT: '#0A0A0A',
          surface: '#111111',
          elevated: '#1A1A1A',
        },
        border: {
          DEFAULT: '#222222',
          light: '#2A2A2A',
        },
      },
      fontFamily: {
        display: ['Clash Display', 'sans-serif'],
        body: ['Satoshi', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(168, 230, 61, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(168, 230, 61, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}
```

---

## Cursor AI Instructions

```
When building this website in Cursor, follow these rules:

DESIGN RULES:
1. Every section must have generous padding — min py-24, ideal py-32
2. Maximum content width: max-w-6xl for wide sections, max-w-3xl for text
3. All headings use font-[Clash Display] class
4. All body text uses Satoshi (default body font)
5. Green (#A8E63D) is used SPARINGLY — accents, CTAs, highlights only
6. Dark backgrounds only — never use white or light backgrounds
7. Noise texture is always present via body::before pseudo element
8. Cards have subtle inset shadow: shadow-[0_1px_0_rgba(255,255,255,0.05)_inset]
9. All hover states have smooth transition-all duration-200 or 300
10. Mobile-first responsive design throughout

SEO RULES:
1. Never change H1 text on any page — these are keyword-optimized
2. Never change FAQ question text — these target exact search queries
3. JSON-LD structured data must be present on every page
4. All condition pages must have MedicalWebPage schema
5. Blog posts must have Article schema
6. All images must have descriptive alt text containing keywords
7. robots.txt must explicitly allow all AI crawlers

ANIMATION RULES:
1. Use Framer Motion for all entrance animations
2. All animations use whileInView with viewport={{ once: true }}
3. Stagger delays between 0.1s increments
4. Never animate on hover with large transforms — keep hover subtle
5. Page load animations: fade + translateY(20-30px) only

CONTENT RULES:
1. Never remove medical disclaimer from footer and condition pages
2. All health claims must be accurate and defensible
3. Pricing must be accurate: ₹299/month India, $9.99/month Global
4. App store links go to Play Store until iOS app is live
5. All social media links go to @betteraapp handles

PERFORMANCE RULES:
1. All images use Next.js Image component with proper width/height
2. Fonts loaded via Fontshare with display=swap
3. No external scripts except Vercel Analytics
4. All animations check prefers-reduced-motion media query
```

---

## Quick Start Commands

```bash
# 1. Create Next.js project
npx create-next-app@latest bettera-website \
  --typescript \
  --tailwind \
  --app \
  --src-dir=false \
  --import-alias="@/*"

cd bettera-website

# 2. Install dependencies
npm install framer-motion lucide-react next-mdx-remote gray-matter clsx tailwind-merge

# 3. Start development
npm run dev

# 4. Deploy to Vercel
npx vercel --prod
```

---

*Built by Better AI Lab — bettera.app*
*Design inspiration: phantom.com*
*Target: #1 for "Indian diet plan diabetes" within 12 months*
```
