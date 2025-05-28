"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function BusinessesPage() {
  const [businesses] = useState([
    {
      id: 1,
      name: "Beauty Haven Spa & Salon",
      subdomain: "beautyhaven",
      template: "beauty/template1",
      status: "active",
    },
    {
      id: 2,
      name: "Ram's Emergency Plumbing",
      subdomain: "ramplumber",
      template: "plumber/template2",
      status: "active",
    },
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Businesses</h1>
        <Link
          href="/admin/businesses/new"
          className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Business
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
                Subdomain
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Template
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {businesses.map((business) => (
              <tr key={business.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {business.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {business.subdomain}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {business.template}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {business.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <Link
                    href={`/admin/businesses/${business.id}`}
                    className="text-primary hover:text-primary/80"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
