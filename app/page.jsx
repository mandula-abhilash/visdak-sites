import { getBusinessBySubdomain } from "@/config/businesses";
import { getLayout } from "@/lib/layout-map";
import { notFound } from "next/navigation";

export default async function Page({ searchParams }) {
  const subdomain = searchParams.subdomain;
  const business = getBusinessBySubdomain(subdomain);

  // If no business found, show 404
  if (!business) {
    return notFound();
  }

  try {
    // Add subdomain to business object for canonical URLs
    business.subdomain = subdomain;

    // Get the layout component
    const Layout = getLayout(business.layout || "stacked");

    // Dynamically import the template based on niche and template name
    const Template = (
      await import(
        `@/app/templates/${business.niche}/${business.template}/index.js`
      )
    ).default;
    const Head = (
      await import(
        `@/app/templates/${business.niche}/${business.template}/head.js`
      )
    ).default;

    return (
      <Layout business={business}>
        <Head business={business} pathname={searchParams.pathname || "home"} />
        <Template business={business} />
      </Layout>
    );
  } catch (error) {
    console.error("Template not found:", error);
    return notFound();
  }
}
