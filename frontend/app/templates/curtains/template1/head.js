export default function Head({ business, pathname }) {
  // Get route-specific SEO if available, otherwise use default
  const routeSeo = business?.seo?.routes?.[pathname] || business?.seo || {};
  const title =
    routeSeo.title || business?.seo?.title || "Elegant Drapes & Blinds";
  const description =
    routeSeo.description ||
    business?.seo?.description ||
    "Premium window treatments and custom curtains";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={business?.seo?.ogImage || ""} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="canonical"
        href={`https://${
          business?.subdomain || "elegantdrapes"
        }.yourdomain.com`}
      />
      <link rel="icon" href={business?.seo?.favicon || "/favicon.ico"} />
    </>
  );
}
