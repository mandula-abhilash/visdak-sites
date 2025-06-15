import express from "express";
import asyncHandler from "express-async-handler";

const router = express.Router();

// Mock data for Be On Mirrors business - completely dynamic
const beOnMirrorsData = {
  id: "be-on-mirrors",
  name: "Be On Mirrors",
  subdomain: "be-on-mirrors",
  niche: "salon",
  template: "bhava",
  layout: "stacked",
  themeName: "rose",
  fontName: "modern",
  description:
    "Premium Unisex Salon Services - Professional hair styling, coloring, treatments, and beauty services for men and women. Book your appointment today!",
  logo: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",

  // Hero Section Data
  heroTitle: "Redefine Your",
  heroAccent: "Beauty",
  heroSubtitle:
    "Experience premium unisex salon services where style meets sophistication. Professional treatments for both men and women.",
  heroImage:
    "https://images.unsplash.com/photo-1706629504952-ab5e50f5c179?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  heroPrimaryButton: "Explore Services",
  heroSecondaryButton: "Book Appointment",

  // About Section Data
  about: {
    story:
      "With over 15 years of excellence in the beauty industry, we have been the premier destination for sophisticated hair styling and beauty treatments. Our unisex approach ensures that both men and women receive world-class services in a luxurious, welcoming environment. Our team of certified professionals specializes in cutting-edge techniques, from precision cuts and creative coloring to advanced hair treatments and styling. We believe that every client deserves to look and feel their absolute best.",
  },
  aboutImage:
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
  stats: [
    { value: "15+", label: "Years Experience" },
    { value: "5000+", label: "Happy Clients" },
  ],
  award: {
    title: "Award Winning",
    subtitle: "Salon Services",
  },

  // Contact Section Data
  contactImage:
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",

  seo: {
    title:
      "Be On Mirrors - The Unisex Salon | Hair Styling & Beauty Treatments",
    description:
      "Premium Unisex Salon Services - Professional hair styling, coloring, treatments, and beauty services for men and women. Book your appointment today!",
    ogImage:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
    favicon:
      "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23d4af37' viewBox='0 0 24 24'%3e%3cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'/%3e%3c/svg%3e",
    routes: {
      about: {
        title: "About Be On Mirrors - The Unisex Salon",
        description:
          "Learn about Be On Mirrors Salon's journey and our commitment to providing exceptional beauty services for both men and women.",
      },
      services: {
        title: "Our Services | Be On Mirrors Salon",
        description:
          "Discover our comprehensive range of professional beauty and grooming services designed for both men and women.",
      },
      gallery: {
        title: "Our Work Gallery | Be On Mirrors",
        description:
          "Take a look at some of our stunning transformations and creative work at Be On Mirrors Salon.",
      },
      contact: {
        title: "Contact Be On Mirrors Salon",
        description:
          "Ready to transform your look? Contact us today to schedule your appointment and experience luxury salon services.",
      },
    },
  },
  contact: {
    phone: "+91 83410 75644",
    email: "info@beonmirrors.com",
    address:
      "lane, opposite Ameenpur police station, Madhura Nagar Colony, Beeramguda, Hyderabad, Telangana 502032",
    description:
      "Ready to transform your look? Contact us today to schedule your appointment and experience the luxury of our premium salon services.",
    social: {
      facebook: "https://facebook.com/beonmirrors",
      instagram: "https://instagram.com/beonmirrors",
      twitter: "https://twitter.com/beonmirrors",
    },
  },
  services: [
    {
      id: 1,
      name: "Hair Cutting & Styling",
      description:
        "Professional precision cuts, modern styling, and creative designs tailored to your personality and lifestyle.",
      price: "Starting from ₹500",
    },
    {
      id: 2,
      name: "Hair Coloring",
      description:
        "Expert color treatments including highlights, balayage, ombre, and fashion colors using premium products.",
      price: "Starting from ₹1500",
    },
    {
      id: 3,
      name: "Hair Treatments",
      description:
        "Nourishing treatments including keratin, deep conditioning, and scalp therapies for healthy hair.",
      price: "Starting from ₹800",
    },
    {
      id: 4,
      name: "Men's Grooming",
      description:
        "Complete grooming services including beard trimming, styling, and traditional barbering techniques.",
      price: "Starting from ₹300",
    },
    {
      id: 5,
      name: "Hair Styling",
      description:
        "Special occasion styling, updos, blowouts, and creative styling for events and photoshoots.",
      price: "Starting from ₹600",
    },
    {
      id: 6,
      name: "Beauty Treatments",
      description:
        "Facial treatments, eyebrow shaping, and other beauty services to complete your look.",
      price: "Starting from ₹400",
    },
  ],
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "Absolutely amazing experience! The stylist understood exactly what I wanted and delivered beyond my expectations. The salon atmosphere is so relaxing and professional.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      role: "Regular Client",
    },
    {
      id: 2,
      name: "Michael Chen",
      text: "Best salon experience I've ever had! The team is incredibly talented and the results speak for themselves. I always leave feeling confident and stylish.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      role: "Business Professional",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      text: "From the moment I walked in, I felt welcomed and valued. The attention to detail and level of service is unmatched. Highly recommend to everyone!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      role: "Fashion Designer",
    },
  ],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600",
      alt: "Professional hair coloring transformation",
      category: "Hair Coloring",
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqZ12I-iSdSc9f3ooNnmXXLhNTtbHwj1Dhh-oP4oetiB0C4HmoiZ8tGfjyqRQsyL6XI3EOXeSpD27lBKzkWkEaKRdP1-MUW4cJ8Ie7uDTof-bbUFrM6hs4XbqC1WFJJxDfAVasj=s1360-w1360-h1020",
      alt: "Modern men's haircut and styling",
      category: "Men's Styling",
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipOuVMTuM3Odn7it9ByFZh7WEOqU7EzFv6VvKPXE=w143-h179-n-k-no-nu",
      alt: "Elegant women's hair styling and treatment",
      category: "Women's Styling",
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipOoMLl6tiX3y21xW4TaM3Mdw3kjK4kMiqv6u0wG=s1360-w1360-h1020",
      alt: "Professional salon workspace and equipment",
      category: "Modern Equipment",
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipPRAW_nkMME2ee5rNl-sUQ-OBq198O_CuUpddQU=s1360-w1360-h1020",
      alt: "Luxurious salon interior design",
      category: "Luxury Interior",
    },
    {
      src: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600",
      alt: "Creative hair styling and artistic work",
      category: "Creative Styling",
    },
  ],
  businessHours: {
    mon: "9:00 AM - 8:00 PM",
    tue: "9:00 AM - 8:00 PM",
    wed: "9:00 AM - 8:00 PM",
    thu: "9:00 AM - 8:00 PM",
    fri: "9:00 AM - 8:00 PM",
    sat: "9:00 AM - 8:00 PM",
    sun: "10:00 AM - 6:00 PM",
  },
  footerLinks: [
    { text: "Privacy Policy", href: "#" },
    { text: "Terms of Service", href: "#" },
  ],
  isActive: true,
};

/**
 * @route GET /api/businesses/:subdomain
 * @desc Get business data by subdomain
 * @access Public
 */
router.get(
  "/:subdomain",
  asyncHandler(async (req, res) => {
    const { subdomain } = req.params;

    // For now, only return data for be-on-mirrors
    if (subdomain === "be-on-mirrors") {
      res.json({
        success: true,
        data: beOnMirrorsData,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Business not found",
      });
    }
  })
);

/**
 * @route GET /api/businesses
 * @desc Get all businesses
 * @access Public
 */
router.get(
  "/",
  asyncHandler(async (req, res) => {
    res.json({
      success: true,
      data: [beOnMirrorsData],
    });
  })
);

/**
 * @route POST /api/businesses
 * @desc Create new business
 * @access Private (will be protected later)
 */
router.post(
  "/",
  asyncHandler(async (req, res) => {
    // TODO: Implement business creation logic
    res.status(501).json({
      success: false,
      message: "Business creation not implemented yet",
    });
  })
);

/**
 * @route PUT /api/businesses/:id
 * @desc Update business
 * @access Private (will be protected later)
 */
router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    // TODO: Implement business update logic
    res.status(501).json({
      success: false,
      message: "Business update not implemented yet",
    });
  })
);

/**
 * @route DELETE /api/businesses/:id
 * @desc Delete business
 * @access Private (will be protected later)
 */
router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    // TODO: Implement business deletion logic
    res.status(501).json({
      success: false,
      message: "Business deletion not implemented yet",
    });
  })
);

export default router;
