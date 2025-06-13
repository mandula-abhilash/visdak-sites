"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getThemeById } from "@/config/builder-themes";
import {
  Layout,
  ArrowLeft,
  ArrowRight,
  Check,
  Layers,
  Grid,
  Columns,
  Square,
  Eye,
  Zap,
} from "lucide-react";

const layouts = [
  {
    id: "stacked",
    name: "Stacked Layout",
    description:
      "Classic vertical layout with sections stacked on top of each other",
    icon: Layers,
    preview:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    features: [
      "Clean vertical flow",
      "Easy to navigate",
      "Mobile-friendly",
      "Fast loading",
    ],
    usage: "Perfect for service-based businesses and portfolios",
    pros: ["Simple and clean", "Great for mobile", "Easy to maintain"],
    cons: ["Less visual impact", "Limited creativity"],
  },
  {
    id: "parallax",
    name: "Parallax Layout",
    description: "Dynamic layout with smooth scrolling effects and depth",
    icon: Grid,
    preview:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    features: [
      "Smooth scrolling",
      "Visual depth effects",
      "Engaging animations",
      "Modern design",
    ],
    usage: "Ideal for creative agencies and modern businesses",
    pros: ["Visually stunning", "Engaging experience", "Modern feel"],
    cons: ["Slower loading", "Complex maintenance"],
  },
  {
    id: "grid",
    name: "Grid Layout",
    description: "Organized grid-based layout for content-heavy websites",
    icon: Square,
    preview:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    features: [
      "Organized structure",
      "Content-focused",
      "Easy scanning",
      "Flexible sections",
    ],
    usage: "Great for portfolios and product showcases",
    pros: ["Organized content", "Easy to scan", "Flexible"],
    cons: ["Can feel rigid", "Less storytelling"],
  },
  {
    id: "sidebar",
    name: "Sidebar Layout",
    description: "Layout with persistent sidebar navigation for easy access",
    icon: Columns,
    preview:
      "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    features: [
      "Persistent navigation",
      "Quick access",
      "Professional look",
      "Content focus",
    ],
    usage: "Perfect for documentation and professional services",
    pros: ["Easy navigation", "Professional", "Content-focused"],
    cons: ["Less mobile-friendly", "Reduced content width"],
  },
];

export default function LayoutSelectorPage() {
  const searchParams = useSearchParams();
  const themeId = searchParams.get("theme");
  const fontId = searchParams.get("font");
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedFont, setSelectedFont] = useState(null);
  const [selectedLayout, setSelectedLayout] = useState(null);
  const [previewMode, setPreviewMode] = useState("desktop");

  useEffect(() => {
    if (themeId) {
      const theme = getThemeById(themeId);
      setSelectedTheme(theme);
    }
    if (fontId) {
      // In a real app, you'd fetch font details here
      setSelectedFont({ id: fontId, name: fontId });
    }
  }, [themeId, fontId]);

  const handleLayoutSelect = (layout) => {
    setSelectedLayout(layout);
  };

  const handleNextStep = () => {
    if (selectedLayout && selectedTheme && selectedFont) {
      // Navigate to next step with theme, font, and layout
      window.location.href = `/admin/builder/content?theme=${selectedTheme.id}&font=${selectedFont.id}&layout=${selectedLayout.id}`;
    }
  };

  const handleBack = () => {
    window.location.href = `/admin/builder/fonts?theme=${themeId}`;
  };

  if (!selectedTheme || !selectedFont) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Loading...</h2>
          <p className="text-slate-600">
            Please wait while we load your selections.
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
                  Choose Your Layout
                </h1>
                <p className="text-sm text-slate-600 mt-1">
                  Select the structure that best fits your content
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Previous Selections */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-slate-200">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: selectedTheme.light.primary }}
                  />
                  <span className="text-xs font-medium text-slate-700">
                    {selectedTheme.name}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-slate-200">
                  <Layout className="w-3 h-3 text-slate-600" />
                  <span className="text-xs font-medium text-slate-700">
                    {selectedFont.name}
                  </span>
                </div>
              </div>

              {/* Preview Mode Toggle */}
              <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
                <button
                  onClick={() => setPreviewMode("desktop")}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    previewMode === "desktop"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Eye className="w-3 h-3" />
                  Desktop
                </button>
                <button
                  onClick={() => setPreviewMode("mobile")}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    previewMode === "mobile"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Eye className="w-3 h-3" />
                  Mobile
                </button>
              </div>

              {/* Next Button */}
              <button
                onClick={handleNextStep}
                disabled={!selectedLayout}
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium transition-all hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Add Content
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
            {/* Layout Selection Panel */}
            <div className="lg:col-span-2 space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">
                  Layout Options
                </h3>
                <p className="text-sm text-slate-600">
                  Choose how your content will be structured and displayed
                </p>
              </div>

              <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                {layouts.map((layout) => {
                  const isSelected = selectedLayout?.id === layout.id;
                  const IconComponent = layout.icon;

                  return (
                    <div
                      key={layout.id}
                      onClick={() => handleLayoutSelect(layout)}
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
                        {/* Layout Header */}
                        <div className="p-4 border-b border-slate-100">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                                <IconComponent className="w-5 h-5 text-blue-600" />
                              </div>
                              <div>
                                <h4 className="font-bold text-lg leading-tight">
                                  {layout.name}
                                </h4>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
                                    Layout
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

                        {/* Layout Preview Image */}
                        <div className="p-4 border-b border-slate-100">
                          <img
                            src={layout.preview}
                            alt={`${layout.name} preview`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        </div>

                        {/* Layout Details */}
                        <div className="p-4">
                          <p className="text-sm text-slate-600 mb-3">
                            {layout.description}
                          </p>

                          <div className="space-y-3">
                            <div>
                              <h5 className="text-xs font-semibold text-slate-700 mb-2">
                                Key Features
                              </h5>
                              <div className="flex flex-wrap gap-1">
                                {layout.features.map((feature, index) => (
                                  <span
                                    key={index}
                                    className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full"
                                  >
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h5 className="text-xs font-semibold text-slate-700 mb-1">
                                Best For
                              </h5>
                              <p className="text-xs text-slate-600">
                                {layout.usage}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Preview Panel */}
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                {selectedLayout ? (
                  <div className="space-y-6">
                    {/* Preview Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">
                          {selectedLayout.name} Preview
                        </h3>
                        <p className="text-sm text-slate-600">
                          See how your content will be structured with this
                          layout
                        </p>
                      </div>

                      {/* Layout Info */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-sm bg-white px-3 py-2 rounded-lg border">
                          <Layout className="w-4 h-4 text-slate-600" />
                          <span className="text-slate-600">
                            {previewMode === "desktop"
                              ? "Desktop View"
                              : "Mobile View"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Live Preview */}
                    <div
                      className={`rounded-2xl shadow-2xl border overflow-hidden ${
                        previewMode === "mobile" ? "max-w-sm mx-auto" : ""
                      }`}
                      style={{
                        backgroundColor: selectedTheme.light.background,
                        borderColor: selectedTheme.light.border,
                      }}
                    >
                      <div className="p-6">
                        {/* Mock Website Preview based on layout */}
                        <div className="space-y-6">
                          {selectedLayout.id === "stacked" && (
                            <StackedLayoutPreview
                              theme={selectedTheme}
                              font={selectedFont}
                            />
                          )}
                          {selectedLayout.id === "parallax" && (
                            <ParallaxLayoutPreview
                              theme={selectedTheme}
                              font={selectedFont}
                            />
                          )}
                          {selectedLayout.id === "grid" && (
                            <GridLayoutPreview
                              theme={selectedTheme}
                              font={selectedFont}
                            />
                          )}
                          {selectedLayout.id === "sidebar" && (
                            <SidebarLayoutPreview
                              theme={selectedTheme}
                              font={selectedFont}
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Layout Pros & Cons */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-xl p-6 border">
                        <h4 className="text-lg font-semibold text-green-700 mb-4 flex items-center gap-2">
                          <Zap className="w-5 h-5" />
                          Advantages
                        </h4>
                        <ul className="space-y-2">
                          {selectedLayout.pros.map((pro, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-2 text-sm"
                            >
                              <Check className="w-4 h-4 text-green-600" />
                              <span className="text-slate-700">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl p-6 border">
                        <h4 className="text-lg font-semibold text-amber-700 mb-4 flex items-center gap-2">
                          <Eye className="w-5 h-5" />
                          Considerations
                        </h4>
                        <ul className="space-y-2">
                          {selectedLayout.cons.map((con, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-2 text-sm"
                            >
                              <div className="w-4 h-4 rounded-full bg-amber-200 flex-shrink-0" />
                              <span className="text-slate-700">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* No Layout Selected State */
                  <div className="bg-white rounded-2xl shadow-xl border h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Layout className="w-10 h-10 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                        Select a Layout
                      </h3>
                      <p className="text-slate-600 max-w-sm">
                        Choose a layout structure from the left panel to see how
                        your content will be organized
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

// Layout Preview Components
function StackedLayoutPreview({ theme, font }) {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div
        className="p-4 rounded-lg"
        style={{ backgroundColor: theme.light.primary }}
      >
        <div className="flex justify-between items-center">
          <div
            className="text-lg font-bold"
            style={{
              color: theme.light.background,
              fontFamily: font.name,
            }}
          >
            Your Business
          </div>
          <div className="hidden md:flex space-x-4 text-sm">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <span
                key={item}
                style={{
                  color: theme.light.background,
                  opacity: 0.9,
                  fontFamily: font.name,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stacked Sections */}
      <div className="space-y-4">
        <div
          className="p-6 rounded-lg text-center"
          style={{ backgroundColor: theme.light.surface }}
        >
          <h2
            className="text-xl font-bold mb-2"
            style={{ color: theme.light.text, fontFamily: font.name }}
          >
            Hero Section
          </h2>
          <p
            className="text-sm"
            style={{ color: theme.light.textSecondary, fontFamily: font.name }}
          >
            Main headline and call-to-action
          </p>
        </div>

        <div
          className="p-6 rounded-lg"
          style={{ backgroundColor: theme.light.surface }}
        >
          <h3
            className="text-lg font-bold mb-2"
            style={{ color: theme.light.text, fontFamily: font.name }}
          >
            Services Section
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="p-2 rounded text-center"
                style={{ backgroundColor: theme.light.background }}
              >
                <div
                  className="text-xs"
                  style={{ color: theme.light.text, fontFamily: font.name }}
                >
                  Service {i}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="p-6 rounded-lg"
          style={{ backgroundColor: theme.light.surface }}
        >
          <h3
            className="text-lg font-bold mb-2"
            style={{ color: theme.light.text, fontFamily: font.name }}
          >
            Contact Section
          </h3>
          <p
            className="text-sm"
            style={{ color: theme.light.textSecondary, fontFamily: font.name }}
          >
            Contact form and information
          </p>
        </div>
      </div>
    </div>
  );
}

function ParallaxLayoutPreview({ theme, font }) {
  return (
    <div className="space-y-4">
      {/* Fixed Header */}
      <div
        className="p-4 rounded-lg"
        style={{ backgroundColor: theme.light.primary }}
      >
        <div className="flex justify-between items-center">
          <div
            className="text-lg font-bold"
            style={{
              color: theme.light.background,
              fontFamily: font.name,
            }}
          >
            Your Business
          </div>
          <div className="hidden md:flex space-x-4 text-sm">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <span
                key={item}
                style={{
                  color: theme.light.background,
                  opacity: 0.9,
                  fontFamily: font.name,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Parallax Sections with Overlapping Effect */}
      <div className="relative space-y-2">
        <div
          className="p-8 rounded-lg text-center relative z-10"
          style={{ backgroundColor: theme.light.surface }}
        >
          <h2
            className="text-xl font-bold mb-2"
            style={{ color: theme.light.text, fontFamily: font.name }}
          >
            Full-Screen Hero
          </h2>
          <p
            className="text-sm"
            style={{ color: theme.light.textSecondary, fontFamily: font.name }}
          >
            Immersive background with parallax scrolling
          </p>
        </div>

        <div
          className="p-6 rounded-lg relative z-20 transform -translate-y-2"
          style={{ backgroundColor: theme.light.background }}
        >
          <h3
            className="text-lg font-bold mb-2"
            style={{ color: theme.light.text, fontFamily: font.name }}
          >
            Floating Content
          </h3>
          <p
            className="text-sm"
            style={{ color: theme.light.textSecondary, fontFamily: font.name }}
          >
            Content appears to float over background
          </p>
        </div>

        <div
          className="p-6 rounded-lg relative z-10 transform -translate-y-1"
          style={{ backgroundColor: theme.light.surface }}
        >
          <h3
            className="text-lg font-bold mb-2"
            style={{ color: theme.light.text, fontFamily: font.name }}
          >
            Layered Sections
          </h3>
          <p
            className="text-sm"
            style={{ color: theme.light.textSecondary, fontFamily: font.name }}
          >
            Smooth transitions between sections
          </p>
        </div>
      </div>
    </div>
  );
}

function GridLayoutPreview({ theme, font }) {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div
        className="p-4 rounded-lg"
        style={{ backgroundColor: theme.light.primary }}
      >
        <div className="flex justify-between items-center">
          <div
            className="text-lg font-bold"
            style={{
              color: theme.light.background,
              fontFamily: font.name,
            }}
          >
            Your Business
          </div>
          <div className="hidden md:flex space-x-4 text-sm">
            {["Home", "Portfolio", "Services", "Contact"].map((item) => (
              <span
                key={item}
                style={{
                  color: theme.light.background,
                  opacity: 0.9,
                  fontFamily: font.name,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-2">
        <div
          className="col-span-2 p-4 rounded-lg"
          style={{ backgroundColor: theme.light.surface }}
        >
          <h2
            className="text-lg font-bold mb-2"
            style={{ color: theme.light.text, fontFamily: font.name }}
          >
            Featured Content
          </h2>
          <p
            className="text-xs"
            style={{ color: theme.light.textSecondary, fontFamily: font.name }}
          >
            Main content area
          </p>
        </div>
        <div
          className="p-4 rounded-lg"
          style={{ backgroundColor: theme.light.surface }}
        >
          <h3
            className="text-sm font-bold mb-1"
            style={{ color: theme.light.text, fontFamily: font.name }}
          >
            Sidebar
          </h3>
          <p
            className="text-xs"
            style={{ color: theme.light.textSecondary, fontFamily: font.name }}
          >
            Quick info
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="p-3 rounded-lg text-center"
            style={{ backgroundColor: theme.light.surface }}
          >
            <div
              className="text-xs font-medium"
              style={{ color: theme.light.text, fontFamily: font.name }}
            >
              Item {i}
            </div>
          </div>
        ))}
      </div>

      <div
        className="p-4 rounded-lg"
        style={{ backgroundColor: theme.light.surface }}
      >
        <h3
          className="text-lg font-bold mb-2"
          style={{ color: theme.light.text, fontFamily: font.name }}
        >
          Full-Width Section
        </h3>
        <p
          className="text-sm"
          style={{ color: theme.light.textSecondary, fontFamily: font.name }}
        >
          Contact or footer information
        </p>
      </div>
    </div>
  );
}

function SidebarLayoutPreview({ theme, font }) {
  return (
    <div className="flex gap-4">
      {/* Sidebar */}
      <div
        className="w-1/3 p-4 rounded-lg"
        style={{ backgroundColor: theme.light.primary }}
      >
        <div
          className="text-lg font-bold mb-4"
          style={{
            color: theme.light.background,
            fontFamily: font.name,
          }}
        >
          Navigation
        </div>
        <div className="space-y-2">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <div
              key={item}
              className="p-2 rounded text-sm"
              style={{
                color: theme.light.background,
                opacity: 0.9,
                fontFamily: font.name,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-4">
        <div
          className="p-4 rounded-lg"
          style={{ backgroundColor: theme.light.surface }}
        >
          <h2
            className="text-lg font-bold mb-2"
            style={{ color: theme.light.text, fontFamily: font.name }}
          >
            Main Content Area
          </h2>
          <p
            className="text-sm"
            style={{ color: theme.light.textSecondary, fontFamily: font.name }}
          >
            Primary content with persistent sidebar navigation
          </p>
        </div>

        <div
          className="p-4 rounded-lg"
          style={{ backgroundColor: theme.light.surface }}
        >
          <h3
            className="text-md font-bold mb-2"
            style={{ color: theme.light.text, fontFamily: font.name }}
          >
            Content Section
          </h3>
          <p
            className="text-sm"
            style={{ color: theme.light.textSecondary, fontFamily: font.name }}
          >
            Additional content sections
          </p>
        </div>
      </div>
    </div>
  );
}
