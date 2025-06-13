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

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Theme Builder
              </h1>
              <p className="text-sm text-muted-foreground">
                Choose a color theme that defines your website's visual identity
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Accessibility Status */}
              {selectedTheme && (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50">
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
              <div className="flex items-center gap-2 p-1 bg-muted rounded-lg">
                <button
                  onClick={() => setPreviewMode("light")}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    previewMode === "light"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Sun className="w-4 h-4" />
                  Light Preview
                </button>
                <button
                  onClick={() => setPreviewMode("dark")}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    previewMode === "dark"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Moon className="w-4 h-4" />
                  Dark Preview
                </button>
              </div>

              {/* Next Button */}
              <button
                disabled={!selectedTheme}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
            <div className="lg:col-span-2 space-y-6">
              {/* Category Filter */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">
                  Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {themeCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                        selectedCategory === category.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme List */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">
                  Themes ({filteredThemes.length})
                </h3>
                <div className="space-y-3 max-h-[calc(100vh-20rem)] overflow-y-auto pr-2">
                  {filteredThemes.map((theme) => {
                    const currentVariant = getCurrentThemeVariant(theme);
                    const accessibility = checkThemeAccessibility(theme);
                    const isSelected = selectedTheme?.id === theme.id;

                    return (
                      <button
                        key={theme.id}
                        onClick={() => setSelectedTheme(theme)}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all hover:scale-[1.02] ${
                          isSelected
                            ? "border-primary ring-4 ring-primary/20 shadow-lg"
                            : "border-border hover:border-primary/50 hover:shadow-md"
                        }`}
                        style={{
                          backgroundColor:
                            currentVariant?.surface ||
                            currentVariant?.background,
                          fontFamily: currentVariant?.font,
                        }}
                      >
                        <div className="space-y-3">
                          {/* Theme Header */}
                          <div className="flex items-center justify-between">
                            <div>
                              <h4
                                className="font-bold text-lg"
                                style={{ color: currentVariant?.text }}
                              >
                                {theme.name}
                              </h4>
                              <p
                                className="text-sm opacity-70"
                                style={{ color: currentVariant?.textSecondary }}
                              >
                                {theme.category}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              {/* Accessibility Indicator */}
                              {accessibility[previewMode] ? (
                                <Shield className="w-4 h-4 text-green-600" />
                              ) : (
                                <AlertTriangle className="w-4 h-4 text-amber-600" />
                              )}
                              {isSelected && (
                                <div
                                  className="w-6 h-6 rounded-full flex items-center justify-center"
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

                          {/* Color Palette Preview */}
                          <div className="flex gap-2">
                            <div
                              className="w-8 h-8 rounded-lg border"
                              style={{
                                backgroundColor: currentVariant?.primary,
                                borderColor: currentVariant?.border,
                              }}
                              title="Primary Color"
                            />
                            <div
                              className="w-8 h-8 rounded-lg border"
                              style={{
                                backgroundColor: currentVariant?.accent,
                                borderColor: currentVariant?.border,
                              }}
                              title="Accent Color"
                            />
                            <div
                              className="w-8 h-8 rounded-lg border"
                              style={{
                                backgroundColor: currentVariant?.background,
                                borderColor: currentVariant?.border,
                              }}
                              title="Background Color"
                            />
                          </div>

                          {/* Mini Preview */}
                          <div className="space-y-2">
                            <div
                              className="text-sm font-semibold"
                              style={{ color: currentVariant?.text }}
                            >
                              Your Business Name
                            </div>
                            <div
                              className="text-xs opacity-70"
                              style={{ color: currentVariant?.textSecondary }}
                            >
                              Professional services that deliver results
                            </div>
                            <div
                              className="inline-block px-3 py-1 rounded-md text-xs font-medium"
                              style={{
                                backgroundColor: currentVariant?.accent,
                                color: currentVariant?.background,
                              }}
                            >
                              Get Started
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Preview Panel */}
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                {selectedTheme ? (
                  <div className="space-y-4">
                    {/* Preview Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {selectedTheme.name} Preview
                        </h3>
                        <p className="text-sm text-muted-foreground">
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
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-muted-foreground">
                                Accessibility:
                              </span>
                              <div className="flex gap-1">
                                <div
                                  className={`w-2 h-2 rounded-full ${
                                    accessibility.light
                                      ? "bg-green-500"
                                      : "bg-amber-500"
                                  }`}
                                  title="Light mode accessibility"
                                />
                                <div
                                  className={`w-2 h-2 rounded-full ${
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
                      className="rounded-2xl shadow-2xl border border-border/50 overflow-hidden"
                      style={{
                        backgroundColor:
                          getCurrentThemeVariant(selectedTheme).background,
                        fontFamily: getCurrentThemeVariant(selectedTheme).font,
                      }}
                    >
                      <div className="p-6">
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
                  <div className="bg-card rounded-2xl shadow-xl border border-border/50 h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                        <Palette className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Select a Theme
                      </h3>
                      <p className="text-muted-foreground max-w-sm">
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
    </div>
  );
}
