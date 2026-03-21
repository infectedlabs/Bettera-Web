// Google Analytics utilities for Bettera website

// Track page views
export const pageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-YOUR_MEASUREMENT_ID', {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific tracking functions for Bettera

// Track app download clicks
export const trackAppDownload = (source) => {
  trackEvent('download', 'app', source);
};

// Track CTA button clicks
export const trackCTAClick = (ctaType, location) => {
  trackEvent('cta_click', 'engagement', `${ctaType}_${location}`);
};

// Track blog interactions
export const trackBlogView = (blogTitle) => {
  trackEvent('blog_view', 'content', blogTitle);
};

export const trackBlogShare = (blogTitle, platform) => {
  trackEvent('blog_share', 'social', `${blogTitle}_${platform}`);
};

// Track form submissions
export const trackContactForm = () => {
  trackEvent('form_submit', 'contact', 'contact_page');
};

// Track navigation
export const trackNavigation = (page) => {
  trackEvent('navigation', 'user_flow', page);
};

// Track search functionality (if added later)
export const trackSearch = (searchTerm) => {
  trackEvent('search', 'user_flow', searchTerm);
};

// Track user engagement metrics
export const trackEngagement = (type, duration) => {
  trackEvent('engagement', 'user_behavior', type, duration);
};

// E-commerce tracking (if implemented later)
export const trackPurchase = (productId, amount, currency = 'INR') => {
  trackEvent('purchase', 'ecommerce', productId, amount);
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: `T${Date.now()}`,
      value: amount,
      currency: currency,
      items: [{
        item_id: productId,
        item_name: productId,
        quantity: 1,
        price: amount
      }]
    });
  }
};

// Track user demographics (if collected)
export const trackUserDemographics = (age, gender) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('set', 'user_properties', {
      age: age,
      gender: gender
    });
  }
};

// Custom dimensions for Bettera-specific metrics
export const trackHealthCondition = (condition) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('set', 'user_properties', {
      health_condition: condition
    });
  }
};

export const trackCuisinePreference = (cuisine) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('set', 'user_properties', {
      cuisine_preference: cuisine
    });
  }
};
