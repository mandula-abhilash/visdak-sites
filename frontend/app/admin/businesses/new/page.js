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
import { useDynamicForm } from "@/hooks/use-dynamic-form";

export default function NewBusinessPage() {
  const [step, setStep] = useState(1);
  const [selectedNiche, setSelectedNiche] = useState("");
  const { sections, fields, loading } = useDynamicForm(selectedNiche);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  // Dynamic arrays state
  const [keywords, setKeywords] = useState([]);
  const [services, setServices] = useState([]);
  const [team, setTeam] = useState([]);
  const [certifications, setCertifications] = useState([]);

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
    const formData = {
      ...data,
      keywords,
      services,
      team,
      certifications,
    };
    console.log(formData);
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

  const renderField = (field) => {
    const commonProps = {
      ...register(field.name, { required: field.required }),
      className:
        "w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500",
      placeholder: `Enter ${field.label}`,
    };

    switch (field.type) {
      case "textarea":
        return <textarea {...commonProps} rows={3} />;
      case "select":
        return (
          <select {...commonProps}>
            <option value="">Select {field.label}</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case "radio":
        return (
          <div className="space-y-2">
            {field.options?.map((option) => (
              <label
                key={option.value}
                className="relative flex cursor-pointer"
              >
                <input
                  type="radio"
                  {...register(field.name)}
                  value={option.value}
                  className="peer sr-only"
                />
                <div className="w-full p-4 rounded-lg border border-gray-200 hover:border-blue-500/50 peer-checked:border-blue-500 peer-checked:ring-2 peer-checked:ring-blue-500/20">
                  <h3 className="font-medium text-gray-900">{option.label}</h3>
                  {option.description && (
                    <p className="text-sm text-gray-500">
                      {option.description}
                    </p>
                  )}
                </div>
              </label>
            ))}
          </div>
        );
      case "file":
        return (
          <input
            type="file"
            onChange={(e) => handleImageUpload(e, field.name)}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        );
      default:
        return <input type={field.type || "text"} {...commonProps} />;
    }
  };

  const getCurrentStepFields = () => {
    if (!selectedNiche || !fields) return [];

    const currentStepFields = [];

    switch (step) {
      case 1:
        if (fields.basic?.structure) {
          currentStepFields.push(...fields.basic.structure);
        }
        break;
      case 2:
        if (fields.contact?.structure) {
          currentStepFields.push(...fields.contact.structure);
        }
        break;
      case 3:
        if (fields.services?.structure) {
          currentStepFields.push(...fields.services.structure);
        }
        if (fields.team?.structure) {
          currentStepFields.push(...fields.team.structure);
        }
        break;
      case 4:
        if (fields.design?.structure) {
          currentStepFields.push(...fields.design.structure);
        }
        break;
      case 5:
        if (fields.seo?.structure) {
          currentStepFields.push(...fields.seo.structure);
        }
        break;
    }

    return currentStepFields;
  };

  if (loading) {
    return <div className="p-6">Loading template...</div>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
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
            {/* Niche Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Business Niche
              </label>
              <select
                value={selectedNiche}
                onChange={(e) => setSelectedNiche(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              >
                <option value="">Select a niche</option>
                <option value="salon">Beauty Salon</option>
                <option value="restaurant">Restaurant</option>
                <option value="plumbing">Plumbing Service</option>
              </select>
            </div>

            {/* Dynamic Form Fields */}
            {selectedNiche && (
              <div className="space-y-6 animate-in fade-in duration-500">
                {getCurrentStepFields().map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {field.label}
                      {field.required && (
                        <span className="text-red-500 ml-1">*</span>
                      )}
                    </label>
                    {renderField(field)}
                    {errors[field.name] && (
                      <p className="mt-1 text-sm text-red-600">
                        This field is required
                      </p>
                    )}
                  </div>
                ))}
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
