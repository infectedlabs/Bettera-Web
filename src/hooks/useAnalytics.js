import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import * as analytics from '../lib/analytics';

export const useAnalytics = () => {
  const pathname = usePathname();

  // Track page views on route changes
  useEffect(() => {
    if (pathname) {
      analytics.pageView(pathname);
    }
  }, [pathname]);

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
