"use client";

import { useState } from "react";
import {
  Plus,
  Settings,
  Palette,
  Type,
  Eye,
  Save,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import SectionBuilder from "./components/SectionBuilder";
import GlobalSettings from "./components/GlobalSettings";
import SectionLibrary from "./components/SectionLibrary";
import WebsitePreview from "./components/WebsitePreview";

export default function WebsiteBuilderPage() {
  const [sections, setSections] = useState([]);
  const [globalSettings, setGlobalSettings] = useState({
    colorPalette: "midnight",
    font: "inter",
    scrollBehavior: "normal",
    layout: "stacked",
  });
  const [showSettings, setShowSettings] = useState(false);
  const [showSectionLibrary, setShowSectionLibrary] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  const addSection = (sectionType) => {
    const newSection = {
      id: Date.now(),
      type: sectionType,
      props: getDefaultProps(sectionType),
    };
    setSections([...sections, newSection]);
    setShowSectionLibrary(false);
  };

  const updateSection = (sectionId, newProps) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? { ...section, props: { ...section.props, ...newProps } }
          : section
      )
    );
  };

  const removeSection = (sectionId) => {
    setSections(sections.filter((section) => section.id !== sectionId));
  };

  const moveSection = (sectionId, direction) => {
    const currentIndex = sections.findIndex(
      (section) => section.id === sectionId
    );
    if (
      (direction === "up" && currentIndex === 0) ||
      (direction === "down" && currentIndex === sections.length - 1)
    ) {
      return;
    }

    const newSections = [...sections];
    const targetIndex =
      direction === "up" ? currentIndex - 1 : currentIndex + 1;
    [newSections[currentIndex], newSections[targetIndex]] = [
      newSections[targetIndex],
      newSections[currentIndex],
    ];

    setSections(newSections);
  };

  const saveWebsite = () => {
    const websiteData = {
      sections,
      globalSettings,
      timestamp: new Date().toISOString(),
    };
    console.log("Saving website:", websiteData);
    // Here you would typically send this to your API
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              href="/admin/businesses"
              className="inline-flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Businesses
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">
              Website Builder
            </h1>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                showSettings
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </button>

            <button
              onClick={() => setPreviewMode(!previewMode)}
              className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                previewMode
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Eye className="w-4 h-4 mr-2" />
              {previewMode ? "Edit Mode" : "Preview"}
            </button>

            <button
              onClick={saveWebsite}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Website
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Main Content */}
        <div className={`flex-1 ${showSettings ? "mr-80" : ""}`}>
          {previewMode ? (
            /* Full Website Preview */
            <WebsitePreview
              sections={sections}
              globalSettings={globalSettings}
            />
          ) : (
            /* Edit Mode */
            <div className="p-6">
              {/* Add Section Button */}
              <div className="mb-8">
                <button
                  onClick={() => setShowSectionLibrary(true)}
                  className="w-full border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 hover:bg-blue-50 transition-colors group"
                >
                  <Plus className="w-8 h-8 mx-auto mb-2 text-gray-400 group-hover:text-blue-500" />
                  <p className="text-gray-600 group-hover:text-blue-600 font-medium">
                    Add a new section
                  </p>
                </button>
              </div>

              {/* Sections */}
              <div className="space-y-6">
                {sections.map((section) => (
                  <SectionBuilder
                    key={section.id}
                    section={section}
                    globalSettings={globalSettings}
                    previewMode={false}
                    onUpdate={(props) => updateSection(section.id, props)}
                    onRemove={() => removeSection(section.id)}
                    onMove={(direction) => moveSection(section.id, direction)}
                  />
                ))}
              </div>

              {/* Empty State */}
              {sections.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <Plus className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Start building your website
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Add sections like hero, about us, services, and more to
                    create your perfect website.
                  </p>
                  <button
                    onClick={() => setShowSectionLibrary(true)}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Your First Section
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Global Settings Sidebar */}
        {showSettings && (
          <GlobalSettings
            settings={globalSettings}
            onUpdate={setGlobalSettings}
            onClose={() => setShowSettings(false)}
          />
        )}
      </div>

      {/* Section Library Modal */}
      {showSectionLibrary && (
        <SectionLibrary
          onAddSection={addSection}
          onClose={() => setShowSectionLibrary(false)}
        />
      )}
    </div>
  );
}

function getDefaultProps(sectionType) {
  const defaults = {
    hero: {
      title: "Welcome to Our Website",
      subtitle: "Create amazing experiences with our services",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      cta: {
        primary: { text: "Get Started", href: "#contact" },
        secondary: { text: "Learn More", href: "#about" },
      },
    },
    about: {
      title: "About Us",
      description:
        "We are passionate about delivering exceptional results and creating meaningful experiences for our clients.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      features: ["Expert Team", "Quality Service", "Customer Focus"],
    },
    services: {
      title: "Our Services",
      description: "Discover our comprehensive range of professional services",
      services: [
        {
          id: 1,
          name: "Service One",
          description: "Professional service description here",
          price: "$99",
        },
        {
          id: 2,
          name: "Service Two",
          description: "Another professional service description",
          price: "$149",
        },
      ],
    },
    features: {
      title: "Why Choose Us",
      description: "Here's what makes us different",
      features: [
        {
          id: 1,
          title: "Quality",
          description: "We deliver the highest quality results",
          icon: "star",
        },
        {
          id: 2,
          title: "Speed",
          description: "Fast turnaround times guaranteed",
          icon: "zap",
        },
        {
          id: 3,
          title: "Support",
          description: "24/7 customer support available",
          icon: "heart",
        },
      ],
    },
    testimonials: {
      title: "What Our Clients Say",
      description: "Don't just take our word for it",
      testimonials: [
        {
          id: 1,
          name: "John Doe",
          text: "Excellent service and outstanding results!",
          rating: 5,
        },
        {
          id: 2,
          name: "Jane Smith",
          text: "Professional team and great communication.",
          rating: 5,
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      description: "Ready to start your project? Contact us today!",
      phone: "+1 (555) 123-4567",
      email: "hello@example.com",
      address: "123 Business St, City, State 12345",
    },
  };

  return defaults[sectionType] || {};
}
