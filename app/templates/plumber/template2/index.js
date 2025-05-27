"use client";

import BusinessHeader from "@/components/BusinessHeader";
import Footer from "@/components/Footer";
import WithBackgroundImageHero from "@/sections/hero/with-background-image";
import ListWithIcons from "@/sections/services/list-with-icons";
import SimpleGrid from "@/sections/testimonials/simple-grid";
import ContactSection from "@/components/ContactSection";

export default function PlumberTemplate2({ business }) {
  return (
    <main className="min-h-screen">
      <BusinessHeader business={business} />
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
      <ContactSection business={business} />
      <Footer business={business} />
    </main>
  );
}
