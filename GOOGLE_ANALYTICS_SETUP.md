# Google Analytics Setup for Bettera

This guide will help you set up Google Analytics 4 (GA4) for the Bettera website.

## Step 1: Create a Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring" (or "Admin" → "Create Account" if you already have an account)
4. Enter an account name (e.g., "Bettera")
5. Click "Next"
6. Enter a property name (e.g., "Bettera Website")
7. Select your time zone and currency
8. Click "Next"
9. Select your industry category and business size
10. Click "Create" and accept the terms of service

## Step 2: Get Your Measurement ID

1. After creating the property, you'll see your **Measurement ID** (format: `G-XXXXXXXXXX`)
2. Copy this ID - you'll need it for the next step

## Step 3: Configure the Website

1. Open the file: `src/config/analytics.js`
2. Replace `G-YOUR_MEASUREMENT_ID` with your actual Measurement ID:

```javascript
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 Measurement ID
```

## Step 4: Verify Setup

### Method 1: Google Analytics Real-time Report
1. Go to your Google Analytics dashboard
2. Navigate to **Reports** → **Realtime**
3. Open your website in a browser
4. You should see active users in the real-time report

### Method 2: Browser Developer Tools
1. Open your website
2. Open Developer Tools (F12)
3. Go to the **Network** tab
4. Filter by "collect"
5. You should see requests to `www.google-analytics.com`

### Method 3: Google Tag Assistant
1. Install the [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-go/jfmfkjhfwjpmgkegejccncmcihdgaeha) Chrome extension
2. Navigate to your website
3. Click the Tag Assistant icon
4. You should see your GA4 tag listed with no errors

## Step 5: Test Event Tracking

The website includes automatic event tracking for:

### App Download Tracking
- All "Download from Play Store" buttons
- Tracked with source identification (hero_section, blog_hero, etc.)

### Blog Engagement
- Page views for each blog post
- Blog share events (when implemented)

### Navigation Tracking
- Page route changes
- Menu interactions

### Testing Events
1. Open your website
2. Click any download button
3. In Google Analytics, go to **Reports** → **Engagement** → **Events**
4. You should see the `app_download` event within a few minutes

## Step 6: Configure Goals (Optional)

1. In Google Analytics, go to **Admin** → **View** → **Goals**
2. Create goals for:
   - App downloads (Event-based: app_download)
   - Blog engagement (Event-based: blog_view)
   - Contact form submissions (Event-based: form_submit)

## Step 7: Enable Enhanced Measurement

1. In Google Analytics, go to **Admin** → **Property** → **Data Streams**
2. Click on your web stream
3. Under "Enhanced measurement", toggle on:
   - ✅ Page views
   - ✅ Scrolls
   - ✅ Outbound clicks
   - ✅ Site search
   - ✅ Video engagement
   - ✅ File downloads

## Step 8: Set Up Custom Dimensions (Optional)

The code includes custom dimensions for:
- Health conditions (diabetes, PCOS, etc.)
- Cuisine preferences
- User types

To use these:
1. Go to **Admin** → **Property** → **Custom definitions**
2. Create custom dimensions matching the ones in `src/config/analytics.js`

## Environment Configuration

The analytics automatically:
- ✅ **Enabled** in production
- ❌ **Disabled** in development

To override this behavior, modify `ANALYTICS_ENABLED` in `src/config/analytics.js`

## Privacy Compliance

The implementation includes:
- ✅ No personal data collection
- ✅ Anonymized IP addresses
- ✅ Cookie consent ready (can be extended)
- ✅ GDPR compliant by default

## Troubleshooting

### No Data Showing
1. Check that your Measurement ID is correct
2. Verify you're in production mode
3. Check browser console for errors
4. Ensure ad blockers are disabled

### Events Not Firing
1. Check the browser console for JavaScript errors
2. Verify the `useAnalytics` hook is properly imported
3. Test in production environment

### Real-time Data Delay
- Real-time data may take up to 5 minutes to appear
- Standard reports may take 24-48 hours to populate

## Next Steps

1. Set up conversion tracking for app downloads
2. Create custom dashboards for key metrics
3. Set up email alerts for unusual traffic patterns
4. Configure audience segmentation for better insights

## Support

For Google Analytics issues:
- [Google Analytics Help Center](https://support.google.com/analytics/)
- [Google Analytics Community](https://support.google.com/analytics/community)

For implementation issues:
- Check the browser console for JavaScript errors
- Verify all files are properly saved
- Ensure the website is running in production mode
