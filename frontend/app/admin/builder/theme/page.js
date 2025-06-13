"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import {
  builderThemes,
  themeCategories,
  getThemesByCategory,
  isAccessible,
} from "@/config/builder-themes";
import {
  Palette,
  Sun,
  Moon,
  Check,
  Sparkles,
  AlertTriangle,
  Shield,
  Star,
  Zap,
  Crown,
  Heart,
  Eye,
  Layers,
} from "lucide-react";

export default function ThemeBuilderPage() {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [previewMode, setPreviewMode] = useState("light");
  const { theme: systemTheme } = useTheme();

  const filteredThemes = getThemesByCategory(selectedCategory);

  const getCurrentThemeVariant = (theme) => {
    if (!theme) return null;
    return theme[previewMode];
  };

  const checkThemeAccessibility = (theme) => {
    const lightVariant = theme.light;
    const darkVariant = theme.dark;

    const lightAccessible =
      isAccessible(lightVariant.background, lightVariant.text) &&
      isAccessible(lightVariant.primary, lightVariant.background) &&
      isAccessible(lightVariant.accent, lightVariant.background);

    const darkAccessible =
      isAccessible(darkVariant.background, darkVariant.text) &&
      isAccessible(darkVariant.primary, darkVariant.background) &&
      isAccessible(darkVariant.accent, darkVariant.background);

    return {
      light: lightAccessible,
      dark: darkAccessible,
      overall: lightAccessible && darkAccessible,
    };
  };

  const getCategoryIcon = (category) => {
    const icons = {
      Professional: Zap,
      Premium: Crown,
      Beauty: Heart,
      Health: Shield,
      Business: Sparkles,
      Finance: Star,
      Creative: Palette,
      Minimal: Sun,
      Nature: Sparkles,
      Modern: Zap,
    };
    return icons[category] || Sparkles;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Theme Builder
              </h1>
              <p className="text-sm text-slate-600 mt-1">
                Choose a color theme that defines your website's visual identity
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Accessibility Status */}
              {selectedTheme && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                  {checkThemeAccessibility(selectedTheme).overall ? (
                    <>
                      <Shield className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-700">
                        Accessible
                      </span>
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      <span className="text-sm font-medium text-amber-700">
                        Check Contrast
                      </span>
                    </>
                  )}
                </div>
              )}

              {/* Preview Mode Toggle */}
              <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
                <button
                  onClick={() => setPreviewMode("light")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    previewMode === "light"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Sun className="w-4 h-4" />
                  Light
                </button>
                <button
                  onClick={() => setPreviewMode("dark")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    previewMode === "dark"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Moon className="w-4 h-4" />
                  Dark
                </button>
              </div>

              {/* Next Button */}
              <button
                disabled={!selectedTheme}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium transition-all hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8 h-[calc(100vh-8rem)]">
            {/* Theme Selection Panel */}
            <div className="lg:col-span-2 space-y-4">
              {/* Ultra-Compact Category Filter */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">
                  Categories
                </h3>
                <div className="flex flex-wrap gap-1">
                  {themeCategories.map((category) => {
                    const IconComponent = getCategoryIcon(category.id);
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition-all ${
                          selectedCategory === category.id
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                            : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                        }`}
                      >
                        <IconComponent className="w-3 h-3" />
                        {category.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Theme List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Themes
                  </h3>
                  <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                    {filteredThemes.length} available
                  </span>
                </div>
                <div className="space-y-3 max-h-[calc(100vh-18rem)] overflow-y-auto pr-2 custom-scrollbar">
                  {filteredThemes.map((theme) => {
                    const currentVariant = getCurrentThemeVariant(theme);
                    const accessibility = checkThemeAccessibility(theme);
                    const isSelected = selectedTheme?.id === theme.id;

                    return (
                      <div
                        key={theme.id}
                        onClick={() => setSelectedTheme(theme)}
                        className={`relative cursor-pointer group transition-all duration-300 ${
                          isSelected ? "scale-[1.02]" : "hover:scale-[1.01]"
                        }`}
                      >
                        {/* Selection Indicator */}
                        {isSelected && (
                          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75"></div>
                        )}

                        <div
                          className={`relative bg-white rounded-xl border-2 overflow-hidden transition-all ${
                            isSelected
                              ? "border-transparent shadow-2xl"
                              : "border-slate-200 hover:border-blue-300 hover:shadow-lg"
                          }`}
                        >
                          {/* Theme Header */}
                          <div className="p-4 border-b border-slate-100">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div
                                  className="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm"
                                  style={{
                                    backgroundColor: currentVariant?.primary,
                                  }}
                                >
                                  <Palette
                                    className="w-5 h-5"
                                    style={{
                                      color: currentVariant?.background,
                                    }}
                                  />
                                </div>
                                <div>
                                  <h4
                                    className="font-bold text-lg leading-tight"
                                    style={{
                                      fontFamily: currentVariant?.font,
                                    }}
                                  >
                                    {theme.name}
                                  </h4>
                                  <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
                                      {theme.category}
                                    </span>
                                    {accessibility[previewMode] ? (
                                      <div className="flex items-center gap-1">
                                        <Shield className="w-3 h-3 text-green-600" />
                                        <span className="text-xs text-green-600 font-medium">
                                          AA
                                        </span>
                                      </div>
                                    ) : (
                                      <div className="flex items-center gap-1">
                                        <AlertTriangle className="w-3 h-3 text-amber-600" />
                                        <span className="text-xs text-amber-600 font-medium">
                                          Check
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>

                              {isSelected && (
                                <div
                                  className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg ring-2 ring-white"
                                  style={{
                                    backgroundColor: currentVariant?.accent,
                                  }}
                                >
                                  <Check
                                    className="w-4 h-4"
                                    style={{
                                      color: currentVariant?.background,
                                    }}
                                  />
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Color Palette */}
                          <div className="p-4 border-b border-slate-100">
                            <div className="flex items-center gap-2 mb-2">
                              <Layers className="w-4 h-4 text-slate-500" />
                              <span className="text-sm font-medium text-slate-700">
                                Color Palette
                              </span>
                            </div>
                            <div className="grid grid-cols-4 gap-2">
                              <div className="text-center">
                                <div
                                  className="w-full h-8 rounded-lg border-2 border-white shadow-sm mb-1"
                                  style={{
                                    backgroundColor: currentVariant?.primary,
                                  }}
                                />
                                <span className="text-xs text-slate-500 font-medium">
                                  Primary
                                </span>
                              </div>
                              <div className="text-center">
                                <div
                                  className="w-full h-8 rounded-lg border-2 border-white shadow-sm mb-1"
                                  style={{
                                    backgroundColor: currentVariant?.accent,
                                  }}
                                />
                                <span className="text-xs text-slate-500 font-medium">
                                  Accent
                                </span>
                              </div>
                              <div className="text-center">
                                <div
                                  className="w-full h-8 rounded-lg border-2 shadow-sm mb-1"
                                  style={{
                                    backgroundColor: currentVariant?.background,
                                    borderColor: currentVariant?.border,
                                  }}
                                />
                                <span className="text-xs text-slate-500 font-medium">
                                  Background
                                </span>
                              </div>
                              <div className="text-center">
                                <div
                                  className="w-full h-8 rounded-lg border-2 shadow-sm mb-1"
                                  style={{
                                    backgroundColor: currentVariant?.surface,
                                    borderColor: currentVariant?.border,
                                  }}
                                />
                                <span className="text-xs text-slate-500 font-medium">
                                  Surface
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Enhanced Mini Preview */}
                          <div
                            className="p-4"
                            style={{
                              backgroundColor: currentVariant?.background,
                            }}
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <Eye className="w-4 h-4 text-slate-500" />
                              <span className="text-sm font-medium text-slate-700">
                                Preview
                              </span>
                            </div>

                            {/* Mini Website Layout */}
                            <div
                              className="rounded-lg border overflow-hidden"
                              style={{
                                borderColor: currentVariant?.border,
                              }}
                            >
                              {/* Mini Header */}
                              <div
                                className="px-3 py-2 flex items-center justify-between"
                                style={{
                                  backgroundColor: currentVariant?.primary,
                                }}
                              >
                                <div
                                  className="text-xs font-bold"
                                  style={{
                                    color: currentVariant?.background,
                                    fontFamily: currentVariant?.font,
                                  }}
                                >
                                  Your Business
                                </div>
                                <div className="flex gap-1">
                                  {[1, 2, 3].map((i) => (
                                    <div
                                      key={i}
                                      className="w-1 h-1 rounded-full"
                                      style={{
                                        backgroundColor:
                                          currentVariant?.background,
                                        opacity: 0.7,
                                      }}
                                    />
                                  ))}
                                </div>
                              </div>

                              {/* Mini Content */}
                              <div
                                className="p-3 space-y-2"
                                style={{
                                  backgroundColor: currentVariant?.surface,
                                }}
                              >
                                <div
                                  className="text-sm font-bold"
                                  style={{
                                    color: currentVariant?.text,
                                    fontFamily: currentVariant?.font,
                                  }}
                                >
                                  Welcome to Our Service
                                </div>
                                <div
                                  className="text-xs leading-relaxed"
                                  style={{
                                    color: currentVariant?.textSecondary,
                                  }}
                                >
                                  Professional solutions for your business needs
                                  with expert guidance.
                                </div>

                                {/* Mini Services Grid */}
                                <div className="grid grid-cols-2 gap-2 mt-3">
                                  {[1, 2].map((i) => (
                                    <div
                                      key={i}
                                      className="p-2 rounded border"
                                      style={{
                                        backgroundColor:
                                          currentVariant?.background,
                                        borderColor: currentVariant?.border,
                                      }}
                                    >
                                      <div
                                        className="w-4 h-4 rounded mb-1"
                                        style={{
                                          backgroundColor:
                                            currentVariant?.accent,
                                        }}
                                      />
                                      <div
                                        className="text-xs font-medium"
                                        style={{ color: currentVariant?.text }}
                                      >
                                        Service {i}
                                      </div>
                                    </div>
                                  ))}
                                </div>

                                {/* Mini CTA */}
                                <div
                                  className="inline-block px-3 py-1 rounded text-xs font-medium mt-2"
                                  style={{
                                    backgroundColor: currentVariant?.accent,
                                    color: currentVariant?.background,
                                  }}
                                >
                                  Get Started
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Theme Stats */}
                          <div className="px-4 py-3 bg-slate-50 border-t border-slate-100">
                            <div className="flex items-center justify-between text-xs">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                  <div className="w-2 h-2 rounded-full bg-green-500" />
                                  <span className="text-slate-600 font-medium">
                                    Modern
                                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                                  <span className="text-slate-600 font-medium">
                                    Responsive
                                  </span>
                                </div>
                              </div>
                              <span
                                className="font-medium"
                                style={{ color: currentVariant?.primary }}
                              >
                                {currentVariant?.font}
                              </span>
                            </div>
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
                {selectedTheme ? (
                  <div className="space-y-6">
                    {/* Preview Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">
                          {selectedTheme.name} Preview
                        </h3>
                        <p className="text-sm text-slate-600">
                          {previewMode === "light" ? "Light" : "Dark"} mode
                          preview
                        </p>
                      </div>

                      {/* Accessibility Details */}
                      <div className="flex items-center gap-3">
                        {(() => {
                          const accessibility =
                            checkThemeAccessibility(selectedTheme);
                          return (
                            <div className="flex items-center gap-2 text-sm bg-white px-3 py-2 rounded-lg border">
                              <span className="text-slate-600">
                                Accessibility:
                              </span>
                              <div className="flex gap-1">
                                <div
                                  className={`w-3 h-3 rounded-full ${
                                    accessibility.light
                                      ? "bg-green-500"
                                      : "bg-amber-500"
                                  }`}
                                  title="Light mode accessibility"
                                />
                                <div
                                  className={`w-3 h-3 rounded-full ${
                                    accessibility.dark
                                      ? "bg-green-500"
                                      : "bg-amber-500"
                                  }`}
                                  title="Dark mode accessibility"
                                />
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    </div>

                    {/* Live Preview */}
                    <div
                      className="rounded-2xl shadow-2xl border overflow-hidden"
                      style={{
                        backgroundColor:
                          getCurrentThemeVariant(selectedTheme).background,
                        fontFamily: getCurrentThemeVariant(selectedTheme).font,
                        borderColor:
                          getCurrentThemeVariant(selectedTheme).border,
                      }}
                    >
                      <div className="p-8">
                        {/* Mock Website Preview */}
                        <div className="max-w-4xl mx-auto space-y-8">
                          {/* Header */}
                          <div
                            className="flex items-center justify-between p-4 rounded-xl shadow-sm"
                            style={{
                              backgroundColor:
                                getCurrentThemeVariant(selectedTheme).primary,
                            }}
                          >
                            <div
                              className="text-lg font-bold"
                              style={{
                                color:
                                  getCurrentThemeVariant(selectedTheme)
                                    .primary ===
                                  getCurrentThemeVariant(selectedTheme)
                                    .background
                                    ? getCurrentThemeVariant(selectedTheme).text
                                    : getCurrentThemeVariant(selectedTheme)
                                        .background,
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
                                      color:
                                        getCurrentThemeVariant(selectedTheme)
                                          .primary ===
                                        getCurrentThemeVariant(selectedTheme)
                                          .background
                                          ? getCurrentThemeVariant(
                                              selectedTheme
                                            ).text
                                          : getCurrentThemeVariant(
                                              selectedTheme
                                            ).background,
                                      opacity: 0.9,
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
                                color:
                                  getCurrentThemeVariant(selectedTheme).text,
                                fontFamily:
                                  getCurrentThemeVariant(selectedTheme).font,
                              }}
                            >
                              Transform Your Business
                            </h1>
                            <p
                              className="text-lg mb-6 opacity-80 max-w-2xl mx-auto"
                              style={{
                                color:
                                  getCurrentThemeVariant(selectedTheme).text,
                              }}
                            >
                              Professional services that deliver exceptional
                              results and drive your success forward
                            </p>
                            <div className="flex gap-3 justify-center">
                              <button
                                className="px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
                                style={{
                                  backgroundColor:
                                    getCurrentThemeVariant(selectedTheme)
                                      .accent,
                                  color:
                                    getCurrentThemeVariant(selectedTheme)
                                      .background,
                                }}
                              >
                                Get Started Today
                              </button>
                              <button
                                className="px-6 py-3 rounded-lg font-semibold border-2 transition-all hover:scale-105"
                                style={{
                                  color:
                                    getCurrentThemeVariant(selectedTheme)
                                      .accent,
                                  borderColor:
                                    getCurrentThemeVariant(selectedTheme)
                                      .accent,
                                }}
                              >
                                Learn More
                              </button>
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
                                  backgroundColor:
                                    previewMode === "dark"
                                      ? "rgba(255,255,255,0.05)"
                                      : "rgba(255,255,255,0.8)",
                                  borderColor:
                                    getCurrentThemeVariant(selectedTheme)
                                      .accent + "20",
                                }}
                              >
                                <div
                                  className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center"
                                  style={{
                                    backgroundColor:
                                      getCurrentThemeVariant(selectedTheme)
                                        .accent,
                                  }}
                                >
                                  <Sparkles
                                    className="w-5 h-5"
                                    style={{
                                      color:
                                        getCurrentThemeVariant(selectedTheme)
                                          .background,
                                    }}
                                  />
                                </div>
                                <h3
                                  className="text-lg font-bold mb-2"
                                  style={{
                                    color:
                                      getCurrentThemeVariant(selectedTheme)
                                        .text,
                                  }}
                                >
                                  {service.title}
                                </h3>
                                <p
                                  className="opacity-70 text-sm"
                                  style={{
                                    color:
                                      getCurrentThemeVariant(selectedTheme)
                                        .text,
                                  }}
                                >
                                  {service.desc}
                                </p>
                              </div>
                            ))}
                          </div>

                          {/* Footer Preview */}
                          <div
                            className="p-6 rounded-xl mt-8"
                            style={{
                              backgroundColor:
                                getCurrentThemeVariant(selectedTheme).primary,
                            }}
                          >
                            <div className="text-center">
                              <h3
                                className="text-lg font-bold mb-2"
                                style={{
                                  color:
                                    getCurrentThemeVariant(selectedTheme)
                                      .primary ===
                                    getCurrentThemeVariant(selectedTheme)
                                      .background
                                      ? getCurrentThemeVariant(selectedTheme)
                                          .text
                                      : getCurrentThemeVariant(selectedTheme)
                                          .background,
                                }}
                              >
                                Ready to Get Started?
                              </h3>
                              <p
                                className="opacity-80 mb-4"
                                style={{
                                  color:
                                    getCurrentThemeVariant(selectedTheme)
                                      .primary ===
                                    getCurrentThemeVariant(selectedTheme)
                                      .background
                                      ? getCurrentThemeVariant(selectedTheme)
                                          .text
                                      : getCurrentThemeVariant(selectedTheme)
                                          .background,
                                }}
                              >
                                Contact us today for a free consultation
                              </p>
                              <button
                                className="px-6 py-2 rounded-lg font-semibold"
                                style={{
                                  backgroundColor:
                                    getCurrentThemeVariant(selectedTheme)
                                      .accent,
                                  color:
                                    getCurrentThemeVariant(selectedTheme)
                                      .background,
                                }}
                              >
                                Contact Us
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* No Theme Selected State */
                  <div className="bg-white rounded-2xl shadow-xl border h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Palette className="w-10 h-10 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                        Select a Theme
                      </h3>
                      <p className="text-slate-600 max-w-sm">
                        Choose a color theme from the left panel to see a live
                        preview of how your website will look
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
