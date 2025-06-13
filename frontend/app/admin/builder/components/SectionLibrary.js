"use client";

import { X, Layout, Users, Star, Phone, Info, Briefcase } from "lucide-react";

export default function SectionLibrary({ onAddSection, onClose }) {
  const sectionTypes = [
    {
      type: "hero",
      name: "Hero Section",
      description:
        "Eye-catching header with title, subtitle, and call-to-action buttons",
      icon: Layout,
      preview:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    },
    {
      type: "about",
      name: "About Us",
      description: "Tell your story with text, images, and key features",
      icon: Info,
      preview:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    },
    {
      type: "services",
      name: "Services",
      description: "Showcase your services with descriptions and pricing",
      icon: Briefcase,
      preview:
        "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
    },
    {
      type: "features",
      name: "Features",
      description: "Highlight key features and benefits with icons",
      icon: Star,
      preview:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
    },
    {
      type: "testimonials",
      name: "Testimonials",
      description: "Display customer reviews and ratings",
      icon: Users,
      preview:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
    },
    {
      type: "contact",
      name: "Contact",
      description: "Contact form and business information",
      icon: Phone,
      preview:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">
              Add Section
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-md"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-600 mt-2">
            Choose a section type to add to your website
          </p>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectionTypes.map((section) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.type}
                  onClick={() => onAddSection(section.type)}
                  className="group p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-lg transition-all duration-200 text-left"
                >
                  <div className="relative mb-4 h-32 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={section.preview}
                      alt={section.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                    {section.name}
                  </h3>
                  <p className="text-sm text-gray-600">{section.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              You can customize each section after adding it to your website.
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
