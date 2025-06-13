"use client";

import { useState } from "react";
import { Save, X, Plus, Trash2 } from "lucide-react";

export default function SectionEditor({ section, onUpdate, onClose }) {
  const [formData, setFormData] = useState(section.props);

  const handleSave = () => {
    onUpdate(formData);
    onClose();
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateNestedField = (parent, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value,
      },
    }));
  };

  const addArrayItem = (field, defaultItem) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...(prev[field] || []), { ...defaultItem, id: Date.now() }],
    }));
  };

  const removeArrayItem = (field, index) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const updateArrayItem = (field, index, updates) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) =>
        i === index ? { ...item, ...updates } : item
      ),
    }));
  };

  return (
    <div className="p-6 bg-gray-50">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 capitalize">
          Edit {section.type} Section
        </h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleSave}
            className="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
          >
            <Save className="w-4 h-4 mr-2" />
            Save
          </button>
          <button
            onClick={onClose}
            className="inline-flex items-center px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 text-sm"
          >
            <X className="w-4 h-4 mr-2" />
            Cancel
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Common Fields */}
        {formData.title !== undefined && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => updateField("title", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {formData.subtitle !== undefined && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subtitle
            </label>
            <input
              type="text"
              value={formData.subtitle}
              onChange={(e) => updateField("subtitle", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {formData.description !== undefined && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => updateField("description", e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {formData.image !== undefined && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image URL
            </label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => updateField("image", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {/* CTA Fields */}
        {formData.cta && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Call to Action
            </label>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Primary Button
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Button text"
                    value={formData.cta.primary?.text || ""}
                    onChange={(e) =>
                      updateNestedField("cta", "primary", {
                        ...formData.cta.primary,
                        text: e.target.value,
                      })
                    }
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Link URL"
                    value={formData.cta.primary?.href || ""}
                    onChange={(e) =>
                      updateNestedField("cta", "primary", {
                        ...formData.cta.primary,
                        href: e.target.value,
                      })
                    }
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Secondary Button
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Button text"
                    value={formData.cta.secondary?.text || ""}
                    onChange={(e) =>
                      updateNestedField("cta", "secondary", {
                        ...formData.cta.secondary,
                        text: e.target.value,
                      })
                    }
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Link URL"
                    value={formData.cta.secondary?.href || ""}
                    onChange={(e) =>
                      updateNestedField("cta", "secondary", {
                        ...formData.cta.secondary,
                        href: e.target.value,
                      })
                    }
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Array */}
        {formData.services && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Services
              </label>
              <button
                onClick={() =>
                  addArrayItem("services", {
                    name: "",
                    description: "",
                    price: "",
                  })
                }
                className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm"
              >
                <Plus className="w-3 h-3 mr-1" />
                Add Service
              </button>
            </div>
            <div className="space-y-3">
              {formData.services.map((service, index) => (
                <div
                  key={service.id || index}
                  className="p-3 border border-gray-200 rounded-md"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Service {index + 1}
                    </span>
                    <button
                      onClick={() => removeArrayItem("services", index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <input
                      type="text"
                      placeholder="Service name"
                      value={service.name}
                      onChange={(e) =>
                        updateArrayItem("services", index, {
                          name: e.target.value,
                        })
                      }
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                      placeholder="Description"
                      value={service.description}
                      onChange={(e) =>
                        updateArrayItem("services", index, {
                          description: e.target.value,
                        })
                      }
                      rows={2}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Price"
                      value={service.price}
                      onChange={(e) =>
                        updateArrayItem("services", index, {
                          price: e.target.value,
                        })
                      }
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features Array */}
        {formData.features && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Features
              </label>
              <button
                onClick={() =>
                  addArrayItem("features", {
                    title: "",
                    description: "",
                    icon: "star",
                  })
                }
                className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm"
              >
                <Plus className="w-3 h-3 mr-1" />
                Add Feature
              </button>
            </div>
            <div className="space-y-3">
              {formData.features.map((feature, index) => (
                <div
                  key={feature.id || index}
                  className="p-3 border border-gray-200 rounded-md"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Feature {index + 1}
                    </span>
                    <button
                      onClick={() => removeArrayItem("features", index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <input
                      type="text"
                      placeholder="Feature title"
                      value={feature.title}
                      onChange={(e) =>
                        updateArrayItem("features", index, {
                          title: e.target.value,
                        })
                      }
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                      placeholder="Description"
                      value={feature.description}
                      onChange={(e) =>
                        updateArrayItem("features", index, {
                          description: e.target.value,
                        })
                      }
                      rows={2}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials Array */}
        {formData.testimonials && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Testimonials
              </label>
              <button
                onClick={() =>
                  addArrayItem("testimonials", {
                    name: "",
                    text: "",
                    rating: 5,
                  })
                }
                className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm"
              >
                <Plus className="w-3 h-3 mr-1" />
                Add Testimonial
              </button>
            </div>
            <div className="space-y-3">
              {formData.testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id || index}
                  className="p-3 border border-gray-200 rounded-md"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Testimonial {index + 1}
                    </span>
                    <button
                      onClick={() => removeArrayItem("testimonials", index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <input
                      type="text"
                      placeholder="Client name"
                      value={testimonial.name}
                      onChange={(e) =>
                        updateArrayItem("testimonials", index, {
                          name: e.target.value,
                        })
                      }
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                      placeholder="Testimonial text"
                      value={testimonial.text}
                      onChange={(e) =>
                        updateArrayItem("testimonials", index, {
                          text: e.target.value,
                        })
                      }
                      rows={3}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Fields */}
        {section.type === "contact" && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone || ""}
                onChange={(e) => updateField("phone", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email || ""}
                onChange={(e) => updateField("email", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <textarea
                value={formData.address || ""}
                onChange={(e) => updateField("address", e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
