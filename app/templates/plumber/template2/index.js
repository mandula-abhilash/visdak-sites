"use client";

import BasicHeader from "@/sections/headers/basic";
import WithBackgroundImageHero from "@/sections/hero/with-background-image";
import ListWithIcons from "@/sections/services/list-with-icons";
import SimpleGrid from "@/sections/testimonials/simple-grid";
import BasicFooter from "@/sections/footers/basic";
import BasicContact from "@/sections/contact/basic";

export default function PlumberTemplate2({ business }) {
  return (
    <main className="min-h-screen">
      <BasicHeader business={business} />
      <WithBackgroundImageHero
        title={business.sections[0].props.title}
        subtitle={business.sections[0].props.subtitle}
        image={business.sections[0].props.image}
        cta={business.sections[0].props.cta}
      />
      <ListWithIcons
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
