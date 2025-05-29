// Professional color themes following design best practices
export const themes = {
  // Modern and Professional
  midnight: {
    primary: "#2C3E50",
    secondary: "#34495E",
    accent: "#3498DB",
  },
  emerald: {
    primary: "#2ECC71",
    secondary: "#27AE60",
    accent: "#16A085",
  },
  coral: {
    primary: "#E74C3C",
    secondary: "#C0392B",
    accent: "#E67E22",
  },

  // Elegant and Luxurious
  gold: {
    primary: "#B7935B",
    secondary: "#8E793E",
    accent: "#AD8A3B",
  },
  plum: {
    primary: "#8E44AD",
    secondary: "#9B59B6",
    accent: "#6C3483",
  },
  navy: {
    primary: "#2C3E50",
    secondary: "#1A2530",
    accent: "#3498DB",
  },

  // Creative and Vibrant
  sunset: {
    primary: "#FF5E62",
    secondary: "#FF9966",
    accent: "#FF7F50",
  },
  ocean: {
    primary: "#2E86DE",
    secondary: "#1B5299",
    accent: "#54A0FF",
  },
  forest: {
    primary: "#27AE60",
    secondary: "#219653",
    accent: "#2ECC71",
  },

  // Tech and Modern
  silicon: {
    primary: "#6C5CE7",
    secondary: "#5B52D1",
    accent: "#897DEC",
  },
  carbon: {
    primary: "#1E272E",
    secondary: "#2C3A47",
    accent: "#3498DB",
  },
  neon: {
    primary: "#00B894",
    secondary: "#00A885",
    accent: "#55EFC4",
  },

  // Wellness and Health
  sage: {
    primary: "#74B49B",
    secondary: "#5C9882",
    accent: "#A8E6CF",
  },
  lavender: {
    primary: "#A88BEB",
    secondary: "#967ADC",
    accent: "#D6C6FF",
  },
  mint: {
    primary: "#00B894",
    secondary: "#009B7F",
    accent: "#55EFC4",
  },

  // Fashion and Beauty
  rose: {
    primary: "#FF5BA3",
    secondary: "#FF1F8E",
    accent: "#FFB8D9",
  },
  mauve: {
    primary: "#B993D6",
    secondary: "#8CA6DB",
    accent: "#D6C6FF",
  },
  peach: {
    primary: "#FFB8A2",
    secondary: "#FF9B82",
    accent: "#FFDAC1",
  },

  // Food and Restaurant
  olive: {
    primary: "#808000",
    secondary: "#556B2F",
    accent: "#9AB973",
  },
  burgundy: {
    primary: "#800020",
    secondary: "#5B0015",
    accent: "#A3001D",
  },
  terracotta: {
    primary: "#E07A5F",
    secondary: "#CD6B52",
    accent: "#F7A072",
  },

  // Corporate and Business
  slate: {
    primary: "#475569",
    secondary: "#334155",
    accent: "#64748B",
  },
  azure: {
    primary: "#0EA5E9",
    secondary: "#0284C7",
    accent: "#38BDF8",
  },
  graphite: {
    primary: "#4B5563",
    secondary: "#374151",
    accent: "#6B7280",
  },

  // Education and Learning
  scholar: {
    primary: "#3B82F6",
    secondary: "#2563EB",
    accent: "#60A5FA",
  },
  campus: {
    primary: "#059669",
    secondary: "#047857",
    accent: "#34D399",
  },
  library: {
    primary: "#854D0E",
    secondary: "#713F12",
    accent: "#CA8A04",
  },

  // Real Estate and Construction
  brick: {
    primary: "#C2410C",
    secondary: "#9A3412",
    accent: "#EA580C",
  },
  steel: {
    primary: "#64748B",
    secondary: "#475569",
    accent: "#94A3B8",
  },
  concrete: {
    primary: "#4B5563",
    secondary: "#374151",
    accent: "#6B7280",
  },
};

export function getTheme(themeName) {
  return themes[themeName] || themes.midnight; // Default to midnight theme
}

export function getAllThemes() {
  return Object.keys(themes).map((name) => ({
    name,
    ...themes[name],
  }));
}
