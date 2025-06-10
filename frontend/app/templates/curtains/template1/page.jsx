import HeroSection from "./templates/code-red/components/HeroSection";
import AboutSection from "./templates/code-red/components/AboutSection";
import ServicesSection from "./templates/code-red/components/ServicesSection";
import GallerySection from "./templates/code-red/components/GallerySection";
import TestimonialsSection from "./templates/code-red/components/TestimonialsSection";
import ContactSection from "./templates/code-red/components/ContactSection";
import Footer from "./templates/code-red/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
