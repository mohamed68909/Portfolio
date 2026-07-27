/**
 * Privacy-Friendly Analytics Engine for Mohamed Ashraf's Engineering Platform
 * Lightweight, zero-cookies, GDPR-compliant client event logger.
 */

'use strict';

window.ANALYTICS_CONFIG = {
  enabled: true,    // Toggle tracking on/off
  debug: false,     // Log events to console
  provider: 'custom' // Supported: 'custom', 'plausible', 'umami'
};

class AnalyticsTracker {
  constructor() {
    this.sessionStart = Date.now();
    this.scrollThresholdsTracked = new Set();
    this.init();
  }

  init() {
    if (!window.ANALYTICS_CONFIG || !window.ANALYTICS_CONFIG.enabled) return;

    // Track Page View
    this.trackPageView();

    // Track Global Clicks
    document.addEventListener('click', (e) => this.handleGlobalClick(e), { passive: true });

    // Track Scroll Depth
    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
  }

  logEvent(eventName, eventParams = {}) {
    if (!window.ANALYTICS_CONFIG.enabled) return;

    const payload = {
      event: eventName,
      params: {
        ...eventParams,
        path: window.location.pathname,
        hash: window.location.hash,
        timestamp: new Date().toISOString(),
        device: this.getDeviceType(),
        referrer: document.referrer || 'direct'
      }
    };

    if (window.ANALYTICS_CONFIG.debug) {
      console.log(`[Analytics] Tracked Event: ${eventName}`, payload);
    }

    if (window.plausible) {
      window.plausible(eventName, { props: eventParams });
    }
  }

  trackPageView() {
    this.logEvent('page_view', {
      title: document.title,
      url: window.location.href
    });
  }

  handleGlobalClick(e) {
    const target = e.target.closest('a, button, [data-track]');
    if (!target) return;

    const trackType = target.dataset.track || '';
    const label = target.textContent.trim() || target.getAttribute('aria-label') || 'Button';
    const href = target.getAttribute('href') || '';

    if (href.includes('.pdf') || href.includes('resume') || trackType === 'resume') {
      this.logEvent('resume_download', { label, href });
    } else if (href.includes('wa.me') || href.includes('mailto:') || href.includes('calendly')) {
      this.logEvent('contact_click', { channel: label, destination: href });
    } else if (target.classList.contains('btn-primary') || target.classList.contains('btn') || trackType === 'cta') {
      this.logEvent('cta_click', { label, destination: href });
    }
  }

  handleScroll() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight <= 0) return;

    const scrollPercentage = Math.round((window.scrollY / scrollHeight) * 100);
    const thresholds = [25, 50, 75, 100];

    thresholds.forEach(threshold => {
      if (scrollPercentage >= threshold && !this.scrollThresholdsTracked.has(threshold)) {
        this.scrollThresholdsTracked.add(threshold);
        this.logEvent('scroll_depth', { depth: `${threshold}%` });
      }
    });
  }

  getDeviceType() {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => window.analytics = new AnalyticsTracker());
} else {
  window.analytics = new AnalyticsTracker();
}
