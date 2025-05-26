"use client";

import { useEffect } from "react";
import BusinessHeader from "@/components/BusinessHeader";
import Footer from "@/components/Footer";

export default function StackedLayout({ business, children }) {
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
      <main className="flex-grow space-y-16 md:space-y-24">{children}</main>
      <Footer business={business} />
    </div>
  );
}
