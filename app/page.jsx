import { getBusinessBySubdomain } from "@/config/businesses";
import { getLayout } from "@/lib/layout-map";
import { getSection } from "@/lib/section-map";
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

    // Get Head component
    const Head = (
      await import(
        `@/app/templates/${business.niche}/${business.template}/head.js`
      )
    ).default;

    return (
      <Layout business={business}>
        <Head business={business} pathname={searchParams.pathname || "home"} />
        {business.sections?.map((section) => {
          const SectionComponent = getSection(section.type);
          return SectionComponent ? (
            <SectionComponent key={section.id} {...section.props} />
          ) : null;
        })}
      </Layout>
    );
  } catch (error) {
    console.error("Template not found:", error);
    return notFound();
  }
}
