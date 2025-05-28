"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewBusinessPage() {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <Link
          href="/admin/businesses"
          className="inline-flex items-center text-gray-500 hover:text-gray-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Businesses
        </Link>
        <h1 className="text-3xl font-bold mt-4">Create New Business</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="mb-8">
          <nav className="flex justify-between">
            <button
              className={`flex-1 text-center py-2 ${
                step === 1 ? "border-b-2 border-primary" : ""
              }`}
              onClick={() => setStep(1)}
            >
              Basic Information
            </button>
            <button
              className={`flex-1 text-center py-2 ${
                step === 2 ? "border-b-2 border-primary" : ""
              }`}
              onClick={() => setStep(2)}
            >
              Design & Layout
            </button>
            <button
              className={`flex-1 text-center py-2 ${
                step === 3 ? "border-b-2 border-primary" : ""
              }`}
              onClick={() => setStep(3)}
            >
              Content & SEO
            </button>
          </nav>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Business Name
                </label>
                <input
                  type="text"
                  {...register("name")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Subdomain
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    {...register("subdomain")}
                    className="block w-full rounded-l-md border-gray-300 focus:border-primary focus:ring-primary"
                  />
                  <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-gray-500">
                    .yourdomain.com
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  {...register("description")}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Template
                </label>
                <select
                  {...register("template")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                >
                  <option value="beauty/template1">Beauty Template 1</option>
                  <option value="plumber/template2">Plumber Template 2</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Theme
                </label>
                <select
                  {...register("theme")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                >
                  <option value="rose">Rose</option>
                  <option value="azure">Azure</option>
                  <option value="emerald">Emerald</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Layout
                </label>
                <select
                  {...register("layout")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                >
                  <option value="parallax">Parallax</option>
                  <option value="stacked">Stacked</option>
                </select>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  SEO Title
                </label>
                <input
                  type="text"
                  {...register("seo.title")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  SEO Description
                </label>
                <textarea
                  {...register("seo.description")}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  OG Image URL
                </label>
                <input
                  type="text"
                  {...register("seo.ogImage")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
            </div>
          )}

          <div className="flex justify-between pt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="ml-auto px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
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
