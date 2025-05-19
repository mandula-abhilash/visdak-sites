"use client";

import { useEffect } from "react";

export default function BusinessThemeProvider({ business, children }) {
  useEffect(() => {
    // Create CSS variables for the business theme
    const root = document.documentElement;

    // Set the business theme colors
    root.style.setProperty("--business-primary", business.theme.primary);
    root.style.setProperty("--business-secondary", business.theme.secondary);
    root.style.setProperty("--business-accent", business.theme.accent);

    // Apply a primary color text variant that ensures readability
    const primaryColor = business.theme.primary;
    // Simple contrast check - this should be more sophisticated in production
    const isDark = isColorDark(primaryColor);
    root.style.setProperty(
      "--business-primary-text",
      isDark ? "#FFFFFF" : "#000000"
    );

    return () => {
      // Clean up by removing the custom properties
      root.style.removeProperty("--business-primary");
      root.style.removeProperty("--business-secondary");
      root.style.removeProperty("--business-accent");
      root.style.removeProperty("--business-primary-text");
    };
  }, [business]);

  return <>{children}</>;
}

// Simple function to determine if a color is dark
// This is a simplified version - production code should use a more accurate algorithm
function isColorDark(hexColor) {
  // Convert hex to RGB
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  // Calculate luminance (simplified)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return true if the color is dark (luminance < 0.5)
  return luminance < 0.5;
}
