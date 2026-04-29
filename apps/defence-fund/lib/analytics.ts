export function trackEvent(event: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === 'undefined') return;

  const payload = { event, ...params };

  const w = window as Window & {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  };

  if (typeof w.gtag === 'function') {
    w.gtag('event', event, params || {});
  }

  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push(payload);
  }
}
