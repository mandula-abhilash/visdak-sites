import { useState, useEffect } from "react";
import { getBusinessTemplate, getCommonFields } from "@/config/form-templates";

export function useDynamicForm(niche) {
  const [sections, setSections] = useState([]);
  const [fields, setFields] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!niche) {
      setLoading(false);
      return;
    }

    const template = getBusinessTemplate(niche);
    const commonFields = getCommonFields();

    if (!template) {
      setLoading(false);
      return;
    }

    // Combine template-specific fields with common fields
    const combinedFields = {
      ...commonFields,
      ...template.fields,
    };

    setSections(template.sections);
    setFields(combinedFields);
    setLoading(false);
  }, [niche]);

  return {
    sections,
    fields,
    loading,
  };
}
