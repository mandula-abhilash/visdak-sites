"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Eye,
  Sun,
  Moon,
  Palette,
  Sparkles,
} from "lucide-react";
import { useTheme } from "next-themes";
import {
  builderThemes,
  themeCategories,
  getThemesByCategory,
} from "@/config/builder-themes";

export default function ThemeBuilderPage() {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [previewMode, setPreviewMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme: systemTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredThemes = getThemesByCategory(selectedCategory);

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
  };

  const handleNext = () => {
    if (selectedTheme) {
      localStorage.setItem(
        "selectedBuilderTheme",
        JSON.stringify(selectedTheme)
      );
      console.log("Selected theme:", selectedTheme);
      alert(`Theme "${selectedTheme.name}" selected! Ready for next step.`);
    }
  };

  const getCurrentThemeVariant = (theme) => {
    return systemTheme === "dark" ? theme.dark : theme.light;
  };

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600&family=Inter:wght@300;400;500;600&family=Roboto:wght@300;400;500;600&family=Lato:wght@300;400;600&family=Open+Sans:wght@300;400;500;600&family=Merriweather:wght@300;400;600&family=Nunito:wght@300;400;500;600&family=Cormorant+Garamond:wght@300;400;500;600&family=Rubik:wght@300;400;500;600&family=PT+Sans:wght@400;700&family=Libre+Baskerville:wght@400;700&family=Raleway:wght@300;400;500;600&family=Oxygen:wght@300;400;700&family=Source+Sans+Pro:wght@300;400;600&family=Work+Sans:wght@300;400;500;600&family=Crimson+Pro:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/businesses"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Businesses
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-3 tracking-tight">
                Choose Your Color Theme
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Select a design style that defines the visual tone and
                personality of your website
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  setTheme(systemTheme === "dark" ? "light" : "dark")
                }
                className="inline-flex items-center px-4 py-2 bg-muted text-muted-foreground rounded-xl hover:bg-muted/80 transition-all duration-200 hover:scale-105"
              >
                {systemTheme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-all duration-200 hover:scale-105"
              >
                <Eye className="w-4 h-4 mr-2" />
                {previewMode ? "Grid View" : "Full Preview"}
              </button>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mb-10">
          <div className="flex items-center">
            <div className="flex items-center text-primary">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold shadow-lg">
                1
              </div>
              <span className="ml-3 text-sm font-semibold">
                Theme Selection
              </span>
            </div>
            <div className="flex-1 mx-6 h-0.5 bg-gradient-to-r from-primary to-border"></div>
            <div className="flex items-center text-muted-foreground">
              <div className="w-10 h-10 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="ml-3 text-sm font-medium">Content Setup</span>
            </div>
            <div className="flex-1 mx-6 h-0.5 bg-border"></div>
            <div className="flex items-center text-muted-foreground">
              <div className="w-10 h-10 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <span className="ml-3 text-sm font-medium">Launch</span>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {themeCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {previewMode && selectedTheme ? (
          /* Full Preview Mode */
          <div className="mb-8">
            <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border/50">
              <div className="p-6 border-b border-border bg-gradient-to-r from-background to-muted/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      Live Preview: {selectedTheme.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {systemTheme === "dark" ? "Dark" : "Light"} mode preview
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-lg">
                      <Palette className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {selectedTheme.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="p-8"
                style={{
                  backgroundColor:
                    getCurrentThemeVariant(selectedTheme).background,
                  fontFamily: getCurrentThemeVariant(selectedTheme).font,
                }}
              >
                {/* Mock Website Preview */}
                <div className="max-w-5xl mx-auto">
                  {/* Header */}
                  <div
                    className="flex items-center justify-between p-6 rounded-xl mb-8 shadow-sm"
                    style={{
                      backgroundColor:
                        getCurrentThemeVariant(selectedTheme).primary,
                    }}
                  >
                    <div
                      className="text-xl font-bold"
                      style={{
                        color:
                          getCurrentThemeVariant(selectedTheme).primary ===
                          getCurrentThemeVariant(selectedTheme).background
                            ? getCurrentThemeVariant(selectedTheme).text
                            : getCurrentThemeVariant(selectedTheme).background,
                      }}
                    >
                      Your Business
                    </div>
                    <div className="hidden md:flex space-x-8 text-sm font-medium">
                      {["Home", "Services", "About", "Contact"].map((item) => (
                        <span
                          key={item}
                          className="hover:opacity-80 transition-opacity cursor-pointer"
                          style={{
                            color:
                              getCurrentThemeVariant(selectedTheme).primary ===
                              getCurrentThemeVariant(selectedTheme).background
                                ? getCurrentThemeVariant(selectedTheme).text
                                : getCurrentThemeVariant(selectedTheme)
                                    .background,
                            opacity: 0.9,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hero Section */}
                  <div className="text-center mb-16">
                    <h1
                      className="text-5xl font-bold mb-6 leading-tight"
                      style={{
                        color: getCurrentThemeVariant(selectedTheme).text,
                        fontFamily: getCurrentThemeVariant(selectedTheme).font,
                      }}
                    >
                      Transform Your Business
                    </h1>
                    <p
                      className="text-xl mb-10 opacity-80 max-w-2xl mx-auto leading-relaxed"
                      style={{
                        color: getCurrentThemeVariant(selectedTheme).text,
                      }}
                    >
                      Professional services that deliver exceptional results and
                      drive your success forward
                    </p>
                    <div className="flex gap-4 justify-center">
                      <button
                        className="px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg"
                        style={{
                          backgroundColor:
                            getCurrentThemeVariant(selectedTheme).accent,
                          color:
                            getCurrentThemeVariant(selectedTheme).background,
                        }}
                      >
                        Get Started Today
                      </button>
                      <button
                        className="px-8 py-4 rounded-xl font-semibold border-2 transition-all hover:scale-105"
                        style={{
                          color: getCurrentThemeVariant(selectedTheme).accent,
                          borderColor:
                            getCurrentThemeVariant(selectedTheme).accent,
                        }}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>

                  {/* Services Preview */}
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        title: "Expert Consultation",
                        desc: "Professional guidance tailored to your specific needs and goals.",
                      },
                      {
                        title: "Premium Service",
                        desc: "High-quality solutions delivered with attention to detail.",
                      },
                      {
                        title: "Ongoing Support",
                        desc: "Continuous assistance to ensure your long-term success.",
                      },
                    ].map((service, i) => (
                      <div
                        key={i}
                        className="p-8 rounded-xl shadow-sm border transition-all hover:scale-105"
                        style={{
                          backgroundColor:
                            systemTheme === "dark"
                              ? "rgba(255,255,255,0.05)"
                              : "rgba(255,255,255,0.8)",
                          borderColor:
                            getCurrentThemeVariant(selectedTheme).accent + "20",
                        }}
                      >
                        <div
                          className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center"
                          style={{
                            backgroundColor:
                              getCurrentThemeVariant(selectedTheme).accent,
                          }}
                        >
                          <Sparkles
                            className="w-6 h-6"
                            style={{
                              color:
                                getCurrentThemeVariant(selectedTheme)
                                  .background,
                            }}
                          />
                        </div>
                        <h3
                          className="text-xl font-bold mb-3"
                          style={{
                            color: getCurrentThemeVariant(selectedTheme).text,
                          }}
                        >
                          {service.title}
                        </h3>
                        <p
                          className="opacity-70 leading-relaxed"
                          style={{
                            color: getCurrentThemeVariant(selectedTheme).text,
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
          /* Enhanced Theme Selection Column Layout */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {filteredThemes.map((theme) => {
              const currentVariant = getCurrentThemeVariant(theme);
              const isSelected = selectedTheme?.id === theme.id;
              return (
                <div
                  key={theme.id}
                  className={`group relative bg-card rounded-2xl shadow-lg border-2 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1 ${
                    isSelected
                      ? "border-primary ring-4 ring-primary/20 shadow-primary/10"
                      : "border-border hover:border-primary/30"
                  }`}
                  onClick={() => handleThemeSelect(theme)}
                >
                  {/* Selection Indicator */}
                  {isSelected && (
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10 shadow-lg animate-pulse">
                      <Check className="w-5 h-5 text-primary-foreground" />
                    </div>
                  )}

                  {/* Theme Preview */}
                  <div className="p-6">
                    {/* Header */}
                    <div className="mb-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                          {theme.name}
                        </h3>
                        <span className="text-xs font-medium px-2 py-1 bg-muted text-muted-foreground rounded-full">
                          {theme.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">
                        {currentVariant.font}
                      </p>
                    </div>

                    {/* Color Palette */}
                    <div className="flex justify-center space-x-3 mb-6">
                      <div className="text-center">
                        <div
                          className="w-8 h-8 rounded-full border-2 border-white shadow-lg mb-1"
                          style={{ backgroundColor: currentVariant.primary }}
                          title="Primary Color"
                        ></div>
                        <span className="text-xs text-muted-foreground font-medium">
                          Primary
                        </span>
                      </div>
                      <div className="text-center">
                        <div
                          className="w-8 h-8 rounded-full border-2 border-white shadow-lg mb-1"
                          style={{ backgroundColor: currentVariant.accent }}
                          title="Accent Color"
                        ></div>
                        <span className="text-xs text-muted-foreground font-medium">
                          Accent
                        </span>
                      </div>
                      <div className="text-center">
                        <div
                          className="w-8 h-8 rounded-full border-2 border-white shadow-lg mb-1"
                          style={{ backgroundColor: currentVariant.background }}
                          title="Background Color"
                        ></div>
                        <span className="text-xs text-muted-foreground font-medium">
                          Background
                        </span>
                      </div>
                    </div>

                    {/* Enhanced Mini Preview */}
                    <div
                      className="rounded-xl p-5 border-2 text-center transition-all group-hover:scale-105"
                      style={{
                        backgroundColor: currentVariant.background,
                        fontFamily: currentVariant.font,
                        borderColor: currentVariant.accent + "30",
                      }}
                    >
                      <div
                        className="text-lg font-bold mb-3 leading-tight"
                        style={{ color: currentVariant.text }}
                      >
                        Your Brand Name
                      </div>
                      <p
                        className="text-sm mb-4 opacity-80 leading-relaxed"
                        style={{ color: currentVariant.text }}
                      >
                        Compelling tagline that captures your essence
                      </p>
                      <div className="space-y-2">
                        <span
                          className="inline-block px-4 py-2 text-sm font-semibold rounded-lg shadow-sm"
                          style={{
                            backgroundColor: currentVariant.accent,
                            color: currentVariant.background,
                          }}
                        >
                          Get Started
                        </span>
                        <div className="flex justify-center space-x-2 mt-3">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="w-2 h-2 rounded-full opacity-60"
                              style={{ backgroundColor: currentVariant.accent }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Theme Mode Indicator */}
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground font-medium">
                          {systemTheme === "dark" ? "Dark Mode" : "Light Mode"}
                        </span>
                        <div className="flex items-center gap-1">
                          {systemTheme === "dark" ? (
                            <Moon className="w-3 h-3 text-muted-foreground" />
                          ) : (
                            <Sun className="w-3 h-3 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                </div>
              );
            })}
          </div>
        )}

        {/* Enhanced Selected Theme Info */}
        {selectedTheme && (
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 mb-8 shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1">
                    Selected: {selectedTheme.name}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="font-medium">
                      {selectedTheme.category}
                    </span>
                    <span>•</span>
                    <span>{getCurrentThemeVariant(selectedTheme).font}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      {systemTheme === "dark" ? (
                        <Moon className="w-3 h-3" />
                      ) : (
                        <Sun className="w-3 h-3" />
                      )}
                      {systemTheme === "dark" ? "Dark" : "Light"} mode
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setPreviewMode(true)}
                className="inline-flex items-center px-4 py-2 bg-primary/20 text-primary rounded-xl hover:bg-primary/30 transition-all hover:scale-105"
              >
                <Eye className="w-4 h-4 mr-2" />
                Full Preview
              </button>
            </div>
          </div>
        )}

        {/* Enhanced Action Buttons */}
        <div className="flex justify-between items-center">
          <div className="text-muted-foreground">
            <span className="text-sm font-medium">Step 1 of 3</span>
            <span className="text-sm ml-2">Choose your visual identity</span>
          </div>
          <div className="flex space-x-4">
            <button
              className="px-6 py-3 border border-border text-muted-foreground rounded-xl hover:bg-muted/50 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setSelectedTheme(null)}
              disabled={!selectedTheme}
            >
              Reset Selection
            </button>
            <button
              className={`px-8 py-3 rounded-xl font-semibold transition-all hover:scale-105 ${
                selectedTheme
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
              onClick={handleNext}
              disabled={!selectedTheme}
            >
              Continue to Content Setup →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
