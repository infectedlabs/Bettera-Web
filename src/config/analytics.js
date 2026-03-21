// Google Analytics Configuration
export const GA_MEASUREMENT_ID = 'G-P6CGEG61P5'; // Replace with your actual GA4 Measurement ID

// Enable/disable analytics (useful for development)
export const ANALYTICS_ENABLED = process.env.NODE_ENV === 'production';

// Custom dimensions and metrics for Bettera
export const CUSTOM_DIMENSIONS = {
  HEALTH_CONDITION: 'custom_dimension_1',
  CUISINE_PREFERENCE: 'custom_dimension_2',
  USER_TYPE: 'custom_dimension_3',
  CONTENT_TYPE: 'custom_dimension_4',
};

// Event categories for Bettera
export const EVENT_CATEGORIES = {
  ENGAGEMENT: 'engagement',
  NAVIGATION: 'navigation',
  CONVERSION: 'conversion',
  CONTENT: 'content',
  USER_FLOW: 'user_flow',
  ECOMMERCE: 'ecommerce',
  SOCIAL: 'social',
};

// Event actions for Bettera
export const EVENT_ACTIONS = {
  // Engagement
  PAGE_VIEW: 'page_view',
  SCROLL_DEPTH: 'scroll_depth',
  TIME_ON_PAGE: 'time_on_page',
  FORM_START: 'form_start',
  FORM_COMPLETE: 'form_complete',
  
  // Navigation
  MENU_CLICK: 'menu_click',
  NAVIGATION_CLICK: 'navigation_click',
  BREADCRUMB_CLICK: 'breadcrumb_click',
  
  // Conversion
  APP_DOWNLOAD: 'app_download',
  TRIAL_START: 'trial_start',
  SUBSCRIPTION: 'subscription',
  
  // Content
  BLOG_VIEW: 'blog_view',
  BLOG_SHARE: 'blog_share',
  VIDEO_PLAY: 'video_play',
  VIDEO_COMPLETE: 'video_complete',
  
  // User Flow
  SEARCH: 'search',
  FILTER: 'filter',
  SORT: 'sort',
  
  // E-commerce
  PURCHASE: 'purchase',
  ADD_TO_CART: 'add_to_cart',
  BEGIN_CHECKOUT: 'begin_checkout',
  
  // Social
  SHARE: 'share',
  LIKE: 'like',
  COMMENT: 'comment',
  FOLLOW: 'follow',
};
