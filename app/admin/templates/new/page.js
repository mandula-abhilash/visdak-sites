"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowLeft, Plus, X, CircleDot as DragHandleDots2 } from "lucide-react";
import Link from "next/link";

export default function NewTemplatePage() {
  const [sections, setSections] = useState([]);
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
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {section.fields.map((field, fieldIndex) => (
                        <div
                          key={field.id}
                          className="flex items-center gap-4 pl-7"
                        >
                          <DragHandleDots2 className="w-4 h-4 text-gray-400" />
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
                            className="flex-1 px-3 py-1.5 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                            placeholder="Field name"
                          />
                          <select
                            value={field.type}
                            onChange={(e) => {
                              const newSections = [...sections];
                              newSections[sectionIndex].fields[
                                fieldIndex
                              ].type = e.target.value;
                              setSections(newSections);
                            }}
                            className="px-3 py-1.5 text-sm bg-white text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                          >
                            <option value="text">Text</option>
                            <option value="textarea">Textarea</option>
                            <option value="select">Select</option>
                            <option value="radio">Radio</option>
                            <option value="checkbox">Checkbox</option>
                          </select>
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
