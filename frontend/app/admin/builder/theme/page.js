"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Eye, Sun, Moon, Palette } from "lucide-react";
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
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Businesses
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Choose Your Color Theme
              </h1>
              <p className="text-muted-foreground">
                Select a design style that defines the visual tone of your
                website
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  setTheme(systemTheme === "dark" ? "light" : "dark")
                }
                className="inline-flex items-center px-3 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors"
              >
                {systemTheme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className="inline-flex items-center px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors"
              >
                <Eye className="w-4 h-4 mr-2" />
                {previewMode ? "Grid View" : "Preview"}
              </button>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center">
            <div className="flex items-center text-primary">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                1
              </div>
              <span className="ml-2 text-sm font-medium">Theme Selection</span>
            </div>
            <div className="flex-1 mx-4 h-0.5 bg-border"></div>
            <div className="flex items-center text-muted-foreground">
              <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-medium">
                2
              </div>
              <span className="ml-2 text-sm font-medium">Content Setup</span>
            </div>
            <div className="flex-1 mx-4 h-0.5 bg-border"></div>
            <div className="flex items-center text-muted-foreground">
              <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-medium">
                3
              </div>
              <span className="ml-2 text-sm font-medium">Launch</span>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {themeCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
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

        {previewMode && selectedTheme ? (
          /* Full Preview Mode */
          <div className="mb-8">
            <div className="bg-card rounded-xl shadow-lg overflow-hidden border">
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Live Preview: {selectedTheme.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {systemTheme === "dark" ? "Dark" : "Light"} mode preview
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {selectedTheme.category}
                    </span>
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
                <div className="max-w-4xl mx-auto">
                  {/* Header */}
                  <div
                    className="flex items-center justify-between p-4 rounded-lg mb-8"
                    style={{
                      backgroundColor:
                        getCurrentThemeVariant(selectedTheme).primary,
                    }}
                  >
                    <div
                      className="text-lg font-bold"
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
                    <div className="hidden md:flex space-x-6 text-sm">
                      {["Home", "Services", "About", "Contact"].map((item) => (
                        <span
                          key={item}
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
                  <div className="text-center mb-12">
                    <h1
                      className="text-4xl font-bold mb-4"
                      style={{
                        color: getCurrentThemeVariant(selectedTheme).text,
                        fontFamily: getCurrentThemeVariant(selectedTheme).font,
                      }}
                    >
                      Transform Your Business
                    </h1>
                    <p
                      className="text-lg mb-8 opacity-80"
                      style={{
                        color: getCurrentThemeVariant(selectedTheme).text,
                      }}
                    >
                      Professional services that deliver exceptional results
                    </p>
                    <div className="flex gap-4 justify-center">
                      <button
                        className="px-6 py-3 rounded-lg font-medium transition-opacity hover:opacity-90"
                        style={{
                          backgroundColor:
                            getCurrentThemeVariant(selectedTheme).accent,
                          color:
                            getCurrentThemeVariant(selectedTheme).background,
                        }}
                      >
                        Get Started
                      </button>
                      <button
                        className="px-6 py-3 rounded-lg font-medium border-2 transition-opacity hover:opacity-80"
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
                  <div className="grid md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="p-6 rounded-lg shadow-sm border"
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
                          className="w-10 h-10 rounded-lg mb-4"
                          style={{
                            backgroundColor:
                              getCurrentThemeVariant(selectedTheme).accent,
                          }}
                        ></div>
                        <h3
                          className="text-lg font-semibold mb-2"
                          style={{
                            color: getCurrentThemeVariant(selectedTheme).text,
                          }}
                        >
                          Service {i}
                        </h3>
                        <p
                          className="text-sm opacity-70"
                          style={{
                            color: getCurrentThemeVariant(selectedTheme).text,
                          }}
                        >
                          Professional service description showcasing expertise.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Theme Selection Column Layout */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
            {filteredThemes.map((theme) => {
              const currentVariant = getCurrentThemeVariant(theme);
              return (
                <div
                  key={theme.id}
                  className={`relative bg-card rounded-lg shadow-sm border-2 transition-all duration-200 hover:shadow-md cursor-pointer ${
                    selectedTheme?.id === theme.id
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-border hover:border-border/60"
                  }`}
                  onClick={() => handleThemeSelect(theme)}
                >
                  {/* Selection Indicator */}
                  {selectedTheme?.id === theme.id && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center z-10">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}

                  {/* Theme Preview */}
                  <div className="p-4">
                    <div className="mb-3">
                      <h3 className="font-semibold text-foreground text-sm mb-1">
                        {theme.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {theme.category}
                      </p>
                    </div>

                    {/* Color Palette */}
                    <div className="flex space-x-2 mb-3">
                      <div
                        className="w-6 h-6 rounded-full border border-border shadow-sm"
                        style={{ backgroundColor: currentVariant.primary }}
                        title="Primary"
                      ></div>
                      <div
                        className="w-6 h-6 rounded-full border border-border shadow-sm"
                        style={{ backgroundColor: currentVariant.accent }}
                        title="Accent"
                      ></div>
                      <div
                        className="w-6 h-6 rounded-full border border-border shadow-sm"
                        style={{ backgroundColor: currentVariant.background }}
                        title="Background"
                      ></div>
                    </div>

                    {/* Mini Preview */}
                    <div
                      className="rounded-md p-3 border text-center"
                      style={{
                        backgroundColor: currentVariant.background,
                        fontFamily: currentVariant.font,
                        borderColor: currentVariant.accent + "20",
                      }}
                    >
                      <h4
                        className="text-sm font-bold mb-2"
                        style={{ color: currentVariant.text }}
                      >
                        Your Brand
                      </h4>
                      <p
                        className="text-xs mb-2 opacity-80"
                        style={{ color: currentVariant.text }}
                      >
                        Compelling tagline here
                      </p>
                      <span
                        className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                        style={{
                          backgroundColor: currentVariant.accent,
                          color: currentVariant.background,
                        }}
                      >
                        Book Now
                      </span>
                    </div>

                    {/* Font Info */}
                    <div className="mt-3 pt-3 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        {currentVariant.font}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Selected Theme Info */}
        {selectedTheme && (
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-8">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Selected: {selectedTheme.name}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{selectedTheme.category}</span>
                  <span>•</span>
                  <span>{getCurrentThemeVariant(selectedTheme).font}</span>
                  <span>•</span>
                  <span>{systemTheme === "dark" ? "Dark" : "Light"} mode</span>
                </div>
              </div>
              <button
                onClick={() => setPreviewMode(true)}
                className="inline-flex items-center px-3 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors text-sm"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </button>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            Step 1 of 3 - Choose your visual identity
          </div>
          <div className="flex space-x-3">
            <button
              className="px-4 py-2 border border-border text-muted-foreground rounded-lg hover:bg-muted/50 transition-colors text-sm"
              onClick={() => setSelectedTheme(null)}
              disabled={!selectedTheme}
            >
              Reset
            </button>
            <button
              className={`px-6 py-2 rounded-lg font-medium transition-all text-sm ${
                selectedTheme
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
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
