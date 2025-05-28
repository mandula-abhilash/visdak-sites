"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Building2,
  LayoutDashboard,
  Settings,
  Users,
  FileText,
} from "lucide-react";

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-900 w-64">
          <div className="mb-8 px-3">
            <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
          </div>
          <ul className="space-y-2 font-medium">
            <SidebarItem href="/admin" icon={LayoutDashboard}>
              Dashboard
            </SidebarItem>
            <SidebarItem href="/admin/businesses" icon={Building2}>
              Businesses
            </SidebarItem>
            <SidebarItem href="/admin/templates" icon={FileText}>
              Templates
            </SidebarItem>
            <SidebarItem href="/admin/users" icon={Users}>
              Users
            </SidebarItem>
            <SidebarItem href="/admin/settings" icon={Settings}>
              Settings
            </SidebarItem>
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <div className={`p-4 ${isSidebarOpen ? "ml-64" : ""}`}>{children}</div>
    </div>
  );
}

function SidebarItem({ href, icon: Icon, children }) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center p-3 text-gray-300 rounded-lg hover:bg-gray-800 group"
      >
        <Icon className="w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white" />
        <span className="ml-3">{children}</span>
      </Link>
    </li>
  );
}
