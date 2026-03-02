import { HomePage } from "./pages/HomePage";
import { InsightDetailPage } from "./pages/InsightDetailPage";
import { InsightsPage } from "./pages/InsightsPage";
import { usePageMetadata } from "./hooks/usePageMetadata";

function resolvePath(pathname: string) {
  if (pathname === "/insights") {
    return { type: "insights-list" as const };
  }

  if (pathname.startsWith("/insights/")) {
    return {
      type: "insight-detail" as const,
      slug: pathname.replace("/insights/", ""),
    };
  }

  return { type: "home" as const };
}

export default function App() {
  const route = resolvePath(window.location.pathname);

  const metadata =
    route.type === "insights-list"
      ? {
          title: "Insights",
          description: "Strategic memos and operating playbooks.",
        }
      : route.type === "home"
        ? {
            title: "Consulting Website",
            description: "Consulting strategy, execution, and advisory services.",
          }
        : null;
  usePageMetadata(metadata);

  if (route.type === "insights-list") {
    return <InsightsPage />;
  }

  if (route.type === "insight-detail") {
    return <InsightDetailPage slug={route.slug} />;
  }

  return <HomePage />;
}
