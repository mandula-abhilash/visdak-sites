"use client";

import BasicHeader from "@/sections/headers/basic";
import SimpleHero from "@/sections/hero/simple-centered";
import GridWithFeatures from "@/sections/services/grid-with-features";
import SimpleGrid from "@/sections/testimonials/simple-grid";
import BasicFooter from "@/sections/footers/basic";
import BasicContact from "@/sections/contact/basic";

export default function SalonTemplate1({ business }) {
  return (
    <main className="min-h-screen">
      <BasicHeader business={business} />
      <SimpleHero
        title={business.sections[0].props.title}
        subtitle={business.sections[0].props.subtitle}
        image={business.sections[0].props.image}
        cta={business.sections[0].props.cta}
      />
      <GridWithFeatures
        title={business.sections[1].props.title}
        description={business.sections[1].props.description}
        services={business.sections[1].props.services}
      />
      <SimpleGrid
        title={business.sections[2].props.title}
        description={business.sections[2].props.description}
        testimonials={business.sections[2].props.testimonials}
      />
      <BasicContact business={business} />
      <BasicFooter business={business} />
    </main>
  );
}
