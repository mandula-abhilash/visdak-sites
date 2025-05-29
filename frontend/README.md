# VISDAK Website Builder — Multi-Tenant SaaS with Next.js + Subdomain Routing

This is a production-grade, modular **Next.js 14** platform that allows you to build and serve multiple small business websites dynamically using **subdomain-based routing**, **section-based rendering**, and customizable **layouts/themes**. It is optimized for scalability, editability, and high performance.

---

## 🔥 Key Features

- **⚙ Multi-tenant setup** — Each business is served under a unique subdomain (e.g., `lavanyasalon.visdak.site`)
- **🎨 Template-driven architecture** — Websites are built using reusable section components configured via JSON/DB
- **🧱 Modular section library** — Organized by categories like Hero, Services, Testimonials, Pricing, Contact, etc.
- **🖼️ Dynamic layouts** — Layouts like Parallax, Stacked, Grid, SplitScreen available and switchable per site
- **📝 Editable Mode for Admins** — Site owners can toggle edit mode to customize content (inline or panel-based)
- **🌍 Global context and theming** — All layouts share providers for theme, site config, analytics, maps, etc.
- **🛠️ Flexible deployment** — Supports custom VPS with wildcard Nginx setup

---

## 🚀 Getting Started

### Prerequisites

- Node.js `18.17+`
- PostgreSQL (for dynamic config storage)
- npm

### Installation

```bash
git clone https://github.com/mandula-abhilash/visdak-sites
cd visdak-sites
npm install
npm run dev
```

### Local Subdomain Testing

Add entries to your `hosts` file:

```txt
127.0.0.1 kiransalon.localhost
127.0.0.1 ramplumber.localhost
127.0.0.1 fashionhub.localhost
```

Visit in browser:

```
http://kiransalon.localhost:3000
```

---

## 🧩 Folder Structure (Key)

```
/components
  /layouts
    ParallaxLayout.jsx
    StackedLayout.jsx
    ...
  /sections
    /Hero/HeroBasic.jsx
    /Hero/HeroSplitImage.jsx
    /Services/ServicesGrid.jsx
    /Testimonials/TestimonialsCarousel.jsx
    ...

/contexts
  EditModeContext.jsx
  SiteContext.jsx

/lib
  layoutMap.js
  sectionMap.js
  api.js

/pages
  /[site]/page.jsx (site renderer)

app/layout.jsx (global providers, theme, analytics, etc.)
```

---

## 🛠 Configuration Example

Each business site is rendered using a layout + ordered sections defined in the DB (or JSON file):

```json
{
  "layout": "ParallaxLayout",
  "sections": [
    {
      "component": "HeroSplitImage",
      "props": {
        "title": "Lavanya Salon",
        "subtitle": "Glow with Confidence",
        "image": "/images/hero.jpg"
      }
    },
    {
      "component": "ServicesGrid",
      "props": {
        "services": ["Facials", "Hair Spa", "Bridal Makeup"]
      }
    },
    {
      "component": "ContactForm",
      "props": {
        "phone": "+91-9876543210",
        "email": "contact@lavanyasalon.com"
      }
    }
  ]
}
```

---

## 🌐 Deployment

### VPS + Nginx

1. Build:

```bash
npm run build
```

2. Configure Nginx for wildcard subdomain proxying
3. Use Let's Encrypt wildcard SSL (via DNS challenge)

---

## 🔓 Admin Mode & Editing

- Toggle between `"view"` and `"edit"` using `EditModeContext`
- In edit mode:

  - Sections show `Edit` buttons or use `EditableText`, `EditableImage`, etc.
  - Edits are saved via `PATCH /api/sites/:id/sections/:index`

- Only site owner (verified via JWT or session) can access edit mode

---

## 🔧 Roadmap (Phased Development)

### ✅ Phase 1: Core Engine

- Subdomain-based site renderer
- Layout & section config via DB

### ✅ Phase 2: Layouts & Section Library

- Build 8–12 core sections (Hero, Services, Contact, Pricing, etc.)
- Organize by categories

### ✅ Phase 3: Admin Mode & Editable UI

- Inline editing support
- Context-based mode switching

### ✅ Phase 4: Global Providers

- Theme, SiteContext, Google Analytics, Maps, Toasts

### 🔜 Phase 5: Visual Admin Builder

- Drag/drop section editor
- Live preview and versioning

### 🔜 Phase 6: Performance & SEO

- Static optimization
- Redis cache layer
- OG metadata and social tags

---

## 📁 Adding a New Business Site

1. Add a new entry to the DB (or `businesses.json`)
2. Include:

   - Subdomain
   - Layout name
   - Section components and props
   - Theme palette
