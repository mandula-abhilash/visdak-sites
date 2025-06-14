/**
 * Universal Font System for All Templates
 * Provides server-side font injection and client-side font management
 */

// Universal Template Font Definitions
export const templateFonts = {
  // Modern Sans-Serif Combinations
  modern: {
    "--template-font-heading": "'Inter', 'Helvetica Neue', Arial, sans-serif",
    "--template-font-body": "'Inter', 'Helvetica Neue', Arial, sans-serif",
  },

  // Classic Serif Combinations
  classic: {
    "--template-font-heading": "'Playfair Display', 'Georgia', serif",
    "--template-font-body": "'Source Serif Pro', 'Georgia', serif",
  },

  // Professional Business
  professional: {
    "--template-font-heading":
      "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
    "--template-font-body": "'Open Sans', 'Helvetica Neue', Arial, sans-serif",
  },

  // Elegant Luxury
  elegant: {
    "--template-font-heading": "'Cormorant Garamond', 'Georgia', serif",
    "--template-font-body": "'Lato', 'Helvetica Neue', Arial, sans-serif",
  },

  // Creative & Artistic
  creative: {
    "--template-font-heading": "'Poppins', 'Helvetica Neue', Arial, sans-serif",
    "--template-font-body": "'Nunito', 'Helvetica Neue', Arial, sans-serif",
  },

  // Tech & Minimal
  tech: {
    "--template-font-heading":
      "'Space Grotesk', 'Helvetica Neue', Arial, sans-serif",
    "--template-font-body": "'Inter', 'Helvetica Neue', Arial, sans-serif",
  },

  // Warm & Friendly
  friendly: {
    "--template-font-heading":
      "'Quicksand', 'Helvetica Neue', Arial, sans-serif",
    "--template-font-body":
      "'Nunito Sans', 'Helvetica Neue', Arial, sans-serif",
  },

  // Bold & Strong
  bold: {
    "--template-font-heading": "'Oswald', 'Arial Black', Arial, sans-serif",
    "--template-font-body": "'Roboto', 'Helvetica Neue', Arial, sans-serif",
  },

  // Sophisticated Editorial
  editorial: {
    "--template-font-heading": "'Crimson Text', 'Georgia', serif",
    "--template-font-body": "'Merriweather', 'Georgia', serif",
  },

  // Clean Minimal
  minimal: {
    "--template-font-heading":
      "'Work Sans', 'Helvetica Neue', Arial, sans-serif",
    "--template-font-body": "'Work Sans', 'Helvetica Neue', Arial, sans-serif",
  },

  // Luxury Fashion
  luxury: {
    "--template-font-heading": "'Didot', 'Bodoni MT', serif",
    "--template-font-body": "'Avenir', 'Helvetica Neue', Arial, sans-serif",
  },

  // Handcrafted Artisan
  artisan: {
    "--template-font-heading": "'Libre Baskerville', 'Georgia', serif",
    "--template-font-body":
      "'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif",
  },
};

/**
 * Generate CSS string for fonts (server-side safe)
 * @param {string} fontName - The name of the font combination to generate CSS for
 * @returns {string} CSS string with font variables
 */
export function generateFontCSS(fontName = "modern") {
  const fonts = templateFonts[fontName] || templateFonts.modern;

  return Object.entries(fonts)
    .map(([property, value]) => `${property}: ${value};`)
    .join("\n            ");
}

/**
 * Apply fonts to any template (client-side only)
 * @param {string} fontName - The name of the font combination to apply
 */
export function applyTemplateFonts(fontName = "modern") {
  // Only run on client side
  if (typeof window === "undefined") return;

  const fonts = templateFonts[fontName];

  if (!fonts) {
    console.warn(
      `Template fonts "${fontName}" not found. Using default modern fonts.`
    );
    return applyTemplateFonts("modern");
  }

  const root = document.documentElement;

  // Apply font families to CSS custom properties
  Object.entries(fonts).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });
}

/**
 * Remove all template font variables from the document
 */
export function removeTemplateFonts() {
  if (typeof window === "undefined") return;

  const root = document.documentElement;
  const fontKeys = Object.keys(templateFonts.modern); // Use modern as reference for all keys

  fontKeys.forEach((property) => {
    root.style.removeProperty(property);
  });
}

/**
 * Get available font combination names
 * @returns {string[]} Array of available font combination names
 */
export function getTemplateFontNames() {
  return Object.keys(templateFonts);
}

/**
 * Get font configuration for a specific combination
 * @param {string} fontName - The name of the font combination
 * @returns {object} Font configuration object
 */
export function getTemplateFonts(fontName) {
  return templateFonts[fontName] || templateFonts.modern;
}

/**
 * Create a custom font combination
 * @param {string} fontName - Name for the custom font combination
 * @param {object} fonts - Font configuration object
 */
export function createCustomFonts(fontName, fonts) {
  const defaultFonts = templateFonts.modern;

  // Merge custom fonts with default fonts
  templateFonts[fontName] = {
    ...defaultFonts,
    ...fonts,
  };
}

/**
 * Universal Font Head Component
 * Use this in any template's head.js file for automatic font injection
 * @param {string} fontName - The font combination name to apply
 * @returns {JSX.Element} Style element with font CSS and Google Fonts link
 */
export function UniversalFontHead({ fontName = "modern" }) {
  // Google Fonts URLs for each font combination
  const googleFontsUrls = {
    modern:
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
    classic:
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Source+Serif+Pro:wght@300;400;600&display=swap",
    professional:
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600&display=swap",
    elegant:
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Lato:wght@300;400;700&display=swap",
    creative:
      "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Nunito:wght@300;400;500;600;700&display=swap",
    tech: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
    friendly:
      "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Nunito+Sans:wght@300;400;600;700&display=swap",
    bold: "https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap",
    editorial:
      "https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Merriweather:wght@300;400;700&display=swap",
    minimal:
      "https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap",
    luxury:
      "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&display=swap", // Didot/Bodoni are system fonts
    artisan:
      "https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+Pro:wght@300;400;600&display=swap",
  };

  const googleFontsUrl = googleFontsUrls[fontName] || googleFontsUrls.modern;

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link href={googleFontsUrl} rel="stylesheet" />
      <style
        suppressHydrationWarning={true}
        dangerouslySetInnerHTML={{
          __html: `
            :root {
              ${generateFontCSS(fontName)}
            }
            
            /* Ensure font variables are available immediately */
            html {
              ${generateFontCSS(fontName)}
            }
          `,
        }}
      />
    </>
  );
}

/**
 * Font Loader Component - Use in your main component
 * This ensures the fonts are applied before any content renders
 */
export function FontLoader({ fontName = "modern", children }) {
  if (typeof window !== "undefined") {
    // Client-side: Apply fonts immediately
    React.useLayoutEffect(() => {
      applyTemplateFonts(fontName);
    }, [fontName]);
  }

  return children;
}
