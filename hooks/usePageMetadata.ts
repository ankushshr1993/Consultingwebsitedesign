import { useEffect } from "react";

type PageMetadata = {
  title: string;
  description: string;
};

export function usePageMetadata(metadata: PageMetadata | null) {
  useEffect(() => {
    if (!metadata) {
      return;
    }

    document.title = metadata.title;

    const metaDescription = document.querySelector("meta[name='description']");

    if (metaDescription) {
      metaDescription.setAttribute("content", metadata.description);
      return;
    }

    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = metadata.description;
    document.head.appendChild(meta);
  }, [metadata]);
}
