"use client";

import { generateThemeCSS } from "@/lib/universal-theme";

/**
 * Universal Theme Provider Component
 * Automatically injects theme CSS for any business/template
 * Use this in layouts or template components
 */
export default function UniversalThemeProvider({ business, children }) {
  const themeName = business?.themeName || "golden";

  return (
    <>
      {/* Inject theme CSS variables directly in head to prevent flicker */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          :root {
            ${generateThemeCSS(themeName)}
          }
        `,
        }}
      />
      {children}
    </>
  );
}
