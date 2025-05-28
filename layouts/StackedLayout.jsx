"use client";

import { useEffect } from "react";
import { getSection } from "@/lib/section-map";

export default function StackedLayout({ business, children }) {
  const Header = getSection("headers.basic");
  const Footer = getSection("footers.basic");

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--business-primary", business.theme.primary);
    root.style.setProperty("--business-secondary", business.theme.secondary);
    root.style.setProperty("--business-accent", business.theme.accent);
    root.style.setProperty("--business-primary-text", "#FFFFFF");
  }, [business]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header business={business} />
      <main className="flex-grow space-y-16 md:space-y-24">{children}</main>
      <Footer business={business} />
    </div>
  );
}
