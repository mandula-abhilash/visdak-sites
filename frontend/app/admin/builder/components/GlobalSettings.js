"use client";

import { X, Palette, Type, MousePointer, Layout } from "lucide-react";

export default function GlobalSettings({ settings, onUpdate, onClose }) {
  const updateSetting = (key, value) => {
    onUpdate({ ...settings, [key]: value });
  };

  const colorPalettes = [
    {
      name: "midnight",
      colors: ["#2C3E50", "#34495E", "#3498DB"],
      label: "Midnight",
    },
    {
      name: "emerald",
      colors: ["#2ECC71", "#27AE60", "#16A085"],
      label: "Emerald",
    },
    {
      name: "coral",
      colors: ["#E74C3C", "#C0392B", "#E67E22"],
      label: "Coral",
    },
    { name: "gold", colors: ["#B7935B", "#8E793E", "#AD8A3B"], label: "Gold" },
    { name: "plum", colors: ["#8E44AD", "#9B59B6", "#6C3483"], label: "Plum" },
    { name: "navy", colors: ["#2C3E50", "#1A2530", "#3498DB"], label: "Navy" },
    {
      name: "sunset",
      colors: ["#FF5E62", "#FF9966", "#FF7F50"],
      label: "Sunset",
    },
    {
      name: "ocean",
      colors: ["#2E86DE", "#1B5299", "#54A0FF"],
      label: "Ocean",
    },
    {
      name: "forest",
      colors: ["#27AE60", "#219653", "#2ECC71"],
      label: "Forest",
    },
    {
      name: "silicon",
      colors: ["#6C5CE7", "#5B52D1", "#897DEC"],
      label: "Silicon",
    },
    {
      name: "carbon",
      colors: ["#1E272E", "#2C3A47", "#3498DB"],
      label: "Carbon",
    },
    { name: "neon", colors: ["#00B894", "#00A885", "#55EFC4"], label: "Neon" },
  ];

  const fonts = [
    {
      value: "inter",
      label: "Inter",
      preview: "The quick brown fox jumps over the lazy dog",
    },
    {
      value: "roboto",
      label: "Roboto",
      preview: "The quick brown fox jumps over the lazy dog",
    },
    {
      value: "poppins",
      label: "Poppins",
      preview: "The quick brown fox jumps over the lazy dog",
    },
    {
      value: "playfair",
      label: "Playfair Display",
      preview: "The quick brown fox jumps over the lazy dog",
    },
    {
      value: "montserrat",
      label: "Montserrat",
      preview: "The quick brown fox jumps over the lazy dog",
    },
  ];

  const scrollBehaviors = [
    {
      value: "normal",
      label: "Normal",
      description: "Standard scrolling behavior",
    },
    {
      value: "smooth",
      label: "Smooth",
      description: "Smooth scrolling transitions",
    },
    {
      value: "parallax",
      label: "Parallax",
      description: "Background moves slower than content",
    },
    {
      value: "fade",
      label: "Fade In",
      description: "Elements fade in as they come into view",
    },
  ];

  const layouts = [
    {
      value: "stacked",
      label: "Stacked",
      description: "Sections stacked vertically",
    },
    {
      value: "parallax",
      label: "Parallax",
      description: "Parallax scrolling layout",
    },
    { value: "grid", label: "Grid", description: "Grid-based layout" },
    {
      value: "masonry",
      label: "Masonry",
      description: "Pinterest-style layout",
    },
  ];

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-white border-l border-gray-200 shadow-lg z-50 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Global Settings
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-8">
          {/* Color Palette */}
          <div>
            <div className="flex items-center mb-4">
              <Palette className="w-5 h-5 text-gray-600 mr-2" />
              <h3 className="text-lg font-medium text-gray-900">
                Color Palette
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {colorPalettes.map((palette) => (
                <button
                  key={palette.name}
                  onClick={() => updateSetting("colorPalette", palette.name)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    settings.colorPalette === palette.name
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex space-x-1 mb-2">
                    {palette.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    {palette.label}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Font Selection */}
          <div>
            <div className="flex items-center mb-4">
              <Type className="w-5 h-5 text-gray-600 mr-2" />
              <h3 className="text-lg font-medium text-gray-900">Typography</h3>
            </div>
            <div className="space-y-2">
              {fonts.map((font) => (
                <button
                  key={font.value}
                  onClick={() => updateSetting("font", font.value)}
                  className={`w-full p-3 text-left rounded-lg border transition-all ${
                    settings.font === font.value
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="font-medium text-gray-900 mb-1">
                    {font.label}
                  </div>
                  <div
                    className="text-sm text-gray-600"
                    style={{ fontFamily: getFontFamily(font.value) }}
                  >
                    {font.preview}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Scroll Behavior */}
          <div>
            <div className="flex items-center mb-4">
              <MousePointer className="w-5 h-5 text-gray-600 mr-2" />
              <h3 className="text-lg font-medium text-gray-900">
                Scroll Behavior
              </h3>
            </div>
            <div className="space-y-2">
              {scrollBehaviors.map((behavior) => (
                <button
                  key={behavior.value}
                  onClick={() =>
                    updateSetting("scrollBehavior", behavior.value)
                  }
                  className={`w-full p-3 text-left rounded-lg border transition-all ${
                    settings.scrollBehavior === behavior.value
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="font-medium text-gray-900 mb-1">
                    {behavior.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {behavior.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Layout */}
          <div>
            <div className="flex items-center mb-4">
              <Layout className="w-5 h-5 text-gray-600 mr-2" />
              <h3 className="text-lg font-medium text-gray-900">
                Layout Style
              </h3>
            </div>
            <div className="space-y-2">
              {layouts.map((layout) => (
                <button
                  key={layout.value}
                  onClick={() => updateSetting("layout", layout.value)}
                  className={`w-full p-3 text-left rounded-lg border transition-all ${
                    settings.layout === layout.value
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="font-medium text-gray-900 mb-1">
                    {layout.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {layout.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Preview */}
          <div className="pt-6 border-t border-gray-200">
            <h4 className="text-sm font-medium text-gray-900 mb-3">Preview</h4>
            <div
              className="p-4 rounded-lg border"
              style={{
                fontFamily: getFontFamily(settings.font),
                backgroundColor: getPrimaryColor(settings.colorPalette) + "10",
                borderColor: getPrimaryColor(settings.colorPalette) + "30",
              }}
            >
              <div
                className="text-lg font-semibold mb-2"
                style={{ color: getPrimaryColor(settings.colorPalette) }}
              >
                Sample Heading
              </div>
              <div className="text-gray-600 text-sm">
                This is how your text will look with the selected font and color
                palette.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper functions
function getFontFamily(font) {
  const fonts = {
    inter: '"Inter", sans-serif',
    roboto: '"Roboto", sans-serif',
    poppins: '"Poppins", sans-serif',
    playfair: '"Playfair Display", serif',
    montserrat: '"Montserrat", sans-serif',
  };
  return fonts[font] || fonts.inter;
}

function getPrimaryColor(palette) {
  const colors = {
    midnight: "#2C3E50",
    emerald: "#2ECC71",
    coral: "#E74C3C",
    gold: "#B7935B",
    plum: "#8E44AD",
    navy: "#2C3E50",
    sunset: "#FF5E62",
    ocean: "#2E86DE",
    forest: "#27AE60",
    silicon: "#6C5CE7",
    carbon: "#1E272E",
    neon: "#00B894",
  };
  return colors[palette] || colors.midnight;
}
