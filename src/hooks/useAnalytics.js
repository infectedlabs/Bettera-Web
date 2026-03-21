import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as analytics from '../lib/analytics';

export const useAnalytics = () => {
  const router = useRouter();

  // Track page views on route changes
  useEffect(() => {
    const handleRouteChange = (url) => {
      analytics.pageView(url);
    };

    // Initial page view
    if (router.isReady) {
      analytics.pageView(router.asPath);
    }

    // Listen for route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  // Return tracking functions for easy use in components
  return {
    trackAppDownload: analytics.trackAppDownload,
    trackCTAClick: analytics.trackCTAClick,
    trackBlogView: analytics.trackBlogView,
    trackBlogShare: analytics.trackBlogShare,
    trackContactForm: analytics.trackContactForm,
    trackNavigation: analytics.trackNavigation,
    trackSearch: analytics.trackSearch,
    trackEngagement: analytics.trackEngagement,
    trackPurchase: analytics.trackPurchase,
    trackUserDemographics: analytics.trackUserDemographics,
    trackHealthCondition: analytics.trackHealthCondition,
    trackCuisinePreference: analytics.trackCuisinePreference,
  };
};
