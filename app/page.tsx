import { getBusinessBySubdomain } from '@/lib/data';
import { Business } from '@/lib/types';
import BusinessThemeProvider from '@/components/BusinessThemeProvider';
import BusinessHeader from '@/components/BusinessHeader';
import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Page({ searchParams }: PageProps) {
  // Get subdomain from URL params (set by middleware)
  const subdomain = searchParams.subdomain as string;
  
  // Fetch business data based on subdomain
  const business = await getBusinessBySubdomain(subdomain);
  
  // If business not found, show 404 page
  if (!business) {
    return notFound();
  }
  
  return (
    <BusinessThemeProvider business={business as Business}>
      <main className="min-h-screen">
        <BusinessHeader business={business as Business} />
        <HeroSection business={business as Business} />
        <ServiceSection business={business as Business} />
        <TestimonialSection business={business as Business} />
        <ContactSection business={business as Business} />
        <Footer business={business as Business} />
      </main>
    </BusinessThemeProvider>
  );
}