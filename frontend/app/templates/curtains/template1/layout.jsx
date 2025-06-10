import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Elegant Drapes & Blinds | Premium Window Treatments & Custom Curtains",
  description:
    "Transform your space with custom curtains, blinds, and premium window treatments. Expert design, quality installation, and 20+ years of excellence in window fashion.",
  keywords:
    "curtains, blinds, window treatments, custom drapes, motorized blinds, home decor, interior design",
  author: "Elegant Drapes & Blinds",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",

  // Open Graph tags for social media
  openGraph: {
    title: "Elegant Drapes & Blinds | Premium Window Treatments",
    description:
      "Transform your space with custom curtains, blinds, and premium window treatments. Expert design and quality installation.",
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Elegant Drapes & Blinds",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Elegant curtains and window treatments",
      },
    ],
  },

  // Twitter Card tags
  twitter: {
    card: "summary_large_image",
    title: "Elegant Drapes & Blinds | Premium Window Treatments",
    description:
      "Transform your space with custom curtains, blinds, and premium window treatments.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
  },

  // Additional meta tags
  other: {
    "theme-color": "#1e40af",
    "msapplication-TileColor": "#1e40af",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Elegant Drapes & Blinds",
              description:
                "Premium window treatments, custom curtains, and blinds installation services",
              url: "https://your-domain.com",
              telephone: "+1-234-567-8900",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Design Avenue, Suite 100",
                addressLocality: "Your City",
                addressRegion: "State",
                postalCode: "12345",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "40.7128",
                longitude: "-74.0060",
              },
              openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
              priceRange: "$$",
              image:
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
              sameAs: [
                "https://facebook.com/elegantdrapes",
                "https://instagram.com/elegantdrapes",
                "https://twitter.com/elegantdrapes",
              ],
            }),
          }}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
