const businesses = {
  kiransalon: {
    name: "Kiran's Beauty Salon",
    niche: "salon",
    template: "template1",
    theme: {
      primary: "#FF5BA3",
      secondary: "#333333",
      accent: "#9D4EDD",
    },
    description:
      "Premier hair and beauty salon offering a range of luxury services.",
    logo: "scissors",
    seo: {
      title: "Kiran's Beauty Salon | Luxury Hair & Beauty Services",
      description:
        "Experience luxury hair and beauty services at Kiran's Beauty Salon. Professional styling, coloring, and beauty treatments in Beauty Hills, CA.",
      ogImage:
        "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg",
      favicon: "/favicon.ico",
      routes: {
        services: {
          title: "Our Services | Kiran's Beauty Salon",
          description:
            "Discover our range of professional hair and beauty services. From haircuts to color treatments, we offer everything you need to look your best.",
        },
        about: {
          title: "About Us | Kiran's Beauty Salon",
          description:
            "Learn about Kiran's Beauty Salon's journey and our commitment to providing exceptional beauty services in Beauty Hills.",
        },
      },
    },
    contact: {
      phone: "+1 (555) 123-4567",
      email: "info@kiransalon.com",
      address: "123 Style Street, Beauty Hills, CA 94123",
    },
    services: [
      {
        id: 1,
        name: "Luxury Haircut & Styling",
        description: "Personalized haircut and styling with premium products.",
        price: "$65+",
      },
      {
        id: 2,
        name: "Premium Color Treatment",
        description: "Expert color services including balayage and highlights.",
        price: "$95+",
      },
    ],
    testimonials: [
      {
        id: 1,
        name: "Emily R.",
        text: "The best salon experience I've ever had. Kiran is a true artist!",
      },
      {
        id: 2,
        name: "Sophie L.",
        text: "Love my new look! The attention to detail is outstanding.",
      },
    ],
  },
  ramplumber: {
    name: "Ram's Emergency Plumbing",
    niche: "plumber",
    template: "template2",
    theme: {
      primary: "#1E88E5",
      secondary: "#0D47A1",
      accent: "#42A5F5",
    },
    description: "24/7 emergency plumbing services you can trust.",
    logo: "wrench",
    seo: {
      title: "Ram's Emergency Plumbing | 24/7 Plumbing Services",
      description:
        "Professional 24/7 emergency plumbing services in Fixitville. Fast response, fair prices, and expert solutions for all your plumbing needs.",
      ogImage:
        "https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg",
      favicon: "/favicon.ico",
      routes: {
        services: {
          title: "Emergency Plumbing Services | Ram's Plumbing",
          description:
            "24/7 emergency plumbing repairs, installations, and maintenance services. Available round the clock for all your plumbing emergencies.",
        },
        about: {
          title: "About Ram's Plumbing | Your Trusted Plumber",
          description:
            "Learn why Ram's Plumbing is Fixitville's most trusted emergency plumbing service. Available 24/7 for all your plumbing needs.",
        },
      },
    },
    contact: {
      phone: "+1 (555) 987-6543",
      email: "emergency@ramplumber.com",
      address: "456 Pipeline Road, Fixitville, CA 94456",
    },
    services: [
      {
        id: 1,
        name: "Emergency Repairs",
        description: "Available 24/7 for urgent plumbing emergencies.",
        price: "$95+",
      },
      {
        id: 2,
        name: "Pipe Installation",
        description: "Professional pipe installation and replacement.",
        price: "$150+",
      },
    ],
    testimonials: [
      {
        id: 1,
        name: "Mark T.",
        text: "Ram saved us from a major flood at 2 AM. True professional!",
      },
      {
        id: 2,
        name: "Linda K.",
        text: "Fair prices and excellent workmanship. Highly recommended!",
      },
    ],
  },
};

export function getBusinessBySubdomain(subdomain) {
  return businesses[subdomain] || null;
}

export function getAllBusinesses() {
  return businesses;
}

export function getAvailableSubdomains() {
  return Object.keys(businesses);
}
