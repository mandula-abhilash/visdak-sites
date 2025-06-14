// Bhava Template Theme Configurations
// Each theme defines the color palette for the Bhava salon template

export const bhavaThemes = {
  // Golden/Yellow Theme (Default)
  golden: {
    "--bhava-primary": "#B7935B",
    "--bhava-secondary": "#8E793E",
    "--bhava-accent": "#D4AF37",
    "--bhava-accent-light": "#F4E4BC",
    "--bhava-accent-hover": "#B8941F",
    "--bhava-dark": "#1F2937",
    "--bhava-background-light": "#FEF7E0",
    "--bhava-success": "#10B981",
    "--bhava-success-hover": "#059669",
  },

  // Rose/Pink Theme
  rose: {
    "--bhava-primary": "#E91E63",
    "--bhava-secondary": "#C2185B",
    "--bhava-accent": "#FF4081",
    "--bhava-accent-light": "#FCE4EC",
    "--bhava-accent-hover": "#E91E63",
    "--bhava-dark": "#1F2937",
    "--bhava-background-light": "#FDF2F8",
    "--bhava-success": "#10B981",
    "--bhava-success-hover": "#059669",
  },

  // Purple/Lavender Theme
  purple: {
    "--bhava-primary": "#9C27B0",
    "--bhava-secondary": "#7B1FA2",
    "--bhava-accent": "#BA68C8",
    "--bhava-accent-light": "#F3E5F5",
    "--bhava-accent-hover": "#8E24AA",
    "--bhava-dark": "#1F2937",
    "--bhava-background-light": "#FAF5FF",
    "--bhava-success": "#10B981",
    "--bhava-success-hover": "#059669",
  },

  // Teal/Turquoise Theme
  teal: {
    "--bhava-primary": "#009688",
    "--bhava-secondary": "#00796B",
    "--bhava-accent": "#26A69A",
    "--bhava-accent-light": "#E0F2F1",
    "--bhava-accent-hover": "#00695C",
    "--bhava-dark": "#1F2937",
    "--bhava-background-light": "#F0FDFA",
    "--bhava-success": "#10B981",
    "--bhava-success-hover": "#059669",
  },

  // Blue/Ocean Theme
  ocean: {
    "--bhava-primary": "#2196F3",
    "--bhava-secondary": "#1976D2",
    "--bhava-accent": "#42A5F5",
    "--bhava-accent-light": "#E3F2FD",
    "--bhava-accent-hover": "#1565C0",
    "--bhava-dark": "#1F2937",
    "--bhava-background-light": "#F0F9FF",
    "--bhava-success": "#10B981",
    "--bhava-success-hover": "#059669",
  },

  // Coral/Orange Theme
  coral: {
    "--bhava-primary": "#FF5722",
    "--bhava-secondary": "#E64A19",
    "--bhava-accent": "#FF7043",
    "--bhava-accent-light": "#FBE9E7",
    "--bhava-accent-hover": "#D84315",
    "--bhava-dark": "#1F2937",
    "--bhava-background-light": "#FFF7ED",
    "--bhava-success": "#10B981",
    "--bhava-success-hover": "#059669",
  },

  // Emerald/Green Theme
  emerald: {
    "--bhava-primary": "#4CAF50",
    "--bhava-secondary": "#388E3C",
    "--bhava-accent": "#66BB6A",
    "--bhava-accent-light": "#E8F5E8",
    "--bhava-accent-hover": "#2E7D32",
    "--bhava-dark": "#1F2937",
    "--bhava-background-light": "#F0FDF4",
    "--bhava-success": "#10B981",
    "--bhava-success-hover": "#059669",
  },

  // Burgundy/Wine Theme
  burgundy: {
    "--bhava-primary": "#8E1538",
    "--bhava-secondary": "#6D1027",
    "--bhava-accent": "#B91C3C",
    "--bhava-accent-light": "#FEE2E2",
    "--bhava-accent-hover": "#7F1D1D",
    "--bhava-dark": "#1F2937",
    "--bhava-background-light": "#FEF2F2",
    "--bhava-success": "#10B981",
    "--bhava-success-hover": "#059669",
  },

  // Slate/Modern Theme
  slate: {
    "--bhava-primary": "#475569",
    "--bhava-secondary": "#334155",
    "--bhava-accent": "#64748B",
    "--bhava-accent-light": "#F1F5F9",
    "--bhava-accent-hover": "#1E293B",
    "--bhava-dark": "#0F172A",
    "--bhava-background-light": "#F8FAFC",
    "--bhava-success": "#10B981",
    "--bhava-success-hover": "#059669",
  },

  // Copper/Bronze Theme
  copper: {
    "--bhava-primary": "#B45309",
    "--bhava-secondary": "#92400E",
    "--bhava-accent": "#D97706",
    "--bhava-accent-light": "#FEF3C7",
    "--bhava-accent-hover": "#78350F",
    "--bhava-dark": "#1F2937",
    "--bhava-background-light": "#FFFBEB",
    "--bhava-success": "#10B981",
    "--bhava-success-hover": "#059669",
  },
};

/**
 * Apply a Bhava theme to the document
 * @param {string} themeName - The name of the theme to apply
 */
export function applyBhavaTheme(themeName = "golden") {
  const theme = bhavaThemes[themeName];

  if (!theme) {
    console.warn(
      `Bhava theme "${themeName}" not found. Using default golden theme.`
    );
    return applyBhavaTheme("golden");
  }

  const root = document.documentElement;

  // Apply theme colors to CSS custom properties
  Object.entries(theme).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });
}

/**
 * Remove all Bhava theme variables from the document
 */
export function removeBhavaTheme() {
  const root = document.documentElement;
  const themeKeys = Object.keys(bhavaThemes.golden); // Use golden as reference for all keys

  themeKeys.forEach((property) => {
    root.style.removeProperty(property);
  });
}

/**
 * Get available theme names
 * @returns {string[]} Array of available theme names
 */
export function getBhavaThemeNames() {
  return Object.keys(bhavaThemes);
}

/**
 * Get theme colors for a specific theme
 * @param {string} themeName - The name of the theme
 * @returns {object} Theme color object
 */
export function getBhavaTheme(themeName) {
  return bhavaThemes[themeName] || bhavaThemes.golden;
}
