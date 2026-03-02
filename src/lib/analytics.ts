export type AnalyticsEvent = 'cta_diagnostic_click' | 'contact_submit_success' | 'insight_open';

type PlausibleArgs = [eventName: AnalyticsEvent, options?: Record<string, unknown>];

declare global {
  interface Window {
    plausible?: (...args: PlausibleArgs) => void;
  }
}

export function trackEvent(eventName: AnalyticsEvent, options?: Record<string, unknown>) {
  if (typeof window === 'undefined' || typeof window.plausible !== 'function') {
    return;
  }

  window.plausible(eventName, options);
}
