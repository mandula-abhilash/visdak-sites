"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ArrowLeft,
  Building2,
  Palette,
  Globe,
  X,
  Plus,
  Clock,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function NewBusinessPage() {
  const [step, setStep] = useState(1);
  const [keywords, setKeywords] = useState([]);
  const [services, setServices] = useState([]);
  const [team, setTeam] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const { register, handleSubmit, watch, setValue } = useForm();

  const handleImageUpload = async (e, field) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");

      const { url } = await response.json();
      setValue(field, url);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  const onSubmit = (data) => {
    console.log({ ...data, keywords, services, team, certifications });
  };

  const addItem = (e, items, setItems, fields) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newItem = {};
      fields.forEach((field) => {
        const input = document.getElementById(`new-${field}`);
        newItem[field] = input.value;
        input.value = "";
      });
      setItems([...items, newItem]);
    }
  };

  const removeItem = (index, items, setItems) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const steps = [
    { number: 1, title: "Basic Info", icon: Building2 },
    { number: 2, title: "Contact & Hours", icon: Phone },
    { number: 3, title: "Services & Team", icon: Clock },
    { number: 4, title: "Design", icon: Palette },
    { number: 5, title: "SEO & Content", icon: Globe },
  ];

  return (
    <div className="p-6 mx-auto">
      <div className="mb-8">
        <Link
          href="/admin/businesses"
          className="inline-flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Businesses
        </Link>
        <h1 className="text-4xl font-bold mt-4 text-gray-900">
          Create New Business
        </h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {/* Steps Navigation */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex justify-between">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.number}
                  onClick={() => setStep(s.number)}
                  className={`flex-1 group ${
                    step === s.number ? "text-blue-600" : "text-gray-500"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all ${
                        step === s.number
                          ? "bg-blue-600 text-white scale-110"
                          : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium">{s.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
          <div className="space-y-8">
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Name
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    placeholder="e.g. Lavanya Beauty Parlour"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subdomain
                  </label>
                  <div className="flex rounded-lg border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500">
                    <input
                      type="text"
                      {...register("subdomain")}
                      className="flex-1 px-3 py-2 text-sm bg-white text-gray-900 focus:outline-none"
                      placeholder="e.g. lavanya"
                    />
                    <span className="inline-flex items-center px-3 text-sm bg-gray-50 text-gray-500 border-l border-gray-200">
                      .yourdomain.com
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Category
                  </label>
                  <select
                    {...register("niche")}
                    className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  >
                    <option value="">Select a category</option>
                    <option value="salon">Salon & Beauty</option>
                    <option value="plumbing">Plumbing Services</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="retail">Retail Store</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    {...register("description")}
                    rows={3}
                    className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    placeholder="Brief description of your business"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Story
                  </label>
                  <textarea
                    {...register("about.story")}
                    rows={4}
                    className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    placeholder="Tell your business's story"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mission
                    </label>
                    <textarea
                      {...register("about.mission")}
                      rows={3}
                      className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      placeholder="Your business mission"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Vision
                    </label>
                    <textarea
                      {...register("about.vision")}
                      rows={3}
                      className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      placeholder="Your business vision"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Contact & Hours */}
            {step === 2 && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      {...register("contact.phone")}
                      className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      placeholder="e.g. +91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      {...register("contact.whatsapp")}
                      className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      placeholder="e.g. +91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    {...register("contact.email")}
                    className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    placeholder="e.g. care@yourbusiness.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <textarea
                    {...register("contact.address")}
                    rows={2}
                    className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    placeholder="Full business address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Google Maps URL
                  </label>
                  <input
                    type="url"
                    {...register("contact.mapEmbedUrl")}
                    className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    placeholder="Google Maps embed URL"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Hours
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map(
                      (day) => (
                        <div key={day} className="flex items-center space-x-2">
                          <span className="w-12 text-sm capitalize">{day}</span>
                          <input
                            type="text"
                            {...register(`contact.openHours.${day}`)}
                            className="flex-1 px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                            placeholder="e.g. 10:00 AM – 8:00 PM"
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Instagram URL
                    </label>
                    <input
                      type="url"
                      {...register("contact.social.instagram")}
                      className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      placeholder="Instagram profile URL"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Facebook URL
                    </label>
                    <input
                      type="url"
                      {...register("contact.social.facebook")}
                      className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      placeholder="Facebook page URL"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Services & Team */}
            {step === 3 && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Services
                  </label>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <input
                        id="new-category"
                        type="text"
                        className="px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                        placeholder="Category"
                      />
                      <input
                        id="new-name"
                        type="text"
                        className="px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                        placeholder="Service name"
                      />
                      <input
                        id="new-price"
                        type="text"
                        onKeyDown={(e) =>
                          addItem(e, services, setServices, [
                            "category",
                            "name",
                            "price",
                          ])
                        }
                        className="px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                        placeholder="Price"
                      />
                    </div>
                    <div className="space-y-2">
                      {services.map((service, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex-1 grid grid-cols-3 gap-4">
                            <span className="text-sm">{service.category}</span>
                            <span className="text-sm">{service.name}</span>
                            <span className="text-sm">{service.price}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              removeItem(index, services, setServices)
                            }
                            className="p-1 hover:text-red-600"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Team Members
                  </label>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <input
                        id="new-name"
                        type="text"
                        className="px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                        placeholder="Name"
                      />
                      <input
                        id="new-role"
                        type="text"
                        className="px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                        placeholder="Role"
                      />
                      <input
                        id="new-bio"
                        type="text"
                        onKeyDown={(e) =>
                          addItem(e, team, setTeam, ["name", "role", "bio"])
                        }
                        className="px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                        placeholder="Bio"
                      />
                    </div>
                    <div className="space-y-2">
                      {team.map((member, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex-1 grid grid-cols-3 gap-4">
                            <span className="text-sm">{member.name}</span>
                            <span className="text-sm">{member.role}</span>
                            <span className="text-sm">{member.bio}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(index, team, setTeam)}
                            className="p-1 hover:text-red-600"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Certifications
                  </label>
                  <div className="space-y-4">
                    <input
                      type="text"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          setCertifications([
                            ...certifications,
                            e.target.value,
                          ]);
                          e.target.value = "";
                        }
                      }}
                      className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      placeholder="Type and press Enter to add certification"
                    />
                    <div className="space-y-2">
                      {certifications.map((cert, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <span className="text-sm">{cert}</span>
                          <button
                            type="button"
                            onClick={() =>
                              removeItem(
                                index,
                                certifications,
                                setCertifications
                              )
                            }
                            className="p-1 hover:text-red-600"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Design */}
            {step === 4 && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Template
                    </label>
                    <select
                      {...register("template")}
                      className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    >
                      <option value="">Select a template</option>
                      <option value="template1">Template 1</option>
                      <option value="template2">Template 2</option>
                      <option value="template3">Template 3</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Theme
                    </label>
                    <select
                      {...register("themeName")}
                      className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    >
                      <option value="">Select a theme</option>
                      <option value="blush">Blush</option>
                      <option value="rose">Rose</option>
                      <option value="azure">Azure</option>
                      <option value="emerald">Emerald</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Layout
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="relative flex cursor-pointer">
                      <input
                        type="radio"
                        {...register("layout")}
                        value="parallax"
                        className="peer sr-only"
                      />
                      <div className="w-full p-4 rounded-lg border border-gray-200 hover:border-blue-500/50 peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-500/20">
                        <h3 className="font-medium text-gray-900">Parallax</h3>
                        <p className="text-sm text-gray-500">
                          Smooth scrolling with depth
                        </p>
                      </div>
                    </label>
                    <label className="relative flex cursor-pointer">
                      <input
                        type="radio"
                        {...register("layout")}
                        value="stacked"
                        className="peer sr-only"
                      />
                      <div className="w-full p-4 rounded-lg border border-gray-200 hover:border-blue-500/50 peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-500/20">
                        <h3 className="font-medium text-gray-900">Stacked</h3>
                        <p className="text-sm text-gray-500">
                          Classic vertical layout
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Logo
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, "logo")}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    <input type="hidden" {...register("logo")} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Hero Image
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, "hero.image")}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    <input type="hidden" {...register("hero.image")} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Hero Headline
                    </label>
                    <input
                      type="text"
                      {...register("hero.headline")}
                      className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      placeholder="Main headline"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Hero Subtext
                    </label>
                    <input
                      type="text"
                      {...register("hero.subtext")}
                      className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      placeholder="Supporting text"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: SEO & Content */}
            {step === 5 && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SEO Title
                  </label>
                  <input
                    type="text"
                    {...register("seo.title")}
                    className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    placeholder="SEO optimized title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SEO Description
                  </label>
                  <textarea
                    {...register("seo.description")}
                    rows={3}
                    className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    placeholder="Meta description for search engines"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Keywords
                  </label>
                  <div className="space-y-2">
                    <input
                      type="text"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          setKeywords([...keywords, e.target.value]);
                          e.target.value = "";
                        }
                      }}
                      className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      placeholder="Type and press Enter to add keywords"
                    />
                    <div className="flex flex-wrap gap-2">
                      {keywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                        >
                          {keyword}
                          <button
                            type="button"
                            onClick={() =>
                              removeItem(index, keywords, setKeywords)
                            }
                            className="ml-1 p-1 hover:text-blue-600"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Route-Specific SEO
                  </label>
                  {["services", "about", "contact", "gallery"].map((route) => (
                    <div key={route} className="mt-4">
                      <h4 className="text-sm font-medium text-gray-700 capitalize mb-2">
                        {route} Page
                      </h4>
                      <div className="space-y-3">
                        <input
                          type="text"
                          {...register(`seo.routes.${route}.title`)}
                          className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                          placeholder={`${route} page title`}
                        />
                        <textarea
                          {...register(`seo.routes.${route}.description`)}
                          rows={2}
                          className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                          placeholder={`${route} page description`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                Previous
              </button>
            )}
            {step < 5 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ml-auto"
              >
                Create Business
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
