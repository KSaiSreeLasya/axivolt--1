import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  noindex?: boolean;
}

export function useSEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  canonical,
  noindex = false,
}: SEOProps) {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Remove old meta tags and add new ones
    const updateMetaTag = (name: string, content: string) => {
      let element = document.querySelector(
        `meta[name="${name}"]`,
      ) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    const updatePropertyTag = (property: string, content: string) => {
      let element = document.querySelector(
        `meta[property="${property}"]`,
      ) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Meta tags
    updateMetaTag("description", description);
    if (keywords) {
      updateMetaTag("keywords", keywords);
    }

    // Open Graph tags (for social sharing)
    updatePropertyTag("og:title", ogTitle || title);
    updatePropertyTag("og:description", ogDescription || description);
    updatePropertyTag("og:type", "website");
    if (ogImage) {
      updatePropertyTag("og:image", ogImage);
    }
    if (ogUrl) {
      updatePropertyTag("og:url", ogUrl);
    }

    // Robots tag
    if (noindex) {
      updateMetaTag("robots", "noindex, nofollow");
    } else {
      updateMetaTag("robots", "index, follow");
    }

    // Canonical tag
    if (canonical) {
      let canonicalElement = document.querySelector(
        'link[rel="canonical"]',
      ) as HTMLLinkElement | null;
      if (!canonicalElement) {
        canonicalElement = document.createElement("link");
        canonicalElement.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalElement);
      }
      canonicalElement.setAttribute("href", canonical);
    }
  }, [
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    canonical,
    noindex,
  ]);
}

// Helper to add schema markup (structured data)
export function addSchemaMarkup(schema: Record<string, any>) {
  let scriptTag = document.getElementById(
    "schema-markup",
  ) as HTMLScriptElement | null;
  if (!scriptTag) {
    scriptTag = document.createElement("script");
    scriptTag.id = "schema-markup";
    scriptTag.type = "application/ld+json";
    document.head.appendChild(scriptTag);
  }
  scriptTag.textContent = JSON.stringify(schema);
}

// Common schema builders
export const SchemaMarkup = {
  organization: (data: {
    name: string;
    logo: string;
    url: string;
    description: string;
    phone?: string;
    email?: string;
  }) => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    logo: data.logo,
    url: data.url,
    description: data.description,
    ...(data.phone && { telephone: data.phone }),
    ...(data.email && { email: data.email }),
  }),

  localBusiness: (data: {
    name: string;
    description: string;
    url: string;
    phone: string;
    image?: string;
    address?: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    sameAs?: string[];
  }) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: data.name,
    description: data.description,
    url: data.url,
    telephone: data.phone,
    ...(data.image && { image: data.image }),
    ...(data.address && { address: data.address }),
    ...(data.sameAs && { sameAs: data.sameAs }),
  }),

  service: (data: {
    name: string;
    description: string;
    provider?: {
      name: string;
      url: string;
    };
    areaServed?: string[];
  }) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.description,
    ...(data.provider && { provider: data.provider }),
    ...(data.areaServed && { areaServed: data.areaServed }),
  }),

  breadcrumb: (items: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),
};
