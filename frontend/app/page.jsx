import { notFound } from "next/navigation";
import { businessAPI } from "@/lib/api";
import { getTheme } from "@/config/themes";
import { getLayout } from "@/lib/layout-map";
import { getSection } from "@/lib/section-map";

export default async function Page({ searchParams }) {
  const subdomain = searchParams.subdomain;

  let business;
  try {
    const response = await businessAPI.getBySubdomain(subdomain);
    if (response.success) {
      business = response.data;
      // Apply theme
      business.theme = getTheme(business.themeName);
    } else {
      business = null;
    }
  } catch (error) {
    console.error("Error fetching business:", error);
    business = null;
  }

  // If no business found, show 404
  if (!business) {
    return notFound();
  }

  try {
    // Add subdomain to business object for canonical URLs
    business.subdomain = subdomain;

    // Special handling for bhava template - use the complete template
    if (business.template === "bhava") {
      const BhavaTemplate = (
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
        <>
          <Head
            business={business}
            pathname={searchParams.pathname || "home"}
          />
          <BhavaTemplate business={business} />
        </>
      );
    }

    // For other templates, use the section-based rendering
    const Layout = getLayout(business.layout || "stacked");

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
