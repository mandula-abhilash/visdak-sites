"use client";

import { useState } from "react";
import {
  ChevronUp,
  ChevronDown,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Settings,
} from "lucide-react";
import SectionEditor from "./SectionEditor";
import SectionPreview from "./SectionPreview";

export default function SectionBuilder({
  section,
  globalSettings,
  previewMode,
  onUpdate,
  onRemove,
  onMove,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      className={`bg-white rounded-lg border ${
        isEditing ? "border-blue-300 shadow-lg" : "border-gray-200"
      } overflow-hidden`}
    >
      {/* Section Header */}
      {!previewMode && (
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <h3 className="font-medium text-gray-900 capitalize">
              {section.type} Section
            </h3>
            <button
              onClick={() => setIsVisible(!isVisible)}
              className="p-1 text-gray-400 hover:text-gray-600"
            >
              {isVisible ? (
                <Eye className="w-4 h-4" />
              ) : (
                <EyeOff className="w-4 h-4" />
              )}
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => onMove("up")}
              className="p-1 text-gray-400 hover:text-gray-600"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
            <button
              onClick={() => onMove("down")}
              className="p-1 text-gray-400 hover:text-gray-600"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`p-1 ${
                isEditing
                  ? "text-blue-600"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={onRemove}
              className="p-1 text-gray-400 hover:text-red-600"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Section Content */}
      {isVisible && (
        <div>
          {isEditing && !previewMode ? (
            <SectionEditor
              section={section}
              onUpdate={onUpdate}
              onClose={() => setIsEditing(false)}
            />
          ) : (
            <SectionPreview section={section} globalSettings={globalSettings} />
          )}
        </div>
      )}
    </div>
  );
}
