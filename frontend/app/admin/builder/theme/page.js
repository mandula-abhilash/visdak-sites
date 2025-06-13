"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Eye } from "lucide-react";

const themes = [
  {
    id: "luxury-gold",
    name: "Luxury Gold",
    primary: "#000000",
    accent: "#FFD700",
    background: "#F5F5F5",
    text: "#1A1A1A",
    font: "Playfair Display",
    description: "Elegant and sophisticated for premium brands",
  },
  {
    id: "pastel-peach",
    name: "Pastel Peach",
    primary: "#FDE5EC",
    accent: "#F8B195",
    background: "#FFF9F9",
    text: "#333333",
    font: "Poppins",
    description: "Soft and welcoming for beauty and wellness",
  },
  {
    id: "modern-blue",
    name: "Modern Blue",
    primary: "#0F172A",
    accent: "#3B82F6",
    background: "#E5F0FF",
    text: "#1E293B",
    font: "Inter",
    description: "Clean and professional for business services",
  },
  {
    id: "forest-green",
    name: "Forest Green",
    primary: "#064E3B",
    accent: "#10B981",
    background: "#F0FDF4",
    text: "#1F2937",
    font: "Nunito Sans",
    description: "Natural and organic for eco-friendly brands",
  },
  {
    id: "sunset-orange",
    name: "Sunset Orange",
    primary: "#7C2D12",
    accent: "#F97316",
    background: "#FFF7ED",
    text: "#1C1917",
    font: "Montserrat",
    description: "Energetic and vibrant for creative businesses",
  },
  {
    id: "royal-purple",
    name: "Royal Purple",
    primary: "#581C87",
    accent: "#A855F7",
    background: "#FAF5FF",
    text: "#1F2937",
    font: "Lora",
    description: "Luxurious and creative for artistic ventures",
  },
];

export default function ThemeBuilderPage() {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
  };

  const handleNext = () => {
    if (selectedTheme) {
      // Store theme in localStorage for now (later can be global state)
      localStorage.setItem("selectedTheme", JSON.stringify(selectedTheme));
      // Navigate to next step (you can implement routing here)
      console.log("Selected theme:", selectedTheme);
      alert(`Theme "${selectedTheme.name}" selected! Ready for next step.`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600&family=Inter:wght@300;400;500;600&family=Nunito+Sans:wght@300;400;600&family=Montserrat:wght@400;500;600&family=Lora:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/businesses"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Businesses
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                Choose Your Color Theme
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                Select a design style that defines the visual tone of your
                website. This will apply to all sections like Hero, Services,
                and more.
              </p>
            </div>
            <button
              onClick={() => setPreviewMode(!previewMode)}
              className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Eye className="w-4 h-4 mr-2" />
              {previewMode ? "Grid View" : "Preview Mode"}
            </button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center">
            <div className="flex items-center text-blue-600">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                1
              </div>
              <span className="ml-2 text-sm font-medium">Theme Selection</span>
            </div>
            <div className="flex-1 mx-4 h-0.5 bg-gray-200"></div>
            <div className="flex items-center text-gray-400">
              <div className="w-8 h-8 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center text-sm font-medium">
                2
              </div>
              <span className="ml-2 text-sm font-medium">Content Setup</span>
            </div>
            <div className="flex-1 mx-4 h-0.5 bg-gray-200"></div>
            <div className="flex items-center text-gray-400">
              <div className="w-8 h-8 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center text-sm font-medium">
                3
              </div>
              <span className="ml-2 text-sm font-medium">Launch</span>
            </div>
          </div>
        </div>

        {previewMode && selectedTheme ? (
          /* Full Preview Mode */
          <div className="mb-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  Live Preview: {selectedTheme.name}
                </h3>
                <p className="text-gray-600">
                  See how your website will look with this theme
                </p>
              </div>
              <div
                className="p-8"
                style={{
                  backgroundColor: selectedTheme.background,
                  fontFamily: selectedTheme.font,
                }}
              >
                {/* Mock Website Preview */}
                <div className="max-w-4xl mx-auto">
                  {/* Header */}
                  <div
                    className="flex items-center justify-between p-4 rounded-lg mb-8"
                    style={{ backgroundColor: selectedTheme.primary }}
                  >
                    <div
                      className="text-xl font-bold"
                      style={{ color: "white" }}
                    >
                      Your Business Name
                    </div>
                    <div className="hidden md:flex space-x-6">
                      <span className="text-white opacity-90">Home</span>
                      <span className="text-white opacity-90">Services</span>
                      <span className="text-white opacity-90">About</span>
                      <span className="text-white opacity-90">Contact</span>
                    </div>
                  </div>

                  {/* Hero Section */}
                  <div className="text-center mb-12">
                    <h1
                      className="text-5xl font-bold mb-4"
                      style={{
                        color: selectedTheme.text,
                        fontFamily: selectedTheme.font,
                      }}
                    >
                      Transform Your Business
                    </h1>
                    <p
                      className="text-xl mb-8 opacity-80"
                      style={{ color: selectedTheme.text }}
                    >
                      Professional services that deliver exceptional results for
                      your success
                    </p>
                    <div className="flex gap-4 justify-center">
                      <button
                        className="px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: selectedTheme.accent }}
                      >
                        Get Started
                      </button>
                      <button
                        className="px-8 py-3 rounded-lg font-semibold border-2 hover:opacity-80 transition-opacity"
                        style={{
                          color: selectedTheme.accent,
                          borderColor: selectedTheme.accent,
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
                        className="bg-white p-6 rounded-lg shadow-sm border"
                      >
                        <div
                          className="w-12 h-12 rounded-lg mb-4"
                          style={{ backgroundColor: selectedTheme.accent }}
                        ></div>
                        <h3
                          className="text-lg font-semibold mb-2"
                          style={{ color: selectedTheme.text }}
                        >
                          Service {i}
                        </h3>
                        <p
                          className="opacity-70"
                          style={{ color: selectedTheme.text }}
                        >
                          Professional service description that showcases your
                          expertise.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Theme Selection Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {themes.map((theme) => (
              <div
                key={theme.id}
                className={`relative bg-white rounded-xl shadow-sm border-2 transition-all duration-200 hover:shadow-lg cursor-pointer ${
                  selectedTheme?.id === theme.id
                    ? "border-blue-500 ring-4 ring-blue-500/20"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => handleThemeSelect(theme)}
              >
                {/* Selection Indicator */}
                {selectedTheme?.id === theme.id && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center z-10">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}

                {/* Theme Preview */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {theme.name}
                    </h3>
                    <p className="text-sm text-gray-600">{theme.description}</p>
                  </div>

                  {/* Color Palette */}
                  <div className="flex space-x-2 mb-4">
                    <div
                      className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                      style={{ backgroundColor: theme.primary }}
                      title="Primary Color"
                    ></div>
                    <div
                      className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                      style={{ backgroundColor: theme.accent }}
                      title="Accent Color"
                    ></div>
                    <div
                      className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                      style={{ backgroundColor: theme.background }}
                      title="Background Color"
                    ></div>
                  </div>

                  {/* Mini Preview */}
                  <div
                    className="rounded-lg p-4 border"
                    style={{
                      backgroundColor: theme.background,
                      fontFamily: theme.font,
                    }}
                  >
                    <h4
                      className="text-lg font-bold mb-2"
                      style={{ color: theme.text }}
                    >
                      Your Brand Hero Title
                    </h4>
                    <p
                      className="text-sm mb-3 opacity-80"
                      style={{ color: theme.text }}
                    >
                      Your compelling tagline goes here to attract customers.
                    </p>
                    <span
                      className="inline-block px-4 py-2 text-sm font-medium text-white rounded-full"
                      style={{ backgroundColor: theme.accent }}
                    >
                      Book Now
                    </span>
                  </div>

                  {/* Font Info */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500">
                      Font: <span className="font-medium">{theme.font}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Selected Theme Info */}
        {selectedTheme && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Selected Theme: {selectedTheme.name}
                </h3>
                <p className="text-blue-700 mb-4">
                  {selectedTheme.description}
                </p>
                <div className="flex items-center space-x-4 text-sm text-blue-600">
                  <span>Font: {selectedTheme.font}</span>
                  <span>•</span>
                  <span>Primary: {selectedTheme.primary}</span>
                  <span>•</span>
                  <span>Accent: {selectedTheme.accent}</span>
                </div>
              </div>
              <button
                onClick={() => setPreviewMode(true)}
                className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
              >
                <Eye className="w-4 h-4 mr-2" />
                Full Preview
              </button>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Step 1 of 3 - Choose your visual identity
          </div>
          <div className="flex space-x-4">
            <button
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setSelectedTheme(null)}
              disabled={!selectedTheme}
            >
              Reset Selection
            </button>
            <button
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                selectedTheme
                  ? "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
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
