"use client";

import { useEffect } from "react";
import BusinessHeader from "@/components/BusinessHeader";
import Footer from "@/components/Footer";

export default function ParallaxLayout({ business, children }) {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--business-primary", business.theme.primary);
    root.style.setProperty("--business-secondary", business.theme.secondary);
    root.style.setProperty("--business-accent", business.theme.accent);
    root.style.setProperty("--business-primary-text", "#FFFFFF");
  }, [business]);

  return (
    <div className="min-h-screen flex flex-col">
      <BusinessHeader business={business} />
      <main className="flex-grow">{children}</main>
      <Footer business={business} />
    </div>
  );
}
