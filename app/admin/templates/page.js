"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, Copy } from "lucide-react";

export default function TemplatesPage() {
  const [templates] = useState([
    {
      id: "salon",
      name: "Beauty Salon",
      sections: [
        "basic",
        "contact",
        "services",
        "team",
        "gallery",
        "testimonials",
      ],
      lastModified: "2024-03-20",
    },
    {
      id: "restaurant",
      name: "Restaurant",
      sections: ["basic", "contact", "menu", "gallery", "reviews"],
      lastModified: "2024-03-19",
    },
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Form Templates</h1>
        <Link
          href="/admin/templates/new"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          New Template
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sections
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Modified
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {templates.map((template) => (
              <tr key={template.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {template.name}
                  </div>
                  <div className="text-sm text-gray-500">{template.id}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    {template.sections.map((section) => (
                      <span
                        key={section}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {section}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {template.lastModified}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-3">
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => {}}
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      className="text-gray-600 hover:text-gray-800"
                      onClick={() => {}}
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => {}}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
