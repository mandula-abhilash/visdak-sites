export const businessTemplates = {
  salon: {
    name: "Beauty Salon",
    sections: [
      "basic",
      "contact",
      "services",
      "team",
      "gallery",
      "testimonials",
    ],
    fields: {
      services: {
        structure: [
          { name: "category", type: "text", label: "Category" },
          { name: "name", type: "text", label: "Service Name" },
          { name: "duration", type: "text", label: "Duration" },
          { name: "price", type: "text", label: "Price" },
        ],
        allowCategories: true,
      },
      team: {
        structure: [
          { name: "name", type: "text", label: "Name" },
          { name: "role", type: "text", label: "Role" },
          { name: "specialization", type: "text", label: "Specialization" },
          { name: "experience", type: "text", label: "Experience" },
        ],
      },
      gallery: {
        type: "images",
        categories: ["Work", "Interior", "Team"],
      },
    },
  },
  restaurant: {
    name: "Restaurant",
    sections: ["basic", "contact", "menu", "gallery", "reviews"],
    fields: {
      menu: {
        structure: [
          { name: "category", type: "text", label: "Category" },
          { name: "name", type: "text", label: "Dish Name" },
          { name: "description", type: "textarea", label: "Description" },
          { name: "price", type: "text", label: "Price" },
          {
            name: "spiceLevel",
            type: "select",
            label: "Spice Level",
            options: ["Mild", "Medium", "Hot"],
          },
        ],
        allowCategories: true,
      },
      gallery: {
        type: "images",
        categories: ["Food", "Interior", "Events"],
      },
    },
  },
  plumbing: {
    name: "Plumbing Service",
    sections: ["basic", "contact", "services", "testimonials", "emergency"],
    fields: {
      services: {
        structure: [
          { name: "name", type: "text", label: "Service Name" },
          { name: "description", type: "textarea", label: "Description" },
          { name: "price", type: "text", label: "Starting Price" },
        ],
        allowCategories: false,
      },
      emergency: {
        structure: [
          {
            name: "available24x7",
            type: "boolean",
            label: "24/7 Service Available",
          },
          {
            name: "responseTime",
            type: "text",
            label: "Average Response Time",
          },
          { name: "emergencyNumber", type: "tel", label: "Emergency Contact" },
        ],
      },
    },
  },
};

export const commonFields = {
  basic: {
    structure: [
      { name: "name", type: "text", label: "Business Name", required: true },
      { name: "subdomain", type: "text", label: "Subdomain", required: true },
      {
        name: "description",
        type: "textarea",
        label: "Description",
        required: true,
      },
      { name: "about.story", type: "textarea", label: "Business Story" },
      { name: "about.mission", type: "textarea", label: "Mission" },
      { name: "about.vision", type: "textarea", label: "Vision" },
    ],
  },
  contact: {
    structure: [
      {
        name: "contact.phone",
        type: "tel",
        label: "Phone Number",
        required: true,
      },
      {
        name: "contact.email",
        type: "email",
        label: "Email Address",
        required: true,
      },
      {
        name: "contact.address",
        type: "textarea",
        label: "Address",
        required: true,
      },
      { name: "contact.mapEmbedUrl", type: "url", label: "Google Maps URL" },
      {
        name: "contact.openHours",
        type: "businessHours",
        label: "Business Hours",
        days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
      },
      {
        name: "contact.social",
        type: "social",
        label: "Social Media",
        platforms: ["instagram", "facebook", "twitter", "linkedin"],
      },
    ],
  },
  design: {
    structure: [
      {
        name: "template",
        type: "select",
        label: "Template",
        required: true,
        options: [
          { value: "template1", label: "Modern Clean" },
          { value: "template2", label: "Professional" },
          { value: "template3", label: "Classic" },
        ],
      },
      {
        name: "layout",
        type: "radio",
        label: "Layout",
        required: true,
        options: [
          {
            value: "parallax",
            label: "Parallax",
            description: "Smooth scrolling with depth",
          },
          {
            value: "stacked",
            label: "Stacked",
            description: "Classic vertical layout",
          },
        ],
      },
      {
        name: "theme",
        type: "select",
        label: "Color Theme",
        required: true,
        options: [
          { value: "rose", label: "Rose" },
          { value: "azure", label: "Azure" },
          { value: "emerald", label: "Emerald" },
        ],
      },
    ],
  },
  seo: {
    structure: [
      { name: "seo.title", type: "text", label: "SEO Title", required: true },
      {
        name: "seo.description",
        type: "textarea",
        label: "SEO Description",
        required: true,
      },
      { name: "seo.keywords", type: "tags", label: "Keywords" },
      {
        name: "seo.routes",
        type: "routeSeo",
        label: "Page-Specific SEO",
        dynamic: true,
      },
    ],
  },
};

export function getBusinessTemplate(niche) {
  return businessTemplates[niche] || null;
}

export function getCommonFields() {
  return commonFields;
}

export function getAllNiches() {
  return Object.keys(businessTemplates).map((key) => ({
    id: key,
    name: businessTemplates[key].name,
  }));
}
