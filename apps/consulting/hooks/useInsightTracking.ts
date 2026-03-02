import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function useInsightTracking(slug?: string) {
  useEffect(() => {
    if (!slug) {
      return;
    }

    const event = {
      event: "insight_open",
      slug,
      openedAt: new Date().toISOString(),
    };

    window.dataLayer?.push(event);
    window.dispatchEvent(new CustomEvent("insight_open", { detail: event }));
  }, [slug]);
}
