"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowLeft, Building2, Palette, Globe } from "lucide-react";
import Link from "next/link";

export default function NewBusinessPage() {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  const steps = [
    { number: 1, title: "Basic Information", icon: Building2 },
    { number: 2, title: "Design & Layout", icon: Palette },
    { number: 3, title: "Content & SEO", icon: Globe },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
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
        <p className="mt-2 text-gray-600">
          Set up your business website in three simple steps
        </p>
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
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors ${
                        step === s.number
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow"
                    placeholder="Enter your business name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subdomain
                  </label>
                  <div className="flex rounded-lg border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-shadow overflow-hidden">
                    <input
                      type="text"
                      {...register("subdomain")}
                      className="flex-1 px-4 py-3 bg-white text-gray-900 focus:outline-none"
                      placeholder="your-business"
                    />
                    <span className="inline-flex items-center px-4 bg-gray-50 text-gray-500 border-l border-gray-200">
                      .yourdomain.com
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    {...register("description")}
                    rows={4}
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow"
                    placeholder="Tell us about your business"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Template
                    </label>
                    <select
                      {...register("template")}
                      className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow"
                    >
                      <option value="">Select a template</option>
                      <option value="beauty/template1">
                        Beauty Template 1
                      </option>
                      <option value="plumber/template2">
                        Plumber Template 2
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Theme
                    </label>
                    <select
                      {...register("theme")}
                      className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow"
                    >
                      <option value="">Select a theme</option>
                      <option value="rose">Rose</option>
                      <option value="azure">Azure</option>
                      <option value="emerald">Emerald</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    SEO Title
                  </label>
                  <input
                    type="text"
                    {...register("seo.title")}
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow"
                    placeholder="Enter SEO title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    SEO Description
                  </label>
                  <textarea
                    {...register("seo.description")}
                    rows={4}
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow"
                    placeholder="Enter SEO description"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    OG Image URL
                  </label>
                  <input
                    type="text"
                    {...register("seo.ogImage")}
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow"
                    placeholder="Enter OG image URL"
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
                className="px-6 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className={`ml-auto px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors ${
                  step === 1 && "ml-0"
                }`}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
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
