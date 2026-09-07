interface Crumb {
  name: string;
  href?: string;
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Wiki FuturyCraft",
    url: "https://wiki.futurycraft.com.br",
    inLanguage: "pt-BR",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://wiki.futurycraft.com.br?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.href ? { item: `https://wiki.futurycraft.com.br${item.href}` } : {}),
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  url,
  datePublished,
  section,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  section: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    datePublished,
    dateModified: datePublished,
    articleSection: section,
    inLanguage: "pt-BR",
    publisher: {
      "@type": "Organization",
      name: "FuturyCraft",
      url: "https://futurycraft.com.br",
    },
  };
}