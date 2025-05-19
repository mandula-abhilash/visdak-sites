import { getBusinessBySubdomain } from "@/lib/data";
import BusinessThemeProvider from "@/components/BusinessThemeProvider";
import BusinessHeader from "@/components/BusinessHeader";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

export default async function Page({ searchParams }) {
  // Get subdomain from URL params (set by middleware)
  const subdomain = searchParams.subdomain;

  // Fetch business data based on subdomain
  const business = await getBusinessBySubdomain(subdomain);

  // If business not found, show 404 page
  if (!business) {
    return notFound();
  }

  return (
    <BusinessThemeProvider business={business}>
      <main className="min-h-screen">
        <BusinessHeader business={business} />
        <HeroSection business={business} />
        <ServiceSection business={business} />
        <TestimonialSection business={business} />
        <ContactSection business={business} />
        <Footer business={business} />
      </main>
    </BusinessThemeProvider>
  );
}
