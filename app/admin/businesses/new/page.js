"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowLeft, Building2, Palette, Globe, X, Plus } from "lucide-react";
import Link from "next/link";

export default function NewBusinessPage() {
  const [step, setStep] = useState(1);
  const [keywords, setKeywords] = useState([]);
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
      // Handle error (show toast, etc)
    }
  };

  const onSubmit = (data) => {
    console.log({ ...data, keywords });
    // Handle form submission
  };

  const addKeyword = (e) => {
    if (e.key === "Enter" && e.target.value) {
      e.preventDefault();
      setKeywords([...keywords, e.target.value]);
      e.target.value = "";
    }
  };

  const removeKeyword = (index) => {
    setKeywords(keywords.filter((_, i) => i !== index));
  };

  const steps = [
    { number: 1, title: "Basic Info", icon: Building2 },
    { number: 2, title: "Design", icon: Palette },
    { number: 3, title: "SEO", icon: Globe },
  ];

  return (
    <div className="p-6 mx-auto">
      <div className="mb-8">
        <Link
          href="/admin/businesses"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Businesses
        </Link>
        <h1 className="text-4xl font-bold mt-4 text-gray-900">
          Create New Business
        </h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex justify-between">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.number}
                  className="flex-1 group"
                  onClick={() => setStep(s.number)}
                >
                  <div
                    className={`flex flex-col items-center transition-all ${
                      step === s.number
                        ? "transform scale-105"
                        : "opacity-50 hover:opacity-75"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${
                        step === s.number
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        step === s.number ? "text-blue-600" : "text-gray-500"
                      }`}
                    >
                      {s.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
          <div className="space-y-8">
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Name
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow"
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subdomain
                  </label>
                  <div className="flex rounded-lg border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-shadow overflow-hidden">
                    <input
                      type="text"
                      {...register("subdomain")}
                      className="flex-1 px-3 py-2 text-sm bg-white text-gray-900 focus:outline-none"
                      placeholder="your-business"
                    />
                    <span className="inline-flex items-center px-3 text-sm bg-gray-50 text-gray-500 border-l border-gray-200">
                      .yourdomain.com
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Logo
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
                      onChange={(e) => handleImageUpload(e, "heroImage")}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    <input type="hidden" {...register("heroImage")} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    {...register("description")}
                    rows={4}
                    className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow"
                    placeholder="Tell us about your business"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Category
                    </label>
                    <select
                      {...register("category")}
                      className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow"
                    >
                      <option value="">Select a category</option>
                      <option value="salon">Salon & Beauty</option>
                      <option value="plumbing">Plumbing Services</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="retail">Retail Store</option>
                      <option value="fitness">Fitness & Gym</option>
                      <option value="medical">Medical Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      {...register("contact.email")}
                      className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow"
                      placeholder="contact@yourbusiness.com"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Template
                    </label>
                    <select
                      {...register("template")}
                      className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow"
                    >
                      <option value="">Select a template</option>
                      <option value="beauty/template1">
                        Beauty Template 1
                      </option>
                      <option value="plumber/template2">
                        Plumber Template 2
                      </option>
                      <option value="restaurant/template1">
                        Restaurant Template 1
                      </option>
                      <option value="fitness/template1">
                        Fitness Template 1
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Theme
                    </label>
                    <select
                      {...register("theme")}
                      className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow"
                    >
                      <option value="">Select a theme</option>
                      <option value="rose">Rose</option>
                      <option value="azure">Azure</option>
                      <option value="emerald">Emerald</option>
                      <option value="gold">Gold</option>
                      <option value="navy">Navy</option>
                      <option value="sunset">Sunset</option>
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
                      <div className="w-full p-4 rounded-lg border border-gray-200 hover:border-blue-500/50 peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-500/20 transition-all">
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
                      <div className="w-full p-4 rounded-lg border border-gray-200 hover:border-blue-500/50 peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-500/20 transition-all">
                        <h3 className="font-medium text-gray-900">Stacked</h3>
                        <p className="text-sm text-gray-500">
                          Classic vertical layout
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Keywords
                  </label>
                  <div className="space-y-2">
                    <input
                      type="text"
                      onKeyDown={addKeyword}
                      className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow"
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
                            onClick={() => removeKeyword(index)}
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
                    SEO Title
                  </label>
                  <input
                    type="text"
                    {...register("seo.title")}
                    className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow"
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
                    className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow"
                    placeholder="Brief description for search engines"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors ml-auto"
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
