/**
 * Universal Theme System for All Templates - Anti-Flicker Version
 * Provides server-side theme injection and client-side theme management
 */

// Universal Template Theme Definitions
export const templateThemes = {
  // Golden/Yellow Theme (Default)
  golden: {
    "--template-primary": "#B7935B",
    "--template-secondary": "#8E793E",
    "--template-accent": "#D4AF37",
    "--template-accent-light": "#D4AF3720",
    "--template-accent-hover": "#B8941F",
    "--template-dark": "#1F2937",
    "--template-background-light": "#FEF7E0",
    "--template-success": "#10B981",
    "--template-success-hover": "#059669",
    "--template-error": "#EF4444",
    "--template-error-hover": "#DC2626",
    "--template-warning": "#F59E0B",
    "--template-warning-hover": "#D97706",
    "--template-info": "#3B82F6",
    "--template-info-hover": "#2563EB",
  },

  // Rose/Pink Theme
  rose: {
    "--template-primary": "#E91E63",
    "--template-secondary": "#C2185B",
    "--template-accent": "#FF4081",
    "--template-accent-light": "#FF408120",
    "--template-accent-hover": "#E91E63",
    "--template-dark": "#1F2937",
    "--template-background-light": "#FDF2F8",
    "--template-success": "#10B981",
    "--template-success-hover": "#059669",
    "--template-error": "#EF4444",
    "--template-error-hover": "#DC2626",
    "--template-warning": "#F59E0B",
    "--template-warning-hover": "#D97706",
    "--template-info": "#3B82F6",
    "--template-info-hover": "#2563EB",
  },

  // Purple/Lavender Theme
  purple: {
    "--template-primary": "#9C27B0",
    "--template-secondary": "#7B1FA2",
    "--template-accent": "#BA68C8",
    "--template-accent-light": "#BA68C820",
    "--template-accent-hover": "#8E24AA",
    "--template-dark": "#1F2937",
    "--template-background-light": "#FAF5FF",
    "--template-success": "#10B981",
    "--template-success-hover": "#059669",
    "--template-error": "#EF4444",
    "--template-error-hover": "#DC2626",
    "--template-warning": "#F59E0B",
    "--template-warning-hover": "#D97706",
    "--template-info": "#3B82F6",
    "--template-info-hover": "#2563EB",
  },

  // Teal/Turquoise Theme
  teal: {
    "--template-primary": "#009688",
    "--template-secondary": "#00796B",
    "--template-accent": "#26A69A",
    "--template-accent-light": "#26A69A20",
    "--template-accent-hover": "#00695C",
    "--template-dark": "#1F2937",
    "--template-background-light": "#F0FDFA",
    "--template-success": "#10B981",
    "--template-success-hover": "#059669",
    "--template-error": "#EF4444",
    "--template-error-hover": "#DC2626",
    "--template-warning": "#F59E0B",
    "--template-warning-hover": "#D97706",
    "--template-info": "#3B82F6",
    "--template-info-hover": "#2563EB",
  },

  // Blue/Ocean Theme
  ocean: {
    "--template-primary": "#2196F3",
    "--template-secondary": "#1976D2",
    "--template-accent": "#42A5F5",
    "--template-accent-light": "#42A5F520",
    "--template-accent-hover": "#1565C0",
    "--template-dark": "#1F2937",
    "--template-background-light": "#F0F9FF",
    "--template-success": "#10B981",
    "--template-success-hover": "#059669",
    "--template-error": "#EF4444",
    "--template-error-hover": "#DC2626",
    "--template-warning": "#F59E0B",
    "--template-warning-hover": "#D97706",
    "--template-info": "#3B82F6",
    "--template-info-hover": "#2563EB",
  },

  // Coral/Orange Theme
  coral: {
    "--template-primary": "#FF5722",
    "--template-secondary": "#E64A19",
    "--template-accent": "#FF7043",
    "--template-accent-light": "#FF704320",
    "--template-accent-hover": "#D84315",
    "--template-dark": "#1F2937",
    "--template-background-light": "#FFF7ED",
    "--template-success": "#10B981",
    "--template-success-hover": "#059669",
    "--template-error": "#EF4444",
    "--template-error-hover": "#DC2626",
    "--template-warning": "#F59E0B",
    "--template-warning-hover": "#D97706",
    "--template-info": "#3B82F6",
    "--template-info-hover": "#2563EB",
  },

  // Emerald/Green Theme
  emerald: {
    "--template-primary": "#4CAF50",
    "--template-secondary": "#388E3C",
    "--template-accent": "#66BB6A",
    "--template-accent-light": "#66BB6A20",
    "--template-accent-hover": "#2E7D32",
    "--template-dark": "#1F2937",
    "--template-background-light": "#F0FDF4",
    "--template-success": "#10B981",
    "--template-success-hover": "#059669",
    "--template-error": "#EF4444",
    "--template-error-hover": "#DC2626",
    "--template-warning": "#F59E0B",
    "--template-warning-hover": "#D97706",
    "--template-info": "#3B82F6",
    "--template-info-hover": "#2563EB",
  },

  // Burgundy/Wine Theme
  burgundy: {
    "--template-primary": "#8E1538",
    "--template-secondary": "#6D1027",
    "--template-accent": "#B91C3C",
    "--template-accent-light": "#B91C3C20",
    "--template-accent-hover": "#7F1D1D",
    "--template-dark": "#1F2937",
    "--template-background-light": "#FEF2F2",
    "--template-success": "#10B981",
    "--template-success-hover": "#059669",
    "--template-error": "#EF4444",
    "--template-error-hover": "#DC2626",
    "--template-warning": "#F59E0B",
    "--template-warning-hover": "#D97706",
    "--template-info": "#3B82F6",
    "--template-info-hover": "#2563EB",
  },

  // Slate/Modern Theme
  slate: {
    "--template-primary": "#475569",
    "--template-secondary": "#334155",
    "--template-accent": "#64748B",
    "--template-accent-light": "#64748B20",
    "--template-accent-hover": "#1E293B",
    "--template-dark": "#0F172A",
    "--template-background-light": "#F8FAFC",
    "--template-success": "#10B981",
    "--template-success-hover": "#059669",
    "--template-error": "#EF4444",
    "--template-error-hover": "#DC2626",
    "--template-warning": "#F59E0B",
    "--template-warning-hover": "#D97706",
    "--template-info": "#3B82F6",
    "--template-info-hover": "#2563EB",
  },

  // Copper/Bronze Theme
  copper: {
    "--template-primary": "#B45309",
    "--template-secondary": "#92400E",
    "--template-accent": "#D97706",
    "--template-accent-light": "#D9770620",
    "--template-accent-hover": "#78350F",
    "--template-dark": "#1F2937",
    "--template-background-light": "#FFFBEB",
    "--template-success": "#10B981",
    "--template-success-hover": "#059669",
    "--template-error": "#EF4444",
    "--template-error-hover": "#DC2626",
    "--template-warning": "#F59E0B",
    "--template-warning-hover": "#D97706",
    "--template-info": "#3B82F6",
    "--template-info-hover": "#2563EB",
  },

  // Navy/Professional Theme
  navy: {
    "--template-primary": "#1E3A8A",
    "--template-secondary": "#1E40AF",
    "--template-accent": "#3B82F6",
    "--template-accent-light": "#3B82F620",
    "--template-accent-hover": "#1D4ED8",
    "--template-dark": "#0F172A",
    "--template-background-light": "#F0F9FF",
    "--template-success": "#10B981",
    "--template-success-hover": "#059669",
    "--template-error": "#EF4444",
    "--template-error-hover": "#DC2626",
    "--template-warning": "#F59E0B",
    "--template-warning-hover": "#D97706",
    "--template-info": "#3B82F6",
    "--template-info-hover": "#2563EB",
  },

  // Crimson/Bold Theme
  crimson: {
    "--template-primary": "#DC143C",
    "--template-secondary": "#B91C3C",
    "--template-accent": "#EF4444",
    "--template-accent-light": "#EF444420",
    "--template-accent-hover": "#DC2626",
    "--template-dark": "#1F2937",
    "--template-background-light": "#FEF2F2",
    "--template-success": "#10B981",
    "--template-success-hover": "#059669",
    "--template-error": "#EF4444",
    "--template-error-hover": "#DC2626",
    "--template-warning": "#F59E0B",
    "--template-warning-hover": "#D97706",
    "--template-info": "#3B82F6",
    "--template-info-hover": "#2563EB",
  },

  // Gold Theme (alias for golden)
  gold: {
    "--template-primary": "#B7935B",
    "--template-secondary": "#8E793E",
    "--template-accent": "#D4AF37",
    "--template-accent-light": "#D4AF3720",
    "--template-accent-hover": "#B8941F",
    "--template-dark": "#1F2937",
    "--template-background-light": "#FEF7E0",
    "--template-success": "#10B981",
    "--template-success-hover": "#059669",
    "--template-error": "#EF4444",
    "--template-error-hover": "#DC2626",
    "--template-warning": "#F59E0B",
    "--template-warning-hover": "#D97706",
    "--template-info": "#3B82F6",
    "--template-info-hover": "#2563EB",
  },
};

/**
 * Generate CSS string for a theme (server-side safe)
 * @param {string} themeName - The name of the theme to generate CSS for
 * @returns {string} CSS string with theme variables
 */
export function generateThemeCSS(themeName = "golden") {
  const theme = templateThemes[themeName] || templateThemes.golden;

  return Object.entries(theme)
    .map(([property, value]) => `${property}: ${value};`)
    .join("\n            ");
}

/**
 * Apply a theme to any template (client-side only)
 * @param {string} themeName - The name of the theme to apply
 */
export function applyTemplateTheme(themeName = "golden") {
  // Only run on client side
  if (typeof window === "undefined") return;

  const theme = templateThemes[themeName];

  if (!theme) {
    console.warn(
      `Template theme "${themeName}" not found. Using default golden theme.`
    );
    return applyTemplateTheme("golden");
  }

  const root = document.documentElement;

  // Apply theme colors to CSS custom properties
  Object.entries(theme).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });
}

/**
 * Remove all template theme variables from the document
 */
export function removeTemplateTheme() {
  if (typeof window === "undefined") return;

  const root = document.documentElement;
  const themeKeys = Object.keys(templateThemes.golden); // Use golden as reference for all keys

  themeKeys.forEach((property) => {
    root.style.removeProperty(property);
  });
}

/**
 * Get available theme names
 * @returns {string[]} Array of available theme names
 */
export function getTemplateThemeNames() {
  return Object.keys(templateThemes);
}

/**
 * Get theme colors for a specific theme
 * @param {string} themeName - The name of the theme
 * @returns {object} Theme color object
 */
export function getTemplateTheme(themeName) {
  return templateThemes[themeName] || templateThemes.golden;
}

/**
 * Create a custom theme with specific colors
 * @param {string} themeName - Name for the custom theme
 * @param {object} colors - Color configuration object
 */
export function createCustomTheme(themeName, colors) {
  const defaultTheme = templateThemes.golden;

  // Merge custom colors with default theme
  templateThemes[themeName] = {
    ...defaultTheme,
    ...colors,
  };
}

/**
 * ANTI-FLICKER: Inline Critical CSS for immediate theme application
 * @param {string} themeName - The theme name to apply
 * @returns {string} Inline CSS string for immediate injection
 */
export function getCriticalThemeCSS(themeName = "golden") {
  const themeCSS = generateThemeCSS(themeName);
  return `
    <style id="critical-theme-css">
      :root { ${themeCSS} }
      html { ${themeCSS} }
      body { 
        background-color: var(--template-background-light, #FEF7E0);
        color: var(--template-dark, #1F2937);
        transition: none !important;
      }
      * { 
        transition: none !important;
        animation-duration: 0s !important;
        animation-delay: 0s !important;
      }
    </style>
  `;
}

/**
 * ANTI-FLICKER: Enable transitions after page load
 * @returns {string} CSS to re-enable transitions
 */
export function getTransitionEnableCSS() {
  return `
    <style id="enable-transitions">
      body * { 
        transition: all 0.3s ease !important;
      }
      body {
        transition: background-color 0.3s ease, color 0.3s ease !important;
      }
    </style>
  `;
}

/**
 * Universal Theme Head Component - Anti-Flicker Version
 * Use this in any template's head.js file for automatic theme injection
 * @param {string} themeName - The theme name to apply
 * @param {boolean} enableAntiFlicker - Enable anti-flicker mode (default: true)
 * @returns {JSX.Element} Style element with theme CSS
 */
export function UniversalThemeHead({
  themeName = "golden",
  enableAntiFlicker = true,
}) {
  if (enableAntiFlicker) {
    return (
      <>
        <style
          id="critical-theme-styles"
          suppressHydrationWarning={true}
          dangerouslySetInnerHTML={{
            __html: `
              /* CRITICAL: Theme variables must be available immediately */
              :root {
                ${generateThemeCSS(themeName)}
              }
              
              html {
                ${generateThemeCSS(themeName)}
              }

              /* ANTI-FLICKER: Disable transitions during initial load */
              body {
                background-color: var(--template-background-light, #FEF7E0);
                color: var(--template-dark, #1F2937);
                transition: none !important;
                visibility: hidden;
              }
              
              body * {
                transition: none !important;
                animation-duration: 0s !important;
                animation-delay: 0s !important;
              }

              /* Show body after theme is applied */
              body.theme-ready {
                visibility: visible !important;
              }

              /* Re-enable transitions after theme loads */
              body.transitions-enabled * {
                transition: all 0.3s ease !important;
              }
              
              body.transitions-enabled {
                transition: background-color 0.3s ease, color 0.3s ease !important;
              }
            `,
          }}
        />
        <script
          suppressHydrationWarning={true}
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Immediately show the body and enable transitions
                document.addEventListener('DOMContentLoaded', function() {
                  document.body.classList.add('theme-ready');
                  
                  // Enable transitions after a short delay to prevent flicker
                  setTimeout(function() {
                    document.body.classList.add('transitions-enabled');
                  }, 50);
                });
                
                // Fallback for immediate execution if DOM is already loaded
                if (document.readyState === 'loading') {
                  // Wait for DOMContentLoaded
                } else {
                  document.body.classList.add('theme-ready');
                  setTimeout(function() {
                    document.body.classList.add('transitions-enabled');
                  }, 50);
                }
              })();
            `,
          }}
        />
      </>
    );
  }

  // Original version without anti-flicker
  return (
    <style
      suppressHydrationWarning={true}
      dangerouslySetInnerHTML={{
        __html: `
          :root {
            ${generateThemeCSS(themeName)}
          }
          
          /* Ensure theme variables are available immediately */
          html {
            ${generateThemeCSS(themeName)}
          }
        `,
      }}
    />
  );
}

/**
 * Theme Loader Component - Use in your main component
 * This ensures the theme is applied before any content renders
 */
export function ThemeLoader({ themeName = "golden", children }) {
  if (typeof window !== "undefined") {
    // Client-side: Apply theme immediately
    React.useLayoutEffect(() => {
      applyTemplateTheme(themeName);
      document.body.classList.add("theme-ready");

      const timer = setTimeout(() => {
        document.body.classList.add("transitions-enabled");
      }, 50);

      return () => clearTimeout(timer);
    }, [themeName]);
  }

  return children;
}
