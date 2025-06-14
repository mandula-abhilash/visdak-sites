import { UniversalThemeHead } from "@/lib/universal-theme";

export default function Head({ business, pathname }) {
  const routeSeo = business.seo.routes?.[pathname] || business.seo;
  const title = routeSeo.title || business.seo.title;
  const description = routeSeo.description || business.seo.description;

  return (
    <>
      <UniversalThemeHead
        themeName={business.themeName}
        enableAntiFlicker={true}
      />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={business.seo.ogImage} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="canonical"
        href={`https://${business.subdomain}.yourdomain.com`}
      />
      <link rel="icon" href={business.seo.favicon} />
    </>
  );
}
