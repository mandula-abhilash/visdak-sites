"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ArrowLeft,
  Plus,
  X,
  CircleDot as DragHandleDots2,
  Trash2,
} from "lucide-react";
import Link from "next/link";

export default function NewTemplatePage() {
  const [sections, setSections] = useState([
    {
      id: "basic",
      name: "Basic Information",
      fields: [
        {
          id: "name",
          name: "name",
          type: "text",
          label: "Business Name",
          required: true,
        },
        {
          id: "description",
          name: "description",
          type: "textarea",
          label: "Description",
          required: true,
        },
        {
          id: "niche",
          name: "niche",
          type: "select",
          label: "Business Niche",
          required: true,
        },
        {
          id: "template",
          name: "template",
          type: "select",
          label: "Template Style",
          required: true,
        },
        {
          id: "theme",
          name: "themeName",
          type: "select",
          label: "Color Theme",
          required: true,
        },
        {
          id: "logo",
          name: "logo",
          type: "file",
          label: "Business Logo",
          required: true,
        },
      ],
    },
    {
      id: "seo",
      name: "SEO Settings",
      fields: [
        {
          id: "seoTitle",
          name: "seo.title",
          type: "text",
          label: "SEO Title",
          required: true,
        },
        {
          id: "seoDesc",
          name: "seo.description",
          type: "textarea",
          label: "SEO Description",
          required: true,
        },
        {
          id: "ogImage",
          name: "seo.ogImage",
          type: "url",
          label: "OG Image URL",
          required: true,
        },
        { id: "favicon", name: "seo.favicon", type: "file", label: "Favicon" },
      ],
    },
    {
      id: "contact",
      name: "Contact Information",
      fields: [
        {
          id: "phone",
          name: "contact.phone",
          type: "tel",
          label: "Phone Number",
          required: true,
        },
        {
          id: "whatsapp",
          name: "contact.whatsapp",
          type: "tel",
          label: "WhatsApp Number",
        },
        {
          id: "email",
          name: "contact.email",
          type: "email",
          label: "Email Address",
          required: true,
        },
        {
          id: "address",
          name: "contact.address",
          type: "textarea",
          label: "Address",
          required: true,
        },
        {
          id: "mapUrl",
          name: "contact.mapEmbedUrl",
          type: "url",
          label: "Google Maps URL",
        },
      ],
    },
    {
      id: "hours",
      name: "Business Hours",
      fields: [
        {
          id: "monHours",
          name: "contact.openHours.mon",
          type: "text",
          label: "Monday",
        },
        {
          id: "tueHours",
          name: "contact.openHours.tue",
          type: "text",
          label: "Tuesday",
        },
        {
          id: "wedHours",
          name: "contact.openHours.wed",
          type: "text",
          label: "Wednesday",
        },
        {
          id: "thuHours",
          name: "contact.openHours.thu",
          type: "text",
          label: "Thursday",
        },
        {
          id: "friHours",
          name: "contact.openHours.fri",
          type: "text",
          label: "Friday",
        },
        {
          id: "satHours",
          name: "contact.openHours.sat",
          type: "text",
          label: "Saturday",
        },
        {
          id: "sunHours",
          name: "contact.openHours.sun",
          type: "text",
          label: "Sunday",
        },
      ],
    },
    {
      id: "social",
      name: "Social Media",
      fields: [
        {
          id: "instagram",
          name: "contact.social.instagram",
          type: "url",
          label: "Instagram URL",
        },
        {
          id: "facebook",
          name: "contact.social.facebook",
          type: "url",
          label: "Facebook URL",
        },
        {
          id: "twitter",
          name: "contact.social.twitter",
          type: "url",
          label: "Twitter URL",
        },
        {
          id: "linkedin",
          name: "contact.social.linkedin",
          type: "url",
          label: "LinkedIn URL",
        },
      ],
    },
    {
      id: "hero",
      name: "Hero Section",
      fields: [
        {
          id: "headline",
          name: "hero.headline",
          type: "text",
          label: "Headline",
          required: true,
        },
        {
          id: "subtext",
          name: "hero.subtext",
          type: "textarea",
          label: "Subtext",
          required: true,
        },
        {
          id: "heroImage",
          name: "hero.image",
          type: "url",
          label: "Hero Image URL",
          required: true,
        },
        {
          id: "ctaPrimary",
          name: "hero.ctaPrimary",
          type: "text",
          label: "Primary CTA Text",
        },
        {
          id: "ctaSecondary",
          name: "hero.ctaSecondary",
          type: "text",
          label: "Secondary CTA Text",
        },
      ],
    },
    {
      id: "about",
      name: "About Section",
      fields: [
        {
          id: "story",
          name: "about.story",
          type: "textarea",
          label: "Business Story",
          required: true,
        },
        {
          id: "mission",
          name: "about.mission",
          type: "textarea",
          label: "Mission Statement",
        },
        {
          id: "vision",
          name: "about.vision",
          type: "textarea",
          label: "Vision Statement",
        },
      ],
    },
    {
      id: "team",
      name: "Team Members",
      fields: [
        { id: "teamName", name: "name", type: "text", label: "Name" },
        { id: "teamRole", name: "role", type: "text", label: "Role" },
        { id: "teamBio", name: "bio", type: "textarea", label: "Bio" },
        { id: "teamImage", name: "image", type: "url", label: "Photo URL" },
      ],
      isArray: true,
    },
    {
      id: "services",
      name: "Services",
      fields: [
        {
          id: "serviceCategory",
          name: "category",
          type: "text",
          label: "Category",
        },
        {
          id: "serviceName",
          name: "name",
          type: "text",
          label: "Service Name",
        },
        {
          id: "serviceDesc",
          name: "description",
          type: "textarea",
          label: "Description",
        },
        { id: "servicePrice", name: "price", type: "text", label: "Price" },
      ],
      isArray: true,
      hasCategories: true,
    },
    {
      id: "booking",
      name: "Booking Settings",
      fields: [
        {
          id: "bookingInstructions",
          name: "booking.instructions",
          type: "textarea",
          label: "Booking Instructions",
        },
        {
          id: "urgentText",
          name: "booking.urgentCTA.text",
          type: "text",
          label: "Urgent Booking Text",
        },
        {
          id: "urgentButton",
          name: "booking.urgentCTA.button",
          type: "text",
          label: "Urgent Button Text",
        },
        {
          id: "urgentPhone",
          name: "booking.urgentCTA.phone",
          type: "tel",
          label: "Urgent Contact Number",
        },
      ],
    },
    {
      id: "gallery",
      name: "Gallery",
      fields: [
        {
          id: "galleryCategory",
          name: "category",
          type: "text",
          label: "Category",
        },
        { id: "galleryImage", name: "image", type: "url", label: "Image URL" },
      ],
      isArray: true,
      hasCategories: true,
    },
    {
      id: "testimonials",
      name: "Testimonials",
      fields: [
        {
          id: "testimonialName",
          name: "name",
          type: "text",
          label: "Client Name",
        },
        {
          id: "testimonialRating",
          name: "rating",
          type: "number",
          label: "Rating (1-5)",
        },
        {
          id: "testimonialText",
          name: "text",
          type: "textarea",
          label: "Testimonial",
        },
      ],
      isArray: true,
    },
    {
      id: "blog",
      name: "Blog Posts",
      fields: [
        { id: "blogTitle", name: "title", type: "text", label: "Post Title" },
        {
          id: "blogSummary",
          name: "summary",
          type: "textarea",
          label: "Summary",
        },
        {
          id: "blogImage",
          name: "image",
          type: "url",
          label: "Featured Image URL",
        },
        { id: "blogSlug", name: "slug", type: "text", label: "URL Slug" },
      ],
      isArray: true,
    },
    {
      id: "faqs",
      name: "FAQs",
      fields: [
        {
          id: "faqQuestion",
          name: "question",
          type: "text",
          label: "Question",
        },
        { id: "faqAnswer", name: "answer", type: "textarea", label: "Answer" },
      ],
      isArray: true,
    },
  ]);

  const { register, handleSubmit } = useForm();

  const addSection = () => {
    setSections([
      ...sections,
      {
        id: Date.now(),
        name: "",
        fields: [],
      },
    ]);
  };

  const addField = (sectionIndex) => {
    const newSections = [...sections];
    newSections[sectionIndex].fields.push({
      id: Date.now(),
      name: "",
      type: "text",
      label: "",
      required: false,
    });
    setSections(newSections);
  };

  const removeSection = (index) => {
    setSections(sections.filter((_, i) => i !== index));
  };

  const removeField = (sectionIndex, fieldIndex) => {
    const newSections = [...sections];
    newSections[sectionIndex].fields.splice(fieldIndex, 1);
    setSections(newSections);
  };

  const onSubmit = (data) => {
    console.log({ ...data, sections });
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <Link
          href="/admin/templates"
          className="inline-flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Templates
        </Link>
        <h1 className="text-4xl font-bold mt-4 text-gray-900">
          Create Form Template
        </h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Template Name
              </label>
              <input
                type="text"
                {...register("name")}
                className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                placeholder="e.g., Beauty Salon Template"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Template ID
              </label>
              <input
                type="text"
                {...register("id")}
                className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                placeholder="e.g., salon"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Sections
                </label>
                <button
                  type="button"
                  onClick={addSection}
                  className="inline-flex items-center px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add Section
                </button>
              </div>

              <div className="space-y-6">
                {sections.map((section, sectionIndex) => (
                  <div
                    key={section.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <DragHandleDots2 className="w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={section.name}
                          onChange={(e) => {
                            const newSections = [...sections];
                            newSections[sectionIndex].name = e.target.value;
                            setSections(newSections);
                          }}
                          className="px-3 py-1.5 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                          placeholder="Section name"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => addField(sectionIndex)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeSection(sectionIndex)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {section.fields.map((field, fieldIndex) => (
                        <div
                          key={field.id}
                          className="flex items-start gap-4 pl-7"
                        >
                          <DragHandleDots2 className="w-4 h-4 text-gray-400 mt-2" />
                          <div className="flex-1 grid grid-cols-3 gap-4">
                            <div>
                              <label className="block text-xs font-medium text-gray-500 mb-1">
                                Field Label
                              </label>
                              <input
                                type="text"
                                value={field.label}
                                onChange={(e) => {
                                  const newSections = [...sections];
                                  newSections[sectionIndex].fields[
                                    fieldIndex
                                  ].label = e.target.value;
                                  setSections(newSections);
                                }}
                                className="w-full px-3 py-1.5 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                placeholder="Label"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-gray-500 mb-1">
                                Field Name
                              </label>
                              <input
                                type="text"
                                value={field.name}
                                onChange={(e) => {
                                  const newSections = [...sections];
                                  newSections[sectionIndex].fields[
                                    fieldIndex
                                  ].name = e.target.value;
                                  setSections(newSections);
                                }}
                                className="w-full px-3 py-1.5 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                placeholder="Field name"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-gray-500 mb-1">
                                Field Type
                              </label>
                              <select
                                value={field.type}
                                onChange={(e) => {
                                  const newSections = [...sections];
                                  newSections[sectionIndex].fields[
                                    fieldIndex
                                  ].type = e.target.value;
                                  setSections(newSections);
                                }}
                                className="w-full px-3 py-1.5 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                              >
                                <option value="text">Text</option>
                                <option value="textarea">Textarea</option>
                                <option value="select">Select</option>
                                <option value="number">Number</option>
                                <option value="tel">Phone</option>
                                <option value="email">Email</option>
                                <option value="url">URL</option>
                                <option value="file">File Upload</option>
                                <option value="date">Date</option>
                                <option value="time">Time</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                checked={field.required}
                                onChange={(e) => {
                                  const newSections = [...sections];
                                  newSections[sectionIndex].fields[
                                    fieldIndex
                                  ].required = e.target.checked;
                                  setSections(newSections);
                                }}
                                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                              />
                              <span className="ml-2 text-sm text-gray-600">
                                Required
                              </span>
                            </label>
                            <button
                              type="button"
                              onClick={() =>
                                removeField(sectionIndex, fieldIndex)
                              }
                              className="text-red-600 hover:text-red-800"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-8 pt-6 border-t border-gray-100">
            <button
              type="submit"
              className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              Create Template
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
