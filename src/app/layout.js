import "./globals.css";
import { GA_MEASUREMENT_ID, ANALYTICS_ENABLED } from '../config/analytics';

export const metadata = {
  title: {
    default: 'Bettera — AI Meal Plans for Diabetes, PCOS & BP | Your Food',
    template: '%s | Bettera'
  },
  description: 'AI-powered nutrition app that creates personalized meal plans based on your blood report and health conditions. Upload your blood test results and get a weekly meal plan in your cuisine.',
  icons: {
    icon: '/assets/icon.png',
    shortcut: '/assets/icon.png',
    apple: '/assets/icon.png',
  },
  keywords: [
    'AI nutritionist',
    'personalized meal plan',
    'diabetes meal plan',
    'PCOS diet',
    'blood pressure diet',
    'thyroid diet',
    'blood report analysis',
    'therapeutic nutrition',
    'chronic condition diet',
    'AI health app'
  ],
  authors: [{ name: 'Better AI Lab' }],
  creator: 'Better AI Lab',
  publisher: 'Better AI Lab',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bettera.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/india',
      'en-US': '/global',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bettera.app',
    title: 'Bettera — AI Nutrition for Everyone',
    description: 'Personalized meal plans for diabetes, PCOS, BP and thyroid. Upload blood report. Get your plan in your cuisine.',
    siteName: 'Bettera',
    images: [
      {
        url: '/og/global.png',
        width: 1200,
        height: 630,
        alt: 'Bettera - AI Nutrition App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bettera — AI Meal Plans for Your Health',
    description: 'Upload your blood report. Get a personalized meal plan in your cuisine.',
    images: ['/og/global.png'],
    creator: '@betteraapp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        {ANALYTICS_ENABLED && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
