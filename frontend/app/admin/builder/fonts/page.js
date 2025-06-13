"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getThemeById } from "@/config/builder-themes";
import {
  Type,
  ArrowLeft,
  ArrowRight,
  Check,
  Sparkles,
  Eye,
  Zap,
} from "lucide-react";

const fontCategories = [
  { id: "all", name: "All Fonts" },
  { id: "serif", name: "Serif" },
  { id: "sans-serif", name: "Sans Serif" },
  { id: "display", name: "Display" },
  { id: "handwriting", name: "Handwriting" },
  { id: "monospace", name: "Monospace" },
];

const fonts = [
  {
    id: "inter",
    name: "Inter",
    category: "sans-serif",
    description: "Modern and highly readable sans-serif font",
    googleFont: "Inter:wght@300;400;500;600;700",
    preview: "The quick brown fox jumps over the lazy dog",
    usage: "Perfect for modern websites and applications",
  },
  {
    id: "playfair-display",
    name: "Playfair Display",
    category: "serif",
    description: "Elegant serif font with high contrast",
    googleFont: "Playfair+Display:wght@400;500;600;700",
    preview: "The quick brown fox jumps over the lazy dog",
    usage: "Ideal for luxury brands and editorial content",
  },
  {
    id: "poppins",
    name: "Poppins",
    category: "sans-serif",
    description: "Geometric sans-serif with friendly appearance",
    googleFont: "Poppins:wght@300;400;500;600;700",
    preview: "The quick brown fox jumps over the lazy dog",
    usage: "Great for modern, approachable designs",
  },
  {
    id: "cormorant-garamond",
    name: "Cormorant Garamond",
    category: "serif",
    description: "Classic serif with contemporary feel",
    googleFont: "Cormorant+Garamond:wght@300;400;500;600;700",
    preview: "The quick brown fox jumps over the lazy dog",
    usage: "Perfect for elegant and sophisticated brands",
  },
  {
    id: "libre-baskerville",
    name: "Libre Baskerville",
    category: "serif",
    description: "Traditional serif optimized for web",
    googleFont: "Libre+Baskerville:wght@400;700",
    preview: "The quick brown fox jumps over the lazy dog",
    usage: "Excellent for reading-heavy content",
  },
  {
    id: "raleway",
    name: "Raleway",
    category: "sans-serif",
    description: "Elegant sans-serif with thin weights",
    googleFont: "Raleway:wght@300;400;500;600;700",
    preview: "The quick brown fox jumps over the lazy dog",
    usage: "Ideal for fashion and lifestyle brands",
  },
  {
    id: "oxygen",
    name: "Oxygen",
    category: "sans-serif",
    description: "Clean and modern sans-serif",
    googleFont: "Oxygen:wght@300;400;700",
    preview: "The quick brown fox jumps over the lazy dog",
    usage: "Perfect for tech and startup websites",
  },
  {
    id: "source-sans-pro",
    name: "Source Sans Pro",
    category: "sans-serif",
    description: "Professional sans-serif by Adobe",
    googleFont: "Source+Sans+Pro:wght@300;400;600;700",
    preview: "The quick brown fox jumps over the lazy dog",
    usage: "Great for corporate and business sites",
  },
  {
    id: "pt-sans",
    name: "PT Sans",
    category: "sans-serif",
    description: "Versatile sans-serif with Cyrillic support",
    googleFont: "PT+Sans:wght@400;700",
    preview: "The quick brown fox jumps over the lazy dog",
    usage: "Excellent for international websites",
  },
  {
    id: "lato",
    name: "Lato",
    category: "sans-serif",
    description: "Humanist sans-serif with warmth",
    googleFont: "Lato:wght@300;400;700",
    preview: "The quick brown fox jumps over the lazy dog",
    usage: "Perfect for friendly, approachable brands",
  },
  {
    id: "rubik",
    name: "Rubik",
    category: "sans-serif",
    description: "Rounded sans-serif with personality",
    googleFont: "Rubik:wght@300;400;500;600;700",
    preview: "The quick brown fox jumps over the lazy dog",
    usage: "Great for creative and playful designs",
  },
  {
    id: "nunito",
    name: "Nunito",
    category: "sans-serif",
    description: "Rounded sans-serif, well balanced",
    googleFont: "Nunito:wght@300;400;600;700",
    preview: "The quick brown fox jumps over the lazy dog",
    usage: "Ideal for educational and family-friendly sites",
  },
  {
    id: "montserrat",
    name: "Montserrat",
    category: "sans-serif",
    description: "Geometric sans-serif inspired by urban typography",
    googleFont: "Montserrat:wght@300;400;500;600;700",
    preview: "The quick brown fox jumps over the lazy dog",
    usage: "Perfect for modern, urban brands",
  },
  {
    id: "open-sans",
    name: "Open Sans",
    category: "sans-serif",
    description: "Humanist sans-serif with neutral appearance",
    googleFont: "Open+Sans:wght@300;400;600;700",
    preview: "The quick brown fox jumps over the lazy dog",
    usage: "Versatile for any type of website",
  },
  {
    id: "roboto",
    name: "Roboto",
    category: "sans-serif",
    description: "Modern sans-serif with mechanical skeleton",
    googleFont: "Roboto:wght@300;400;500;700",
    preview: "The quick brown fox jumps over the lazy dog",
    usage: "Great for tech and material design",
  },
  {
    id: "dancing-script",
    name: "Dancing Script",
    category: "handwriting",
    description: "Casual handwriting font",
    googleFont: "Dancing+Script:wght@400;700",
    preview: "The quick brown fox jumps over the lazy dog",
    usage: "Perfect for personal brands and invitations",
  },
  {
    id: "pacifico",
    name: "Pacifico",
    category: "handwriting",
    description: "Brush script inspired by 1950s surf culture",
    googleFont: "Pacifico",
    preview: "The quick brown fox jumps over the lazy dog",
    usage: "Ideal for fun, casual brands",
  },
  {
    id: "fira-code",
    name: "Fira Code",
    category: "monospace",
    description: "Monospace font with programming ligatures",
    googleFont: "Fira+Code:wght@300;400;500;600;700",
    preview: "The quick brown fox jumps over the lazy dog",
    usage: "Perfect for code documentation and tech blogs",
  },
];

export default function FontSelectorPage() {
  const searchParams = useSearchParams();
  const themeId = searchParams.get("theme");
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedFont, setSelectedFont] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [fontsLoaded, setFontsLoaded] = useState(new Set());

  useEffect(() => {
    if (themeId) {
      const theme = getThemeById(themeId);
      setSelectedTheme(theme);
    }
  }, [themeId]);

  const filteredFonts =
    selectedCategory === "all"
      ? fonts
      : fonts.filter((font) => font.category === selectedCategory);

  const loadFont = (font) => {
    if (!fontsLoaded.has(font.id)) {
      const link = document.createElement("link");
      link.href = `https://fonts.googleapis.com/css2?family=${font.googleFont}&display=swap`;
      link.rel = "stylesheet";
      document.head.appendChild(link);
      setFontsLoaded((prev) => new Set([...prev, font.id]));
    }
  };

  const handleFontSelect = (font) => {
    loadFont(font);
    setSelectedFont(font);
  };

  const handleNextStep = () => {
    if (selectedFont && selectedTheme) {
      // Navigate to next step with both theme and font
      window.location.href = `/admin/builder/layout?theme=${selectedTheme.id}&font=${selectedFont.id}`;
    }
  };

  const handleBack = () => {
    window.location.href = "/admin/builder/theme";
  };

  if (!selectedTheme) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Loading...</h2>
          <p className="text-slate-600">
            Please wait while we load your theme selection.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={handleBack}
                className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Choose Your Font
                </h1>
                <p className="text-sm text-slate-600 mt-1">
                  Select typography that complements your {selectedTheme.name}{" "}
                  theme
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Theme Preview */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: selectedTheme.light.primary }}
                />
                <span className="text-sm font-medium text-slate-700">
                  {selectedTheme.name}
                </span>
              </div>

              {/* Next Button */}
              <button
                onClick={handleNextStep}
                disabled={!selectedFont}
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium transition-all hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Choose Layout
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8 h-[calc(100vh-8rem)]">
            {/* Font Selection Panel */}
            <div className="lg:col-span-2 space-y-4">
              {/* Category Filter */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">
                  Font Categories
                </h3>
                <div className="flex flex-wrap gap-1">
                  {fontCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition-all ${
                        selectedCategory === category.id
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                          : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                      }`}
                    >
                      <Type className="w-3 h-3" />
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Font List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Typography
                  </h3>
                  <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                    {filteredFonts.length} available
                  </span>
                </div>
                <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar px-4">
                  {filteredFonts.map((font) => {
                    const isSelected = selectedFont?.id === font.id;

                    return (
                      <div
                        key={font.id}
                        onClick={() => handleFontSelect(font)}
                        className={`relative cursor-pointer group transition-all duration-300 ${
                          isSelected ? "scale-[1.02]" : "hover:scale-[1.01]"
                        }`}
                      >
                        {/* Selection Indicator */}
                        {isSelected && (
                          <div className="absolute -inset-1 rounded-2xl blur opacity-75"></div>
                        )}

                        <div
                          className={`relative bg-white rounded-xl border-2 overflow-hidden transition-all ${
                            isSelected
                              ? "border-transparent shadow-2xl"
                              : "border-slate-200 hover:border-blue-300 hover:shadow-lg"
                          }`}
                        >
                          {/* Font Header */}
                          <div className="p-4 border-b border-slate-100">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                                  <Type className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                  <h4 className="font-bold text-lg leading-tight">
                                    {font.name}
                                  </h4>
                                  <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
                                      {font.category}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {isSelected && (
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                                  <Check className="w-4 h-4 text-white" />
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Font Preview */}
                          <div className="p-4 border-b border-slate-100">
                            <div className="space-y-3">
                              <div
                                className="text-2xl font-semibold"
                                style={{ fontFamily: font.name }}
                              >
                                {font.name}
                              </div>
                              <div
                                className="text-sm text-slate-600"
                                style={{ fontFamily: font.name }}
                              >
                                {font.preview}
                              </div>
                            </div>
                          </div>

                          {/* Font Details */}
                          <div className="p-4">
                            <p className="text-sm text-slate-600 mb-2">
                              {font.description}
                            </p>
                            <p className="text-xs text-slate-500">
                              {font.usage}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Preview Panel */}
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                {selectedFont ? (
                  <div className="space-y-6">
                    {/* Preview Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">
                          {selectedFont.name} with {selectedTheme.name}
                        </h3>
                        <p className="text-sm text-slate-600">
                          See how your chosen font looks with your theme
                        </p>
                      </div>

                      {/* Font Info */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-sm bg-white px-3 py-2 rounded-lg border">
                          <Type className="w-4 h-4 text-slate-600" />
                          <span className="text-slate-600">
                            {selectedFont.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Live Preview */}
                    <div
                      className="rounded-2xl shadow-2xl border overflow-hidden"
                      style={{
                        backgroundColor: selectedTheme.light.background,
                        borderColor: selectedTheme.light.border,
                        fontFamily: selectedFont.name,
                      }}
                    >
                      <div className="p-8">
                        {/* Mock Website Preview */}
                        <div className="max-w-4xl mx-auto space-y-8">
                          {/* Header */}
                          <div
                            className="flex items-center justify-between p-4 rounded-xl shadow-sm"
                            style={{
                              backgroundColor: selectedTheme.light.primary,
                            }}
                          >
                            <div
                              className="text-lg font-bold"
                              style={{
                                color: selectedTheme.light.background,
                                fontFamily: selectedFont.name,
                              }}
                            >
                              Your Business
                            </div>
                            <div className="hidden md:flex space-x-6 text-sm font-medium">
                              {["Home", "Services", "About", "Contact"].map(
                                (item) => (
                                  <span
                                    key={item}
                                    className="hover:opacity-80 transition-opacity cursor-pointer"
                                    style={{
                                      color: selectedTheme.light.background,
                                      opacity: 0.9,
                                      fontFamily: selectedFont.name,
                                    }}
                                  >
                                    {item}
                                  </span>
                                )
                              )}
                            </div>
                          </div>

                          {/* Hero Section */}
                          <div className="text-center py-8">
                            <h1
                              className="text-4xl font-bold mb-4 leading-tight"
                              style={{
                                color: selectedTheme.light.text,
                                fontFamily: selectedFont.name,
                              }}
                            >
                              Transform Your Business
                            </h1>
                            <p
                              className="text-lg mb-6 opacity-80 max-w-2xl mx-auto"
                              style={{
                                color: selectedTheme.light.text,
                                fontFamily: selectedFont.name,
                              }}
                            >
                              Professional services that deliver exceptional
                              results and drive your success forward
                            </p>
                            <div className="flex gap-3 justify-center">
                              <button
                                className="px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
                                style={{
                                  backgroundColor: selectedTheme.light.accent,
                                  color: selectedTheme.light.background,
                                  fontFamily: selectedFont.name,
                                }}
                              >
                                Get Started Today
                              </button>
                              <button
                                className="px-6 py-3 rounded-lg font-semibold border-2 transition-all hover:scale-105"
                                style={{
                                  color: selectedTheme.light.accent,
                                  borderColor: selectedTheme.light.accent,
                                  fontFamily: selectedFont.name,
                                }}
                              >
                                Learn More
                              </button>
                            </div>
                          </div>

                          {/* Typography Showcase */}
                          <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                              <h3
                                className="text-2xl font-bold"
                                style={{
                                  color: selectedTheme.light.text,
                                  fontFamily: selectedFont.name,
                                }}
                              >
                                Heading Example
                              </h3>
                              <p
                                className="text-base leading-relaxed"
                                style={{
                                  color: selectedTheme.light.textSecondary,
                                  fontFamily: selectedFont.name,
                                }}
                              >
                                This is how your body text will look with the{" "}
                                {selectedFont.name} font. It's designed to be
                                highly readable and maintain excellent
                                legibility across all devices and screen sizes.
                              </p>
                              <div
                                className="text-sm"
                                style={{
                                  color: selectedTheme.light.textSecondary,
                                  fontFamily: selectedFont.name,
                                }}
                              >
                                Small text and captions will also look great
                                with this typography choice.
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h4
                                className="text-xl font-semibold"
                                style={{
                                  color: selectedTheme.light.text,
                                  fontFamily: selectedFont.name,
                                }}
                              >
                                Font Weights
                              </h4>
                              <div className="space-y-2">
                                <div
                                  className="font-light"
                                  style={{
                                    color: selectedTheme.light.text,
                                    fontFamily: selectedFont.name,
                                  }}
                                >
                                  Light weight text
                                </div>
                                <div
                                  className="font-normal"
                                  style={{
                                    color: selectedTheme.light.text,
                                    fontFamily: selectedFont.name,
                                  }}
                                >
                                  Regular weight text
                                </div>
                                <div
                                  className="font-medium"
                                  style={{
                                    color: selectedTheme.light.text,
                                    fontFamily: selectedFont.name,
                                  }}
                                >
                                  Medium weight text
                                </div>
                                <div
                                  className="font-semibold"
                                  style={{
                                    color: selectedTheme.light.text,
                                    fontFamily: selectedFont.name,
                                  }}
                                >
                                  Semibold weight text
                                </div>
                                <div
                                  className="font-bold"
                                  style={{
                                    color: selectedTheme.light.text,
                                    fontFamily: selectedFont.name,
                                  }}
                                >
                                  Bold weight text
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Services Preview */}
                          <div className="grid md:grid-cols-3 gap-6">
                            {[
                              {
                                title: "Expert Consultation",
                                desc: "Professional guidance tailored to your needs.",
                              },
                              {
                                title: "Premium Service",
                                desc: "High-quality solutions with attention to detail.",
                              },
                              {
                                title: "Ongoing Support",
                                desc: "Continuous assistance for your success.",
                              },
                            ].map((service, i) => (
                              <div
                                key={i}
                                className="p-6 rounded-xl shadow-sm border transition-all hover:scale-105"
                                style={{
                                  backgroundColor: "rgba(255,255,255,0.8)",
                                  borderColor:
                                    selectedTheme.light.accent + "20",
                                }}
                              >
                                <div
                                  className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center"
                                  style={{
                                    backgroundColor: selectedTheme.light.accent,
                                  }}
                                >
                                  <Sparkles
                                    className="w-5 h-5"
                                    style={{
                                      color: selectedTheme.light.background,
                                    }}
                                  />
                                </div>
                                <h3
                                  className="text-lg font-bold mb-2"
                                  style={{
                                    color: selectedTheme.light.text,
                                    fontFamily: selectedFont.name,
                                  }}
                                >
                                  {service.title}
                                </h3>
                                <p
                                  className="opacity-70 text-sm"
                                  style={{
                                    color: selectedTheme.light.text,
                                    fontFamily: selectedFont.name,
                                  }}
                                >
                                  {service.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* No Font Selected State */
                  <div className="bg-white rounded-2xl shadow-xl border h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Type className="w-10 h-10 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                        Select a Font
                      </h3>
                      <p className="text-slate-600 max-w-sm">
                        Choose a typography style from the left panel to see how
                        it looks with your {selectedTheme.name} theme
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
}
